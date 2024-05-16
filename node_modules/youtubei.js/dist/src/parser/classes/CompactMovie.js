import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Author from './misc/Author.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import Menu from './menus/Menu.js';
import { timeToSeconds } from '../../utils/Utils.js';
class CompactMovie extends YTNode {
    constructor(data) {
        var _a;
        super();
        const overlay_time_status = ((_a = data.thumbnailOverlays
            .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer.text) || 'N/A';
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.top_metadata_items = new Text(data.topMetadataItems);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
        this.author = new Author(data.shortBylineText);
        const durationText = data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString();
        this.duration = {
            text: durationText,
            seconds: timeToSeconds(durationText)
        };
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.badges = Parser.parseArray(data.badges);
        this.use_vertical_poster = data.useVerticalPoster;
        this.menu = Parser.parseItem(data.menu, Menu);
    }
}
CompactMovie.type = 'CompactMovie';
export default CompactMovie;
//# sourceMappingURL=CompactMovie.js.map