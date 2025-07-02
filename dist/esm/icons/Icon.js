var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ICON_TYPES } from '../types';
export var Icon = function (_a) {
    var type = _a.type, className = _a.className, _b = _a.width, width = _b === void 0 ? 24 : _b, _c = _a.height, height = _c === void 0 ? 24 : _c, onClick = _a.onClick, style = _a.style;
    return (_jsx("svg", __assign({ className: className, width: width, height: height, style: style, onClick: onClick, role: onClick ? "button" : "img", tabIndex: onClick ? 0 : undefined }, { children: _jsx("use", { href: "#".concat(ICON_TYPES[type]) }) })));
};
