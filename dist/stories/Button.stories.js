"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = exports.error = exports.success = exports.secondary = exports.primary = exports.default = void 0;

var _index = require("index");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */
var _default = {
  title: 'Button',
  component: _index.MUKButton,
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
    disabled: {
      control: {
        disable: false
      }
    },
    border: {
      control: {
        disable: false
      }
    },
    type: {
      control: {
        disable: false
      }
    },
    size: {
      control: {
        disable: false
      }
    },
    variant: {
      control: {
        disable: false
      }
    }
  }
};
exports.default = _default;

var ButtonTemplate = function ButtonTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_index.MUKButton, args);
};

var primary = ButtonTemplate.bind({});
exports.primary = primary;
primary.args = {
  variant: 'primary'
};
var secondary = ButtonTemplate.bind({});
exports.secondary = secondary;
secondary.args = {
  variant: 'secondary'
};
var success = ButtonTemplate.bind({});
exports.success = success;
success.args = {
  variant: 'success'
};
var error = ButtonTemplate.bind({});
exports.error = error;
error.args = {
  variant: 'error'
};
var warning = ButtonTemplate.bind({});
exports.warning = warning;
warning.args = {
  variant: 'warn'
};