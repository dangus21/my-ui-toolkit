"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("class-names"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  children: _propTypes.default.node,
  pointer: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  border: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['square', 'basic', 'round']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'extra', 'jumbo']),
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'error', 'warn'])
};
var defaultProps = {
  children: 'Button text',
  pointer: false,
  disabled: false,
  border: false,
  type: 'basic',
  size: 'small',
  variant: 'primary'
};
var base = 'mut_button';

var Button = function Button(props) {
  var _cn;

  var children = props.children,
      pointer = props.pointer,
      disabled = props.disabled,
      border = props.border,
      type = props.type,
      size = props.size,
      variant = props.variant,
      otherProps = _objectWithoutProperties(props, ["children", "pointer", "disabled", "border", "type", "size", "variant"]);

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: (0, _classNames.default)(_stylesModule.default[base], _stylesModule.default["".concat(base, "--type--").concat(type)], _stylesModule.default["".concat(base, "--size--").concat(size)], _stylesModule.default["".concat(base, "--variant--").concat(variant)], (_cn = {}, _defineProperty(_cn, _stylesModule.default["".concat(base, "--pointer")], !disabled && pointer), _defineProperty(_cn, _stylesModule.default["".concat(base, "--border")], !disabled && border), _defineProperty(_cn, _stylesModule.default["".concat(base, "--disabled--border")], disabled && border), _defineProperty(_cn, _stylesModule.default["".concat(base, "--disabled")], disabled), _cn))
  }, otherProps), children);
};

exports.Button = Button;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;