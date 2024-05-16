import NavigationEndpoint from '../NavigationEndpoint.js';
import EmojiRun from './EmojiRun.js';
import TextRun from './TextRun.js';
export function escape(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
export default class Text {
    constructor(data) {
        var _a, _b, _c, _d;
        if (typeof data === 'object' && data !== null && Reflect.has(data, 'runs') && Array.isArray(data.runs)) {
            this.runs = data.runs.map((run) => run.emoji ?
                new EmojiRun(run) :
                new TextRun(run));
            this.text = this.runs.map((run) => run.text).join('');
        }
        else {
            this.text = data === null || data === void 0 ? void 0 : data.simpleText;
        }
        if (typeof data === 'object' && data !== null && Reflect.has(data, 'navigationEndpoint')) {
            this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        }
        if (typeof data === 'object' && data !== null && Reflect.has(data, 'titleNavigationEndpoint')) {
            this.endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
        }
        if (!this.endpoint) {
            if ((_b = (_a = this.runs) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.endpoint) {
                this.endpoint = (_d = (_c = this.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.endpoint;
            }
        }
    }
    static fromAttributed(data) {
        const runs = [];
        const content = data.content;
        const command_runs = data.commandRuns;
        let last_end_index = 0;
        if (command_runs) {
            for (const item of command_runs) {
                const length = item.length;
                const start_index = item.startIndex;
                if (start_index > last_end_index) {
                    runs.push({
                        text: content.slice(last_end_index, start_index)
                    });
                }
                if (Reflect.has(item, 'onTap')) {
                    let attachment = null;
                    if (Reflect.has(data, 'attachmentRuns')) {
                        const attachment_runs = data.attachmentRuns;
                        for (const attatchment_run of attachment_runs) {
                            if ((attatchment_run.startIndex - 2) == start_index) {
                                attachment = attatchment_run;
                                break;
                            }
                        }
                    }
                    if (attachment) {
                        runs.push({
                            text: content.slice(start_index, start_index + length),
                            navigationEndpoint: item.onTap,
                            attachment
                        });
                    }
                    else {
                        runs.push({
                            text: content.slice(start_index, start_index + length),
                            navigationEndpoint: item.onTap
                        });
                    }
                }
                last_end_index = start_index + length;
            }
            if (last_end_index < content.length) {
                runs.push({
                    text: content.slice(last_end_index)
                });
            }
        }
        else {
            runs.push({
                text: content
            });
        }
        return new Text({ runs });
    }
    /**
     * Converts the text to HTML.
     * @returns The HTML.
     */
    toHTML() {
        return this.runs ? this.runs.map((run) => run.toHTML()).join('') : this.text;
    }
    /**
     * Checks if the text is empty.
     * @returns Whether the text is empty.
     */
    isEmpty() {
        return this.text === undefined;
    }
    /**
     * Converts the text to a string.
     * @returns The text.
     */
    toString() {
        return this.text || 'N/A';
    }
}
//# sourceMappingURL=Text.js.map