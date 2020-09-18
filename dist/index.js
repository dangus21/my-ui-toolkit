'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cn = require('clsx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cn__default = /*#__PURE__*/_interopDefaultLegacy(cn);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@use \"sass:color\";\n@use \"sass:map\";\n.styles_mut_button__1IZPw {\n  border: none;\n  text-align: center;\n  color: #383838;\n  display: inline-flex;\n  transition: box-shadow 200ms ease-in-out; }\n  .styles_mut_button__1IZPw:hover {\n    box-shadow: 0 1px 3px #38383880; }\n  .styles_mut_button__1IZPw:focus {\n    outline: none; }\n  .styles_mut_button__1IZPw:active {\n    overflow: hidden; }\n  .styles_mut_button--pointer__k18mX {\n    cursor: pointer; }\n  .styles_mut_button--border__-Sz_9 {\n    border: 1px solid #383838; }\n  .styles_mut_button--size--small__1Ny4c {\n    padding: 5px 10px;\n    font-size: 0.75rem; }\n  .styles_mut_button--size--medium__2Rxyq {\n    padding: 10px 20px;\n    font-size: 1rem; }\n  .styles_mut_button--size--large__55SGv {\n    padding: 15px 25px;\n    font-size: 1.25rem; }\n  .styles_mut_button--size--extra__3TtfQ {\n    padding: 20px 35px;\n    font-size: 1.65rem; }\n  .styles_mut_button--size--jumbo__3eoQc {\n    padding: 40px 65px;\n    font-size: 2rem; }\n  .styles_mut_button--type--square__1N-Eu {\n    border-radius: 0; }\n  .styles_mut_button--type--basic__D-pXN {\n    border-radius: 5px; }\n  .styles_mut_button--type--round__2T6pL {\n    border-radius: 50px; }\n  .styles_mut_button--disabled__1u4kP {\n    background-color: #737373 !important;\n    color: #b6b6b6 !important;\n    cursor: not-allowed !important; }\n    .styles_mut_button--disabled--border__1Y2OI {\n      border: 1px solid #383838 !important; }\n  .styles_mut_button--variant--primary__DCAce {\n    color: #fff;\n    background-color: #137cec; }\n    .styles_mut_button--variant--primary__DCAce:active {\n      background-color: #1170d4; }\n  .styles_mut_button--variant--secondary__2k4k1 {\n    color: #fff;\n    background-color: #5d87b3; }\n    .styles_mut_button--variant--secondary__2k4k1:active {\n      background-color: #4f7aa8; }\n  .styles_mut_button--variant--success__1yqhU {\n    color: #fff;\n    background-color: #59af5d; }\n    .styles_mut_button--variant--success__1yqhU:active {\n      background-color: #4ea151; }\n  .styles_mut_button--variant--error__1755v {\n    color: #fff;\n    background-color: #da2525; }\n    .styles_mut_button--variant--error__1755v:active {\n      background-color: #c42121; }\n  .styles_mut_button--variant--warn__3w34P {\n    color: #000;\n    background-color: #e2a217; }\n    .styles_mut_button--variant--warn__3w34P:active {\n      background-color: #cb9115; }\n";
styleInject(css_248z);

var MUTButton = function MUTButton(props) {
  var _a;

  var base = 'mut_button';

  var children = props.children,
      pointer = props.pointer,
      disabled = props.disabled,
      border = props.border,
      type = props.type,
      size = props.size,
      variant = props.variant,
      otherProps = __rest(props, ["children", "pointer", "disabled", "border", "type", "size", "variant"]);

  return /*#__PURE__*/React__default['default'].createElement("button", __assign({
    className: cn__default['default'](base, base + "--type--" + type, base + "--size--" + size, base + "--variant--" + variant, (_a = {}, _a[base + "--pointer"] = !disabled && pointer, _a[base + "--border"] = !disabled && border, _a[base + "--disabled--border"] = disabled && border, _a[base + "--disabled"] = disabled, _a))
  }, otherProps), props.text);
};
MUTButton.defaultProps = {
  text: 'Button text',
  pointer: false,
  disabled: false,
  border: false,
  type: 'basic',
  size: 'medium',
  variant: 'primary'
};

