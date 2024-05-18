import { __awaiter } from "tslib";
const XML_CHARACTER_MAP = {
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&apos;',
    '<': '&lt;',
    '>': '&gt;'
};
function escapeXMLString(str) {
    return str.replace(/([&"<>'])/g, (_, item) => {
        return XML_CHARACTER_MAP[item];
    });
}
function normalizeTag(tag) {
    if (tag === 'mpd')
        return 'MPD';
    if (tag === 'base-url')
        return 'BaseURL';
    const sections = tag.split('-');
    return sections.map((section) => section.charAt(0).toUpperCase() + section.slice(1)).join('');
}
export function createElement(tagNameOrFunction, props, ...children) {
    const normalizedChildren = children.flat().map((child) => typeof child === 'string' ? createTextElement(child) : child);
    if (typeof tagNameOrFunction === 'function') {
        return tagNameOrFunction(Object.assign(Object.assign({}, props), { children: normalizedChildren }));
    }
    return {
        type: normalizeTag(tagNameOrFunction),
        props: Object.assign(Object.assign({}, props), { children: normalizedChildren })
    };
}
export function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: { nodeValue: text }
    };
}
export function renderElementToString(element) {
    return __awaiter(this, void 0, void 0, function* () {
        if (element.type === 'TEXT_ELEMENT')
            return escapeXMLString(typeof element.props.nodeValue === 'string' ? element.props.nodeValue : '');
        let dom = `<${element.type}`;
        if (element.props) {
            const properties = Object.keys(element.props)
                .filter((key) => !['children', 'nodeValue'].includes(key) && element.props[key] !== undefined)
                .map((name) => `${name}="${escapeXMLString(`${element.props[name]}`)}"`);
            if (properties.length > 0)
                dom += ` ${properties.join(' ')}`;
        }
        if (element.props.children) {
            const children = yield Promise.all((yield Promise.all(element.props.children.flat())).flat().filter((child) => !!child).map((child) => renderElementToString(child)));
            if (children.length > 0) {
                dom += `>${children.join('')}</${element.type}>`;
                return dom;
            }
        }
        return `${dom}/>`;
    });
}
export function renderToString(root) {
    return __awaiter(this, void 0, void 0, function* () {
        const dom = yield renderElementToString(yield root);
        return `<?xml version="1.0" encoding="utf-8"?>${dom}`;
    });
}
export function Fragment(props) {
    return props.children;
}
//# sourceMappingURL=DashUtils.js.map