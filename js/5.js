(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ EmployeeForm; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(74);

// EXTERNAL MODULE: ./src/components/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(56);

// EXTERNAL MODULE: ./src/components/Form/Form.scss
var Form = __webpack_require__(207);

// EXTERNAL MODULE: ./src/components/Modal/SimpleModal/SimpleModal.js
var SimpleModal = __webpack_require__(77);

// EXTERNAL MODULE: ./src/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(198);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(266);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 7 modules
var Select = __webpack_require__(192);

// EXTERNAL MODULE: ./src/components/Select/Select.scss
var Select_Select = __webpack_require__(208);

// CONCATENATED MODULE: ./src/components/Select/Select.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function SimpleSelect() {
  var _React$useState = react_default.a.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      age = _React$useState2[0],
      setAge = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setAge(event.target.value);
  };

  return /*#__PURE__*/react_default.a.createElement(FormControl["a" /* default */], {
    variant: "outlined",
    className: "Select"
  }, /*#__PURE__*/react_default.a.createElement(InputLabel["a" /* default */], {
    id: "demo-simple-select-label"
  }, "\u0422\u0435\u043C\u0430"), /*#__PURE__*/react_default.a.createElement(Select["a" /* default */], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: age,
    onChange: handleChange // icon

  }, /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: 1
  }, "\u041F\u0440\u0438\u0437\u044B"), /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: 2
  }, "\u0427\u0435\u043A\u0438"), /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: 3
  }, "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441\u0430\u0439\u0442\u0430"), /*#__PURE__*/react_default.a.createElement(MenuItem["a" /* default */], {
    value: 4
  }, "\u0414\u0440\u0443\u0433\u043E\u0435")));
}
// CONCATENATED MODULE: ./src/components/Form/Form.js







function EmployeeForm() {
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 12,
    md: 4,
    component: "form",
    className: "form"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "formTitle"
  }, "\u041D\u0435 \u043D\u0430\u0448\u0435\u043B \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ?"), /*#__PURE__*/react_default.a.createElement("p", null, "\u0417\u0430\u0434\u0430\u0439 \u0435\u0433\u043E \u043D\u0430\u043C \u0438 \u043C\u044B \u043E\u0431\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0442\u0435\u0431\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043C!"), /*#__PURE__*/react_default.a.createElement(TextField["b" /* default */], {
    type: "email",
    placeholder: "E-mail"
  }), /*#__PURE__*/react_default.a.createElement(TextField["b" /* default */], {
    type: "name",
    placeholder: "Имя"
  }), /*#__PURE__*/react_default.a.createElement(SimpleSelect, null), /*#__PURE__*/react_default.a.createElement(TextField["b" /* default */], {
    type: "message",
    placeholder: "Сообщение"
  }), /*#__PURE__*/react_default.a.createElement(Checkbox["a" /* default */], null, "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), SimpleModal["a" /* question */]);
}

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ FAQ; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js + 2 modules
var Accordion = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(235);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore);

// EXTERNAL MODULE: ./src/components/Pagination/Pagination.js
var Pagination = __webpack_require__(199);

// EXTERNAL MODULE: ./src/components/Questions/Questions.scss
var Questions = __webpack_require__(234);

// CONCATENATED MODULE: ./src/components/Questions/Questions.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Questions_Questions(arr) {
  return getAccordeon([{
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Какие продукты участвуют в акции?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Какие призы я могу выиграть ?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Сколько чеков нужно зарегистрировать?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Как понять, что чек зарегистрирован?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Куда на сайте загружать чеки?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "Где можно прочитать полный список правил акции?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }, {
    title: "В какие сроки проходит Акция?",
    text: "Период совершения покупки: с 00:00:00 10 февраля до 23:59:59 23 марта 2021; Период регистрации чеков: с 00:00:00 10 февраля до 23:59:59 23 марта 2021 (по московскому времени). Период выдачи призов Победителям Акции: с 19.02.21 по 10.04.21."
  }]);
}

function getAccordeon(arr) {
  var rowsPerPage = 7;

  var _React$useState = react_default.a.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react_default.a.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      expanded = _React$useState4[0],
      setExpanded = _React$useState4[1];

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var hangleExpand = function hangleExpand(id) {
    setExpanded(id);
  };

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 7,
    className: "questions"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), arr.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map(function (row, id) {
    return /*#__PURE__*/react_default.a.createElement(Accordion["a" /* default */], {
      className: "questionsAccordeon",
      expanded: expanded === id,
      onClick: function onClick() {
        return hangleExpand(id);
      },
      key: id
    }, /*#__PURE__*/react_default.a.createElement(AccordionSummary["a" /* default */], {
      className: "questionsAccordeonSummary",
      expandIcon: /*#__PURE__*/react_default.a.createElement(ExpandMore_default.a, null)
    }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      className: "questionsAccordeonTitle"
    }, row.title)), /*#__PURE__*/react_default.a.createElement(AccordionDetails["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      className: "questionsAccordeonText"
    }, row.text)));
  }), /*#__PURE__*/react_default.a.createElement(Pagination["a" /* default */], {
    className: "FAQPagination",
    rowsPerPage: rowsPerPage,
    rows: arr.length,
    page: page,
    handler: handleChangePage
  }));
}
// EXTERNAL MODULE: ./src/components/Modal/Modal.js
var Modal = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/Modal/SimpleModal/SimpleModal.js
var SimpleModal = __webpack_require__(77);

// EXTERNAL MODULE: ./src/components/Form/Form.js + 1 modules
var Form = __webpack_require__(209);

// EXTERNAL MODULE: ./src/pages/faq/faq.scss
var faq = __webpack_require__(236);

// CONCATENATED MODULE: ./src/pages/faq/faq.js









function FAQ() {
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "space-between",
    className: "FAQ",
    id: "faq"
  }, /*#__PURE__*/react_default.a.createElement(Questions_Questions, null), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */], null));
}







/***/ })

}]);