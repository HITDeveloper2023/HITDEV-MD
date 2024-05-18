import type Actions from '../core/Actions.js';
import type Player from '../core/Player.js';
import type { IStreamingData } from '../parser/index.js';
import type { PlayerStoryboardSpec } from '../parser/nodes.js';
import type { FormatFilter, URLTransformer } from '../types/FormatUtils.js';
export interface StreamingInfo {
    duration: number;
    audio_sets: AudioSet[];
    video_sets: VideoSet[];
    image_sets: ImageSet[];
}
export interface AudioSet {
    mime_type: string;
    language?: string;
    codecs?: string;
    audio_sample_rate?: number;
    track_name?: string;
    track_role?: 'main' | 'dub' | 'description' | 'alternate';
    channels?: number;
    representations: AudioRepresentation[];
}
export interface Range {
    start: number;
    end: number;
}
export type SegmentInfo = {
    is_oft: false;
    base_url: string;
    index_range: Range;
    init_range: Range;
} | {
    is_oft: true;
    getSegmentTemplate(): Promise<SegmentTemplate>;
};
export interface Segment {
    duration: number;
    repeat_count?: number;
}
export interface SegmentTemplate {
    init_url: string;
    media_url: string;
    timeline: Segment[];
}
export interface AudioRepresentation {
    uid: string;
    bitrate: number;
    codecs?: string;
    audio_sample_rate?: number;
    channels?: number;
    segment_info: SegmentInfo;
}
export interface VideoSet {
    mime_type: string;
    color_info: ColorInfo;
    codecs?: string;
    fps?: number;
    representations: VideoRepresentation[];
}
export interface VideoRepresentation {
    uid: string;
    bitrate: number;
    width: number;
    height: number;
    fps?: number;
    codecs?: string;
    segment_info: SegmentInfo;
}
export interface ColorInfo {
    primaries?: '1' | '9';
    transfer_characteristics?: '1' | '14' | '16' | '18';
    matrix_coefficients?: '1' | '14';
}
export interface ImageSet {
    probable_mime_type: string;
    /**
     * Sometimes youtube returns webp instead of jpg despite the file extension being jpg
     * So we need to update the mime type to reflect the actual mime type of the response
     */
    getMimeType(): Promise<string>;
    representations: ImageRepresentation[];
}
export interface ImageRepresentation {
    uid: string;
    getBitrate(): Promise<number>;
    sheet_width: number;
    sheet_height: number;
    thumbnail_width: number;
    thumbnail_height: number;
    rows: number;
    columns: number;
    template_url: string;
    template_duration: number;
    getURL(n: number): string;
}
export declare function getStreamingInfo(streaming_data?: IStreamingData, url_transformer?: URLTransformer, format_filter?: FormatFilter, cpn?: string, player?: Player, actions?: Actions, storyboards?: PlayerStoryboardSpec): StreamingInfo;
