"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(require("react"));
var types_1 = require("../types");
var Icon = function (_a) {
    var type = _a.type, className = _a.className, _b = _a.width, width = _b === void 0 ? 24 : _b, _c = _a.height, height = _c === void 0 ? 24 : _c, onClick = _a.onClick, style = _a.style;
    return (react_1.default.createElement("svg", { className: className, width: width, height: height, style: style, onClick: onClick, role: onClick ? "button" : "img", tabIndex: onClick ? 0 : undefined },
        react_1.default.createElement("use", { href: "#".concat(types_1.ICON_TYPES[type]) })));
};
exports.Icon = Icon;
