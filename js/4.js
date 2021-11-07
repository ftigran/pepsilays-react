(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(237);
/* harmony import */ var _Pagination_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(200);
/* harmony import */ var _Pagination_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Pagination_scss__WEBPACK_IMPORTED_MODULE_2__);



function getPagination(props) {
  var _props$rowsPerPage = props.rowsPerPage,
      rowsPerPage = _props$rowsPerPage === void 0 ? 5 : _props$rowsPerPage,
      rows = props.rows,
      page = props.page,
      handler = props.handler,
      className = props.className;

  if (rows >= rowsPerPage) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      className: "Pagination " + className,
      count: Math.ceil(rows / rowsPerPage),
      page: page,
      onChange: handler
    });
  } else return null;
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyHeadTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(251);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(255);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(254);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(250);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(252);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(253);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(199);
/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(206);
/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Table_scss__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function StickyHeadTable(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var rowsPerPage = props.rowsPerPage || 5;

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    className: "tableHeader"
  }, props.columns.map(function (column) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      key: column.id,
      align: column.align
    }, column.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, props.rows.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map(function (row, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      hover: true,
      tabIndex: -1,
      key: id
    }, props.columns.map(function (column) {
      var value = row[column.id];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        key: column.id,
        className: "tableCell"
      }, column.format && typeof value === "number" ? column.format(value) : value);
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    rowsPerPage: rowsPerPage,
    rows: props.rows.length,
    page: page,
    handler: handleChangePage
  }));
}

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(79);

var _interopRequireWildcard = __webpack_require__(80);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(81));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');

exports.default = _default;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/ListContext.js
var ListContext = __webpack_require__(84);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js








var ListItemText_styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText_ListItemText = /*#__PURE__*/react["forwardRef"](function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react["useContext"](ListContext["a" /* default */]),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== Typography["a" /* default */] && !disableTypography) {
    primary = /*#__PURE__*/react["createElement"](Typography["a" /* default */], Object(esm_extends["a" /* default */])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== Typography["a" /* default */] && !disableTypography) {
    secondary = /*#__PURE__*/react["createElement"](Typography["a" /* default */], Object(esm_extends["a" /* default */])({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_ListItemText_ListItemText = (Object(withStyles["a" /* default */])(ListItemText_styles, {
  name: 'MuiListItemText'
})(ListItemText_ListItemText));
// EXTERNAL MODULE: ./src/components/Rules/Rules.scss
var Rules = __webpack_require__(225);

// CONCATENATED MODULE: ./src/components/Rules/Rules.js









function Rules_Rules() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "rulesBlock",
    id: "c_rules"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "title"
  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430"), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    direction: "column",
    justify: "center",
    container: true,
    className: "rulesContainer",
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    className: "rulesList"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    alt: "1",
    className: "rulesNumb",
    src: "./images/numb1.svg"
  }), /*#__PURE__*/react_default.a.createElement(esm_ListItemText_ListItemText, {
    primary: "\u041A\u0443\u043F\u0438",
    secondary: "2 \u043B\u044E\u0431\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 Lay's (150, 225 \u0433.) \u0438\u043B\u0438 Pepsi (1 \u0438\u043B\u0438 2 \u043B.)"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    alt: "2",
    className: "rulesNumb",
    src: "./images/numb2.svg"
  }), /*#__PURE__*/react_default.a.createElement(esm_ListItemText_ListItemText, {
    primary: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439 \u0447\u0435\u043A \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",
    secondary: "\u0432\u044B\u0431\u0435\u0440\u0438 \u0436\u0430\u043D\u0440, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439 \u0432 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0435 \u043F\u0440\u0438\u0437\u043E\u0432"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    alt: "3",
    className: "rulesNumb",
    src: "./images/numb3.svg"
  }), /*#__PURE__*/react_default.a.createElement(esm_ListItemText_ListItemText, {
    primary: "\u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0439 \u043F\u0440\u0438\u0437\u044B    ",
    secondary: "\u043A\u0430\u0436\u0434\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E"
  })), /*#__PURE__*/react_default.a.createElement("a", {
    href: "empty"
  }, "\u041F\u043E\u043B\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u043A\u0446\u0438\u0438")));
}

/* harmony default export */ var components_Rules_Rules = (Rules_Rules);
// EXTERNAL MODULE: ./src/components/Top/Top.scss
var Top = __webpack_require__(226);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(149);

// CONCATENATED MODULE: ./src/components/Top/Top.js






function Top_Rules() {
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    direction: "column",
    container: true,
    justify: "flex-start",
    alignItems: "center",
    className: "topGrid",
    id: "c_main"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "topPromo",
    src: "./images/promo.png"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    className: "topPromoM",
    src: "./images/promo2.png"
  }), /*#__PURE__*/react_default.a.createElement("h3", {
    className: "topText"
  }, "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0436\u0430\u043D\u0440\u044B \u043D\u0430 \u0432\u043A\u0443\u0441"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    size: "large",
    color: "primary"
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0447\u0435\u043A"));
}

/* harmony default export */ var Top_Top = (Top_Rules);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 14 modules
var Box = __webpack_require__(260);

// EXTERNAL MODULE: ./src/components/Priz/Priz.scss
var Priz_Priz = __webpack_require__(227);

// CONCATENATED MODULE: ./src/components/Priz/Priz.js




