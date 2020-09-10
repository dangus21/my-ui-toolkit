"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _constants = require("../constants");

var _icons = require("@material-ui/icons");

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("class-names"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  change: _propTypes.default.func,
  click: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  iconProps: _propTypes.default.object,
  wrapperProps: _propTypes.default.object,
  password: _propTypes.default.bool,
  showText: _propTypes.default.bool,
  value: _propTypes.default.string,
  radius: _propTypes.default.oneOf(['square', 'basic', 'round'])
};
var defaultProps = {
  placeholder: 'Insert Text',
  radius: 'basic',
  password: false,
  showText: false,
  wrapperProps: {},
  inputProps: {},
  iconProps: {}
};
var base = 'muk_input';

var Input = function Input(props) {
  var wrapperProps = props.wrapperProps,
      _props$inputProps = props.inputProps,
      inputOnChange = _props$inputProps.inputOnChange,
      restInputProps = _objectWithoutProperties(_props$inputProps, ["inputOnChange"]),
      _props$iconProps = props.iconProps,
      iconOnClick = _props$iconProps.iconOnClick,
      restIconProps = _objectWithoutProperties(_props$iconProps, ["iconOnClick"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

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

  console.log(isPW());
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classNames.default)(_stylesModule.default[base], _stylesModule.default["".concat(base, "--").concat(props.radius, "--radius")], _defineProperty({}, _stylesModule.default["".concat(base, "--password")], props.password))
  }, wrapperProps), /*#__PURE__*/_react.default.createElement("input", _extends({
    placeholder: props.placeholder,
    type: isPW(),
    value: props.value,
    onChange: function onChange(event) {
      inputOnChange && inputOnChange(event);
      props.change && props.change(event);
    }
  }, restInputProps)), props.password && /*#__PURE__*/_react.default.createElement("i", _extends({
    onClick: function onClick(event) {
      setVisible(!visible);
      props.click && props.click(event);
      iconOnClick && iconOnClick(event);
    }
  }, restIconProps), showPWText() ? /*#__PURE__*/_react.default.createElement(_icons.VisibilityOutlined, {
    style: {
      fontSize: _constants.ICON_SIZE
    }
  }) : /*#__PURE__*/_react.default.createElement(_icons.VisibilityOffOutlined, {
    style: {
      fontSize: _constants.ICON_SIZE
    }
  })));
};

exports.Input = Input;
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;