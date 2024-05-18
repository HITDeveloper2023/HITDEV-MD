import { __asyncValues, __awaiter } from "tslib";
import * as Constants from './Constants.js';
import { InnertubeError, Platform, streamToIterable } from './Utils.js';
export function download(options, actions, playability_status, streaming_data, player, cpn) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === 'UNPLAYABLE')
            throw new InnertubeError('Video is unplayable', { error_type: 'UNPLAYABLE' });
        if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === 'LOGIN_REQUIRED')
            throw new InnertubeError('Video is login required', { error_type: 'LOGIN_REQUIRED' });
        if (!streaming_data)
            throw new InnertubeError('Streaming data not available.', { error_type: 'NO_STREAMING_DATA' });
        const opts = Object.assign({ quality: '360p', type: 'video+audio', format: 'mp4', range: undefined }, options);
        const format = chooseFormat(opts, streaming_data);
        const format_url = format.decipher(player);
        // If we're not downloading the video in chunks, we just use fetch once.
        if (opts.type === 'video+audio' && !options.range) {
            const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}`, {
                method: 'GET',
                headers: Constants.STREAM_HEADERS,
                redirect: 'follow'
            });
            // Throw if the response is not 2xx
            if (!response.ok)
                throw new InnertubeError('The server responded with a non 2xx status code', { error_type: 'FETCH_FAILED', response });
            const body = response.body;
            if (!body)
                throw new InnertubeError('Could not get ReadableStream from fetch Response.', { error_type: 'FETCH_FAILED', response });
            return body;
        }
        // We need to download in chunks.
        const chunk_size = 1048576 * 10; // 10MB
        let chunk_start = (options.range ? options.range.start : 0);
        let chunk_end = (options.range ? options.range.end : chunk_size);
        let must_end = false;
        let cancel;
        const readable_stream = new Platform.shim.ReadableStream({
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            start() { },
            pull: (controller) => __awaiter(this, void 0, void 0, function* () {
                if (must_end) {
                    controller.close();
                    return;
                }
                if ((chunk_end >= (format.content_length ? format.content_length : 0)) || options.range) {
                    must_end = true;
                }
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    var _a, e_1, _b, _c;
                    try {
                        cancel = new AbortController();
                        const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}&range=${chunk_start}-${chunk_end || ''}`, {
                            method: 'GET',
                            headers: Object.assign({}, Constants.STREAM_HEADERS
                            // XXX: use YouTube's range parameter instead of a Range header.
                            // Range: `bytes=${chunk_start}-${chunk_end}`
                            ),
                            signal: cancel.signal
                        });
                        const body = response.body;
                        if (!body)
                            throw new InnertubeError('Could not get ReadableStream from fetch Response.', { error_type: 'FETCH_FAILED', response });
                        try {
                            for (var _d = true, _e = __asyncValues(streamToIterable(body)), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                                _c = _f.value;
                                _d = false;
                                const chunk = _c;
                                controller.enqueue(chunk);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        chunk_start = chunk_end + 1;
                        chunk_end += chunk_size;
                        resolve();
                    }
                    catch (e) {
                        reject(e);
                    }
                }));
            }),
            cancel(reason) {
                return __awaiter(this, void 0, void 0, function* () {
                    cancel.abort(reason);
                });
            }
        }, {
            highWaterMark: 1,
            size(chunk) {
                return chunk.byteLength;
            }
        });
        return readable_stream;
    });
}
/**
 * Selects the format that best matches the given options.
 * @param options - Options
 * @param streaming_data - Streaming data
 */
export function chooseFormat(options, streaming_data) {
    if (!streaming_data)
        throw new InnertubeError('Streaming data not available');
    const formats = [
        ...(streaming_data.formats || []),
        ...(streaming_data.adaptive_formats || [])
    ];
    const requires_audio = options.type ? options.type.includes('audio') : true;
    const requires_video = options.type ? options.type.includes('video') : true;
    const language = options.language || 'original';
    const quality = options.quality || 'best';
    let best_width = -1;
    const is_best = ['best', 'bestefficiency'].includes(quality);
    const use_most_efficient = quality !== 'best';
    let candidates = formats.filter((format) => {
        if (requires_audio && !format.has_audio)
            return false;
        if (requires_video && !format.has_video)
            return false;
        if (options.format !== 'any' && !format.mime_type.includes(options.format || 'mp4'))
            return false;
        if (!is_best && format.quality_label !== quality)
            return false;
        if (best_width < format.width)
            best_width = format.width;
        return true;
    });
    if (!candidates.length)
        throw new InnertubeError('No matching formats found', { options });
    if (is_best && requires_video)
        candidates = candidates.filter((format) => format.width === best_width);
    if (requires_audio && !requires_video) {
        const audio_only = candidates.filter((format) => {
            if (language !== 'original') {
                return !format.has_video && format.language === language;
            }
            return !format.has_video && format.is_original;
        });
        if (audio_only.length > 0) {
            candidates = audio_only;
        }
    }
    if (use_most_efficient) {
        // Sort by bitrate (lower is better)
        candidates.sort((a, b) => a.bitrate - b.bitrate);
    }
    else {
        // Sort by bitrate (higher is better)
        candidates.sort((a, b) => b.bitrate - a.bitrate);
    }
    return candidates[0];
}
export { toDash } from './DashManifest.js';
//# sourceMappingURL=FormatUtils.js.map