var Priz_Priz_Priz = function Priz() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    className: "priz",
    id: "c_prizes"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "title"
  }, "\u041F\u0440\u0438\u0437\u044B"), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    alignItems: "center",
    justify: "center",
    className: "prizContainer"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    lg: 3
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/priz1.png",
    className: "prizImg"
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    lg: 3
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/priz2.png",
    className: "prizImg"
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/priz3.png",
    className: "prizImg prizImg_pc"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/priz3-1.png",
    className: "prizImg prizImg_mob"
  })))));
};

/* harmony default export */ var components_Priz_Priz = (Priz_Priz_Priz);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js








var Container_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(defineProperty["a" /* default */])({
      width: '100%',
      marginLeft: 'auto',
      boxSizing: 'border-box',
      marginRight: 'auto',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `disableGutters={true}`. */
    disableGutters: {
      paddingLeft: 0,
      paddingRight: 0
    },

    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
      var value = theme.breakpoints.values[breakpoint];

      if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
          maxWidth: value
        };
      }

      return acc;
    }, {}),

    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('xs'), {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }),

    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('sm'), {
      maxWidth: theme.breakpoints.values.sm
    }),

    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('md'), {
      maxWidth: theme.breakpoints.values.md
    }),

    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('lg'), {
      maxWidth: theme.breakpoints.values.lg
    }),

    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('xl'), {
      maxWidth: theme.breakpoints.values.xl
    })
  };
};
var Container_Container = /*#__PURE__*/react["forwardRef"](function Container(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat(Object(capitalize["a" /* default */])(String(maxWidth)))]),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Container_Container = (Object(withStyles["a" /* default */])(Container_styles, {
  name: 'MuiContainer'
})(Container_Container));
// EXTERNAL MODULE: ./src/components/Random/Random.scss
var Random = __webpack_require__(228);

// CONCATENATED MODULE: ./src/components/Random/Random.js




function Random_Priz() {
  return /*#__PURE__*/react_default.a.createElement(esm_Container_Container, {
    className: "random"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/bg2.svg",
    className: "randomBG randomBGback"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/bg3.svg",
    className: "randomBGtop randomBG"
  }), /*#__PURE__*/react_default.a.createElement(esm_Container_Container, {
    className: "randomScreen"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/video-1.png",
    className: "randomVideo"
  }), /*#__PURE__*/react_default.a.createElement("h2", {
    className: "randomText"
  }, "\u0437\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u0439 \u0444\u0438\u043B\u044C\u043C \u0438 \u0436\u043C\u0438 \u043F\u0443\u0441\u043A!"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    className: "buttonVideo"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/buttonPlay.png"
  })), /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/video-2.png",
    className: "randomVideo"
  })));
}

/* harmony default export */ var Random_Random = (Random_Priz);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(212);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: ./src/components/Table/Table.js
var Table = __webpack_require__(205);

// EXTERNAL MODULE: ./src/components/Winners/Winners.scss
var Winners = __webpack_require__(229);

// CONCATENATED MODULE: ./src/components/Winners/Winners.js






function Winners_Winners() {
  return /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    id: "c_winners",
    className: "winners"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0438"), /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {
    component: "form",
    className: "winnersForm"
  }, /*#__PURE__*/react_default.a.createElement(InputBase["a" /* default */], {
    className: "winnersInput",
    placeholder: "e-mail",
    inputProps: {
      "aria-label": "e-mail"
    }
  }), /*#__PURE__*/react_default.a.createElement(IconButton["a" /* default */], {
    type: "submit",
    "aria-label": "search",
    className: "winnersButton"
  }, /*#__PURE__*/react_default.a.createElement(Search_default.a, null))), /*#__PURE__*/react_default.a.createElement(Table["a" /* default */], {
    rows: rows,
    columns: columns,
    rowsPerPage: 10
  }));
}

/* harmony default export */ var components_Winners_Winners = (Winners_Winners);
var columns = [{
  id: "date",
  label: "Дата"
}, {
  id: "email",
  label: "e-mail"
}, {
  id: "name",
  label: "имя"
}, {
  id: "priz",
  label: "приз"
}];

function createData(date, email, name, priz) {
  return {
    date: date,
    email: email,
    name: name,
    priz: priz
  };
}

var rows = [createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"), createData("25.02.21", "r.bol***@ya.ru", "Evgeny", "Еженедельный"), createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"), createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"), createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"), createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"), createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"), createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"), createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"), createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"), createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"), createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"), createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"), createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"), createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"), createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный")];
// EXTERNAL MODULE: ./src/components/Footer/Footer.js
var Footer = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/use-react-router/use-react-router.js
var use_react_router = __webpack_require__(32);
var use_react_router_default = /*#__PURE__*/__webpack_require__.n(use_react_router);

// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(33);

// CONCATENATED MODULE: ./src/pages/main/main.js











var main_Main = function Main() {
  var _useReactRouter = use_react_router_default()(),
      history = _useReactRouter.history;

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column",
    justify: "flex-start",
    alignItems: "stretch",
    className: "wrap"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    className: "blockContainer"
  }, /*#__PURE__*/react_default.a.createElement(Top_Top, null), /*#__PURE__*/react_default.a.createElement(components_Rules_Rules, null), /*#__PURE__*/react_default.a.createElement(components_Priz_Priz, null), /*#__PURE__*/react_default.a.createElement(Random_Random, null), /*#__PURE__*/react_default.a.createElement(components_Winners_Winners, null))));
};

/* harmony default export */ var main = __webpack_exports__["default"] = (main_Main);

/***/ })

}]);