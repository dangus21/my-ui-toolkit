"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = exports.default = void 0;

var _Components = require("Components");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */
var _default = {
  title: 'Button',
  component: _Components.MUKButton,
  argTypes: {
    children: {
      control: {
        disable: false
      }
    },
    pointer: {
      control: {
        disable: false
      }
    },
    border: {
      control: {
        disable: false
      }
    }
  }
};
exports.default = _default;

var ButtonTemplate = function ButtonTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_Components.MUKButton, args);
};

var button = ButtonTemplate.bind({});
exports.button = button;