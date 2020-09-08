"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

require("./styles.scss");

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("class-names"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  children: _propTypes.default.node,
  pointer: _propTypes.default.bool,
  border: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['square', 'basic', 'round']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'extra', 'jumbo'])
};
var defaultProps = {
  children: 'Button text',
  pointer: false,
  round: false,
  spaced: false,
  border: false,
  type: 'basic',
  size: 'medium'
};
var base = 'muk_button';

var Button = function Button(props) {
  var _cn;

  return /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _classNames.default)(base, "".concat(base, "--").concat(props.type), "".concat(base, "--").concat(props.size), (_cn = {}, _defineProperty(_cn, "".concat(base, "--pointer"), props.pointer), _defineProperty(_cn, "".concat(base, "--border"), props.border), _cn))
  }, props.children);
};

exports.Button = Button;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;