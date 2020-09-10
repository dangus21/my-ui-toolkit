"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPassword = exports.withWrapperProps = exports.standard = exports.default = void 0;

var _index = require("index");

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: 'Input',
  component: _index.MUKInput,
  argTypes: {
    value: {
      control: {
        disable: false
      }
    },
    placeholder: {
      control: {
        disable: false
      }
    },
    password: {
      control: {
        disabled: false
      }
    },
    showText: {
      control: {
        disable: false
      }
    },
    radius: {
      control: {
        disable: false
      }
    },
    inputProps: {
      control: {
        disable: false
      }
    },
    iconProps: {
      control: {
        disable: false
      }
    },
    wrapperProps: {
      control: {
        disable: false
      }
    },
    click: {
      control: {
        disable: true
      }
    },
    change: {
      control: {
        disable: true
      }
    }
  }
};
exports.default = _default;

var InputTemplate = function InputTemplate(_ref) {
  var wrapperProps = _ref.wrapperProps,
      inputProps = _ref.inputProps,
      iconProps = _ref.iconProps,
      args = _objectWithoutProperties(_ref, ["wrapperProps", "inputProps", "iconProps"]);

  return /*#__PURE__*/_react.default.createElement(_index.MUKInput, _extends({
    wrapperProps: wrapperProps,
    inputProps: inputProps,
    iconProps: iconProps
  }, (0, _addonActions.actions)('onChange'), args));
};

var standard = InputTemplate.bind({});
exports.standard = standard;
var withWrapperProps = InputTemplate.bind({});
exports.withWrapperProps = withWrapperProps;
withWrapperProps.args = {
  wrapperProps: {
    style: {
      outline: '5px solid red'
    }
  }
};
var withPassword = InputTemplate.bind({});
exports.withPassword = withPassword;
withPassword.args = {
  password: true,
  value: 'password text'
};