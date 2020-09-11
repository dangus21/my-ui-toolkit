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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import cn from 'class-names';
import styles from './styles.module.css';
export var MUTButton = function (props) {
    var _a;
    var base = 'mut_button';
    var _b = props.children, children = _b === void 0 ? 'Button text' : _b, _c = props.pointer, pointer = _c === void 0 ? false : _c, _d = props.disabled, disabled = _d === void 0 ? false : _d, _e = props.border, border = _e === void 0 ? false : _e, _f = props.type, type = _f === void 0 ? 'basic' : _f, _g = props.size, size = _g === void 0 ? 'small' : _g, _h = props.variant, variant = _h === void 0 ? 'primary' : _h, otherProps = __rest(props, ["children", "pointer", "disabled", "border", "type", "size", "variant"]);
    return (React.createElement("button", __assign({ className: cn(styles[base], styles[base + "--type--" + type], styles[base + "--size--" + size], styles[base + "--variant--" + variant], (_a = {},
            _a[styles[base + "--pointer"]] = !disabled && pointer,
            _a[styles[base + "--border"]] = !disabled && border,
            _a[styles[base + "--disabled--border"]] = disabled && border,
            _a[styles[base + "--disabled"]] = disabled,
            _a)) }, otherProps), children));
};
MUTButton.defaultProps = {
    children: 'Button text',
    pointer: false,
    disabled: false,
    border: false,
    type: 'basic',
    size: 'small',
    variant: 'primary',
};
