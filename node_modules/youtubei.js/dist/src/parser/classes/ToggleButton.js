import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ToggleButton extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super();
        this.text = new Text(data.defaultText);
        this.toggled_text = new Text(data.toggledText);
        this.tooltip = data.defaultTooltip;
        this.toggled_tooltip = data.toggledTooltip;
        this.is_toggled = data.isToggled;
        this.is_disabled = data.isDisabled;
        this.icon_type = (_a = data.defaultIcon) === null || _a === void 0 ? void 0 : _a.iconType;
        const acc_label = ((_d = (_c = (_b = data === null || data === void 0 ? void 0 : data.defaultText) === null || _b === void 0 ? void 0 : _b.accessibility) === null || _c === void 0 ? void 0 : _c.accessibilityData) === null || _d === void 0 ? void 0 : _d.label) ||
            ((_f = (_e = data === null || data === void 0 ? void 0 : data.accessibilityData) === null || _e === void 0 ? void 0 : _e.accessibilityData) === null || _f === void 0 ? void 0 : _f.label) ||
            ((_g = data === null || data === void 0 ? void 0 : data.accessibility) === null || _g === void 0 ? void 0 : _g.label);
        if (this.icon_type == 'LIKE') {
            this.like_count = parseInt(acc_label.replace(/\D/g, ''));
            this.short_like_count = new Text(data.defaultText).toString();
        }
        this.endpoint =
            ((_j = (_h = data.defaultServiceEndpoint) === null || _h === void 0 ? void 0 : _h.commandExecutorCommand) === null || _j === void 0 ? void 0 : _j.commands) ?
                new NavigationEndpoint(data.defaultServiceEndpoint.commandExecutorCommand.commands.pop()) :
                new NavigationEndpoint(data.defaultServiceEndpoint);
        this.toggled_endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
        if (Reflect.has(data, 'toggleButtonSupportedData') && Reflect.has(data.toggleButtonSupportedData, 'toggleButtonIdData')) {
            this.button_id = data.toggleButtonSupportedData.toggleButtonIdData.id;
        }
        if (Reflect.has(data, 'targetId')) {
            this.target_id = data.targetId;
        }
    }
}
ToggleButton.type = 'ToggleButton';
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map