var ICON_SIZE = 15;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign$1({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React.createElement(IconBase, __assign$1({
      attr: __assign$1({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest$1(props, ["attr", "title"]);

    return React.createElement("svg", __assign$1({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign$1({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function AiFillEyeInvisible (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"defs","attr":{},"child":[{"tag":"clipPath","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M124-288l388-672 388 672H124z","clipRule":"evenodd"}}]}]},{"tag":"path","attr":{"d":"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}},{"tag":"path","attr":{"d":"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"}}]})(props);
}function AiFillEye (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]})(props);
}

var css_248z$1 = "@use \"sass:color\";\n@use \"sass:map\";\n.styles_muk_input__2wHQz {\n  display: inline-flex;\n  border: 1px solid #737373;\n  background-color: #fff;\n  padding: 5px;\n  transition: box-shadow 200ms ease-in-out; }\n  .styles_muk_input__2wHQz:focus-within {\n    box-shadow: 0 1px 3px #38383880; }\n  .styles_muk_input--square--radius__qYNRg {\n    border-radius: 0; }\n  .styles_muk_input--basic--radius__1PEoL {\n    border-radius: 5px; }\n  .styles_muk_input--round--radius__3Ej90 {\n    border-radius: 50px; }\n  .styles_muk_input--password__3OlsQ {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-columns: 1fr 30px; }\n  .styles_muk_input--fluid__H2UjF {\n    width: 100%; }\n  .styles_muk_input__2wHQz input {\n    width: 100%;\n    border: 0;\n    padding: 5px;\n    margin-left: 5px;\n    background-color: transparent;\n    border-radius: inherit;\n    text-overflow: ellipsis; }\n    .styles_muk_input__2wHQz input:focus {\n      outline: none; }\n  .styles_muk_input__2wHQz i {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #737373;\n    cursor: pointer; }\n";
styleInject(css_248z$1);

var MUTInput = function MUTInput(props) {
  var _a;

  var base = 'muk_input';

  var wrapperProps = props.wrapperProps,
      _b = props.inputProps,
      inputOnChange = _b.inputOnChange,
      restInputProps = __rest(_b, ["inputOnChange"]),
      _c = props.iconProps,
      iconOnClick = _c.iconOnClick,
      restIconProps = __rest(_c, ["iconOnClick"]);

  var _d = React.useState(false),
      visible = _d[0],
      setVisible = _d[1];

  var isPW = function isPW() {
    if (!props.password || props.showText) {
      return 'text';
    }

    return visible ? 'text' : 'password';
  };

  var showPWText = function showPWText() {
    if (props.password && props.showText) {
      return true;
    }

    return visible;
  };

  return /*#__PURE__*/React__default['default'].createElement("div", __assign({
    className: cn__default['default']([base], [base + "--" + props.radius + "--radius"], (_a = {}, _a[base + "--password"] = props.password, _a[base + "--" + props.fluid] = props.fluid, _a))
  }, wrapperProps), /*#__PURE__*/React__default['default'].createElement("input", __assign({
    placeholder: props.placeholder,
    type: isPW(),
    value: props.value,
    onChange: function onChange(event) {
      inputOnChange && inputOnChange(event);
      props.onChange && props.onChange(event);
    }
  }, restInputProps)), props.password && /*#__PURE__*/React__default['default'].createElement("i", __assign({
    onClick: function onClick(event) {
      setVisible(!visible);
      props.onClick && props.onClick(event);
      iconOnClick && iconOnClick(event);
    }
  }, restIconProps), showPWText() ? /*#__PURE__*/React__default['default'].createElement(AiFillEye, {
    style: {
      fontSize: ICON_SIZE
    }
  }) : /*#__PURE__*/React__default['default'].createElement(AiFillEyeInvisible, {
    style: {
      fontSize: ICON_SIZE
    }
  })));
};
MUTInput.defaultProps = {
  placeholder: 'Insert Text',
  radius: 'basic',
  password: false,
  showText: false,
  fluid: false,
  wrapperProps: {},
  inputProps: {},
  iconProps: {}
};

exports.MUTButton = MUTButton;
exports.MUTInput = MUTInput;
//# sourceMappingURL=index.js.map
