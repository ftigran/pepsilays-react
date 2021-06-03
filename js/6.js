(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(238);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(230);
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(201);
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      className: "checkbox",
      name: "checkedB",
      color: "primary",
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./images/checkbox.svg"
      })
    }),
    className: "checkboxContainer",
    label: props.children
  });
});

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(189);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: 'row-reverse',
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: 'column-reverse',
      marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: 'column',
      marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  };
};
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

var FormControlLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormControlLabel(props, ref) {
  var checked = props.checked,
      classes = props.classes,
      className = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      _props$labelPlacement = props.labelPlacement,
      labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

  var muiFormControl = Object(_FormControl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])();
  var disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  var controlProps = {
    disabled: disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, labelPlacement !== 'end' && classes["labelPlacement".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(labelPlacement))], disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](control, controlProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    component: "span",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.label, disabled && classes.disabled)
  }, label));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel));

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var useFormControl = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(148);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/SwitchBase.js











var SwitchBase_styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase_SwitchBase = /*#__PURE__*/react["forwardRef"](function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _useControlled = Object(useControlled["a" /* default */])({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  }),
      _useControlled2 = Object(slicedToArray["a" /* default */])(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

  var muiFormControl = Object(useFormControl["a" /* default */])();

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);

    if (onChange) {
      // TODO v5: remove the second argument.
      onChange(event, newChecked);
    }
  };

  var disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return /*#__PURE__*/react["createElement"](IconButton["a" /* default */], Object(esm_extends["a" /* default */])({
    component: "span",
    className: Object(clsx_m["a" /* default */])(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("input", Object(esm_extends["a" /* default */])({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.

 false ? undefined : void 0;
/* harmony default export */ var internal_SwitchBase = (Object(withStyles["a" /* default */])(SwitchBase_styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase_SwitchBase));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js + 1 modules
var createSvgIcon = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var CheckBoxOutlineBlank = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank'));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var CheckBox = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var IndeterminateCheckBox = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js













var Checkbox_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },

    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: Object(colorManipulator["b" /* fade */])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: Object(colorManipulator["b" /* fade */])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = /*#__PURE__*/react["createElement"](CheckBox, null);
var defaultIcon = /*#__PURE__*/react["createElement"](CheckBoxOutlineBlank, null);
var defaultIndeterminateIcon = /*#__PURE__*/react["createElement"](IndeterminateCheckBox, null);
var Checkbox_Checkbox = /*#__PURE__*/react["forwardRef"](function Checkbox(props, ref) {
  var _props$checkedIcon = props.checkedIcon,
      checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
      classes = props.classes,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$icon = props.icon,
      iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
      _props$indeterminate = props.indeterminate,
      indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
      _props$indeterminateI = props.indeterminateIcon,
      indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
      inputProps = props.inputProps,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);

  var icon = indeterminate ? indeterminateIconProp : iconProp;
  var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  return /*#__PURE__*/react["createElement"](internal_SwitchBase, Object(esm_extends["a" /* default */])({
    type: "checkbox",
    classes: {
      root: Object(clsx_m["a" /* default */])(classes.root, classes["color".concat(Object(capitalize["a" /* default */])(color))], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color: color,
    inputProps: Object(esm_extends["a" /* default */])({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/react["cloneElement"](icon, {
      fontSize: icon.props.fontSize === undefined && size === "small" ? size : icon.props.fontSize
    }),
    checkedIcon: /*#__PURE__*/react["cloneElement"](indeterminateIcon, {
      fontSize: indeterminateIcon.props.fontSize === undefined && size === "small" ? size : indeterminateIcon.props.fontSize
    }),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Checkbox_Checkbox = __webpack_exports__["a"] = (Object(withStyles["a" /* default */])(Checkbox_styles, {
  name: 'MuiCheckbox'
})(Checkbox_Checkbox));

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Registration; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _components_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _Registration_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(233);
/* harmony import */ var _Registration_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Registration_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Modal_SimpleModal_SimpleModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77);
/* harmony import */ var _components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(198);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Registration = /*#__PURE__*/function (_Component) {
  _inherits(Registration, _Component);

  var _super = _createSuper(Registration);

  function Registration() {
    _classCallCheck(this, Registration);

    return _super.apply(this, arguments);
  }

  _createClass(Registration, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        container: true,
        alignContent: "center",
        justify: "center",
        direction: "column",
        className: "RegistrationContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        item: true,
        component: "form",
        className: "Registration"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "formTitle"
      }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], {
        type: "name",
        placeholder: "Имя"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__[/* TextFieldPhone */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], {
        type: "email",
        placeholder: "E-mail"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkboxs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, "\u042F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043B \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "empty"
      }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u0430\u043A\u0446\u0438\u0438"), " \u0438", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "empty"
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"), ", \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u043A\u0446\u0438\u0438 \u043F\u043E E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u043A\u0446\u0438\u0438 \u043F\u043E \u0421\u041C\u0421")), _components_Modal_SimpleModal_SimpleModal__WEBPACK_IMPORTED_MODULE_4__[/* verify */ "c"]));
    }
  }]);

  return Registration;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);