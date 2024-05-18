import { YTNode, observe } from './helpers.js';
import { Thumbnail } from './misc.js';
import { NavigationEndpoint, LiveChatItemList, LiveChatHeader, LiveChatParticipantsList, Message } from './nodes.js';
import * as Parser from './parser.js';
export class ItemSectionContinuation extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.contents = Parser.parseArray(data.contents);
        if (Array.isArray(data.continuations)) {
            this.continuation = (_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a.at(0)) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation;
        }
    }
}
ItemSectionContinuation.type = 'itemSectionContinuation';
export class NavigateAction extends YTNode {
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint(data.endpoint);
    }
}
NavigateAction.type = 'navigateAction';
export class ShowMiniplayerCommand extends YTNode {
    constructor(data) {
        super();
        this.miniplayer_command = new NavigationEndpoint(data.miniplayerCommand);
        this.show_premium_branding = data.showPremiumBranding;
    }
}
ShowMiniplayerCommand.type = 'showMiniplayerCommand';
export { default as AppendContinuationItemsAction } from './classes/actions/AppendContinuationItemsAction.js';
export class ReloadContinuationItemsCommand extends YTNode {
    constructor(data) {
        super();
        this.target_id = data.targetId;
        this.contents = Parser.parse(data.continuationItems, true);
        this.slot = data === null || data === void 0 ? void 0 : data.slot;
    }
}
ReloadContinuationItemsCommand.type = 'reloadContinuationItemsCommand';
export class SectionListContinuation extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation =
            ((_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) ||
                ((_f = (_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.reloadContinuationData) === null || _f === void 0 ? void 0 : _f.continuation) || null;
    }
}
SectionListContinuation.type = 'sectionListContinuation';
export class MusicPlaylistShelfContinuation extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation = ((_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0].nextContinuationData.continuation) || null;
    }
}
MusicPlaylistShelfContinuation.type = 'musicPlaylistShelfContinuation';
export class MusicShelfContinuation extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        this.contents = Parser.parseArray(data.contents);
        this.continuation =
            ((_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0].nextContinuationData) === null || _b === void 0 ? void 0 : _b.continuation) ||
                ((_d = (_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].reloadContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) || null;
    }
}
MusicShelfContinuation.type = 'musicShelfContinuation';
export class GridContinuation extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.items = Parser.parse(data.items, true);
        this.continuation = ((_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0].nextContinuationData.continuation) || null;
    }
    get contents() {
        return this.items;
    }
}
GridContinuation.type = 'gridContinuation';
export class PlaylistPanelContinuation extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        super();
        this.contents = Parser.parseArray(data.contents);
        this.continuation = ((_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) ||
            ((_f = (_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.nextRadioContinuationData) === null || _f === void 0 ? void 0 : _f.continuation) || null;
    }
}
PlaylistPanelContinuation.type = 'playlistPanelContinuation';
export class Continuation extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.continuation_type = data.type;
        this.timeout_ms = (_a = data.continuation) === null || _a === void 0 ? void 0 : _a.timeoutMs;
        this.time_until_last_message_ms = (_b = data.continuation) === null || _b === void 0 ? void 0 : _b.timeUntilLastMessageMsec;
        this.token = (_c = data.continuation) === null || _c === void 0 ? void 0 : _c.continuation;
    }
}
Continuation.type = 'continuation';
export class LiveChatContinuation extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super();
        this.actions = Parser.parse((_a = data.actions) === null || _a === void 0 ? void 0 : _a.map((action) => {
            delete action.clickTrackingParams;
            return action;
        }), true) || observe([]);
        this.action_panel = Parser.parseItem(data.actionPanel);
        this.item_list = Parser.parseItem(data.itemList, LiveChatItemList);
        this.header = Parser.parseItem(data.header, LiveChatHeader);
        this.participants_list = Parser.parseItem(data.participantsList, LiveChatParticipantsList);
        this.popout_message = Parser.parseItem(data.popoutMessage, Message);
        this.emojis = ((_b = data.emojis) === null || _b === void 0 ? void 0 : _b.map((emoji) => ({
            emoji_id: emoji.emojiId,
            shortcuts: emoji.shortcuts,
            search_terms: emoji.searchTerms,
            image: Thumbnail.fromResponse(emoji.image),
            is_custom_emoji: emoji.isCustomEmoji
        }))) || [];
        let continuation, type;
        if ((_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].timedContinuationData) {
            type = 'timed';
            continuation = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0].timedContinuationData;
        }
        else if ((_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0].invalidationContinuationData) {
            type = 'invalidation';
            continuation = (_f = data.continuations) === null || _f === void 0 ? void 0 : _f[0].invalidationContinuationData;
        }
        else if ((_g = data.continuations) === null || _g === void 0 ? void 0 : _g[0].liveChatReplayContinuationData) {
            type = 'replay';
            continuation = (_h = data.continuations) === null || _h === void 0 ? void 0 : _h[0].liveChatReplayContinuationData;
        }
        this.continuation = new Continuation({ continuation, type });
        this.viewer_name = data.viewerName;
    }
}
LiveChatContinuation.type = 'liveChatContinuation';
//# sourceMappingURL=continuations.js.map