var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React, { useState } from 'react';
import cn from 'class-names';
import { ICON_SIZE } from '../constants';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styles from "./styles.module.css";
;
export var MUTInput = function (props) {
  var _a;

  var base = 'muk_input';

  var wrapperProps = props.wrapperProps,
      _b = props.inputProps,
      inputOnChange = _b.inputOnChange,
      restInputProps = __rest(_b, ["inputOnChange"]),
      _c = props.iconProps,
      iconOnClick = _c.iconOnClick,
      restIconProps = __rest(_c, ["iconOnClick"]);

  var _d = useState(false),
      visible = _d[0],
      setVisible = _d[1];

  var isPW = function () {
    if (!props.password || props.showText) {
      return 'text';
    }

    return visible ? 'text' : 'password';
  };

  var showPWText = function () {
    if (props.password && props.showText) {
      return true;
    }

    return visible;
  };

  console.log('LOG: MUTInput -> props', props);
  return React.createElement("div", __assign({
    className: cn(styles[base], styles[base + "--" + props.radius + "--radius"], (_a = {}, _a[styles[base + "--password"]] = props.password, _a[styles[base + "--" + props.fluid]] = props.fluid, _a))
  }, wrapperProps), React.createElement("input", __assign({
    placeholder: props.placeholder,
    type: isPW(),
    value: props.value,
    onChange: function (event) {
      inputOnChange && inputOnChange(event);
      props.change && props.change(event);
    }
  }, restInputProps)), props.password && React.createElement("i", __assign({
    onClick: function (event) {
      setVisible(!visible);
      props.click && props.click(event);
      iconOnClick && iconOnClick(event);
    }
  }, restIconProps), showPWText() ? React.createElement(AiFillEye, {
    style: {
      fontSize: ICON_SIZE
    }
  }) : React.createElement(AiFillEyeInvisible, {
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