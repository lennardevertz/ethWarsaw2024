/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export COMMAND_MAP */
/* harmony import */ var _get_star_wars_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6193);
/* harmony import */ var _resolve_ens_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6553);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var COMMAND_MAP = _defineProperty(_defineProperty({}, _get_star_wars_command__WEBPACK_IMPORTED_MODULE_0__/* .GetStarWarsCommand */ .z.name, _get_star_wars_command__WEBPACK_IMPORTED_MODULE_0__/* .GetStarWarsCommand */ .z), _resolve_ens_command__WEBPACK_IMPORTED_MODULE_1__/* .ResolveEnsCommand */ .Y.name, _resolve_ens_command__WEBPACK_IMPORTED_MODULE_1__/* .ResolveEnsCommand */ .Y);

/***/ }),

/***/ 6365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uB: () => (/* binding */ Command)
/* harmony export */ });
/* unused harmony exports useCommandMutation, useCommandQuery */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3140);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9129);
/* harmony import */ var _on_window_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8494);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var Command = /*#__PURE__*/function () {
  function Command() {
    _classCallCheck(this, Command);
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  }
  return _createClass(Command, [{
    key: "send",
    value: function send() {
      var _this = this;
      // TODO: handle error
      return new Promise(function (resolve) {
        window.postMessage({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .COMMAND_BUS_REQUEST_MESSAGE */ .r,
          detail: _this.serialize()
        });
        (0,_on_window_message__WEBPACK_IMPORTED_MODULE_3__/* .onWindowMessage */ .l)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .COMMAND_BUS_RESPONSE_MESSAGE */ .R, function (detail, removeEventListener) {
          if (detail.commandId !== _this.id) {
            return;
          }
          resolve(detail.response);
          removeEventListener();
        });
      });
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return {
        name: this.name,
        payload: this.payload,
        id: this.id
      };
    }
  }]);
}();
var useCommandMutation = function useCommandMutation(commandConstructor) {
  var mutationFunction = useCallback(function (parameters) {
    var command = new commandConstructor(parameters);
    return command.send();
  }, [commandConstructor]);
  return useMutation({
    mutationFn: mutationFunction
  });
};
var useCommandQuery = function useCommandQuery(_ref) {
  var command = _ref.command,
    select = _ref.select,
    retry = _ref.retry,
    _ref$retryDelay = _ref.retryDelay,
    retryDelay = _ref$retryDelay === void 0 ? 1000 : _ref$retryDelay,
    staleTime = _ref.staleTime,
    refetchInterval = _ref.refetchInterval,
    placeholderData = _ref.placeholderData,
    _ref$enabled = _ref.enabled,
    enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var queryFunction = useCallback(function () {
    return command.send();
  }, [command]);
  var queryOptions = useMemo(function () {
    return {
      queryKey: [command.name, JSON.stringify(command.payload)],
      refetchInterval: refetchInterval,
      retry: retry,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      placeholderData: placeholderData,
      retryDelay: retryDelay,
      staleTime: staleTime,
      enabled: enabled,
      select: select,
      queryFn: queryFunction
    };
  }, [command.name, command.payload, refetchInterval, retry, placeholderData, retryDelay, staleTime, enabled, select, queryFunction]);
  return useQuery(queryOptions);
};

/***/ }),

/***/ 9129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ COMMAND_BUS_RESPONSE_MESSAGE),
/* harmony export */   r: () => (/* binding */ COMMAND_BUS_REQUEST_MESSAGE)
/* harmony export */ });
var COMMAND_BUS_REQUEST_MESSAGE = 'COMMAND_BUS_REQUEST_MESSAGE';
var COMMAND_BUS_RESPONSE_MESSAGE = 'COMMAND_BUS_RESPONSE_MESSAGE';

/***/ }),

/***/ 6193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ GetStarWarsCommand)
/* harmony export */ });
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var GetStarWarsCommand = /*#__PURE__*/function (_Command) {
  function GetStarWarsCommand(payload) {
    var _this;
    _classCallCheck(this, GetStarWarsCommand);
    _this = _callSuper(this, GetStarWarsCommand);
    _defineProperty(_this, "name", 'GetStarWarsCommand');
    _this.payload = payload;
    return _this;
  }
  _inherits(GetStarWarsCommand, _Command);
  return _createClass(GetStarWarsCommand, [{
    key: "handle",
    value: function () {
      var _handle = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var swapiResponse, responseBody;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://swapi.dev/api/people/1');
            case 2:
              swapiResponse = _context.sent;
              _context.next = 5;
              return swapiResponse.json();
            case 5:
              responseBody = _context.sent;
              return _context.abrupt("return", responseBody);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function handle() {
        return _handle.apply(this, arguments);
      }
      return handle;
    }()
  }]);
}(_command__WEBPACK_IMPORTED_MODULE_0__/* .Command */ .uB);

/***/ }),

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rl: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.R),
/* harmony export */   lb: () => (/* reexport safe */ _on_window_message__WEBPACK_IMPORTED_MODULE_5__.l),
/* harmony export */   rx: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.r)
/* harmony export */ });
/* harmony import */ var _command_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7322);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9129);
/* harmony import */ var _get_star_wars_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6193);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6365);
/* harmony import */ var _on_window_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8494);
/* harmony import */ var _resolve_ens_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6553);







/***/ }),

/***/ 8494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ onWindowMessage)
/* harmony export */ });
var onWindowMessage = function onWindowMessage(type, callback) {
  var _listener = function listener(event) {
    var message = event.data;
    if (message.type === type) {
      callback(message.detail, function () {
        window.removeEventListener('message', _listener);
      });
    }
  };
  window.addEventListener('message', _listener);
};

/***/ }),

/***/ 6553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ ResolveEnsCommand)
/* harmony export */ });
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4138);
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(465);
/* harmony import */ var viem_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8561);
/* harmony import */ var viem_ens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7471);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




// eslint-disable-next-line @typescript-eslint/no-explicit-any
var ResolveEnsCommand = /*#__PURE__*/function (_Command) {
  function ResolveEnsCommand(payload) {
    var _this;
    _classCallCheck(this, ResolveEnsCommand);
    _this = _callSuper(this, ResolveEnsCommand);
    _defineProperty(_this, "name", 'ResolveEnsCommand');
    _this.payload = payload;
    return _this;
  }
  _inherits(ResolveEnsCommand, _Command);
  return _createClass(ResolveEnsCommand, [{
    key: "handle",
    value: function () {
      var _handle = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var client, resolvedAddress, resolvedName;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              client = (0,viem__WEBPACK_IMPORTED_MODULE_1__/* .createPublicClient */ .l)({
                chain: _objectSpread(_objectSpread({}, viem_chains__WEBPACK_IMPORTED_MODULE_2__/* .mainnet */ .r), {}, {
                  fees: undefined
                }),
                transport: (0,viem__WEBPACK_IMPORTED_MODULE_3__/* .http */ .L)()
              });
              if (!this.payload.domain) {
                _context.next = 6;
                break;
              }
              _context.next = 4;
              return client.getEnsAddress({
                name: (0,viem_ens__WEBPACK_IMPORTED_MODULE_4__/* .normalize */ .S)(this.payload.domain)
              });
            case 4:
              resolvedAddress = _context.sent;
              return _context.abrupt("return", resolvedAddress);
            case 6:
              if (!this.payload.address) {
                _context.next = 11;
                break;
              }
              _context.next = 9;
              return client.getEnsName({
                address: this.payload.address
              });
            case 9:
              resolvedName = _context.sent;
              return _context.abrupt("return", resolvedName);
            case 11:
              return _context.abrupt("return");
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function handle() {
        return _handle.apply(this, arguments);
      }
      return handle;
    }()
  }]);
}(_command__WEBPACK_IMPORTED_MODULE_0__/* .Command */ .uB);

/***/ }),

/***/ 2713:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
__webpack_unused_export__={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};__webpack_unused_export__=E;__webpack_unused_export__=p;__webpack_unused_export__=r;__webpack_unused_export__=G;__webpack_unused_export__=q;__webpack_unused_export__=w;
__webpack_unused_export__=W;__webpack_unused_export__=X;
__webpack_unused_export__=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};__webpack_unused_export__=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};__webpack_unused_export__=M;__webpack_unused_export__=function(a){var b=M.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};
__webpack_unused_export__=function(a){return{$$typeof:v,render:a}};__webpack_unused_export__=O;__webpack_unused_export__=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};__webpack_unused_export__=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};__webpack_unused_export__=X;__webpack_unused_export__=function(a,b){return U.current.useCallback(a,b)};__webpack_unused_export__=function(a){return U.current.useContext(a)};
__webpack_unused_export__=function(){};__webpack_unused_export__=function(a){return U.current.useDeferredValue(a)};__webpack_unused_export__=function(a,b){return U.current.useEffect(a,b)};__webpack_unused_export__=function(){return U.current.useId()};__webpack_unused_export__=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};__webpack_unused_export__=function(a,b){return U.current.useInsertionEffect(a,b)};__webpack_unused_export__=function(a,b){return U.current.useLayoutEffect(a,b)};
__webpack_unused_export__=function(a,b){return U.current.useMemo(a,b)};__webpack_unused_export__=function(a,b,e){return U.current.useReducer(a,b,e)};__webpack_unused_export__=function(a){return U.current.useRef(a)};__webpack_unused_export__=function(a){return U.current.useState(a)};__webpack_unused_export__=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};__webpack_unused_export__=function(){return U.current.useTransition()};__webpack_unused_export__="18.3.1";


/***/ }),

/***/ 758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  /* unused reexport */ __webpack_require__(2713);
} else {}


/***/ }),

/***/ 7949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ 5677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ 3069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ unsafeStringify)
/* harmony export */ });


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (stringify)));

/***/ }),

/***/ 3140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7949);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5677);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3069);



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__/* .unsafeStringify */ .k)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 6228:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tt: () => (/* binding */ ens_normalize)
/* harmony export */ });
/* unused harmony exports ens_beautify, ens_emoji, ens_normalize_fragment, ens_split, ens_tokenize, is_combining_mark, nfc, nfd, safe_str_from_cps, should_escape */
// created 2023-09-12T22:05:14.211Z
// compressed base64-encoded blob for include-ens data
// source: https://github.com/adraffy/ens-normalize.js/blob/main/src/make.js
// see: https://github.com/adraffy/ens-normalize.js#security
// SHA-256: 0565ed049b9cf1614bb9e11ba7d8ac6a6fb96c893253d890f7e2b2884b9ded32
var COMPRESSED$1 = 'AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI';
const FENCED = new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);
const NSM_MAX = 4;

function decode_arithmetic(bytes) {
	let pos = 0;
	function u16() { return (bytes[pos++] << 8) | bytes[pos++]; }
	
	// decode the frequency table
	let symbol_count = u16();
	let total = 1;
	let acc = [0, 1]; // first symbol has frequency 1
	for (let i = 1; i < symbol_count; i++) {
		acc.push(total += u16());
	}

	// skip the sized-payload that the last 3 symbols index into
	let skip = u16();
	let pos_payload = pos;
	pos += skip;

	let read_width = 0;
	let read_buffer = 0; 
	function read_bit() {
		if (read_width == 0) {
			// this will read beyond end of buffer
			// but (undefined|0) => zero pad
			read_buffer = (read_buffer << 8) | bytes[pos++];
			read_width = 8;
		}
		return (read_buffer >> --read_width) & 1;
	}

	const N = 31;
	const FULL = 2**N;
	const HALF = FULL >>> 1;
	const QRTR = HALF >> 1;
	const MASK = FULL - 1;

	// fill register
	let register = 0;
	for (let i = 0; i < N; i++) register = (register << 1) | read_bit();

	let symbols = [];
	let low = 0;
	let range = FULL; // treat like a float
	while (true) {
		let value = Math.floor((((register - low + 1) * total) - 1) / range);
		let start = 0;
		let end = symbol_count;
		while (end - start > 1) { // binary search
			let mid = (start + end) >>> 1;
			if (value < acc[mid]) {
				end = mid;
			} else {
				start = mid;
			}
		}
		if (start == 0) break; // first symbol is end mark
		symbols.push(start);
		let a = low + Math.floor(range * acc[start]   / total);
		let b = low + Math.floor(range * acc[start+1] / total) - 1;
		while (((a ^ b) & HALF) == 0) {
			register = (register << 1) & MASK | read_bit();
			a = (a << 1) & MASK;
			b = (b << 1) & MASK | 1;
		}
		while (a & ~b & QRTR) {
			register = (register & HALF) | ((register << 1) & (MASK >>> 1)) | read_bit();
			a = (a << 1) ^ HALF;
			b = ((b ^ HALF) << 1) | HALF | 1;
		}
		low = a;
		range = 1 + b - a;
	}
	let offset = symbol_count - 4;
	return symbols.map(x => { // index into payload
		switch (x - offset) {
			case 3: return offset + 0x10100 + ((bytes[pos_payload++] << 16) | (bytes[pos_payload++] << 8) | bytes[pos_payload++]);
			case 2: return offset + 0x100 + ((bytes[pos_payload++] << 8) | bytes[pos_payload++]);
			case 1: return offset + bytes[pos_payload++];
			default: return x - 1;
		}
	});
}	

// returns an iterator which returns the next symbol
function read_payload(v) {
	let pos = 0;
	return () => v[pos++];
}
function read_compressed_payload(s) {
	return read_payload(decode_arithmetic(unsafe_atob(s)));
}

// unsafe in the sense:
// expected well-formed Base64 w/o padding 
// 20220922: added for https://github.com/adraffy/ens-normalize.js/issues/4
function unsafe_atob(s) {
	let lookup = [];
	[...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'].forEach((c, i) => lookup[c.charCodeAt(0)] = i);
	let n = s.length;
	let ret = new Uint8Array((6 * n) >> 3);
	for (let i = 0, pos = 0, width = 0, carry = 0; i < n; i++) {
		carry = (carry << 6) | lookup[s.charCodeAt(i)];
		width += 6;
		if (width >= 8) {
			ret[pos++] = (carry >> (width -= 8));
		}
	}
	return ret;
}

// eg. [0,1,2,3...] => [0,-1,1,-2,...]
function signed(i) { 
	return (i & 1) ? (~i >> 1) : (i >> 1);
}

function read_deltas(n, next) {
	let v = Array(n);
	for (let i = 0, x = 0; i < n; i++) v[i] = x += signed(next());
	return v;
}

// [123][5] => [0 3] [1 1] [0 0]
function read_sorted(next, prev = 0) {
	let ret = [];
	while (true) {
		let x = next();
		let n = next();
		if (!n) break;
		prev += x;
		for (let i = 0; i < n; i++) {
			ret.push(prev + i);
		}
		prev += n + 1;
	}
	return ret;
}

function read_sorted_arrays(next) {
	return read_array_while(() => { 
		let v = read_sorted(next);
		if (v.length) return v;
	});
}

// returns map of x => ys
function read_mapped(next) {
	let ret = [];
	while (true) {
		let w = next();
		if (w == 0) break;
		ret.push(read_linear_table(w, next));
	}
	while (true) {
		let w = next() - 1;
		if (w < 0) break;
		ret.push(read_replacement_table(w, next));
	}
	return ret.flat();
}

// read until next is falsy
// return array of read values
function read_array_while(next) {
	let v = [];
	while (true) {
		let x = next(v.length);
		if (!x) break;
		v.push(x);
	}
	return v;
}

// read w columns of length n
// return as n rows of length w
function read_transposed(n, w, next) {
	let m = Array(n).fill().map(() => []);
	for (let i = 0; i < w; i++) {
		read_deltas(n, next).forEach((x, j) => m[j].push(x));
	}
	return m;
}
 
// returns [[x, ys], [x+dx, ys+dy], [x+2*dx, ys+2*dy], ...]
// where dx/dy = steps, n = run size, w = length of y
function read_linear_table(w, next) {
	let dx = 1 + next();
	let dy = next();
	let vN = read_array_while(next);
	let m = read_transposed(vN.length, 1+w, next);
	return m.flatMap((v, i) => {
		let [x, ...ys] = v;
		return Array(vN[i]).fill().map((_, j) => {
			let j_dy = j * dy;
			return [x + j * dx, ys.map(y => y + j_dy)];
		});
	});
}

// return [[x, ys...], ...]
// where w = length of y
function read_replacement_table(w, next) { 
	let n = 1 + next();
	let m = read_transposed(n, 1+w, next);
	return m.map(v => [v[0], v.slice(1)]);
}


function read_trie(next) {
	let ret = [];
	let sorted = read_sorted(next); 
	expand(decode([]), []);
	return ret; // not sorted
	function decode(Q) { // characters that lead into this node
		let S = next(); // state: valid, save, check
		let B = read_array_while(() => { // buckets leading to new nodes
			let cps = read_sorted(next).map(i => sorted[i]);
			if (cps.length) return decode(cps);
		});
		return {S, B, Q};
	}
	function expand({S, B}, cps, saved) {
		if (S & 4 && saved === cps[cps.length-1]) return;
		if (S & 2) saved = cps[cps.length-1];
		if (S & 1) ret.push(cps); 
		for (let br of B) {
			for (let cp of br.Q) {
				expand(br, [...cps, cp], saved);
			}
		}
	}
}

function hex_cp(cp) {
	return cp.toString(16).toUpperCase().padStart(2, '0');
}

function quote_cp(cp) {
	return `{${hex_cp(cp)}}`; // raffy convention: like "\u{X}" w/o the "\u"
}

/*
export function explode_cp(s) {
	return [...s].map(c => c.codePointAt(0));
}
*/
function explode_cp(s) { // this is about 2x faster
	let cps = [];
	for (let pos = 0, len = s.length; pos < len; ) {
		let cp = s.codePointAt(pos);
		pos += cp < 0x10000 ? 1 : 2;
		cps.push(cp);
	}
	return cps;
}

function str_from_cps(cps) {
	const chunk = 4096;
	let len = cps.length;
	if (len < chunk) return String.fromCodePoint(...cps);
	let buf = [];
	for (let i = 0; i < len; ) {
		buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
	}
	return buf.join('');
}

function compare_arrays(a, b) {
	let n = a.length;
	let c = n - b.length;
	for (let i = 0; c == 0 && i < n; i++) c = a[i] - b[i];
	return c;
}

// created 2023-09-12T22:05:14.211Z
// compressed base64-encoded blob for include-nf data
// source: https://github.com/adraffy/ens-normalize.js/blob/main/src/make.js
// see: https://github.com/adraffy/ens-normalize.js#security
// SHA-256: a974b6f8541fc29d919bc85118af0a44015851fab5343f8679cb31be2bdb209e
var COMPRESSED = 'AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g';

// https://unicode.org/reports/tr15/
// for reference implementation
// see: /derive/nf.js


// algorithmic hangul
// https://www.unicode.org/versions/Unicode15.0.0/ch03.pdf (page 144)
const S0 = 0xAC00;
const L0 = 0x1100;
const V0 = 0x1161;
const T0 = 0x11A7;
const L_COUNT = 19;
const V_COUNT = 21;
const T_COUNT = 28;
const N_COUNT = V_COUNT * T_COUNT;
const S_COUNT = L_COUNT * N_COUNT;
const S1 = S0 + S_COUNT;
const L1 = L0 + L_COUNT;
const V1 = V0 + V_COUNT;
const T1 = T0 + T_COUNT;

function unpack_cc(packed) {
	return (packed >> 24) & 0xFF;
}
function unpack_cp(packed) {
	return packed & 0xFFFFFF;
}

let SHIFTED_RANK, EXCLUSIONS, DECOMP, RECOMP;

function init$1() {
	//console.time('nf');
	let r = read_compressed_payload(COMPRESSED);
	SHIFTED_RANK = new Map(read_sorted_arrays(r).flatMap((v, i) => v.map(x => [x, (i+1) << 24]))); // pre-shifted
	EXCLUSIONS = new Set(read_sorted(r));
	DECOMP = new Map();
	RECOMP = new Map();
	for (let [cp, cps] of read_mapped(r)) {
		if (!EXCLUSIONS.has(cp) && cps.length == 2) {
			let [a, b] = cps;
			let bucket = RECOMP.get(a);
			if (!bucket) {
				bucket = new Map();
				RECOMP.set(a, bucket);
			}
			bucket.set(b, cp);
		}
		DECOMP.set(cp, cps.reverse()); // stored reversed
	}
	//console.timeEnd('nf');
	// 20230905: 11ms
}

function is_hangul(cp) {
	return cp >= S0 && cp < S1;
}

function compose_pair(a, b) {
	if (a >= L0 && a < L1 && b >= V0 && b < V1) {
		return S0 + (a - L0) * N_COUNT + (b - V0) * T_COUNT;
	} else if (is_hangul(a) && b > T0 && b < T1 && (a - S0) % T_COUNT == 0) {
		return a + (b - T0);
	} else {
		let recomp = RECOMP.get(a);
		if (recomp) {
			recomp = recomp.get(b);
			if (recomp) {
				return recomp;
			}
		}
		return -1;
	}
}

function decomposed(cps) {
	if (!SHIFTED_RANK) init$1();
	let ret = [];
	let buf = [];
	let check_order = false;
	function add(cp) {
		let cc = SHIFTED_RANK.get(cp);
		if (cc) {
			check_order = true;
			cp |= cc;
		}
		ret.push(cp);
	}
	for (let cp of cps) {
		while (true) {
			if (cp < 0x80) {
				ret.push(cp);
			} else if (is_hangul(cp)) {
				let s_index = cp - S0;
				let l_index = s_index / N_COUNT | 0;
				let v_index = (s_index % N_COUNT) / T_COUNT | 0;
				let t_index = s_index % T_COUNT;
				add(L0 + l_index);
				add(V0 + v_index);
				if (t_index > 0) add(T0 + t_index);
			} else {
				let mapped = DECOMP.get(cp);
				if (mapped) {
					buf.push(...mapped);
				} else {
					add(cp);
				}
			}
			if (!buf.length) break;
			cp = buf.pop();
		}
	}
	if (check_order && ret.length > 1) {
		let prev_cc = unpack_cc(ret[0]);
		for (let i = 1; i < ret.length; i++) {
			let cc = unpack_cc(ret[i]);
			if (cc == 0 || prev_cc <= cc) {
				prev_cc = cc;
				continue;
			}
			let j = i-1;
			while (true) {
				let tmp = ret[j+1];
				ret[j+1] = ret[j];
				ret[j] = tmp;
				if (!j) break;
				prev_cc = unpack_cc(ret[--j]);
				if (prev_cc <= cc) break;
			}
			prev_cc = unpack_cc(ret[i]);
		}
	}
	return ret;
}

function composed_from_decomposed(v) {
	let ret = [];
	let stack = [];
	let prev_cp = -1;
	let prev_cc = 0;
	for (let packed of v) {
		let cc = unpack_cc(packed);
		let cp = unpack_cp(packed);
		if (prev_cp == -1) {
			if (cc == 0) {
				prev_cp = cp;
			} else {
				ret.push(cp);
			}
		} else if (prev_cc > 0 && prev_cc >= cc) {
			if (cc == 0) {
				ret.push(prev_cp, ...stack);
				stack.length = 0;
				prev_cp = cp;
			} else {
				stack.push(cp);
			}
			prev_cc = cc;
		} else {
			let composed = compose_pair(prev_cp, cp);
			if (composed >= 0) {
				prev_cp = composed;
			} else if (prev_cc == 0 && cc == 0) {
				ret.push(prev_cp);
				prev_cp = cp;
			} else {
				stack.push(cp);
				prev_cc = cc;
			}
		}
	}
	if (prev_cp >= 0) {
		ret.push(prev_cp, ...stack);	
	}
	return ret;
}

// note: cps can be iterable
function nfd(cps) {
	return decomposed(cps).map(unpack_cp);
}
function nfc(cps) {
	return composed_from_decomposed(decomposed(cps));
}

const HYPHEN = 0x2D;
const STOP = 0x2E;
const STOP_CH = '.';
const FE0F = 0xFE0F;
const UNIQUE_PH = 1;

// 20230913: replace [...v] with Array_from(v) to avoid large spreads
const Array_from = x => Array.from(x); // Array.from.bind(Array);

function group_has_cp(g, cp) {
	// 20230913: keep primary and secondary distinct instead of creating valid union
	return g.P.has(cp) || g.Q.has(cp);
}

class Emoji extends Array {
	get is_emoji() { return true; } // free tagging system
}

let MAPPED, IGNORED, CM, NSM, ESCAPE, NFC_CHECK, GROUPS, WHOLE_VALID, WHOLE_MAP, VALID, EMOJI_LIST, EMOJI_ROOT;

function init() {
	if (MAPPED) return;
	
	let r = read_compressed_payload(COMPRESSED$1);
	const read_sorted_array = () => read_sorted(r);
	const read_sorted_set = () => new Set(read_sorted_array());

	MAPPED = new Map(read_mapped(r)); 
	IGNORED = read_sorted_set(); // ignored characters are not valid, so just read raw codepoints

	/*
	// direct include from payload is smaller than the decompression code
	const FENCED = new Map(read_array_while(() => {
		let cp = r();
		if (cp) return [cp, read_str(r())];
	}));
	*/
	// 20230217: we still need all CM for proper error formatting
	// but norm only needs NSM subset that are potentially-valid
	CM = read_sorted_array();
	NSM = new Set(read_sorted_array().map(i => CM[i]));
	CM = new Set(CM);
	
	ESCAPE = read_sorted_set(); // characters that should not be printed
	NFC_CHECK = read_sorted_set(); // only needed to illustrate ens_tokenize() transformations

	let chunks = read_sorted_arrays(r);
	let unrestricted = r();
	const read_chunked = () => new Set(read_sorted_array().flatMap(i => chunks[i]).concat(read_sorted_array()));
	GROUPS = read_array_while(i => {
		// minifier property mangling seems unsafe
		// so these are manually renamed to single chars
		let N = read_array_while(r).map(x => x+0x60);
		if (N.length) {
			let R = i >= unrestricted; // first arent restricted
			N[0] -= 32; // capitalize
			N = str_from_cps(N);
			if (R) N=`Restricted[${N}]`;
			let P = read_chunked(); // primary
			let Q = read_chunked(); // secondary
			let M = !r(); // not-whitelisted, check for NSM
			// *** this code currently isn't needed ***
			/*
			let V = [...P, ...Q].sort((a, b) => a-b); // derive: sorted valid
			let M = r()-1; // number of combining mark
			if (M < 0) { // whitelisted
				M = new Map(read_array_while(() => {
					let i = r();
					if (i) return [V[i-1], read_array_while(() => {
						let v = read_array_while(r);
						if (v.length) return v.map(x => x-1);
					})];
				}));
			}*/
			return {N, P, Q, M, R};
		}
	});

	// decode compressed wholes
	WHOLE_VALID = read_sorted_set();
	WHOLE_MAP = new Map();
	let wholes = read_sorted_array().concat(Array_from(WHOLE_VALID)).sort((a, b) => a-b); // must be sorted
	wholes.forEach((cp, i) => {
		let d = r(); 
		let w = wholes[i] = d ? wholes[i-d] : {V: [], M: new Map()};
		w.V.push(cp); // add to member set
		if (!WHOLE_VALID.has(cp)) {
			WHOLE_MAP.set(cp, w);  // register with whole map
		}
	});

	// compute confusable-extent complements
	for (let {V, M} of new Set(WHOLE_MAP.values())) {
		// connect all groups that have each whole character
		let recs = [];
		for (let cp of V) {
			let gs = GROUPS.filter(g => group_has_cp(g, cp));
			let rec = recs.find(({G}) => gs.some(g => G.has(g)));
			if (!rec) {
				rec = {G: new Set(), V: []};
				recs.push(rec);
			}
			rec.V.push(cp);
			gs.forEach(g => rec.G.add(g));
		}
		// per character cache groups which are not a member of the extent
		let union = recs.flatMap(x => Array_from(x.G));
		for (let {G, V} of recs) {
			let complement = new Set(union.filter(g => !G.has(g)));
			for (let cp of V) {
				M.set(cp, complement);
			}
		}
	}

	// compute valid set
	let union = new Set(); // exists in 1+ groups
	let multi = new Set(); // exists in 2+ groups
	const add_to_union = cp => union.has(cp) ? multi.add(cp) : union.add(cp);
	for (let g of GROUPS) {
		for (let cp of g.P) add_to_union(cp);
		for (let cp of g.Q) add_to_union(cp);
	}
	// dual purpose WHOLE_MAP: return placeholder if unique non-confusable
	for (let cp of union) {
		if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
			WHOLE_MAP.set(cp, UNIQUE_PH);
		}
	}
	VALID = new Set(Array_from(union).concat(Array_from(nfd(union)))); // possibly valid

	// decode emoji
	// 20230719: emoji are now fully-expanded to avoid quirk logic 
	EMOJI_LIST = read_trie(r).map(v => Emoji.from(v)).sort(compare_arrays);
	EMOJI_ROOT = new Map(); // this has approx 7K nodes (2+ per emoji)
	for (let cps of EMOJI_LIST) {
		// 20230719: change to *slightly* stricter algorithm which disallows 
		// insertion of misplaced FE0F in emoji sequences (matching ENSIP-15)
		// example: beautified [A B] (eg. flag emoji) 
		//  before: allow: [A FE0F B], error: [A FE0F FE0F B] 
		//   after: error: both
		// note: this code now matches ENSNormalize.{cs,java} logic
		let prev = [EMOJI_ROOT];
		for (let cp of cps) {
			let next = prev.map(node => {
				let child = node.get(cp);
				if (!child) {
					// should this be object? 
					// (most have 1-2 items, few have many)
					// 20230719: no, v8 default map is 4?
					child = new Map();
					node.set(cp, child);
				}
				return child;
			});
			if (cp === FE0F) {
				prev.push(...next); // less than 20 elements
			} else {
				prev = next;
			}
		}
		for (let x of prev) {
			x.V = cps;
		}
	}
}

// if escaped: {HEX}
//       else: "x" {HEX}
function quoted_cp(cp) {
	return (should_escape(cp) ? '' : `${bidi_qq(safe_str_from_cps([cp]))} `) + quote_cp(cp);
}

// 20230211: some messages can be mixed-directional and result in spillover
// use 200E after a quoted string to force the remainder of a string from 
// acquring the direction of the quote
// https://www.w3.org/International/questions/qa-bidi-unicode-controls#exceptions
function bidi_qq(s) {
	return `"${s}"\u200E`; // strong LTR
}

function check_label_extension(cps) {
	if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
		throw new Error(`invalid label extension: "${str_from_cps(cps.slice(0, 4))}"`);
	}
}
function check_leading_underscore(cps) {
	const UNDERSCORE = 0x5F;
	for (let i = cps.lastIndexOf(UNDERSCORE); i > 0; ) {
		if (cps[--i] !== UNDERSCORE) {
			throw new Error('underscore allowed only at start');
		}
	}
}
// check that a fenced cp is not leading, trailing, or touching another fenced cp
function check_fenced(cps) {
	let cp = cps[0];
	let prev = FENCED.get(cp);
	if (prev) throw error_placement(`leading ${prev}`);
	let n = cps.length;
	let last = -1; // prevents trailing from throwing
	for (let i = 1; i < n; i++) {
		cp = cps[i];
		let match = FENCED.get(cp);
		if (match) {
			// since cps[0] isn't fenced, cps[1] cannot throw
			if (last == i) throw error_placement(`${prev} + ${match}`);
			last = i + 1;
			prev = match;
		}
	}
	if (last == n) throw error_placement(`trailing ${prev}`);
}

// create a safe to print string 
// invisibles are escaped
// leading cm uses placeholder
// quoter(cp) => string, eg. 3000 => "{3000}"
// note: in html, you'd call this function then replace [<>&] with entities
function safe_str_from_cps(cps, quoter = quote_cp) {
	//if (Number.isInteger(cps)) cps = [cps];
	//if (!Array.isArray(cps)) throw new TypeError(`expected codepoints`);
	let buf = [];
	if (is_combining_mark(cps[0])) buf.push('◌');
	let prev = 0;
	let n = cps.length;
	for (let i = 0; i < n; i++) {
		let cp = cps[i];
		if (should_escape(cp)) {
			buf.push(str_from_cps(cps.slice(prev, i)));
			buf.push(quoter(cp));
			prev = i + 1;
		}
	}
	buf.push(str_from_cps(cps.slice(prev, n)));
	return buf.join('');
}

// note: set(s) cannot be exposed because they can be modified
// note: Object.freeze() doesn't work
function is_combining_mark(cp) {
	init();
	return CM.has(cp);
}
function should_escape(cp) {
	init();
	return ESCAPE.has(cp);
}

// return all supported emoji as fully-qualified emoji 
// ordered by length then lexicographic 
function ens_emoji() {
	init();
	return EMOJI_LIST.map(x => x.slice()); // emoji are exposed so copy
}

function ens_normalize_fragment(frag, decompose) {
	init();
	let nf = decompose ? nfd : nfc;
	return frag.split(STOP_CH).map(label => str_from_cps(tokens_from_str(explode_cp(label), nf, filter_fe0f).flat())).join(STOP_CH);
}

function ens_normalize(name) {
	return flatten(split(name, nfc, filter_fe0f));
}

function ens_beautify(name) {
	let labels = split(name, nfc, x => x); // emoji not exposed
	for (let {type, output, error} of labels) {
		if (error) break; // flatten will throw

		// replace leading/trailing hyphen
		// 20230121: consider beautifing all or leading/trailing hyphen to unicode variant
		// not exactly the same in every font, but very similar: "-" vs "‐"
		/*
		const UNICODE_HYPHEN = 0x2010;
		// maybe this should replace all for visual consistancy?
		// `node tools/reg-count.js regex ^-\{2,\}` => 592
		//for (let i = 0; i < output.length; i++) if (output[i] == 0x2D) output[i] = 0x2010;
		if (output[0] == HYPHEN) output[0] = UNICODE_HYPHEN;
		let end = output.length-1;
		if (output[end] == HYPHEN) output[end] = UNICODE_HYPHEN;
		*/
		// 20230123: WHATWG URL uses "CheckHyphens" false
		// https://url.spec.whatwg.org/#idna

		// update ethereum symbol
		// ξ => Ξ if not greek
		if (type !== 'Greek') { 
			let prev = 0;
			while (true) {
				let next = output.indexOf(0x3BE, prev);
				if (next < 0) break;
				output[next] = 0x39E; 
				prev = next + 1;
			}
		}

		// 20221213: fixes bidi subdomain issue, but breaks invariant (200E is disallowed)
		// could be fixed with special case for: 2D (.) + 200E (LTR)
		// https://discuss.ens.domains/t/bidi-label-ordering-spoof/15824
		//output.splice(0, 0, 0x200E);
	}
	return flatten(labels);
}

function ens_split(name, preserve_emoji) {
	return split(name, nfc, preserve_emoji ? x => x.slice() : filter_fe0f); // emoji are exposed so copy
}

function split(name, nf, ef) {
	if (!name) return []; // 20230719: empty name allowance
	init();
	let offset = 0;
	// https://unicode.org/reports/tr46/#Validity_Criteria
	// 4.) "The label must not contain a U+002E ( . ) FULL STOP."
	return name.split(STOP_CH).map(label => {
		let input = explode_cp(label);
		let info = {
			input,
			offset, // codepoint, not substring!
		};
		offset += input.length + 1; // + stop
		try {
			// 1.) "The label must be in Unicode Normalization Form NFC"
			let tokens = info.tokens = tokens_from_str(input, nf, ef);
			let token_count = tokens.length;
			let type;
			if (!token_count) { // the label was effectively empty (could of had ignored characters)
				//norm = [];
				//type = 'None'; // use this instead of next match, "ASCII"
				// 20230120: change to strict
				// https://discuss.ens.domains/t/ens-name-normalization-2nd/14564/59
				throw new Error(`empty label`);
			} 
			let norm = info.output = tokens.flat();
			check_leading_underscore(norm);
			let emoji = info.emoji = token_count > 1 || tokens[0].is_emoji; // same as: tokens.some(x => x.is_emoji);
			if (!emoji && norm.every(cp => cp < 0x80)) { // special case for ascii
				// 20230123: matches matches WHATWG, see note 3.3
				check_label_extension(norm); // only needed for ascii
				// cant have fenced
				// cant have cm
				// cant have wholes
				// see derive: "Fastpath ASCII"
				type = 'ASCII';
			} else {
				let chars = tokens.flatMap(x => x.is_emoji ? [] : x); // all of the nfc tokens concat together
				if (!chars.length) { // theres no text, just emoji
					type = 'Emoji';
				} else {
					// 5.) "The label must not begin with a combining mark, that is: General_Category=Mark."
					if (CM.has(norm[0])) throw error_placement('leading combining mark');
					for (let i = 1; i < token_count; i++) { // we've already checked the first token
						let cps = tokens[i];
						if (!cps.is_emoji && CM.has(cps[0])) { // every text token has emoji neighbors, eg. EtEEEtEt...
							// bidi_qq() not needed since emoji is LTR and cps is a CM
							throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i-1])} + ${safe_str_from_cps([cps[0]])}"`); 
						}
					}
					check_fenced(norm);
					let unique = Array_from(new Set(chars));
					let [g] = determine_group(unique); // take the first match
					// see derive: "Matching Groups have Same CM Style"
					// alternative: could form a hybrid type: Latin/Japanese/...	
					check_group(g, chars); // need text in order
					check_whole(g, unique); // only need unique text (order would be required for multiple-char confusables)
					type = g.N;
					// 20230121: consider exposing restricted flag
					// it's simpler to just check for 'Restricted'
					// or even better: type.endsWith(']')
					//if (g.R) info.restricted = true;
				}
			}
			info.type = type;
		} catch (err) {
			info.error = err; // use full error object
		}
		return info;
	});
}

function check_whole(group, unique) {
	let maker;
	let shared = [];
	for (let cp of unique) {
		let whole = WHOLE_MAP.get(cp);
		if (whole === UNIQUE_PH) return; // unique, non-confusable
		if (whole) {
			let set = whole.M.get(cp); // groups which have a character that look-like this character
			maker = maker ? maker.filter(g => set.has(g)) : Array_from(set);
			if (!maker.length) return; // confusable intersection is empty
		} else {
			shared.push(cp); 
		}
	}
	if (maker) {
		// we have 1+ confusable
		// check if any of the remaining groups
		// contain the shared characters too
		for (let g of maker) {
			if (shared.every(cp => group_has_cp(g, cp))) {
				throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
			}
		}
	}
}

// assumption: unique.size > 0
// returns list of matching groups
function determine_group(unique) {
	let groups = GROUPS;
	for (let cp of unique) {
		// note: we need to dodge CM that are whitelisted
		// but that code isn't currently necessary
		let gs = groups.filter(g => group_has_cp(g, cp));
		if (!gs.length) {
			if (!GROUPS.some(g => group_has_cp(g, cp))) { 
				// the character was composed of valid parts
				// but it's NFC form is invalid
				// 20230716: change to more exact statement, see: ENSNormalize.{cs,java}
				// note: this doesn't have to be a composition
				// 20230720: change to full check
				throw error_disallowed(cp); // this should be rare
			} else {
				// there is no group that contains all these characters
				// throw using the highest priority group that matched
				// https://www.unicode.org/reports/tr39/#mixed_script_confusables
				throw error_group_member(groups[0], cp);
			}
		}
		groups = gs;
		if (gs.length == 1) break; // there is only one group left
	}
	// there are at least 1 group(s) with all of these characters
	return groups;
}

// throw on first error
function flatten(split) {
	return split.map(({input, error, output}) => {
		if (error) {
			// don't print label again if just a single label
			let msg = error.message;
			// bidi_qq() only necessary if msg is digits
			throw new Error(split.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input))}: ${msg}`); 
		}
		return str_from_cps(output);
	}).join(STOP_CH);
}

function error_disallowed(cp) {
	// TODO: add cp to error?
	return new Error(`disallowed character: ${quoted_cp(cp)}`); 
}
function error_group_member(g, cp) {
	let quoted = quoted_cp(cp);
	let gg = GROUPS.find(g => g.P.has(cp)); // only check primary
	if (gg) {
		quoted = `${gg.N} ${quoted}`;
	}
	return new Error(`illegal mixture: ${g.N} + ${quoted}`);
}
function error_placement(where) {
	return new Error(`illegal placement: ${where}`);
}

// assumption: cps.length > 0
// assumption: cps[0] isn't a CM
// assumption: the previous character isn't an emoji
function check_group(g, cps) {
	for (let cp of cps) {
		if (!group_has_cp(g, cp)) {
			// for whitelisted scripts, this will throw illegal mixture on invalid cm, eg. "e{300}{300}"
			// at the moment, it's unnecessary to introduce an extra error type
			// until there exists a whitelisted multi-character
			//   eg. if (M < 0 && is_combining_mark(cp)) { ... }
			// there are 3 cases:
			//   1. illegal cm for wrong group => mixture error
			//   2. illegal cm for same group => cm error
			//       requires set of whitelist cm per group: 
			//        eg. new Set([...g.P, ...g.Q].flatMap(nfc).filter(cp => CM.has(cp)))
			//   3. wrong group => mixture error
			throw error_group_member(g, cp);
		}
	}
	//if (M >= 0) { // we have a known fixed cm count
	if (g.M) { // we need to check for NSM
		let decomposed = nfd(cps);
		for (let i = 1, e = decomposed.length; i < e; i++) { // see: assumption
			// 20230210: bugfix: using cps instead of decomposed h/t Carbon225
			/*
			if (CM.has(decomposed[i])) {
				let j = i + 1;
				while (j < e && CM.has(decomposed[j])) j++;
				if (j - i > M) {
					throw new Error(`too many combining marks: ${g.N} ${bidi_qq(str_from_cps(decomposed.slice(i-1, j)))} (${j-i}/${M})`);
				}
				i = j;
			}
			*/
			// 20230217: switch to NSM counting
			// https://www.unicode.org/reports/tr39/#Optional_Detection
			if (NSM.has(decomposed[i])) {
				let j = i + 1;
				for (let cp; j < e && NSM.has(cp = decomposed[j]); j++) {
					// a. Forbid sequences of the same nonspacing mark.
					for (let k = i; k < j; k++) { // O(n^2) but n < 100
						if (decomposed[k] == cp) {
							throw new Error(`duplicate non-spacing marks: ${quoted_cp(cp)}`);
						}
					}
				}
				// parse to end so we have full nsm count
				// b. Forbid sequences of more than 4 nonspacing marks (gc=Mn or gc=Me).
				if (j - i > NSM_MAX) {
					// note: this slice starts with a base char or spacing-mark cm
					throw new Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(decomposed.slice(i-1, j)))} (${j-i}/${NSM_MAX})`);
				}
				i = j;
			}
		}
	}
	// *** this code currently isn't needed ***
	/*
	let cm_whitelist = M instanceof Map;
	for (let i = 0, e = cps.length; i < e; ) {
		let cp = cps[i++];
		let seqs = cm_whitelist && M.get(cp);
		if (seqs) { 
			// list of codepoints that can follow
			// if this exists, this will always be 1+
			let j = i;
			while (j < e && CM.has(cps[j])) j++;
			let cms = cps.slice(i, j);
			let match = seqs.find(seq => !compare_arrays(seq, cms));
			if (!match) throw new Error(`disallowed combining mark sequence: "${safe_str_from_cps([cp, ...cms])}"`);
			i = j;
		} else if (!V.has(cp)) {
			// https://www.unicode.org/reports/tr39/#mixed_script_confusables
			let quoted = quoted_cp(cp);
			for (let cp of cps) {
				let u = UNIQUE.get(cp);
				if (u && u !== g) {
					// if both scripts are restricted this error is confusing
					// because we don't differentiate RestrictedA from RestrictedB 
					if (!u.R) quoted = `${quoted} is ${u.N}`;
					break;
				}
			}
			throw new Error(`disallowed ${g.N} character: ${quoted}`);
			//throw new Error(`disallowed character: ${quoted} (expected ${g.N})`);
			//throw new Error(`${g.N} does not allow: ${quoted}`);
		}
	}
	if (!cm_whitelist) {
		let decomposed = nfd(cps);
		for (let i = 1, e = decomposed.length; i < e; i++) { // we know it can't be cm leading
			if (CM.has(decomposed[i])) {
				let j = i + 1;
				while (j < e && CM.has(decomposed[j])) j++;
				if (j - i > M) {
					throw new Error(`too many combining marks: "${str_from_cps(decomposed.slice(i-1, j))}" (${j-i}/${M})`);
				}
				i = j;
			}
		}
	}
	*/
}

// given a list of codepoints
// returns a list of lists, where emoji are a fully-qualified (as Array subclass)
// eg. explode_cp("abc💩d") => [[61, 62, 63], Emoji[1F4A9, FE0F], [64]]
// 20230818: rename for 'process' name collision h/t Javarome
// https://github.com/adraffy/ens-normalize.js/issues/23
function tokens_from_str(input, nf, ef) {
	let ret = [];
	let chars = [];
	input = input.slice().reverse(); // flip so we can pop
	while (input.length) {
		let emoji = consume_emoji_reversed(input);
		if (emoji) {
			if (chars.length) {
				ret.push(nf(chars));
				chars = [];
			}
			ret.push(ef(emoji));
		} else {
			let cp = input.pop();
			if (VALID.has(cp)) {
				chars.push(cp);
			} else {
				let cps = MAPPED.get(cp);
				if (cps) {
					chars.push(...cps); // less than 10 elements
				} else if (!IGNORED.has(cp)) {
					// 20230912: unicode 15.1 changed the order of processing such that
					// disallowed parts are only rejected after NFC
					// https://unicode.org/reports/tr46/#Validity_Criteria
					// this doesn't impact normalization as of today
					// technically, this error can be removed as the group logic will apply similar logic
					// however the error type might be less clear
					throw error_disallowed(cp);
				}
			}
		}
	}
	if (chars.length) {
		ret.push(nf(chars));
	}
	return ret;
}

function filter_fe0f(cps) {
	return cps.filter(cp => cp != FE0F);
}

// given array of codepoints
// returns the longest valid emoji sequence (or undefined if no match)
// *MUTATES* the supplied array
// disallows interleaved ignored characters
// fills (optional) eaten array with matched codepoints
function consume_emoji_reversed(cps, eaten) {
	let node = EMOJI_ROOT;
	let emoji;
	let pos = cps.length;
	while (pos) {
		node = node.get(cps[--pos]);
		if (!node) break;
		let {V} = node;
		if (V) { // this is a valid emoji (so far)
			emoji = V;
			if (eaten) eaten.push(...cps.slice(pos).reverse()); // (optional) copy input, used for ens_tokenize()
			cps.length = pos; // truncate
		}
	}
	return emoji;
}

// ************************************************************
// tokenizer 

const TY_VALID = 'valid';
const TY_MAPPED = 'mapped';
const TY_IGNORED = 'ignored';
const TY_DISALLOWED = 'disallowed';
const TY_EMOJI = 'emoji';
const TY_NFC = 'nfc';
const TY_STOP = 'stop';

function ens_tokenize(name, {
	nf = true, // collapse unnormalized runs into a single token
} = {}) {
	init();
	let input = explode_cp(name).reverse();
	let eaten = [];
	let tokens = [];
	while (input.length) {
		let emoji = consume_emoji_reversed(input, eaten);
		if (emoji) {
			tokens.push({
				type: TY_EMOJI,
				emoji: emoji.slice(), // copy emoji
				input: eaten,
				cps: filter_fe0f(emoji)
			});
			eaten = []; // reset buffer
		} else {
			let cp = input.pop();
			if (cp == STOP) {
				tokens.push({type: TY_STOP, cp});
			} else if (VALID.has(cp)) {
				tokens.push({type: TY_VALID, cps: [cp]});
			} else if (IGNORED.has(cp)) {
				tokens.push({type: TY_IGNORED, cp});
			} else {
				let cps = MAPPED.get(cp);
				if (cps) {
					tokens.push({type: TY_MAPPED, cp, cps: cps.slice()});
				} else {
					tokens.push({type: TY_DISALLOWED, cp});
				}
			}
		}
	}
	if (nf) {
		for (let i = 0, start = -1; i < tokens.length; i++) {
			let token = tokens[i];
			if (is_valid_or_mapped(token.type)) {
				if (requires_check(token.cps)) { // normalization might be needed
					let end = i + 1;
					for (let pos = end; pos < tokens.length; pos++) { // find adjacent text
						let {type, cps} = tokens[pos];
						if (is_valid_or_mapped(type)) {
							if (!requires_check(cps)) break;
							end = pos + 1;
						} else if (type !== TY_IGNORED) { // || type !== TY_DISALLOWED) { 
							break;
						}
					}
					if (start < 0) start = i;
					let slice = tokens.slice(start, end);
					let cps0 = slice.flatMap(x => is_valid_or_mapped(x.type) ? x.cps : []); // strip junk tokens
					let cps = nfc(cps0);
					if (compare_arrays(cps, cps0)) { // bundle into an nfc token
						tokens.splice(start, end - start, {
							type: TY_NFC, 
							input: cps0, // there are 3 states: tokens0 ==(process)=> input ==(nfc)=> tokens/cps
							cps, 
							tokens0: collapse_valid_tokens(slice),
							tokens: ens_tokenize(str_from_cps(cps), {nf: false})
						});
						i = start;
					} else { 
						i = end - 1; // skip to end of slice
					}
					start = -1; // reset
				} else {
					start = i; // remember last
				}
			} else if (token.type !== TY_IGNORED) { // 20221024: is this correct?
				start = -1; // reset
			}
		}
	}
	return collapse_valid_tokens(tokens);
}

function is_valid_or_mapped(type) {
	return type == TY_VALID || type == TY_MAPPED;
}

function requires_check(cps) {
	return cps.some(cp => NFC_CHECK.has(cp));
}

function collapse_valid_tokens(tokens) {
	for (let i = 0; i < tokens.length; i++) {
		if (tokens[i].type == TY_VALID) {
			let j = i + 1;
			while (j < tokens.length && tokens[j].type == TY_VALID) j++;
			tokens.splice(i, j - i, {type: TY_VALID, cps: tokens.slice(i, j).flatMap(x => x.cps)});
		}
	}
	return tokens;
}




/***/ }),

/***/ 827:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ createCurve)
/* harmony export */ });
/* unused harmony export getHash */
/* harmony import */ var _noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3344);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1750);
/* harmony import */ var _abstract_weierstrass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9918);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */



// connects noble-curves to noble-hashes
function getHash(hash) {
    return {
        hash,
        hmac: (key, ...msgs) => (0,_noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_0__/* .hmac */ .w)(hash, key, (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__/* .concatBytes */ .Id)(...msgs)),
        randomBytes: _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__/* .randomBytes */ .po,
    };
}
function createCurve(curveDef, defHash) {
    const create = (hash) => (0,_abstract_weierstrass_js__WEBPACK_IMPORTED_MODULE_2__/* .weierstrass */ .x3)({ ...curveDef, ...getHash(hash) });
    return Object.freeze({ ...create(defHash), create });
}
//# sourceMappingURL=_shortw_utils.js.map

/***/ }),

/***/ 4141:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ wNAF),
/* harmony export */   h: () => (/* binding */ validateBasic)
/* harmony export */ });
/* harmony import */ var _modular_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2944);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6667);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Abelian group utilities


const _0n = BigInt(0);
const _1n = BigInt(1);
// Elliptic curve multiplication of Point by scalar. Fragile.
// Scalars should always be less than curve order: this should be checked inside of a curve itself.
// Creates precomputation tables for fast multiplication:
// - private scalar is split by fixed size windows of W bits
// - every window point is collected from window's table & added to accumulator
// - since windows are different, same point inside tables won't be accessed more than once per calc
// - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
// - +1 window is neccessary for wNAF
// - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
// TODO: Research returning 2d JS array of windows, instead of a single window. This would allow
// windows to be in different memory locations
function wNAF(c, bits) {
    const constTimeNegate = (condition, item) => {
        const neg = item.negate();
        return condition ? neg : item;
    };
    const opts = (W) => {
        const windows = Math.ceil(bits / W) + 1; // +1, because
        const windowSize = 2 ** (W - 1); // -1 because we skip zero
        return { windows, windowSize };
    };
    return {
        constTimeNegate,
        // non-const time multiplication ladder
        unsafeLadder(elm, n) {
            let p = c.ZERO;
            let d = elm;
            while (n > _0n) {
                if (n & _1n)
                    p = p.add(d);
                d = d.double();
                n >>= _1n;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */
        precomputeWindow(elm, W) {
            const { windows, windowSize } = opts(W);
            const points = [];
            let p = elm;
            let base = p;
            for (let window = 0; window < windows; window++) {
                base = p;
                points.push(base);
                // =1, because we skip zero
                for (let i = 1; i < windowSize; i++) {
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */
        wNAF(W, precomputes, n) {
            // TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
            // But need to carefully remove other checks before wNAF. ORDER == bits here
            const { windows, windowSize } = opts(W);
            let p = c.ZERO;
            let f = c.BASE;
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for (let window = 0; window < windows; window++) {
                const offset = window * windowSize;
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += _1n;
                }
                // This code was first written with assumption that 'f' and 'p' will never be infinity point:
                // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
                // there is negate now: it is possible that negated element from low value
                // would be the same as high element, which will create carry into next window.
                // It's not obvious how this can fail, but still worth investigating later.
                // Check if we're onto Zero point.
                // Add random point inside current window to f.
                const offset1 = offset;
                const offset2 = offset + Math.abs(wbits) - 1; // -1 because we skip zero
                const cond1 = window % 2 !== 0;
                const cond2 = wbits < 0;
                if (wbits === 0) {
                    // The most important part for const-time getPublicKey
                    f = f.add(constTimeNegate(cond1, precomputes[offset1]));
                }
                else {
                    p = p.add(constTimeNegate(cond2, precomputes[offset2]));
                }
            }
            // JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
            // Even if the variable is still unused, there are some checks which will
            // throw an exception, so compiler needs to prove they won't happen, which is hard.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return { p, f };
        },
        wNAFCached(P, precomputesMap, n, transform) {
            // @ts-ignore
            const W = P._WINDOW_SIZE || 1;
            // Calculate precomputes on a first run, reuse them after
            let comp = precomputesMap.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1) {
                    precomputesMap.set(P, transform(comp));
                }
            }
            return this.wNAF(W, comp, n);
        },
    };
}
function validateBasic(curve) {
    (0,_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .validateField */ .jr)(curve.Fp);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .validateObject */ .Q5)(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field',
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger',
    });
    // Set defaults
    return Object.freeze({
        ...(0,_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .nLength */ .LH)(curve.n, curve.nBitLength),
        ...curve,
        ...{ p: curve.Fp.ORDER },
    });
}
//# sourceMappingURL=curve.js.map

/***/ }),

/***/ 2944:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B8: () => (/* binding */ invert),
/* harmony export */   D0: () => (/* binding */ Field),
/* harmony export */   LH: () => (/* binding */ nLength),
/* harmony export */   Tp: () => (/* binding */ getMinHashLength),
/* harmony export */   jr: () => (/* binding */ validateField),
/* harmony export */   qy: () => (/* binding */ mapHashToField),
/* harmony export */   zH: () => (/* binding */ pow2),
/* harmony export */   zi: () => (/* binding */ mod)
/* harmony export */ });
/* unused harmony exports pow, tonelliShanks, FpSqrt, isNegativeLE, FpPow, FpInvertBatch, FpDiv, FpIsSquare, FpSqrtOdd, FpSqrtEven, hashToPrivateScalar, getFieldBytesLength */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6667);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Utilities for modular arithmetics and finite fields

// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3);
// prettier-ignore
const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
// prettier-ignore
const _9n = BigInt(9), _16n = BigInt(16);
// Calculates a modulo b
function mod(a, b) {
    const result = a % b;
    return result >= _0n ? result : b + result;
}
/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */
// TODO: use field version && remove
function pow(num, power, modulo) {
    if (modulo <= _0n || power < _0n)
        throw new Error('Expected power/modulo > 0');
    if (modulo === _1n)
        return _0n;
    let res = _1n;
    while (power > _0n) {
        if (power & _1n)
            res = (res * num) % modulo;
        num = (num * num) % modulo;
        power >>= _1n;
    }
    return res;
}
// Does x ^ (2 ^ power) mod p. pow2(30, 4) == 30 ^ (2 ^ 4)
function pow2(x, power, modulo) {
    let res = x;
    while (power-- > _0n) {
        res *= res;
        res %= modulo;
    }
    return res;
}
// Inverses number over modulo
function invert(number, modulo) {
    if (number === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    // Euclidean GCD https://brilliant.org/wiki/extended-euclidean-algorithm/
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while (a !== _0n) {
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        // prettier-ignore
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n)
        throw new Error('invert: does not exist');
    return mod(x, modulo);
}
/**
 * Tonelli-Shanks square root search algorithm.
 * 1. https://eprint.iacr.org/2012/685.pdf (page 12)
 * 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
 * Will start an infinite loop if field order P is not prime.
 * @param P field order
 * @returns function that takes field Fp (created from P) and number n
 */
function tonelliShanks(P) {
    // Legendre constant: used to calculate Legendre symbol (a | p),
    // which denotes the value of a^((p-1)/2) (mod p).
    // (a | p) ≡ 1    if a is a square (mod p)
    // (a | p) ≡ -1   if a is not a square (mod p)
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreC = (P - _1n) / _2n;
    let Q, S, Z;
    // Step 1: By factoring out powers of 2 from p - 1,
    // find q and s such that p - 1 = q*(2^s) with q odd
    for (Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++)
        ;
    // Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
    for (Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++)
        ;
    // Fast-path
    if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
            const root = Fp.pow(n, p1div4);
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Slow-path
    const Q1div2 = (Q + _1n) / _2n;
    return function tonelliSlow(Fp, n) {
        // Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
            throw new Error('Cannot find square root');
        let r = S;
        // TODO: will fail at Fp2/etc
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q); // will update both x and b
        let x = Fp.pow(n, Q1div2); // first guess at the square root
        let b = Fp.pow(n, Q); // first guess at the fudge factor
        while (!Fp.eql(b, Fp.ONE)) {
            if (Fp.eql(b, Fp.ZERO))
                return Fp.ZERO; // https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
            // Find m such b^(2^m)==1
            let m = 1;
            for (let t2 = Fp.sqr(b); m < r; m++) {
                if (Fp.eql(t2, Fp.ONE))
                    break;
                t2 = Fp.sqr(t2); // t2 *= t2
            }
            // NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
            const ge = Fp.pow(g, _1n << BigInt(r - m - 1)); // ge = 2^(r-m-1)
            g = Fp.sqr(ge); // g = ge * ge
            x = Fp.mul(x, ge); // x *= ge
            b = Fp.mul(b, g); // b *= g
            r = m;
        }
        return x;
    };
}
function FpSqrt(P) {
    // NOTE: different algorithms can give different roots, it is up to user to decide which one they want.
    // For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
    // P ≡ 3 (mod 4)
    // √n = n^((P+1)/4)
    if (P % _4n === _3n) {
        // Not all roots possible!
        // const ORDER =
        //   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
        // const NUM = 72057594037927816n;
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
            const root = Fp.pow(n, p1div4);
            // Throw if root**2 != n
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
    if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
            const n2 = Fp.mul(n, _2n);
            const v = Fp.pow(n2, c1);
            const nv = Fp.mul(n, v);
            const i = Fp.mul(Fp.mul(nv, _2n), v);
            const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // P ≡ 9 (mod 16)
    if (P % _16n === _9n) {
        // NOTE: tonelli is too slow for bls-Fp2 calculations even on start
        // Means we cannot use sqrt for constants at all!
        //
        // const c1 = Fp.sqrt(Fp.negate(Fp.ONE)); //  1. c1 = sqrt(-1) in F, i.e., (c1^2) == -1 in F
        // const c2 = Fp.sqrt(c1);                //  2. c2 = sqrt(c1) in F, i.e., (c2^2) == c1 in F
        // const c3 = Fp.sqrt(Fp.negate(c1));     //  3. c3 = sqrt(-c1) in F, i.e., (c3^2) == -c1 in F
        // const c4 = (P + _7n) / _16n;           //  4. c4 = (q + 7) / 16        # Integer arithmetic
        // sqrt = (x) => {
        //   let tv1 = Fp.pow(x, c4);             //  1. tv1 = x^c4
        //   let tv2 = Fp.mul(c1, tv1);           //  2. tv2 = c1 * tv1
        //   const tv3 = Fp.mul(c2, tv1);         //  3. tv3 = c2 * tv1
        //   let tv4 = Fp.mul(c3, tv1);           //  4. tv4 = c3 * tv1
        //   const e1 = Fp.equals(Fp.square(tv2), x); //  5.  e1 = (tv2^2) == x
        //   const e2 = Fp.equals(Fp.square(tv3), x); //  6.  e2 = (tv3^2) == x
        //   tv1 = Fp.cmov(tv1, tv2, e1); //  7. tv1 = CMOV(tv1, tv2, e1)  # Select tv2 if (tv2^2) == x
        //   tv2 = Fp.cmov(tv4, tv3, e2); //  8. tv2 = CMOV(tv4, tv3, e2)  # Select tv3 if (tv3^2) == x
        //   const e3 = Fp.equals(Fp.square(tv2), x); //  9.  e3 = (tv2^2) == x
        //   return Fp.cmov(tv1, tv2, e3); //  10.  z = CMOV(tv1, tv2, e3)  # Select the sqrt from tv1 and tv2
        // }
    }
    // Other cases: Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
// Little-endian check for first LE bit (last BE bit);
const isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n) === _1n;
// prettier-ignore
const FIELD_FIELDS = [
    'create', 'isValid', 'is0', 'neg', 'inv', 'sqrt', 'sqr',
    'eql', 'add', 'sub', 'mul', 'pow', 'div',
    'addN', 'subN', 'mulN', 'sqrN'
];
function validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger',
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = 'function';
        return map;
    }, initial);
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .validateObject */ .Q5)(field, opts);
}
// Generic field functions
/**
 * Same as `pow` but for Fp: non-constant-time.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 */
function FpPow(f, num, power) {
    // Should have same speed as pow for bigints
    // TODO: benchmark!
    if (power < _0n)
        throw new Error('Expected power > 0');
    if (power === _0n)
        return f.ONE;
    if (power === _1n)
        return num;
    let p = f.ONE;
    let d = num;
    while (power > _0n) {
        if (power & _1n)
            p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
    }
    return p;
}
/**
 * Efficiently invert an array of Field elements.
 * `inv(0)` will return `undefined` here: make sure to throw an error.
 */
function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    // Walk from first to last, multiply them by each other MOD p
    const lastMultiplied = nums.reduce((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
    }, f.ONE);
    // Invert last element
    const inverted = f.inv(lastMultiplied);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
    }, inverted);
    return tmp;
}
function FpDiv(f, lhs, rhs) {
    return f.mul(lhs, typeof rhs === 'bigint' ? invert(rhs, f.ORDER) : f.inv(rhs));
}
// This function returns True whenever the value x is a square in the field F.
function FpIsSquare(f) {
    const legendreConst = (f.ORDER - _1n) / _2n; // Integer arithmetic
    return (x) => {
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
    };
}
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
}
/**
 * Initializes a finite field over prime. **Non-primes are not supported.**
 * Do not init in loop: slow. Very fragile: always run a benchmark on a change.
 * Major performance optimizations:
 * * a) denormalized operations like mulN instead of mul
 * * b) same object shape: never add or remove keys
 * * c) Object.freeze
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */
function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= _0n)
        throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048)
        throw new Error('Field lengths over 2048 bytes are not supported');
    const sqrtP = FpSqrt(ORDER);
    const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .bitMask */ .OG)(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num) => mod(num, ORDER),
        isValid: (num) => {
            if (typeof num !== 'bigint')
                throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
            return _0n <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num) => num === _0n,
        isOdd: (num) => (num & _1n) === _1n,
        neg: (num) => mod(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => mod(num * num, ORDER),
        add: (lhs, rhs) => mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c) => (c ? b : a),
        toBytes: (num) => (isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToBytesLE */ .z)(num, BYTES) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToBytesBE */ .lq)(num, BYTES)),
        fromBytes: (bytes) => {
            if (bytes.length !== BYTES)
                throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
            return isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToNumberLE */ .lX)(bytes) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToNumberBE */ .Ph)(bytes);
        },
    });
    return Object.freeze(f);
}
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
/**
 * "Constant-time" private key generation utility.
 * Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
 * Which makes it slightly more biased, less secure.
 * @deprecated use mapKeyToField instead
 */
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = ensureBytes('privateHash', hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
    const num = isLE ? bytesToNumberLE(hash) : bytesToNumberBE(hash);
    return mod(num, groupOrder - _1n) + _1n;
}
/**
 * Returns total number of bytes consumed by the field element.
 * For example, 32 bytes for usual 256-bit weierstrass curve.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of field
 */
function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== 'bigint')
        throw new Error('field order must be bigint');
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
/**
 * Returns minimal amount of bytes that can be safely reduced
 * by field order.
 * Should be 2^-128 for 128-bit curve such as P256.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of target hash
 */
function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
/**
 * "Constant-time" private key generation utility.
 * Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 48 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
 * RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */
function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024)
        throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToNumberBE */ .Ph)(key) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToNumberLE */ .lX)(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = mod(num, fieldOrder - _1n) + _1n;
    return isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToBytesLE */ .z)(reduced, fieldLen) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToBytesBE */ .lq)(reduced, fieldLen);
}
//# sourceMappingURL=modular.js.map

/***/ }),

/***/ 6667:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DO: () => (/* binding */ abytes),
/* harmony export */   Id: () => (/* binding */ concatBytes),
/* harmony export */   My: () => (/* binding */ bytesToHex),
/* harmony export */   OG: () => (/* binding */ bitMask),
/* harmony export */   Ph: () => (/* binding */ bytesToNumberBE),
/* harmony export */   Q5: () => (/* binding */ validateObject),
/* harmony export */   aT: () => (/* binding */ hexToBytes),
/* harmony export */   aY: () => (/* binding */ isBytes),
/* harmony export */   ex: () => (/* binding */ equalBytes),
/* harmony export */   fg: () => (/* binding */ createHmacDrbg),
/* harmony export */   lX: () => (/* binding */ bytesToNumberLE),
/* harmony export */   lq: () => (/* binding */ numberToBytesBE),
/* harmony export */   qj: () => (/* binding */ ensureBytes),
/* harmony export */   z: () => (/* binding */ numberToBytesLE)
/* harmony export */ });
/* unused harmony exports numberToHexUnpadded, hexToNumber, numberToVarBytesBE, utf8ToBytes, bitLen, bitGet, bitSet */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
function isBytes(a) {
    return (a instanceof Uint8Array ||
        (a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array'));
}
function abytes(item) {
    if (!isBytes(item))
        throw new Error('Uint8Array expected');
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    abytes(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // Big Endian
    return BigInt(hex === '' ? '0' : `0x${hex}`);
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('padded hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
// BE: Big Endian, LE: Little Endian
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
    abytes(bytes);
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
}
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */
function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        }
        catch (e) {
            throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
    }
    else if (isBytes(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    }
    else {
        throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// Compares 2 u8a-s in kinda constant time
function equalBytes(a, b) {
    if (a.length !== b.length)
        return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
    return diff === 0;
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 */
function bitLen(n) {
    let len;
    for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
    return len;
}
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */
function bitGet(n, pos) {
    return (n >> BigInt(pos)) & _1n;
}
/**
 * Sets single bit at position.
 */
function bitSet(n, pos, value) {
    return n | ((value ? _1n : _0n) << BigInt(pos));
}
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */
const bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
// DRBG
const u8n = (data) => new Uint8Array(data); // creates Uint8Array
const u8fr = (arr) => Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2)
        throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2)
        throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function')
        throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n()) => {
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([0x00]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0)
            return;
        k = h(u8fr([0x01]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = () => {
        // HMAC-DRBG generate() function
        if (i++ >= 1000)
            throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while (len < qByteLen) {
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while (!(res = pred(gen())))
            reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val) => typeof val === 'bigint',
    function: (val) => typeof val === 'function',
    boolean: (val) => typeof val === 'boolean',
    string: (val) => typeof val === 'string',
    stringOrUint8Array: (val) => typeof val === 'string' || isBytes(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen),
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function')
            throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === undefined)
            return;
        if (!checkVal(val, object)) {
            throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
        }
    };
    for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
    return object;
}
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9918:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x3: () => (/* binding */ weierstrass)
/* harmony export */ });
/* unused harmony exports DER, weierstrassPoints, SWUFpSqrtRatio, mapToCurveSimpleSWU */
/* harmony import */ var _modular_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2944);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6667);
/* harmony import */ var _curve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4141);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Short Weierstrass curve. The formula is: y² = x³ + ax + b




function validatePointOpts(curve) {
    const opts = (0,_curve_js__WEBPACK_IMPORTED_MODULE_0__/* .validateBasic */ .h)(curve);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .validateObject */ .Q5(opts, {
        a: 'field',
        b: 'field',
    }, {
        allowedPrivateKeyLengths: 'array',
        wrapPrivateKey: 'boolean',
        isTorsionFree: 'function',
        clearCofactor: 'function',
        allowInfinityPoint: 'boolean',
        fromBytes: 'function',
        toBytes: 'function',
    });
    const { endo, Fp, a } = opts;
    if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
            throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
        }
        if (typeof endo !== 'object' ||
            typeof endo.beta !== 'bigint' ||
            typeof endo.splitScalar !== 'function') {
            throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
        }
    }
    return Object.freeze({ ...opts });
}
// ASN.1 DER encoding utilities
const { /* bytesToNumberBE */ "Ph": b2n, /* hexToBytes */ "aT": h2b } = _utils_js__WEBPACK_IMPORTED_MODULE_1__;
const DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
        constructor(m = '') {
            super(m);
        }
    },
    _parseInt(data) {
        const { Err: E } = DER;
        if (data.length < 2 || data[0] !== 0x02)
            throw new E('Invalid signature integer tag');
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len)
            throw new E('Invalid signature integer: wrong length');
        // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
        // since we always use positive integers here. It must always be empty:
        // - add zero byte if exists
        // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
        if (res[0] & 0b10000000)
            throw new E('Invalid signature integer: negative');
        if (res[0] === 0x00 && !(res[1] & 0b10000000))
            throw new E('Invalid signature integer: unnecessary leading zero');
        return { d: b2n(res), l: data.subarray(len + 2) }; // d is data, l is left
    },
    toSig(hex) {
        // parse DER signature
        const { Err: E } = DER;
        const data = typeof hex === 'string' ? h2b(hex) : hex;
        _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .abytes */ .DO(data);
        let l = data.length;
        if (l < 2 || data[0] != 0x30)
            throw new E('Invalid signature tag');
        if (data[1] !== l - 2)
            throw new E('Invalid signature: incorrect length');
        const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
        const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
        if (rBytesLeft.length)
            throw new E('Invalid signature: left bytes after parsing');
        return { r, s };
    },
    hexFromSig(sig) {
        // Add leading zero if first byte has negative bit enabled. More details in '_parseInt'
        const slice = (s) => (Number.parseInt(s[0], 16) & 0b1000 ? '00' + s : s);
        const h = (num) => {
            const hex = num.toString(16);
            return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
    },
};
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3), _4n = BigInt(4);
function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE; // All curves has same field / group length as for now, but they can differ
    const toBytes = CURVE.toBytes ||
        ((_c, point, _isCompressed) => {
            const a = point.toAffine();
            return _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .concatBytes */ .Id(Uint8Array.from([0x04]), Fp.toBytes(a.x), Fp.toBytes(a.y));
        });
    const fromBytes = CURVE.fromBytes ||
        ((bytes) => {
            // const head = bytes[0];
            const tail = bytes.subarray(1);
            // if (head !== 0x04) throw new Error('Only non-compressed encoding is supported');
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return { x, y };
        });
    /**
     * y² = x³ + ax + b: Short weierstrass curve formula
     * @returns y²
     */
    function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x); // x * x
        const x3 = Fp.mul(x2, x); // x2 * x
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b); // x3 + a * x + b
    }
    // Validate whether the passed curve params are valid.
    // We check if curve equation works for generator point.
    // `assertValidity()` won't work: `isTorsionFree()` is not available at this point in bls12-381.
    // ProjectivePoint class has not been initialized yet.
    if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
        throw new Error('bad generator point: equation left != right');
    // Valid group elements reside in range 1..n-1
    function isWithinCurveOrder(num) {
        return typeof num === 'bigint' && _0n < num && num < CURVE.n;
    }
    function assertGE(num) {
        if (!isWithinCurveOrder(num))
            throw new Error('Expected valid bigint: 0 < bigint < curve.n');
    }
    // Validates if priv key is valid and converts it to bigint.
    // Supports options allowedPrivateKeyLengths and wrapPrivateKey.
    function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
        if (lengths && typeof key !== 'bigint') {
            if (_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isBytes */ .aY(key))
                key = _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My(key);
            // Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
            if (typeof key !== 'string' || !lengths.includes(key.length))
                throw new Error('Invalid key');
            key = key.padStart(nByteLength * 2, '0');
        }
        let num;
        try {
            num =
                typeof key === 'bigint'
                    ? key
                    : _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToNumberBE */ .Ph((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('private key', key, nByteLength));
        }
        catch (error) {
            throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey)
            num = _modular_js__WEBPACK_IMPORTED_MODULE_2__/* .mod */ .zi(num, n); // disabled by default, enabled for BLS
        assertGE(num); // num in range [1..N-1]
        return num;
    }
    const pointPrecomputes = new Map();
    function assertPrjPoint(other) {
        if (!(other instanceof Point))
            throw new Error('ProjectivePoint expected');
    }
    /**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */
    class Point {
        constructor(px, py, pz) {
            this.px = px;
            this.py = py;
            this.pz = pz;
            if (px == null || !Fp.isValid(px))
                throw new Error('x required');
            if (py == null || !Fp.isValid(py))
                throw new Error('y required');
            if (pz == null || !Fp.isValid(pz))
                throw new Error('z required');
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
            const { x, y } = p || {};
            if (!p || !Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('invalid affine point');
            if (p instanceof Point)
                throw new Error('projective point not allowed');
            const is0 = (i) => Fp.eql(i, Fp.ZERO);
            // fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
            if (is0(x) && is0(y))
                return Point.ZERO;
            return new Point(x, y, Fp.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */
        static normalizeZ(points) {
            const toInv = Fp.invertBatch(points.map((p) => p.pz));
            return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(hex) {
            const P = Point.fromAffine(fromBytes((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('pointHex', hex)));
            P.assertValidity();
            return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
            return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            this._WINDOW_SIZE = windowSize;
            pointPrecomputes.delete(this);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            if (this.is0()) {
                // (0, 1, 0) aka ZERO is invalid in most contexts.
                // In BLS, ZERO can be serialized, so we allow it.
                // (0, 0, 0) is wrong representation of ZERO and is always invalid.
                if (CURVE.allowInfinityPoint && !Fp.is0(this.py))
                    return;
                throw new Error('bad point: ZERO');
            }
            // Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
            const { x, y } = this.toAffine();
            // Check if x, y are valid field elements
            if (!Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('bad point: x or y not FE');
            const left = Fp.sqr(y); // y²
            const right = weierstrassEquation(x); // x³ + ax + b
            if (!Fp.eql(left, right))
                throw new Error('bad point: equation left != right');
            if (!this.isTorsionFree())
                throw new Error('bad point: not in prime-order subgroup');
        }
        hasEvenY() {
            const { y } = this.toAffine();
            if (Fp.isOdd)
                return !Fp.isOdd(y);
            throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
            const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
            return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
            return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const { a, b } = CURVE;
            const b3 = Fp.mul(b, _3n);
            const { px: X1, py: Y1, pz: Z1 } = this;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            let t0 = Fp.mul(X1, X1); // step 1
            let t1 = Fp.mul(Y1, Y1);
            let t2 = Fp.mul(Z1, Z1);
            let t3 = Fp.mul(X1, Y1);
            t3 = Fp.add(t3, t3); // step 5
            Z3 = Fp.mul(X1, Z1);
            Z3 = Fp.add(Z3, Z3);
            X3 = Fp.mul(a, Z3);
            Y3 = Fp.mul(b3, t2);
            Y3 = Fp.add(X3, Y3); // step 10
            X3 = Fp.sub(t1, Y3);
            Y3 = Fp.add(t1, Y3);
            Y3 = Fp.mul(X3, Y3);
            X3 = Fp.mul(t3, X3);
            Z3 = Fp.mul(b3, Z3); // step 15
            t2 = Fp.mul(a, t2);
            t3 = Fp.sub(t0, t2);
            t3 = Fp.mul(a, t3);
            t3 = Fp.add(t3, Z3);
            Z3 = Fp.add(t0, t0); // step 20
            t0 = Fp.add(Z3, t0);
            t0 = Fp.add(t0, t2);
            t0 = Fp.mul(t0, t3);
            Y3 = Fp.add(Y3, t0);
            t2 = Fp.mul(Y1, Z1); // step 25
            t2 = Fp.add(t2, t2);
            t0 = Fp.mul(t2, t3);
            X3 = Fp.sub(X3, t0);
            Z3 = Fp.mul(t2, t1);
            Z3 = Fp.add(Z3, Z3); // step 30
            Z3 = Fp.add(Z3, Z3);
            return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            const a = CURVE.a;
            const b3 = Fp.mul(CURVE.b, _3n);
            let t0 = Fp.mul(X1, X2); // step 1
            let t1 = Fp.mul(Y1, Y2);
            let t2 = Fp.mul(Z1, Z2);
            let t3 = Fp.add(X1, Y1);
            let t4 = Fp.add(X2, Y2); // step 5
            t3 = Fp.mul(t3, t4);
            t4 = Fp.add(t0, t1);
            t3 = Fp.sub(t3, t4);
            t4 = Fp.add(X1, Z1);
            let t5 = Fp.add(X2, Z2); // step 10
            t4 = Fp.mul(t4, t5);
            t5 = Fp.add(t0, t2);
            t4 = Fp.sub(t4, t5);
            t5 = Fp.add(Y1, Z1);
            X3 = Fp.add(Y2, Z2); // step 15
            t5 = Fp.mul(t5, X3);
            X3 = Fp.add(t1, t2);
            t5 = Fp.sub(t5, X3);
            Z3 = Fp.mul(a, t4);
            X3 = Fp.mul(b3, t2); // step 20
            Z3 = Fp.add(X3, Z3);
            X3 = Fp.sub(t1, Z3);
            Z3 = Fp.add(t1, Z3);
            Y3 = Fp.mul(X3, Z3);
            t1 = Fp.add(t0, t0); // step 25
            t1 = Fp.add(t1, t0);
            t2 = Fp.mul(a, t2);
            t4 = Fp.mul(b3, t4);
            t1 = Fp.add(t1, t2);
            t2 = Fp.sub(t0, t2); // step 30
            t2 = Fp.mul(a, t2);
            t4 = Fp.add(t4, t2);
            t0 = Fp.mul(t1, t4);
            Y3 = Fp.add(Y3, t0);
            t0 = Fp.mul(t5, t4); // step 35
            X3 = Fp.mul(t3, X3);
            X3 = Fp.sub(X3, t0);
            t0 = Fp.mul(t3, t1);
            Z3 = Fp.mul(t5, Z3);
            Z3 = Fp.add(Z3, t0); // step 40
            return new Point(X3, Y3, Z3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
                const toInv = Fp.invertBatch(comp.map((p) => p.pz));
                return comp.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
            });
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(n) {
            const I = Point.ZERO;
            if (n === _0n)
                return I;
            assertGE(n); // Will throw on 0
            if (n === _1n)
                return this;
            const { endo } = CURVE;
            if (!endo)
                return wnaf.unsafeLadder(this, n);
            // Apply endomorphism
            let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
            let k1p = I;
            let k2p = I;
            let d = this;
            while (k1 > _0n || k2 > _0n) {
                if (k1 & _1n)
                    k1p = k1p.add(d);
                if (k2 & _1n)
                    k2p = k2p.add(d);
                d = d.double();
                k1 >>= _1n;
                k2 >>= _1n;
            }
            if (k1neg)
                k1p = k1p.negate();
            if (k2neg)
                k2p = k2p.negate();
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */
        multiply(scalar) {
            assertGE(scalar);
            let n = scalar;
            let point, fake; // Fake point is used to const-time mult
            const { endo } = CURVE;
            if (endo) {
                const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
                let { p: k1p, f: f1p } = this.wNAF(k1);
                let { p: k2p, f: f2p } = this.wNAF(k2);
                k1p = wnaf.constTimeNegate(k1neg, k1p);
                k2p = wnaf.constTimeNegate(k2neg, k2p);
                k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                point = k1p.add(k2p);
                fake = f1p.add(f2p);
            }
            else {
                const { p, f } = this.wNAF(n);
                point = p;
                fake = f;
            }
            // Normalize `z` for both points, but return only real one
            return Point.normalizeZ([point, fake])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(Q, a, b) {
            const G = Point.BASE; // No Strauss-Shamir trick: we have 10% faster G precomputes
            const mul = (P, a // Select faster multiply() method
            ) => (a === _0n || a === _1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a));
            const sum = mul(this, a).add(mul(Q, b));
            return sum.is0() ? undefined : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
            const { px: x, py: y, pz: z } = this;
            const is0 = this.is0();
            // If invZ was 0, we return zero point. However we still want to execute
            // all operations, so we replace invZ with a random number, 1.
            if (iz == null)
                iz = is0 ? Fp.ONE : Fp.inv(z);
            const ax = Fp.mul(x, iz);
            const ay = Fp.mul(y, iz);
            const zz = Fp.mul(z, iz);
            if (is0)
                return { x: Fp.ZERO, y: Fp.ZERO };
            if (!Fp.eql(zz, Fp.ONE))
                throw new Error('invZ was invalid');
            return { x: ax, y: ay };
        }
        isTorsionFree() {
            const { h: cofactor, isTorsionFree } = CURVE;
            if (cofactor === _1n)
                return true; // No subgroups, always torsion-free
            if (isTorsionFree)
                return isTorsionFree(Point, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
        }
        clearCofactor() {
            const { h: cofactor, clearCofactor } = CURVE;
            if (cofactor === _1n)
                return this; // Fast-path
            if (clearCofactor)
                return clearCofactor(Point, this);
            return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
            this.assertValidity();
            return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
            return _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My(this.toRawBytes(isCompressed));
        }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = (0,_curve_js__WEBPACK_IMPORTED_MODULE_0__/* .wNAF */ .A)(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    // Validate if generator point is on curve
    return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder,
    };
}
function validateOpts(curve) {
    const opts = (0,_curve_js__WEBPACK_IMPORTED_MODULE_0__/* .validateBasic */ .h)(curve);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .validateObject */ .Q5(opts, {
        hash: 'hash',
        hmac: 'function',
        randomBytes: 'function',
    }, {
        bits2int: 'function',
        bits2int_modN: 'function',
        lowS: 'boolean',
    });
    return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp.BYTES + 1; // e.g. 33 for 32
    const uncompressedLen = 2 * Fp.BYTES + 1; // e.g. 65 for 32
    function isValidFieldElement(num) {
        return _0n < num && num < Fp.ORDER; // 0 is banned since it's not invertible FE
    }
    function modN(a) {
        return _modular_js__WEBPACK_IMPORTED_MODULE_2__/* .mod */ .zi(a, CURVE_ORDER);
    }
    function invN(a) {
        return _modular_js__WEBPACK_IMPORTED_MODULE_2__/* .invert */ .B8(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder, } = weierstrassPoints({
        ...CURVE,
        toBytes(_c, point, isCompressed) {
            const a = point.toAffine();
            const x = Fp.toBytes(a.x);
            const cat = _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .concatBytes */ .Id;
            if (isCompressed) {
                return cat(Uint8Array.from([point.hasEvenY() ? 0x02 : 0x03]), x);
            }
            else {
                return cat(Uint8Array.from([0x04]), x, Fp.toBytes(a.y));
            }
        },
        fromBytes(bytes) {
            const len = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            // this.assertValidity() is done inside of fromHex
            if (len === compressedLen && (head === 0x02 || head === 0x03)) {
                const x = _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToNumberBE */ .Ph(tail);
                if (!isValidFieldElement(x))
                    throw new Error('Point is not on curve');
                const y2 = weierstrassEquation(x); // y² = x³ + ax + b
                let y;
                try {
                    y = Fp.sqrt(y2); // y = y² ^ (p+1)/4
                }
                catch (sqrtError) {
                    const suffix = sqrtError instanceof Error ? ': ' + sqrtError.message : '';
                    throw new Error('Point is not on curve' + suffix);
                }
                const isYOdd = (y & _1n) === _1n;
                // ECDSA
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd)
                    y = Fp.neg(y);
                return { x, y };
            }
            else if (len === uncompressedLen && head === 0x04) {
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return { x, y };
            }
            else {
                throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
            }
        },
    });
    const numToNByteStr = (num) => _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My(_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToBytesBE */ .lq(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> _1n;
        return number > HALF;
    }
    function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    // slice bytes num
    const slcNum = (b, from, to) => _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToNumberBE */ .Ph(b.slice(from, to));
    /**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */
    class Signature {
        constructor(r, s, recovery) {
            this.r = r;
            this.s = s;
            this.recovery = recovery;
            this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
            const l = CURVE.nByteLength;
            hex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('compactSignature', hex, l * 2);
            return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
            const { r, s } = DER.toSig((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('DER', hex));
            return new Signature(r, s);
        }
        assertValidity() {
            // can use assertGE here
            if (!isWithinCurveOrder(this.r))
                throw new Error('r must be 0 < r < CURVE.n');
            if (!isWithinCurveOrder(this.s))
                throw new Error('s must be 0 < s < CURVE.n');
        }
        addRecoveryBit(recovery) {
            return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
            const { r, s, recovery: rec } = this;
            const h = bits2int_modN((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('msgHash', msgHash)); // Truncate hash
            if (rec == null || ![0, 1, 2, 3].includes(rec))
                throw new Error('recovery id invalid');
            const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
            if (radj >= Fp.ORDER)
                throw new Error('recovery id 2 or 3 invalid');
            const prefix = (rec & 1) === 0 ? '02' : '03';
            const R = Point.fromHex(prefix + numToNByteStr(radj));
            const ir = invN(radj); // r^-1
            const u1 = modN(-h * ir); // -hr^-1
            const u2 = modN(s * ir); // sr^-1
            const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2); // (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
            if (!Q)
                throw new Error('point at infinify'); // unsafe is fine: no priv data leaked
            Q.assertValidity();
            return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
            return _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .hexToBytes */ .aT(this.toDERHex());
        }
        toDERHex() {
            return DER.hexFromSig({ r: this.r, s: this.s });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
            return _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .hexToBytes */ .aT(this.toCompactHex());
        }
        toCompactHex() {
            return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
    }
    const utils = {
        isValidPrivateKey(privateKey) {
            try {
                normPrivateKeyToScalar(privateKey);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        normPrivateKeyToScalar: normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */
        randomPrivateKey: () => {
            const length = _modular_js__WEBPACK_IMPORTED_MODULE_2__/* .getMinHashLength */ .Tp(CURVE.n);
            return _modular_js__WEBPACK_IMPORTED_MODULE_2__/* .mapHashToField */ .qy(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */
        precompute(windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3)); // 3 is arbitrary, just need any number here
            return point;
        },
    };
    /**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */
    function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    /**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */
    function isProbPub(item) {
        const arr = _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isBytes */ .aY(item);
        const str = typeof item === 'string';
        const len = (arr || str) && item.length;
        if (arr)
            return len === compressedLen || len === uncompressedLen;
        if (str)
            return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point)
            return true;
        return false;
    }
    /**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */
    function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA))
            throw new Error('first arg must be private key');
        if (!isProbPub(publicB))
            throw new Error('second arg must be public key');
        const b = Point.fromHex(publicB); // check for being on-curve
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    // RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
    // FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
    // bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
    // int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
    const bits2int = CURVE.bits2int ||
        function (bytes) {
            // For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
            // for some cases, since bytes.length * 8 is not actual bitLength.
            const num = _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToNumberBE */ .Ph(bytes); // check for == u8 done here
            const delta = bytes.length * 8 - CURVE.nBitLength; // truncate to nBitLength leftmost bits
            return delta > 0 ? num >> BigInt(delta) : num;
        };
    const bits2int_modN = CURVE.bits2int_modN ||
        function (bytes) {
            return modN(bits2int(bytes)); // can't use bytesToNumberBE here
        };
    // NOTE: pads output with zero as per spec
    const ORDER_MASK = _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .bitMask */ .OG(CURVE.nBitLength);
    /**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */
    function int2octets(num) {
        if (typeof num !== 'bigint')
            throw new Error('bigint expected');
        if (!(_0n <= num && num < ORDER_MASK))
            throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        // works with order, can have different size than numToField!
        return _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToBytesBE */ .lq(num, CURVE.nByteLength);
    }
    // Steps A, D of RFC6979 3.2
    // Creates RFC6979 seed; converts msg/privKey to numbers.
    // Used only in sign, not in verify.
    // NOTE: we cannot assume here that msgHash has same amount of bytes as curve order, this will be wrong at least for P521.
    // Also it can be bigger for P224 + SHA256
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (['recovered', 'canonical'].some((k) => k in opts))
            throw new Error('sign() legacy options not supported');
        const { hash, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts; // generates low-s sigs by default
        if (lowS == null)
            lowS = true; // RFC6979 3.2: we skip step A, because we already provide hash
        msgHash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('msgHash', msgHash);
        if (prehash)
            msgHash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('prehashed msgHash', hash(msgHash));
        // We can't later call bits2octets, since nested bits2int is broken for curves
        // with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
        // const bits2octets = (bits) => int2octets(bits2int_modN(bits))
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey); // validate private key, convert to bigint
        const seedArgs = [int2octets(d), int2octets(h1int)];
        // extraEntropy. RFC6979 3.6: additional k' (optional).
        if (ent != null && ent !== false) {
            // K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
            const e = ent === true ? randomBytes(Fp.BYTES) : ent; // generate random bytes OR pass as-is
            seedArgs.push((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('extraEntropy', e)); // check for being bytes
        }
        const seed = _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .concatBytes */ .Id(...seedArgs); // Step D of RFC6979 3.2
        const m = h1int; // NOTE: no need to call bits2int second time here, it is inside truncateHash!
        // Converts signature params into point w r/s, checks result for validity.
        function k2sig(kBytes) {
            // RFC 6979 Section 3.2, step 3: k = bits2int(T)
            const k = bits2int(kBytes); // Cannot use fields methods, since it is group element
            if (!isWithinCurveOrder(k))
                return; // Important: all mod() calls here must be done over N
            const ik = invN(k); // k^-1 mod n
            const q = Point.BASE.multiply(k).toAffine(); // q = Gk
            const r = modN(q.x); // r = q.x mod n
            if (r === _0n)
                return;
            // Can use scalar blinding b^-1(bm + bdr) where b ∈ [1,q−1] according to
            // https://tches.iacr.org/index.php/TCHES/article/view/7337/6509. We've decided against it:
            // a) dependency on CSPRNG b) 15% slowdown c) doesn't really help since bigints are not CT
            const s = modN(ik * modN(m + r * d)); // Not using blinding here
            if (s === _0n)
                return;
            let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n); // recovery bit (2 or 3, when q.x > n)
            let normS = s;
            if (lowS && isBiggerThanHalfOrder(s)) {
                normS = normalizeS(s); // if lowS was passed, ensure s is always
                recovery ^= 1; // // in the bottom half of N
            }
            return new Signature(r, normS, recovery); // use normS, not s
        }
        return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    /**
     * Signs message hash with a private key.
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
     * @param privKey private key
     * @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
     * @returns signature with recovery param
     */
    function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts); // Steps A, D of RFC6979 3.2.
        const C = CURVE;
        const drbg = _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .createHmacDrbg */ .fg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig); // Steps B, C, D, E, F, G
    }
    // Enable precomputes. Slows down first publicKey computation by 20ms.
    Point.BASE._setWindowSize(8);
    // utils.precompute(8, ProjectivePoint.BASE)
    /**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('msgHash', msgHash);
        publicKey = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureBytes */ .qj)('publicKey', publicKey);
        if ('strict' in opts)
            throw new Error('options.strict was renamed to lowS');
        const { lowS, prehash } = opts;
        let _sig = undefined;
        let P;
        try {
            if (typeof sg === 'string' || _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isBytes */ .aY(sg)) {
                // Signature can be represented in 2 ways: compact (2*nByteLength) & DER (variable-length).
                // Since DER can also be 2*nByteLength bytes, we check for it first.
                try {
                    _sig = Signature.fromDER(sg);
                }
                catch (derError) {
                    if (!(derError instanceof DER.Err))
                        throw derError;
                    _sig = Signature.fromCompact(sg);
                }
            }
            else if (typeof sg === 'object' && typeof sg.r === 'bigint' && typeof sg.s === 'bigint') {
                const { r, s } = sg;
                _sig = new Signature(r, s);
            }
            else {
                throw new Error('PARSE');
            }
            P = Point.fromHex(publicKey);
        }
        catch (error) {
            if (error.message === 'PARSE')
                throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
            return false;
        }
        if (lowS && _sig.hasHighS())
            return false;
        if (prehash)
            msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash); // Cannot use fields methods, since it is group element
        const is = invN(s); // s^-1
        const u1 = modN(h * is); // u1 = hs^-1 mod n
        const u2 = modN(r * is); // u2 = rs^-1 mod n
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine(); // R = u1⋅G + u2⋅P
        if (!R)
            return false;
        const v = modN(R.x);
        return v === r;
    }
    return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils,
    };
}
/**
 * Implementation of the Shallue and van de Woestijne method for any weierstrass curve.
 * TODO: check if there is a way to merge this with uvRatio in Edwards; move to modular.
 * b = True and y = sqrt(u / v) if (u / v) is square in F, and
 * b = False and y = sqrt(Z * (u / v)) otherwise.
 * @param Fp
 * @param Z
 * @returns
 */
function SWUFpSqrtRatio(Fp, Z) {
    // Generic implementation
    const q = Fp.ORDER;
    let l = _0n;
    for (let o = q - _1n; o % _2n === _0n; o /= _2n)
        l += _1n;
    const c1 = l; // 1. c1, the largest integer such that 2^c1 divides q - 1.
    // We need 2n ** c1 and 2n ** (c1-1). We can't use **; but we can use <<.
    // 2n ** c1 == 2n << (c1-1)
    const _2n_pow_c1_1 = _2n << (c1 - _1n - _1n);
    const _2n_pow_c1 = _2n_pow_c1_1 * _2n;
    const c2 = (q - _1n) / _2n_pow_c1; // 2. c2 = (q - 1) / (2^c1)  # Integer arithmetic
    const c3 = (c2 - _1n) / _2n; // 3. c3 = (c2 - 1) / 2            # Integer arithmetic
    const c4 = _2n_pow_c1 - _1n; // 4. c4 = 2^c1 - 1                # Integer arithmetic
    const c5 = _2n_pow_c1_1; // 5. c5 = 2^(c1 - 1)                  # Integer arithmetic
    const c6 = Fp.pow(Z, c2); // 6. c6 = Z^c2
    const c7 = Fp.pow(Z, (c2 + _1n) / _2n); // 7. c7 = Z^((c2 + 1) / 2)
    let sqrtRatio = (u, v) => {
        let tv1 = c6; // 1. tv1 = c6
        let tv2 = Fp.pow(v, c4); // 2. tv2 = v^c4
        let tv3 = Fp.sqr(tv2); // 3. tv3 = tv2^2
        tv3 = Fp.mul(tv3, v); // 4. tv3 = tv3 * v
        let tv5 = Fp.mul(u, tv3); // 5. tv5 = u * tv3
        tv5 = Fp.pow(tv5, c3); // 6. tv5 = tv5^c3
        tv5 = Fp.mul(tv5, tv2); // 7. tv5 = tv5 * tv2
        tv2 = Fp.mul(tv5, v); // 8. tv2 = tv5 * v
        tv3 = Fp.mul(tv5, u); // 9. tv3 = tv5 * u
        let tv4 = Fp.mul(tv3, tv2); // 10. tv4 = tv3 * tv2
        tv5 = Fp.pow(tv4, c5); // 11. tv5 = tv4^c5
        let isQR = Fp.eql(tv5, Fp.ONE); // 12. isQR = tv5 == 1
        tv2 = Fp.mul(tv3, c7); // 13. tv2 = tv3 * c7
        tv5 = Fp.mul(tv4, tv1); // 14. tv5 = tv4 * tv1
        tv3 = Fp.cmov(tv2, tv3, isQR); // 15. tv3 = CMOV(tv2, tv3, isQR)
        tv4 = Fp.cmov(tv5, tv4, isQR); // 16. tv4 = CMOV(tv5, tv4, isQR)
        // 17. for i in (c1, c1 - 1, ..., 2):
        for (let i = c1; i > _1n; i--) {
            let tv5 = i - _2n; // 18.    tv5 = i - 2
            tv5 = _2n << (tv5 - _1n); // 19.    tv5 = 2^tv5
            let tvv5 = Fp.pow(tv4, tv5); // 20.    tv5 = tv4^tv5
            const e1 = Fp.eql(tvv5, Fp.ONE); // 21.    e1 = tv5 == 1
            tv2 = Fp.mul(tv3, tv1); // 22.    tv2 = tv3 * tv1
            tv1 = Fp.mul(tv1, tv1); // 23.    tv1 = tv1 * tv1
            tvv5 = Fp.mul(tv4, tv1); // 24.    tv5 = tv4 * tv1
            tv3 = Fp.cmov(tv2, tv3, e1); // 25.    tv3 = CMOV(tv2, tv3, e1)
            tv4 = Fp.cmov(tvv5, tv4, e1); // 26.    tv4 = CMOV(tv5, tv4, e1)
        }
        return { isValid: isQR, value: tv3 };
    };
    if (Fp.ORDER % _4n === _3n) {
        // sqrt_ratio_3mod4(u, v)
        const c1 = (Fp.ORDER - _3n) / _4n; // 1. c1 = (q - 3) / 4     # Integer arithmetic
        const c2 = Fp.sqrt(Fp.neg(Z)); // 2. c2 = sqrt(-Z)
        sqrtRatio = (u, v) => {
            let tv1 = Fp.sqr(v); // 1. tv1 = v^2
            const tv2 = Fp.mul(u, v); // 2. tv2 = u * v
            tv1 = Fp.mul(tv1, tv2); // 3. tv1 = tv1 * tv2
            let y1 = Fp.pow(tv1, c1); // 4. y1 = tv1^c1
            y1 = Fp.mul(y1, tv2); // 5. y1 = y1 * tv2
            const y2 = Fp.mul(y1, c2); // 6. y2 = y1 * c2
            const tv3 = Fp.mul(Fp.sqr(y1), v); // 7. tv3 = y1^2; 8. tv3 = tv3 * v
            const isQR = Fp.eql(tv3, u); // 9. isQR = tv3 == u
            let y = Fp.cmov(y2, y1, isQR); // 10. y = CMOV(y2, y1, isQR)
            return { isValid: isQR, value: y }; // 11. return (isQR, y) isQR ? y : y*c2
        };
    }
    // No curves uses that
    // if (Fp.ORDER % _8n === _5n) // sqrt_ratio_5mod8
    return sqrtRatio;
}
/**
 * Simplified Shallue-van de Woestijne-Ulas Method
 * https://www.rfc-editor.org/rfc/rfc9380#section-6.6.2
 */
function mapToCurveSimpleSWU(Fp, opts) {
    mod.validateField(Fp);
    if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error('mapToCurveSimpleSWU: invalid opts');
    const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
    if (!Fp.isOdd)
        throw new Error('Fp.isOdd is not implemented!');
    // Input: u, an element of F.
    // Output: (x, y), a point on E.
    return (u) => {
        // prettier-ignore
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u); // 1.  tv1 = u^2
        tv1 = Fp.mul(tv1, opts.Z); // 2.  tv1 = Z * tv1
        tv2 = Fp.sqr(tv1); // 3.  tv2 = tv1^2
        tv2 = Fp.add(tv2, tv1); // 4.  tv2 = tv2 + tv1
        tv3 = Fp.add(tv2, Fp.ONE); // 5.  tv3 = tv2 + 1
        tv3 = Fp.mul(tv3, opts.B); // 6.  tv3 = B * tv3
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)); // 7.  tv4 = CMOV(Z, -tv2, tv2 != 0)
        tv4 = Fp.mul(tv4, opts.A); // 8.  tv4 = A * tv4
        tv2 = Fp.sqr(tv3); // 9.  tv2 = tv3^2
        tv6 = Fp.sqr(tv4); // 10. tv6 = tv4^2
        tv5 = Fp.mul(tv6, opts.A); // 11. tv5 = A * tv6
        tv2 = Fp.add(tv2, tv5); // 12. tv2 = tv2 + tv5
        tv2 = Fp.mul(tv2, tv3); // 13. tv2 = tv2 * tv3
        tv6 = Fp.mul(tv6, tv4); // 14. tv6 = tv6 * tv4
        tv5 = Fp.mul(tv6, opts.B); // 15. tv5 = B * tv6
        tv2 = Fp.add(tv2, tv5); // 16. tv2 = tv2 + tv5
        x = Fp.mul(tv1, tv3); // 17.   x = tv1 * tv3
        const { isValid, value } = sqrtRatio(tv2, tv6); // 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
        y = Fp.mul(tv1, u); // 19.   y = tv1 * u  -> Z * u^3 * y1
        y = Fp.mul(y, value); // 20.   y = y * y1
        x = Fp.cmov(x, tv3, isValid); // 21.   x = CMOV(x, tv3, is_gx1_square)
        y = Fp.cmov(y, value, isValid); // 22.   y = CMOV(y, y1, is_gx1_square)
        const e1 = Fp.isOdd(u) === Fp.isOdd(y); // 23.  e1 = sgn0(u) == sgn0(y)
        y = Fp.cmov(Fp.neg(y), y, e1); // 24.   y = CMOV(-y, y, e1)
        x = Fp.div(x, tv4); // 25.   x = x / tv4
        return { x, y };
    };
}
//# sourceMappingURL=weierstrass.js.map

/***/ }),

/***/ 3887:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   secp256k1: () => (/* binding */ secp256k1)
/* harmony export */ });
/* unused harmony exports schnorr, hashToCurve, encodeToCurve */
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2492);
/* harmony import */ var _abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2944);
/* harmony import */ var _shortw_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(827);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */







const secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
const secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
const _1n = BigInt(1);
const _2n = BigInt(2);
const divNearest = (a, b) => (a + b / _2n) / b;
/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */
function sqrtMod(y) {
    const P = secp256k1P;
    // prettier-ignore
    const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    // prettier-ignore
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = (y * y * y) % P; // x^3, 11
    const b3 = (b2 * b2 * y) % P; // x^7
    const b6 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b3, _3n, P) * b3) % P;
    const b9 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b6, _3n, P) * b3) % P;
    const b11 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b9, _2n, P) * b2) % P;
    const b22 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b11, _11n, P) * b11) % P;
    const b44 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b22, _22n, P) * b22) % P;
    const b88 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b44, _44n, P) * b44) % P;
    const b176 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b88, _88n, P) * b88) % P;
    const b220 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b176, _44n, P) * b44) % P;
    const b223 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b220, _3n, P) * b3) % P;
    const t1 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(b223, _23n, P) * b22) % P;
    const t2 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(t1, _6n, P) * b2) % P;
    const root = (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .pow2 */ .zH)(t2, _2n, P);
    if (!Fp.eql(Fp.sqr(root), y))
        throw new Error('Cannot find square root');
    return root;
}
const Fp = (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .D0)(secp256k1P, undefined, undefined, { sqrt: sqrtMod });
const secp256k1 = (0,_shortw_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .createCurve */ .s)({
    a: BigInt(0), // equation params: a, b
    b: BigInt(7), // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
    Fp, // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
    n: secp256k1N, // Curve order, total count of valid points in the field
    // Base point (x, y) aka generator point
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    h: BigInt(1), // Cofactor
    lowS: true, // Allow only low-S signatures by default in sign() and verify()
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (k) => {
            const n = secp256k1N;
            const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
            const b1 = -_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
            const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
            const b2 = a1;
            const POW_2_128 = BigInt('0x100000000000000000000000000000000'); // (2n**128n).toString(16)
            const c1 = divNearest(b2 * k, n);
            const c2 = divNearest(-b1 * k, n);
            let k1 = (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .mod */ .zi)(k - c1 * a1 - c2 * a2, n);
            let k2 = (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__/* .mod */ .zi)(-c1 * b1 - c2 * b2, n);
            const k1neg = k1 > POW_2_128;
            const k2neg = k2 > POW_2_128;
            if (k1neg)
                k1 = n - k1;
            if (k2neg)
                k2 = n - k2;
            if (k1 > POW_2_128 || k2 > POW_2_128) {
                throw new Error('splitScalar: Endomorphism failed, k=' + k);
            }
            return { k1neg, k1, k2neg, k2 };
        },
    },
}, _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__/* .sha256 */ .s);
// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
const _0n = BigInt(0);
const fe = (x) => typeof x === 'bigint' && _0n < x && x < secp256k1P;
const ge = (x) => typeof x === 'bigint' && _0n < x && x < secp256k1N;
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */
const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === undefined) {
        const tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = concatBytes(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return sha256(concatBytes(tagP, ...messages));
}
// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
const pointToBytes = (point) => point.toRawBytes(true).slice(1);
const numTo32b = (n) => numberToBytesBE(n, 32);
const modP = (x) => mod(x, secp256k1P);
const modN = (x) => mod(x, secp256k1N);
const Point = secp256k1.ProjectivePoint;
const GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
// Calculate point, scalar and bytes
function schnorrGetExtPubKey(priv) {
    let d_ = secp256k1.utils.normPrivateKeyToScalar(priv); // same method executed in fromPrivateKey
    let p = Point.fromPrivateKey(d_); // P = d'⋅G; 0 < d' < n check is done inside
    const scalar = p.hasEvenY() ? d_ : modN(-d_);
    return { scalar: scalar, bytes: pointToBytes(p) };
}
/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */
function lift_x(x) {
    if (!fe(x))
        throw new Error('bad x: need 0 < x < p'); // Fail if x ≥ p.
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7)); // Let c = x³ + 7 mod p.
    let y = sqrtMod(c); // Let y = c^(p+1)/4 mod p.
    if (y % _2n !== _0n)
        y = modP(-y); // Return the unique point P such that x(P) = x and
    const p = new Point(x, y, _1n); // y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
    p.assertValidity();
    return p;
}
/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */
function challenge(...args) {
    return modN(bytesToNumberBE(taggedHash('BIP0340/challenge', ...args)));
}
/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */
function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes; // d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
}
/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
    const m = ensureBytes('message', message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey); // checks for isWithinCurveOrder
    const a = ensureBytes('auxRand', auxRand, 32); // Auxiliary random data a: a 32-byte array
    const t = numTo32b(d ^ bytesToNumberBE(taggedHash('BIP0340/aux', a))); // Let t be the byte-wise xor of bytes(d) and hash/aux(a)
    const rand = taggedHash('BIP0340/nonce', t, px, m); // Let rand = hash/nonce(t || bytes(P) || m)
    const k_ = modN(bytesToNumberBE(rand)); // Let k' = int(rand) mod n
    if (k_ === _0n)
        throw new Error('sign failed: k is zero'); // Fail if k' = 0.
    const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_); // Let R = k'⋅G.
    const e = challenge(rx, px, m); // Let e = int(hash/challenge(bytes(R) || bytes(P) || m)) mod n.
    const sig = new Uint8Array(64); // Let sig = bytes(R) || bytes((k + ed) mod n).
    sig.set(rx, 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    // If Verify(bytes(P), m, sig) (see below) returns failure, abort
    if (!schnorrVerify(sig, m, px))
        throw new Error('sign: Invalid signature produced');
    return sig;
}
/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */
function schnorrVerify(signature, message, publicKey) {
    const sig = ensureBytes('signature', signature, 64);
    const m = ensureBytes('message', message);
    const pub = ensureBytes('publicKey', publicKey, 32);
    try {
        const P = lift_x(bytesToNumberBE(pub)); // P = lift_x(int(pk)); fail if that fails
        const r = bytesToNumberBE(sig.subarray(0, 32)); // Let r = int(sig[0:32]); fail if r ≥ p.
        if (!fe(r))
            return false;
        const s = bytesToNumberBE(sig.subarray(32, 64)); // Let s = int(sig[32:64]); fail if s ≥ n.
        if (!ge(s))
            return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m); // int(challenge(bytes(r)||bytes(P)||m))%n
        const R = GmulAdd(P, s, modN(-e)); // R = s⋅G - e⋅P
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
            return false; // -eP == (n-e)P
        return true; // Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
    }
    catch (error) {
        return false;
    }
}
const schnorr = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => ({
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    utils: {
        randomPrivateKey: secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE,
        bytesToNumberBE,
        taggedHash,
        mod,
    },
}))()));
const isoMap = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => isogenyMap(Fp, [
    // xNum
    [
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
        '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
        '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c',
    ],
    // xDen
    [
        '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
        '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
    // yNum
    [
        '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
        '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
        '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
        '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84',
    ],
    // yDen
    [
        '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
        '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
        '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
].map((i) => i.map((j) => BigInt(j)))))()));
const mapSWU = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => mapToCurveSimpleSWU(Fp, {
    A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
    B: BigInt('1771'),
    Z: Fp.create(BigInt('-11')),
}))()));
const htf = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => createHasher(secp256k1.ProjectivePoint, (scalars) => {
    const { x, y } = mapSWU(Fp.create(scalars[0]));
    return isoMap(x, y);
}, {
    DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
    encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
    p: Fp.ORDER,
    m: 1,
    k: 128,
    expand: 'xmd',
    hash: sha256,
}))()));
const hashToCurve = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => htf.hashToCurve)()));
const encodeToCurve = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => htf.encodeToCurve)()));
//# sourceMappingURL=secp256k1.js.map

/***/ }),

/***/ 7392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: () => (/* binding */ output),
/* harmony export */   ai: () => (/* binding */ number),
/* harmony export */   ee: () => (/* binding */ bytes),
/* harmony export */   t2: () => (/* binding */ exists),
/* harmony export */   tW: () => (/* binding */ hash)
/* harmony export */ });
/* unused harmony exports isBytes, bool */
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`positive integer expected, not ${n}`);
}
function bool(b) {
    if (typeof b !== 'boolean')
        throw new Error(`boolean expected, not ${b}`);
}
// copied from utils
function isBytes(a) {
    return (a instanceof Uint8Array ||
        (a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array'));
}
function bytes(b, ...lengths) {
    if (!isBytes(b))
        throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
}
function hash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(h.outputLen);
    number(h.blockLen);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}

const assert = { number, bool, bytes, hash, exists, output };
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (assert)));
//# sourceMappingURL=_assert.js.map

/***/ }),

/***/ 1867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TQ: () => (/* binding */ Maj),
/* harmony export */   ol: () => (/* binding */ HashMD),
/* harmony export */   r9: () => (/* binding */ Chi)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7392);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1750);


// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function')
        return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number((value >> _32n) & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Choice: a ? b : c
const Chi = (a, b, c) => (a & b) ^ (~a & c);
// Majority function, true if any two inpust is true
const Maj = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
/**
 * Merkle-Damgard hash construction base class.
 * Could be used to create MD5, RIPEMD, SHA1, SHA2.
 */
class HashMD extends _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Hash */ .Vw {
    constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createView */ .O8)(this.buffer);
    }
    update(data) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__/* .exists */ .t2)(this);
        const { view, buffer, blockLen } = this;
        data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toBytes */ .ZJ)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createView */ .O8)(data);
                for (; blockLen <= len - pos; pos += blockLen)
                    this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__/* .exists */ .t2)(this);
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__/* .output */ .CG)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createView */ .O8)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
            throw new Error('_sha2: outputLen bigger than state');
        for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
            to.buffer.set(buffer);
        return to;
    }
}
//# sourceMappingURL=_md.js.map

/***/ }),

/***/ 917:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B4: () => (/* binding */ rotlSL),
/* harmony export */   P5: () => (/* binding */ rotlSH),
/* harmony export */   WM: () => (/* binding */ rotlBH),
/* harmony export */   im: () => (/* binding */ rotlBL),
/* harmony export */   lD: () => (/* binding */ split)
/* harmony export */ });
/* unused harmony exports fromBig, toBig, shrSH, shrSL, rotrSH, rotrSL, rotrBH, rotrBL, rotr32H, rotr32L, add, add3L, add3H, add4L, add4H, add5H, add5L */
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
const rotr32L = (h, _l) => h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
// prettier-ignore

// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (u64)));
//# sourceMappingURL=_u64.js.map

/***/ }),

/***/ 8786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ crypto)
/* harmony export */ });
const crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ 3344:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ hmac)
/* harmony export */ });
/* unused harmony export HMAC */
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7392);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1750);


// HMAC (RFC 2104)
class HMAC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Hash */ .Vw {
    constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__/* .hash */ .tW)(hash);
        const key = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toBytes */ .ZJ)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function')
            throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for (let i = 0; i < pad.length; i++)
            pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for (let i = 0; i < pad.length; i++)
            pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__/* .exists */ .t2)(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__/* .exists */ .t2)(this);
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__/* .bytes */ .ee)(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */
const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key) => new HMAC(hash, key);
//# sourceMappingURL=hmac.js.map

/***/ }),

/***/ 2492:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ sha256)
/* harmony export */ });
/* unused harmony export sha224 */
/* harmony import */ var _md_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1867);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1750);


// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
// Initial state:
// first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19
// prettier-ignore
const SHA256_IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends _md_js__WEBPACK_IMPORTED_MODULE_0__/* .HashMD */ .ol {
    constructor() {
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = SHA256_IV[0] | 0;
        this.B = SHA256_IV[1] | 0;
        this.C = SHA256_IV[2] | 0;
        this.D = SHA256_IV[3] | 0;
        this.E = SHA256_IV[4] | 0;
        this.F = SHA256_IV[5] | 0;
        this.G = SHA256_IV[6] | 0;
        this.H = SHA256_IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(W15, 7) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(W15, 18) ^ (W15 >>> 3);
            const s1 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(W2, 17) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(W2, 19) ^ (W2 >>> 10);
            SHA256_W[i] = (s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16]) | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
            const sigma1 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(E, 6) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(E, 11) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(E, 25);
            const T1 = (H + sigma1 + (0,_md_js__WEBPACK_IMPORTED_MODULE_0__/* .Chi */ .r9)(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const sigma0 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(A, 2) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(A, 13) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .rotr */ .Ow)(A, 22);
            const T2 = (sigma0 + (0,_md_js__WEBPACK_IMPORTED_MODULE_0__/* .Maj */ .TQ)(A, B, C)) | 0;
            H = G;
            G = F;
            F = E;
            E = (D + T1) | 0;
            D = C;
            C = B;
            B = A;
            A = (T1 + T2) | 0;
        }
        // Add the compressed chunk to the current hash value
        A = (A + this.A) | 0;
        B = (B + this.B) | 0;
        C = (C + this.C) | 0;
        D = (D + this.D) | 0;
        E = (E + this.E) | 0;
        F = (F + this.F) | 0;
        G = (G + this.G) | 0;
        H = (H + this.H) | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor() {
        super();
        this.A = 0xc1059ed8 | 0;
        this.B = 0x367cd507 | 0;
        this.C = 0x3070dd17 | 0;
        this.D = 0xf70e5939 | 0;
        this.E = 0xffc00b31 | 0;
        this.F = 0x68581511 | 0;
        this.G = 0x64f98fa7 | 0;
        this.H = 0xbefa4fa4 | 0;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */
const sha256 = /* @__PURE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .wrapConstructor */ .ld)(() => new SHA256());
const sha224 = /* @__PURE__ */ (/* unused pure expression or super */ null && (wrapConstructor(() => new SHA224())));
//# sourceMappingURL=sha256.js.map

/***/ }),

/***/ 244:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lY: () => (/* binding */ keccak_256)
/* harmony export */ });
/* unused harmony exports keccakP, Keccak, sha3_224, sha3_256, sha3_384, sha3_512, keccak_224, keccak_384, keccak_512, shake128, shake256 */
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7392);
/* harmony import */ var _u64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(917);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1750);



// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
    // Pi
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((((round + 1) * (round + 2)) / 2) % 64);
    // Iota
    let t = _0n;
    for (let j = 0; j < 7; j++) {
        R = ((R << _1n) ^ ((R >> _7n) * _0x71n)) % _256n;
        if (R & _2n)
            t ^= _1n << ((_1n << /* @__PURE__ */ BigInt(j)) - _1n);
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__/* .split */ .lD)(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s) => (s > 32 ? (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__/* .rotlBH */ .WM)(h, l, s) : (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__/* .rotlSH */ .P5)(h, l, s));
const rotlL = (h, l, s) => (s > 32 ? (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__/* .rotlBL */ .im)(h, l, s) : (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__/* .rotlSL */ .B4)(h, l, s));
// Same as keccakf1600, but allows to skip some rounds
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for (let round = 24 - rounds; round < 24; round++) {
        // Theta θ
        for (let x = 0; x < 10; x++)
            B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for (let y = 0; y < 50; y += 10) {
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for (let y = 0; y < 50; y += 10) {
            for (let x = 0; x < 10; x++)
                B[x] = s[y + x];
            for (let x = 0; x < 10; x++)
                s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
class Keccak extends _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .Hash */ .Vw {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__/* .number */ .ai)(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        if (0 >= this.blockLen || this.blockLen >= 200)
            throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .u32 */ .DH)(this.state);
    }
    keccak() {
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isLE */ .qv)
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .byteSwap32 */ .Fc)(this.state32);
        keccakP(this.state32, this.rounds);
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isLE */ .qv)
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .byteSwap32 */ .Fc)(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__/* .exists */ .t2)(this);
        const { blockLen, state } = this;
        data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toBytes */ .ZJ)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
                state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
                this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished)
            return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1)
            this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__/* .exists */ .t2)(this, false);
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__/* .bytes */ .ee)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len;) {
            if (this.posOut >= blockLen)
                this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF)
            throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__/* .number */ .ai)(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__/* .output */ .CG)(out, this);
        if (this.finished)
            throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const gen = (suffix, blockLen, outputLen) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .wrapConstructor */ .ld)(() => new Keccak(blockLen, suffix, outputLen));
const sha3_224 = /* @__PURE__ */ (/* unused pure expression or super */ null && (gen(0x06, 144, 224 / 8)));
/**
 * SHA3-256 hash function
 * @param message - that would be hashed
 */
const sha3_256 = /* @__PURE__ */ (/* unused pure expression or super */ null && (gen(0x06, 136, 256 / 8)));
const sha3_384 = /* @__PURE__ */ (/* unused pure expression or super */ null && (gen(0x06, 104, 384 / 8)));
const sha3_512 = /* @__PURE__ */ (/* unused pure expression or super */ null && (gen(0x06, 72, 512 / 8)));
const keccak_224 = /* @__PURE__ */ (/* unused pure expression or super */ null && (gen(0x01, 144, 224 / 8)));
/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */
const keccak_256 = /* @__PURE__ */ gen(0x01, 136, 256 / 8);
const keccak_384 = /* @__PURE__ */ (/* unused pure expression or super */ null && (gen(0x01, 104, 384 / 8)));
const keccak_512 = /* @__PURE__ */ (/* unused pure expression or super */ null && (gen(0x01, 72, 512 / 8)));
const genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
const shake128 = /* @__PURE__ */ (/* unused pure expression or super */ null && (genShake(0x1f, 168, 128 / 8)));
const shake256 = /* @__PURE__ */ (/* unused pure expression or super */ null && (genShake(0x1f, 136, 256 / 8)));
//# sourceMappingURL=sha3.js.map

/***/ }),

/***/ 1750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DH: () => (/* binding */ u32),
/* harmony export */   Fc: () => (/* binding */ byteSwap32),
/* harmony export */   Id: () => (/* binding */ concatBytes),
/* harmony export */   O8: () => (/* binding */ createView),
/* harmony export */   Ow: () => (/* binding */ rotr),
/* harmony export */   Vw: () => (/* binding */ Hash),
/* harmony export */   ZJ: () => (/* binding */ toBytes),
/* harmony export */   ld: () => (/* binding */ wrapConstructor),
/* harmony export */   po: () => (/* binding */ randomBytes),
/* harmony export */   qv: () => (/* binding */ isLE)
/* harmony export */ });
/* unused harmony exports isBytes, u8, rotl, byteSwap, byteSwapIfBE, bytesToHex, hexToBytes, nextTick, asyncLoop, utf8ToBytes, checkOpts, wrapConstructorWithOpts, wrapXOFConstructorWithOpts */
/* harmony import */ var _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8786);
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7392);
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.


// export { isBytes } from './_assert.js';
// We can't reuse isBytes from _assert, because somehow this causes huge perf issues
function isBytes(a) {
    return (a instanceof Uint8Array ||
        (a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array'));
}
// Cast array to different type
const u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
// Cast array to view
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
// The rotate left (circular left shift) operation for uint32
const rotl = (word, shift) => (word << shift) | ((word >>> (32 - shift)) >>> 0);
const isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
// The byte swap operation for uint32
const byteSwap = (word) => ((word << 24) & 0xff000000) |
    ((word << 8) & 0xff0000) |
    ((word >>> 8) & 0xff00) |
    ((word >>> 24) & 0xff);
// Conditionally byte swap if on a big-endian platform
const byteSwapIfBE = (/* unused pure expression or super */ null && (isLE ? (n) => n : (n) => byteSwap(n)));
// In place byte swap for Uint32Array
function byteSwap32(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = byteSwap(arr[i]);
    }
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    abytes(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('padded hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async () => { };
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
            continue;
        await nextTick();
        ts += diff;
    }
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__/* .bytes */ .ee)(data);
    return data;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__/* .bytes */ .ee)(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== '[object Object]')
        throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */
function randomBytes(bytesLength = 32) {
    if (_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_1__/* .crypto */ .E && typeof _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_1__/* .crypto */ .E.getRandomValues === 'function') {
        return _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_1__/* .crypto */ .E.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 1600:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ BaseError)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1159);

class BaseError extends Error {
    constructor(shortMessage, args = {}) {
        const details = args.cause instanceof BaseError
            ? args.cause.details
            : args.cause?.message
                ? args.cause.message
                : args.details;
        const docsPath = args.cause instanceof BaseError
            ? args.cause.docsPath || args.docsPath
            : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...(args.metaMessages ? [...args.metaMessages, ''] : []),
            ...(docsPath ? [`Docs: https://abitype.dev${docsPath}`] : []),
            ...(details ? [`Details: ${details}`] : []),
            `Version: abitype@${_version_js__WEBPACK_IMPORTED_MODULE_0__/* .version */ .r}`,
        ].join('\n');
        super(message);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiTypeError'
        });
        if (args.cause)
            this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 3075:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UG: () => (/* binding */ UnknownSolidityTypeError),
/* harmony export */   zz: () => (/* binding */ UnknownTypeError)
/* harmony export */ });
/* unused harmony export InvalidAbiItemError */
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1600);

class InvalidAbiItemError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature }) {
        super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
class UnknownTypeError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ type }) {
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
class UnknownSolidityTypeError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ type }) {
        super('Unknown type.', {
            metaMessages: [`Type "${type}" is not a valid ABI type.`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
}
//# sourceMappingURL=abiItem.js.map

/***/ }),

/***/ 7765:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NO: () => (/* binding */ InvalidModifierError),
/* harmony export */   Pj: () => (/* binding */ InvalidFunctionModifierError),
/* harmony export */   dV: () => (/* binding */ InvalidParameterError),
/* harmony export */   nx: () => (/* binding */ InvalidAbiTypeParameterError),
/* harmony export */   zd: () => (/* binding */ SolidityProtectedKeywordError)
/* harmony export */ });
/* unused harmony exports InvalidAbiParameterError, InvalidAbiParametersError */
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1600);

class InvalidAbiParameterError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param }) {
        super('Failed to parse ABI parameter.', {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: '/api/human#parseabiparameter-1',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
class InvalidAbiParametersError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ params }) {
        super('Failed to parse ABI parameters.', {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: '/api/human#parseabiparameters-1',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
class InvalidParameterError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param }) {
        super('Invalid ABI parameter.', {
            details: param,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
class SolidityProtectedKeywordError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param, name }) {
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
class InvalidModifierError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param, type, modifier, }) {
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
class InvalidFunctionModifierError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ param, type, modifier, }) {
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
class InvalidAbiTypeParameterError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ abiParameter, }) {
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: ['ABI parameter type is invalid.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
}
//# sourceMappingURL=abiParameter.js.map

/***/ }),

/***/ 3264:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X9: () => (/* binding */ InvalidStructSignatureError),
/* harmony export */   s7: () => (/* binding */ InvalidSignatureError),
/* harmony export */   x8: () => (/* binding */ UnknownSignatureError)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1600);

class InvalidSignatureError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature, type, }) {
        super(`Invalid ${type} signature.`, {
            details: signature,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
class UnknownSignatureError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature }) {
        super('Unknown signature.', {
            details: signature,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
class InvalidStructSignatureError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature }) {
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: ['No properties exist.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
}
//# sourceMappingURL=signature.js.map

/***/ }),

/***/ 2522:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ InvalidParenthesisError)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1600);

class InvalidParenthesisError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ current, depth }) {
        super('Unbalanced parentheses.', {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? 'opening' : 'closing'} parentheses.`,
            ],
            details: `Depth "${depth}"`,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
}
//# sourceMappingURL=splitParameters.js.map

/***/ }),

/***/ 8393:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ CircularReferenceError)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1600);

class CircularReferenceError extends _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ type }) {
        super('Circular reference detected.', {
            metaMessages: [`Struct "${type}" is a circular reference.`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
}
//# sourceMappingURL=struct.js.map

/***/ }),

/***/ 8312:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ formatAbiItem)
/* harmony export */ });
/* harmony import */ var _formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3575);

/**
 * Formats ABI item (e.g. error, event, function) into human-readable ABI item
 *
 * @param abiItem - ABI item
 * @returns Human-readable ABI item
 */
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function')
        return `function ${abiItem.name}(${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable'
            ? ` ${abiItem.stateMutability}`
            : ''}${abiItem.outputs.length
            ? ` returns (${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.outputs)})`
            : ''}`;
    if (abiItem.type === 'event')
        return `event ${abiItem.name}(${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.inputs)})`;
    if (abiItem.type === 'error')
        return `error ${abiItem.name}(${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.inputs)})`;
    if (abiItem.type === 'constructor')
        return `constructor(${(0,_formatAbiParameters_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameters */ .Q)(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback')
        return 'fallback()';
    return 'receive() external payable';
}
//# sourceMappingURL=formatAbiItem.js.map

/***/ }),

/***/ 6328:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ formatAbiParameter)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7296);

// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
/**
 * Formats {@link AbiParameter} to human-readable ABI parameter.
 *
 * @param abiParameter - ABI parameter
 * @returns Human-readable ABI parameter
 *
 * @example
 * const result = formatAbiParameter({ type: 'address', name: 'from' })
 * //    ^? const result: 'address from'
 */
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for (let i = 0; i < length; i++) {
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1)
                type += ', ';
        }
        const result = (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(tupleRegex, abiParameter.type);
        type += `)${result?.array ?? ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type,
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ('indexed' in abiParameter && abiParameter.indexed)
        type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name)
        return `${type} ${abiParameter.name}`;
    return type;
}
//# sourceMappingURL=formatAbiParameter.js.map

/***/ }),

/***/ 3575:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ formatAbiParameters)
/* harmony export */ });
/* harmony import */ var _formatAbiParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6328);

/**
 * Formats {@link AbiParameter}s to human-readable ABI parameters.
 *
 * @param abiParameters - ABI parameters
 * @returns Human-readable ABI parameters
 *
 * @example
 * const result = formatAbiParameters([
 *   //  ^? const result: 'address from, uint256 tokenId'
 *   { type: 'address', name: 'from' },
 *   { type: 'uint256', name: 'tokenId' },
 * ])
 */
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for (let i = 0; i < length; i++) {
        const abiParameter = abiParameters[i];
        params += (0,_formatAbiParameter_js__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiParameter */ .n)(abiParameter);
        if (i !== length - 1)
            params += ', ';
    }
    return params;
}
//# sourceMappingURL=formatAbiParameters.js.map

/***/ }),

/***/ 7273:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ parseAbi)
/* harmony export */ });
/* harmony import */ var _runtime_signatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6592);
/* harmony import */ var _runtime_structs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5729);
/* harmony import */ var _runtime_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1702);



/**
 * Parses human-readable ABI into JSON {@link Abi}
 *
 * @param signatures - Human-Readable ABI
 * @returns Parsed {@link Abi}
 *
 * @example
 * const abi = parseAbi([
 *   //  ^? const abi: readonly [{ name: "balanceOf"; type: "function"; stateMutability:...
 *   'function balanceOf(address owner) view returns (uint256)',
 *   'event Transfer(address indexed from, address indexed to, uint256 amount)',
 * ])
 */
function parseAbi(signatures) {
    const structs = (0,_runtime_structs_js__WEBPACK_IMPORTED_MODULE_0__/* .parseStructs */ .e)(signatures);
    const abi = [];
    const length = signatures.length;
    for (let i = 0; i < length; i++) {
        const signature = signatures[i];
        if ((0,_runtime_signatures_js__WEBPACK_IMPORTED_MODULE_1__/* .isStructSignature */ .WL)(signature))
            continue;
        abi.push((0,_runtime_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .parseSignature */ .uT)(signature, structs));
    }
    return abi;
}
//# sourceMappingURL=parseAbi.js.map

/***/ }),

/***/ 5317:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getParameterCacheKey),
/* harmony export */   G: () => (/* binding */ parameterCache)
/* harmony export */ });
/**
 * Gets {@link parameterCache} cache key namespaced by {@link type}. This prevents parameters from being accessible to types that don't allow them (e.g. `string indexed foo` not allowed outside of `type: 'event'`).
 * @param param ABI parameter string
 * @param type ABI parameter type
 * @returns Cache key for {@link parameterCache}
 */
function getParameterCacheKey(param, type) {
    if (type)
        return `${type}:${param}`;
    return param;
}
/**
 * Basic cache seeded with common ABI parameter strings.
 *
 * **Note: When seeding more parameters, make sure you benchmark performance. The current number is the ideal balance between performance and having an already existing cache.**
 */
const parameterCache = new Map([
    // Unnamed
    ['address', { type: 'address' }],
    ['bool', { type: 'bool' }],
    ['bytes', { type: 'bytes' }],
    ['bytes32', { type: 'bytes32' }],
    ['int', { type: 'int256' }],
    ['int256', { type: 'int256' }],
    ['string', { type: 'string' }],
    ['uint', { type: 'uint256' }],
    ['uint8', { type: 'uint8' }],
    ['uint16', { type: 'uint16' }],
    ['uint24', { type: 'uint24' }],
    ['uint32', { type: 'uint32' }],
    ['uint64', { type: 'uint64' }],
    ['uint96', { type: 'uint96' }],
    ['uint112', { type: 'uint112' }],
    ['uint160', { type: 'uint160' }],
    ['uint192', { type: 'uint192' }],
    ['uint256', { type: 'uint256' }],
    // Named
    ['address owner', { type: 'address', name: 'owner' }],
    ['address to', { type: 'address', name: 'to' }],
    ['bool approved', { type: 'bool', name: 'approved' }],
    ['bytes _data', { type: 'bytes', name: '_data' }],
    ['bytes data', { type: 'bytes', name: 'data' }],
    ['bytes signature', { type: 'bytes', name: 'signature' }],
    ['bytes32 hash', { type: 'bytes32', name: 'hash' }],
    ['bytes32 r', { type: 'bytes32', name: 'r' }],
    ['bytes32 root', { type: 'bytes32', name: 'root' }],
    ['bytes32 s', { type: 'bytes32', name: 's' }],
    ['string name', { type: 'string', name: 'name' }],
    ['string symbol', { type: 'string', name: 'symbol' }],
    ['string tokenURI', { type: 'string', name: 'tokenURI' }],
    ['uint tokenId', { type: 'uint256', name: 'tokenId' }],
    ['uint8 v', { type: 'uint8', name: 'v' }],
    ['uint256 balance', { type: 'uint256', name: 'balance' }],
    ['uint256 tokenId', { type: 'uint256', name: 'tokenId' }],
    ['uint256 value', { type: 'uint256', name: 'value' }],
    // Indexed
    [
        'event:address indexed from',
        { type: 'address', name: 'from', indexed: true },
    ],
    ['event:address indexed to', { type: 'address', name: 'to', indexed: true }],
    [
        'event:uint indexed tokenId',
        { type: 'uint256', name: 'tokenId', indexed: true },
    ],
    [
        'event:uint256 indexed tokenId',
        { type: 'uint256', name: 'tokenId', indexed: true },
    ],
]);
//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 6592:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FO: () => (/* binding */ execStructSignature),
/* harmony export */   Ji: () => (/* binding */ isFunctionSignature),
/* harmony export */   Rv: () => (/* binding */ isEventSignature),
/* harmony export */   WL: () => (/* binding */ isStructSignature),
/* harmony export */   Yo: () => (/* binding */ execConstructorSignature),
/* harmony export */   ej: () => (/* binding */ execFunctionSignature),
/* harmony export */   fC: () => (/* binding */ eventModifiers),
/* harmony export */   iB: () => (/* binding */ execEventSignature),
/* harmony export */   kz: () => (/* binding */ execErrorSignature),
/* harmony export */   l9: () => (/* binding */ isConstructorSignature),
/* harmony export */   pc: () => (/* binding */ isErrorSignature),
/* harmony export */   sP: () => (/* binding */ isReceiveSignature),
/* harmony export */   v7: () => (/* binding */ functionModifiers),
/* harmony export */   v8: () => (/* binding */ isFallbackSignature)
/* harmony export */ });
/* unused harmony export modifiers */
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7296);

// https://regexr.com/7gmok
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(errorSignatureRegex, signature);
}
// https://regexr.com/7gmoq
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(eventSignatureRegex, signature);
}
// https://regexr.com/7gmot
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(functionSignatureRegex, signature);
}
// https://regexr.com/7gmp3
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(structSignatureRegex, signature);
}
// https://regexr.com/78u01
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0,_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .execTyped */ .Yv)(constructorSignatureRegex, signature);
}
// https://regexr.com/7srtn
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
// https://regexr.com/78u1k
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
const modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata',
]);
const eventModifiers = new Set(['indexed']);
const functionModifiers = new Set([
    'calldata',
    'memory',
    'storage',
]);
//# sourceMappingURL=signatures.js.map

/***/ }),

/***/ 5729:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ parseStructs)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7296);
/* harmony import */ var _errors_abiItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3075);
/* harmony import */ var _errors_abiParameter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7765);
/* harmony import */ var _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3264);
/* harmony import */ var _errors_struct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8393);
/* harmony import */ var _signatures_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6592);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1702);







function parseStructs(signatures) {
    // Create "shallow" version of each struct (and filter out non-structs or invalid structs)
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for (let i = 0; i < signaturesLength; i++) {
        const signature = signatures[i];
        if (!(0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .isStructSignature */ .WL)(signature))
            continue;
        const match = (0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .execStructSignature */ .FO)(signature);
        if (!match)
            throw new _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidSignatureError */ .s7({ signature, type: 'struct' });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for (let k = 0; k < propertiesLength; k++) {
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed)
                continue;
            const abiParameter = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .parseAbiParameter */ .Pj)(trimmed, {
                type: 'struct',
            });
            components.push(abiParameter);
        }
        if (!components.length)
            throw new _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidStructSignatureError */ .X9({ signature });
        shallowStructs[match.name] = components;
    }
    // Resolve nested structs inside each parameter
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for (let i = 0; i < entriesLength; i++) {
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters, structs, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for (let i = 0; i < length; i++) {
        const abiParameter = abiParameters[i];
        const isTuple = _regex_js__WEBPACK_IMPORTED_MODULE_3__/* .isTupleRegex */ .wj.test(abiParameter.type);
        if (isTuple)
            components.push(abiParameter);
        else {
            const match = (0,_regex_js__WEBPACK_IMPORTED_MODULE_3__/* .execTyped */ .Yv)(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type)
                throw new _errors_abiParameter_js__WEBPACK_IMPORTED_MODULE_4__/* .InvalidAbiTypeParameterError */ .nx({ abiParameter });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type))
                    throw new _errors_struct_js__WEBPACK_IMPORTED_MODULE_5__/* .CircularReferenceError */ .F({ type });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ''}`,
                    components: resolveStructs(structs[type] ?? [], structs, new Set([...ancestors, type])),
                });
            }
            else {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .isSolidityType */ ._o)(type))
                    components.push(abiParameter);
                else
                    throw new _errors_abiItem_js__WEBPACK_IMPORTED_MODULE_6__/* .UnknownTypeError */ .zz({ type });
            }
        }
    }
    return components;
}
//# sourceMappingURL=structs.js.map

/***/ }),

/***/ 1702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pj: () => (/* binding */ parseAbiParameter),
/* harmony export */   _o: () => (/* binding */ isSolidityType),
/* harmony export */   uT: () => (/* binding */ parseSignature)
/* harmony export */ });
/* unused harmony exports splitParameters, isSolidityKeyword, isValidDataLocation */
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7296);
/* harmony import */ var _errors_abiItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3075);
/* harmony import */ var _errors_abiParameter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7765);
/* harmony import */ var _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3264);
/* harmony import */ var _errors_splitParameters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2522);
/* harmony import */ var _cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5317);
/* harmony import */ var _signatures_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6592);







function parseSignature(signature, structs = {}) {
    if ((0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunctionSignature */ .Ji)(signature)) {
        const match = (0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .execFunctionSignature */ .ej)(signature);
        if (!match)
            throw new _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidSignatureError */ .s7({ signature, type: 'function' });
        const inputParams = splitParameters(match.parameters);
        const inputs = [];
        const inputLength = inputParams.length;
        for (let i = 0; i < inputLength; i++) {
            inputs.push(parseAbiParameter(inputParams[i], {
                modifiers: _signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .functionModifiers */ .v7,
                structs,
                type: 'function',
            }));
        }
        const outputs = [];
        if (match.returns) {
            const outputParams = splitParameters(match.returns);
            const outputLength = outputParams.length;
            for (let i = 0; i < outputLength; i++) {
                outputs.push(parseAbiParameter(outputParams[i], {
                    modifiers: _signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .functionModifiers */ .v7,
                    structs,
                    type: 'function',
                }));
            }
        }
        return {
            name: match.name,
            type: 'function',
            stateMutability: match.stateMutability ?? 'nonpayable',
            inputs,
            outputs,
        };
    }
    if ((0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .isEventSignature */ .Rv)(signature)) {
        const match = (0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .execEventSignature */ .iB)(signature);
        if (!match)
            throw new _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidSignatureError */ .s7({ signature, type: 'event' });
        const params = splitParameters(match.parameters);
        const abiParameters = [];
        const length = params.length;
        for (let i = 0; i < length; i++) {
            abiParameters.push(parseAbiParameter(params[i], {
                modifiers: _signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .eventModifiers */ .fC,
                structs,
                type: 'event',
            }));
        }
        return { name: match.name, type: 'event', inputs: abiParameters };
    }
    if ((0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .isErrorSignature */ .pc)(signature)) {
        const match = (0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .execErrorSignature */ .kz)(signature);
        if (!match)
            throw new _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidSignatureError */ .s7({ signature, type: 'error' });
        const params = splitParameters(match.parameters);
        const abiParameters = [];
        const length = params.length;
        for (let i = 0; i < length; i++) {
            abiParameters.push(parseAbiParameter(params[i], { structs, type: 'error' }));
        }
        return { name: match.name, type: 'error', inputs: abiParameters };
    }
    if ((0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .isConstructorSignature */ .l9)(signature)) {
        const match = (0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .execConstructorSignature */ .Yo)(signature);
        if (!match)
            throw new _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidSignatureError */ .s7({ signature, type: 'constructor' });
        const params = splitParameters(match.parameters);
        const abiParameters = [];
        const length = params.length;
        for (let i = 0; i < length; i++) {
            abiParameters.push(parseAbiParameter(params[i], { structs, type: 'constructor' }));
        }
        return {
            type: 'constructor',
            stateMutability: match.stateMutability ?? 'nonpayable',
            inputs: abiParameters,
        };
    }
    if ((0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .isFallbackSignature */ .v8)(signature))
        return { type: 'fallback' };
    if ((0,_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .isReceiveSignature */ .sP)(signature))
        return {
            type: 'receive',
            stateMutability: 'payable',
        };
    throw new _errors_signature_js__WEBPACK_IMPORTED_MODULE_1__/* .UnknownSignatureError */ .x8({ signature });
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    // optional namespace cache by `type`
    const parameterCacheKey = (0,_cache_js__WEBPACK_IMPORTED_MODULE_2__/* .getParameterCacheKey */ .B)(param, options?.type);
    if (_cache_js__WEBPACK_IMPORTED_MODULE_2__/* .parameterCache */ .G.has(parameterCacheKey))
        return _cache_js__WEBPACK_IMPORTED_MODULE_2__/* .parameterCache */ .G.get(parameterCacheKey);
    const isTuple = _regex_js__WEBPACK_IMPORTED_MODULE_3__/* .isTupleRegex */ .wj.test(param);
    const match = (0,_regex_js__WEBPACK_IMPORTED_MODULE_3__/* .execTyped */ .Yv)(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match)
        throw new _errors_abiParameter_js__WEBPACK_IMPORTED_MODULE_4__/* .InvalidParameterError */ .dV({ param });
    if (match.name && isSolidityKeyword(match.name))
        throw new _errors_abiParameter_js__WEBPACK_IMPORTED_MODULE_4__/* .SolidityProtectedKeywordError */ .zd({ param, name: match.name });
    const name = match.name ? { name: match.name } : {};
    const indexed = match.modifier === 'indexed' ? { indexed: true } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for (let i = 0; i < length; i++) {
            // remove `modifiers` from `options` to prevent from being added to tuple components
            components_.push(parseAbiParameter(params[i], { structs }));
        }
        components = { components: components_ };
    }
    else if (match.type in structs) {
        type = 'tuple';
        components = { components: structs[match.type] };
    }
    else if (dynamicIntegerRegex.test(match.type)) {
        type = `${match.type}256`;
    }
    else {
        type = match.type;
        if (!(options?.type === 'struct') && !isSolidityType(type))
            throw new _errors_abiItem_js__WEBPACK_IMPORTED_MODULE_5__/* .UnknownSolidityTypeError */ .UG({ type });
    }
    if (match.modifier) {
        // Check if modifier exists, but is not allowed (e.g. `indexed` in `functionModifiers`)
        if (!options?.modifiers?.has?.(match.modifier))
            throw new _errors_abiParameter_js__WEBPACK_IMPORTED_MODULE_4__/* .InvalidModifierError */ .NO({
                param,
                type: options?.type,
                modifier: match.modifier,
            });
        // Check if resolved `type` is valid if there is a function modifier
        if (_signatures_js__WEBPACK_IMPORTED_MODULE_0__/* .functionModifiers */ .v7.has(match.modifier) &&
            !isValidDataLocation(type, !!match.array))
            throw new _errors_abiParameter_js__WEBPACK_IMPORTED_MODULE_4__/* .InvalidFunctionModifierError */ .Pj({
                param,
                type: options?.type,
                modifier: match.modifier,
            });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ''}`,
        ...name,
        ...indexed,
        ...components,
    };
    _cache_js__WEBPACK_IMPORTED_MODULE_2__/* .parameterCache */ .G.set(parameterCacheKey, abiParameter);
    return abiParameter;
}
// s/o latika for this
function splitParameters(params, result = [], current = '', depth = 0) {
    const length = params.trim().length;
    // biome-ignore lint/correctness/noUnreachable: recursive
    for (let i = 0; i < length; i++) {
        const char = params[i];
        const tail = params.slice(i + 1);
        switch (char) {
            case ',':
                return depth === 0
                    ? splitParameters(tail, [...result, current.trim()])
                    : splitParameters(tail, result, `${current}${char}`, depth);
            case '(':
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ')':
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === '')
        return result;
    if (depth !== 0)
        throw new _errors_splitParameters_js__WEBPACK_IMPORTED_MODULE_6__/* .InvalidParenthesisError */ .I({ current, depth });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return (type === 'address' ||
        type === 'bool' ||
        type === 'function' ||
        type === 'string' ||
        _regex_js__WEBPACK_IMPORTED_MODULE_3__/* .bytesRegex */ .BD.test(type) ||
        _regex_js__WEBPACK_IMPORTED_MODULE_3__/* .integerRegex */ .Ge.test(type));
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
/** @internal */
function isSolidityKeyword(name) {
    return (name === 'address' ||
        name === 'bool' ||
        name === 'function' ||
        name === 'string' ||
        name === 'tuple' ||
        _regex_js__WEBPACK_IMPORTED_MODULE_3__/* .bytesRegex */ .BD.test(name) ||
        _regex_js__WEBPACK_IMPORTED_MODULE_3__/* .integerRegex */ .Ge.test(name) ||
        protectedKeywordsRegex.test(name));
}
/** @internal */
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 7296:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BD: () => (/* binding */ bytesRegex),
/* harmony export */   Ge: () => (/* binding */ integerRegex),
/* harmony export */   Yv: () => (/* binding */ execTyped),
/* harmony export */   wj: () => (/* binding */ isTupleRegex)
/* harmony export */ });
// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
// `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
// https://regexr.com/6va55
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
// `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
// https://regexr.com/6v8hp
const integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/;
//# sourceMappingURL=regex.js.map

/***/ }),

/***/ 1159:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ version)
/* harmony export */ });
const version = '1.0.5';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 2428:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ parseAccount)
/* harmony export */ });
function parseAccount(account) {
    if (typeof account === 'string')
        return { address: account, type: 'json-rpc' };
    return account;
}
//# sourceMappingURL=parseAccount.js.map

/***/ }),

/***/ 9465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ publicKeyToAddress)
/* harmony export */ });
/* harmony import */ var _utils_address_getAddress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5458);
/* harmony import */ var _utils_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3387);


/**
 * @description Converts an ECDSA public key to an address.
 *
 * @param publicKey The public key to convert.
 *
 * @returns The address.
 */
function publicKeyToAddress(publicKey) {
    const address = (0,_utils_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .S)(`0x${publicKey.substring(4)}`).substring(26);
    return (0,_utils_address_getAddress_js__WEBPACK_IMPORTED_MODULE_1__/* .checksumAddress */ .o)(`0x${address}`);
}
//# sourceMappingURL=publicKeyToAddress.js.map

/***/ }),

/***/ 70:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getEnsAddress)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2836);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7576);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5674);
/* harmony import */ var _utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6140);
/* harmony import */ var _utils_data_trim_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(582);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4031);
/* harmony import */ var _utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4045);
/* harmony import */ var _utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1433);
/* harmony import */ var _utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(428);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3821);
/* harmony import */ var _public_readContract_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9321);











/**
 * Gets address for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAddress
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAddressParameters}
 * @returns Address for ENS name or `null` if not found. {@link GetEnsAddressReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAddress, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAddress = await getEnsAddress(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // '0xd2135CfB216b74109775236E36d4b433F1DF507B'
 */
async function getEnsAddress(client, { blockNumber, blockTag, coinType, name, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0,_utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .getChainContractAddress */ .M)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    try {
        const functionData = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeFunctionData */ .p)({
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__/* .addressResolverAbi */ .Rm,
            functionName: 'addr',
            ...(coinType != null
                ? { args: [(0,_utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_3__/* .namehash */ .k)(name), BigInt(coinType)] }
                : { args: [(0,_utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_3__/* .namehash */ .k)(name)] }),
        });
        const readContractParameters = {
            address: universalResolverAddress,
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__/* .universalResolverResolveAbi */ .Ag,
            functionName: 'resolve',
            args: [(0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .toHex */ .nj)((0,_utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_5__/* .packetToBytes */ .F)(name)), functionData],
            blockNumber,
            blockTag,
        };
        const readContractAction = (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_6__/* .getAction */ .T)(client, _public_readContract_js__WEBPACK_IMPORTED_MODULE_7__/* .readContract */ .J, 'readContract');
        const res = gatewayUrls
            ? await readContractAction({
                ...readContractParameters,
                args: [...readContractParameters.args, gatewayUrls],
            })
            : await readContractAction(readContractParameters);
        if (res[0] === '0x')
            return null;
        const address = (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_8__/* .decodeFunctionResult */ .e)({
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__/* .addressResolverAbi */ .Rm,
            args: coinType != null ? [(0,_utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_3__/* .namehash */ .k)(name), BigInt(coinType)] : undefined,
            functionName: 'addr',
            data: res[0],
        });
        if (address === '0x')
            return null;
        if ((0,_utils_data_trim_js__WEBPACK_IMPORTED_MODULE_9__/* .trim */ .B)(address) === '0x00')
            return null;
        return address;
    }
    catch (err) {
        if (strict)
            throw err;
        if ((0,_utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_10__/* .isNullUniversalResolverError */ .J)(err, 'resolve'))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsAddress.js.map

/***/ }),

/***/ 3193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ getEnsAvatar)
/* harmony export */ });
/* harmony import */ var _utils_ens_avatar_parseAvatarRecord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3787);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3821);
/* harmony import */ var _getEnsText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9175);



/**
 * Gets the avatar of an ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAvatar
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls [`getEnsText`](https://viem.sh/docs/ens/actions/getEnsText) with `key` set to `'avatar'`.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAvatarParameters}
 * @returns Avatar URI or `null` if not found. {@link GetEnsAvatarReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAvatar, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAvatar = await getEnsAvatar(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // 'https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio'
 */
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress, }) {
    const record = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__/* .getAction */ .T)(client, _getEnsText_js__WEBPACK_IMPORTED_MODULE_1__/* .getEnsText */ .m, 'getEnsText')({
        blockNumber,
        blockTag,
        key: 'avatar',
        name,
        universalResolverAddress,
        gatewayUrls,
        strict,
    });
    if (!record)
        return null;
    try {
        return await (0,_utils_ens_avatar_parseAvatarRecord_js__WEBPACK_IMPORTED_MODULE_2__/* .parseAvatarRecord */ .w)(client, {
            record,
            gatewayUrls: assetGatewayUrls,
        });
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=getEnsAvatar.js.map

/***/ }),

/***/ 8723:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ getEnsName)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2836);
/* harmony import */ var _utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6140);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4031);
/* harmony import */ var _utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4045);
/* harmony import */ var _utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(428);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3821);
/* harmony import */ var _public_readContract_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9321);







/**
 * Gets primary name for specified address.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsName
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `reverse(bytes)` on ENS Universal Resolver Contract to "reverse resolve" the address to the primary ENS name.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsNameParameters}
 * @returns Name or `null` if not found. {@link GetEnsNameReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsName } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensName = await getEnsName(client, {
 *   address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 * })
 * // 'wevm.eth'
 */
async function getEnsName(client, { address, blockNumber, blockTag, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0,_utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .getChainContractAddress */ .M)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_1__/* .universalResolverReverseAbi */ .oX,
            functionName: 'reverse',
            args: [(0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .toHex */ .nj)((0,_utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_3__/* .packetToBytes */ .F)(reverseNode))],
            blockNumber,
            blockTag,
        };
        const readContractAction = (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_4__/* .getAction */ .T)(client, _public_readContract_js__WEBPACK_IMPORTED_MODULE_5__/* .readContract */ .J, 'readContract');
        const [name, resolvedAddress] = gatewayUrls
            ? await readContractAction({
                ...readContractParameters,
                args: [...readContractParameters.args, gatewayUrls],
            })
            : await readContractAction(readContractParameters);
        if (address.toLowerCase() !== resolvedAddress.toLowerCase())
            return null;
        return name;
    }
    catch (err) {
        if (strict)
            throw err;
        if ((0,_utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_6__/* .isNullUniversalResolverError */ .J)(err, 'reverse'))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsName.js.map

/***/ }),

/***/ 8826:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getEnsResolver)
/* harmony export */ });
/* harmony import */ var _utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6140);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4031);
/* harmony import */ var _utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(428);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3821);
/* harmony import */ var _public_readContract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9321);





/**
 * Gets resolver for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsResolver
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `findResolver(bytes)` on ENS Universal Resolver Contract to retrieve the resolver of an ENS name.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsResolverParameters}
 * @returns Address for ENS resolver. {@link GetEnsResolverReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsResolver, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const resolverAddress = await getEnsResolver(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
 */
async function getEnsResolver(client, { blockNumber, blockTag, name, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0,_utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .getChainContractAddress */ .M)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    const [resolverAddress] = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _public_readContract_js__WEBPACK_IMPORTED_MODULE_2__/* .readContract */ .J, 'readContract')({
        address: universalResolverAddress,
        abi: [
            {
                inputs: [{ type: 'bytes' }],
                name: 'findResolver',
                outputs: [{ type: 'address' }, { type: 'bytes32' }],
                stateMutability: 'view',
                type: 'function',
            },
        ],
        functionName: 'findResolver',
        args: [(0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__/* .toHex */ .nj)((0,_utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_4__/* .packetToBytes */ .F)(name))],
        blockNumber,
        blockTag,
    });
    return resolverAddress;
}
//# sourceMappingURL=getEnsResolver.js.map

/***/ }),

/***/ 9175:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ getEnsText)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2836);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7576);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5674);
/* harmony import */ var _utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6140);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4031);
/* harmony import */ var _utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4045);
/* harmony import */ var _utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1433);
/* harmony import */ var _utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(428);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3821);
/* harmony import */ var _public_readContract_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9321);










/**
 * Gets a text record for specified ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsResolver
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsTextParameters}
 * @returns Address for ENS resolver. {@link GetEnsTextReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsText, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const twitterRecord = await getEnsText(client, {
 *   name: normalize('wevm.eth'),
 *   key: 'com.twitter',
 * })
 * // 'wevm_dev'
 */
async function getEnsText(client, { blockNumber, blockTag, name, key, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0,_utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .getChainContractAddress */ .M)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_1__/* .universalResolverResolveAbi */ .Ag,
            functionName: 'resolve',
            args: [
                (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .toHex */ .nj)((0,_utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_3__/* .packetToBytes */ .F)(name)),
                (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_4__/* .encodeFunctionData */ .p)({
                    abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_1__/* .textResolverAbi */ .SJ,
                    functionName: 'text',
                    args: [(0,_utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_5__/* .namehash */ .k)(name), key],
                }),
            ],
            blockNumber,
            blockTag,
        };
        const readContractAction = (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_6__/* .getAction */ .T)(client, _public_readContract_js__WEBPACK_IMPORTED_MODULE_7__/* .readContract */ .J, 'readContract');
        const res = gatewayUrls
            ? await readContractAction({
                ...readContractParameters,
                args: [...readContractParameters.args, gatewayUrls],
            })
            : await readContractAction(readContractParameters);
        if (res[0] === '0x')
            return null;
        const record = (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_8__/* .decodeFunctionResult */ .e)({
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_1__/* .textResolverAbi */ .SJ,
            functionName: 'text',
            data: res[0],
        });
        return record === '' ? null : record;
    }
    catch (err) {
        if (strict)
            throw err;
        if ((0,_utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_9__/* .isNullUniversalResolverError */ .J)(err, 'resolve'))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsText.js.map

/***/ }),

/***/ 9959:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ call)
/* harmony export */ });
/* unused harmony export getRevertErrorData */
/* harmony import */ var abitype__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7273);
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2428);
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2836);
/* harmony import */ var _constants_contract_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3493);
/* harmony import */ var _constants_contracts_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3696);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5484);
/* harmony import */ var _errors_chain_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(212);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1063);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7576);
/* harmony import */ var _utils_abi_encodeDeployData_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1825);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5674);
/* harmony import */ var _utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6140);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4031);
/* harmony import */ var _utils_errors_getCallError_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8721);
/* harmony import */ var _utils_formatters_extract_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3918);
/* harmony import */ var _utils_formatters_transactionRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(806);
/* harmony import */ var _utils_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5664);
/* harmony import */ var _utils_stateOverride_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1106);
/* harmony import */ var _utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2335);



















/**
 * Executes a new message call immediately without submitting a transaction to the network.
 *
 * - Docs: https://viem.sh/docs/actions/public/call
 * - JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)
 *
 * @param client - Client to use
 * @param parameters - {@link CallParameters}
 * @returns The call data. {@link CallReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { call } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const data = await call(client, {
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 *   data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 * })
 */
async function call(client, args) {
    const { account: account_ = client.account, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = 'latest', accessList, blobs, code, data: data_, factory, factoryData, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
    const account = account_ ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAccount */ .J)(account_) : undefined;
    if (code && (factory || factoryData))
        throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_1__/* .BaseError */ .C('Cannot provide both `code` & `factory`/`factoryData` as parameters.');
    if (code && to)
        throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_1__/* .BaseError */ .C('Cannot provide both `code` & `to` as parameters.');
    // Check if the call is deployless via bytecode.
    const deploylessCallViaBytecode = code && data_;
    // Check if the call is deployless via a factory.
    const deploylessCallViaFactory = factory && factoryData && to && data_;
    const deploylessCall = deploylessCallViaBytecode || deploylessCallViaFactory;
    const data = (() => {
        if (deploylessCallViaBytecode)
            return toDeploylessCallViaBytecodeData({
                code,
                data: data_,
            });
        if (deploylessCallViaFactory)
            return toDeploylessCallViaFactoryData({
                data: data_,
                factory,
                factoryData,
                to,
            });
        return data_;
    })();
    try {
        (0,_utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_2__/* .assertRequest */ .c)(args);
        const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToHex */ .cK)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = (0,_utils_stateOverride_js__WEBPACK_IMPORTED_MODULE_4__/* .serializeStateOverride */ .yH)(stateOverride);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || _utils_formatters_transactionRequest_js__WEBPACK_IMPORTED_MODULE_5__/* .formatTransactionRequest */ .Bv;
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0,_utils_formatters_extract_js__WEBPACK_IMPORTED_MODULE_6__/* .extract */ .o)(rest, { format: chainFormat }),
            from: account?.address,
            accessList,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to: deploylessCall ? undefined : to,
            value,
        });
        if (batch && shouldPerformMulticall({ request }) && !rpcStateOverride) {
            try {
                return await scheduleMulticall(client, {
                    ...request,
                    blockNumber,
                    blockTag,
                });
            }
            catch (err) {
                if (!(err instanceof _errors_chain_js__WEBPACK_IMPORTED_MODULE_7__/* .ClientChainNotConfiguredError */ .YE) &&
                    !(err instanceof _errors_chain_js__WEBPACK_IMPORTED_MODULE_7__/* .ChainDoesNotSupportContract */ .rj))
                    throw err;
            }
        }
        const response = await client.request({
            method: 'eth_call',
            params: rpcStateOverride
                ? [
                    request,
                    block,
                    rpcStateOverride,
                ]
                : [request, block],
        });
        if (response === '0x')
            return { data: undefined };
        return { data: response };
    }
    catch (err) {
        const data = getRevertErrorData(err);
        // Check for CCIP-Read offchain lookup signature.
        const { offchainLookup, offchainLookupSignature } = await __webpack_require__.e(/* import() */ 680).then(__webpack_require__.bind(__webpack_require__, 3680));
        if (client.ccipRead !== false &&
            data?.slice(0, 10) === offchainLookupSignature &&
            to)
            return { data: await offchainLookup(client, { data, to }) };
        // Check for counterfactual deployment error.
        if (deploylessCall && data?.slice(0, 10) === '0x101bb98d')
            throw new _errors_contract_js__WEBPACK_IMPORTED_MODULE_8__/* .CounterfactualDeploymentFailedError */ .Po({ factory });
        throw (0,_utils_errors_getCallError_js__WEBPACK_IMPORTED_MODULE_9__/* .getCallError */ .d)(err, {
            ...args,
            account,
            chain: client.chain,
        });
    }
}
// We only want to perform a scheduled multicall if:
// - The request has calldata,
// - The request has a target address,
// - The target address is not already the aggregate3 signature,
// - The request has no other properties (`nonce`, `gas`, etc cannot be sent with a multicall).
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data)
        return false;
    if (data.startsWith(_constants_contract_js__WEBPACK_IMPORTED_MODULE_10__/* .aggregate3Signature */ .r))
        return false;
    if (!to)
        return false;
    if (Object.values(request_).filter((x) => typeof x !== 'undefined').length > 0)
        return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, wait = 0 } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const { blockNumber, blockTag = 'latest', data, multicallAddress: multicallAddress_, to, } = args;
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain)
            throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_7__/* .ClientChainNotConfiguredError */ .YE();
        multicallAddress = (0,_utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_11__/* .getChainContractAddress */ .M)({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3',
        });
    }
    const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToHex */ .cK)(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0,_utils_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_12__/* .createBatchScheduler */ .u)({
        id: `${client.uid}.${block}`,
        wait,
        shouldSplitBatch(args) {
            const size = args.reduce((size, { data }) => size + (data.length - 2), 0);
            return size > batchSize * 2;
        },
        fn: async (requests) => {
            const calls = requests.map((request) => ({
                allowFailure: true,
                callData: request.data,
                target: request.to,
            }));
            const calldata = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_13__/* .encodeFunctionData */ .p)({
                abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_14__/* .multicall3Abi */ .v2,
                args: [calls],
                functionName: 'aggregate3',
            });
            const data = await client.request({
                method: 'eth_call',
                params: [
                    {
                        data: calldata,
                        to: multicallAddress,
                    },
                    block,
                ],
            });
            return (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_15__/* .decodeFunctionResult */ .e)({
                abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_14__/* .multicall3Abi */ .v2,
                args: [calls],
                functionName: 'aggregate3',
                data: data || '0x',
            });
        },
    });
    const [{ returnData, success }] = await schedule({ data, to });
    if (!success)
        throw new _errors_contract_js__WEBPACK_IMPORTED_MODULE_8__/* .RawContractError */ .$S({ data: returnData });
    if (returnData === '0x')
        return { data: undefined };
    return { data: returnData };
}
function toDeploylessCallViaBytecodeData(parameters) {
    const { code, data } = parameters;
    return (0,_utils_abi_encodeDeployData_js__WEBPACK_IMPORTED_MODULE_16__/* .encodeDeployData */ .m)({
        abi: (0,abitype__WEBPACK_IMPORTED_MODULE_17__/* .parseAbi */ .U)(['constructor(bytes, bytes)']),
        bytecode: _constants_contracts_js__WEBPACK_IMPORTED_MODULE_18__/* .deploylessCallViaBytecodeBytecode */ .LX,
        args: [code, data],
    });
}
function toDeploylessCallViaFactoryData(parameters) {
    const { data, factory, factoryData, to } = parameters;
    return (0,_utils_abi_encodeDeployData_js__WEBPACK_IMPORTED_MODULE_16__/* .encodeDeployData */ .m)({
        abi: (0,abitype__WEBPACK_IMPORTED_MODULE_17__/* .parseAbi */ .U)(['constructor(address, bytes, address, bytes)']),
        bytecode: _constants_contracts_js__WEBPACK_IMPORTED_MODULE_18__/* .deploylessCallViaFactoryBytecode */ .WN,
        args: [to, data, factory, factoryData],
    });
}
/** @internal */
function getRevertErrorData(err) {
    if (!(err instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_1__/* .BaseError */ .C))
        return undefined;
    const error = err.walk();
    return typeof error?.data === 'object' ? error.data?.data : error.data;
}
//# sourceMappingURL=call.js.map

/***/ }),

/***/ 7332:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ createBlockFilter)
/* harmony export */ });
/* harmony import */ var _utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5154);

/**
 * Creates a [`Filter`](https://viem.sh/docs/glossary/types#filter) to listen for new block hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).
 *
 * - Docs: https://viem.sh/docs/actions/public/createBlockFilter
 * - JSON-RPC Methods: [`eth_newBlockFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newBlockFilter)
 *
 * @param client - Client to use
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateBlockFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createBlockFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createBlockFilter(client)
 * // { id: "0x345a6572337856574a76364e457a4366", type: 'block' }
 */
async function createBlockFilter(client) {
    const getRequest = (0,_utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__/* .createFilterRequestScope */ .g)(client, {
        method: 'eth_newBlockFilter',
    });
    const id = await client.request({
        method: 'eth_newBlockFilter',
    });
    return { id, request: getRequest(id), type: 'block' };
}
//# sourceMappingURL=createBlockFilter.js.map

/***/ }),

/***/ 3587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ createContractEventFilter)
/* harmony export */ });
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9824);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4031);
/* harmony import */ var _utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5154);



/**
 * Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs).
 *
 * - Docs: https://viem.sh/docs/contract/createContractEventFilter
 *
 * @param client - Client to use
 * @param parameters - {@link CreateContractEventFilterParameters}
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateContractEventFilterReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createContractEventFilter } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createContractEventFilter(client, {
 *   abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
 * })
 */
async function createContractEventFilter(client, parameters) {
    const { address, abi, args, eventName, fromBlock, strict, toBlock } = parameters;
    const getRequest = (0,_utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__/* .createFilterRequestScope */ .g)(client, {
        method: 'eth_newFilter',
    });
    const topics = eventName
        ? (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeEventTopics */ .R)({
            abi,
            args,
            eventName,
        })
        : undefined;
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(toBlock) : toBlock,
                topics,
            },
        ],
    });
    return {
        abi,
        args,
        eventName,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        type: 'event',
    };
}
//# sourceMappingURL=createContractEventFilter.js.map

/***/ }),

/***/ 137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ createEventFilter)
/* harmony export */ });
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9824);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4031);
/* harmony import */ var _utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5154);



/**
 * Creates a [`Filter`](https://viem.sh/docs/glossary/types#filter) to listen for new events that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).
 *
 * - Docs: https://viem.sh/docs/actions/public/createEventFilter
 * - JSON-RPC Methods: [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)
 *
 * @param client - Client to use
 * @param parameters - {@link CreateEventFilterParameters}
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateEventFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xfba3912ca04dd458c843e2ee08967fc04f3579c2',
 * })
 */
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock, } = {}) {
    const events = events_ ?? (event ? [event] : undefined);
    const getRequest = (0,_utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__/* .createFilterRequestScope */ .g)(client, {
        method: 'eth_newFilter',
    });
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event) => (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeEventTopics */ .R)({
            abi: [event],
            eventName: event.name,
            args,
        }));
        // TODO: Clean up type casting
        topics = [encoded];
        if (event)
            topics = topics[0];
    }
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(toBlock) : toBlock,
                ...(topics.length ? { topics } : {}),
            },
        ],
    });
    return {
        abi: events,
        args,
        eventName: event ? event.name : undefined,
        fromBlock,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        toBlock,
        type: 'event',
    };
}
//# sourceMappingURL=createEventFilter.js.map

/***/ }),

/***/ 4328:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ createPendingTransactionFilter)
/* harmony export */ });
/* harmony import */ var _utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5154);

/**
 * Creates a Filter to listen for new pending transaction hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).
 *
 * - Docs: https://viem.sh/docs/actions/public/createPendingTransactionFilter
 * - JSON-RPC Methods: [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)
 *
 * @param client - Client to use
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateBlockFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createPendingTransactionFilter(client)
 * // { id: "0x345a6572337856574a76364e457a4366", type: 'transaction' }
 */
async function createPendingTransactionFilter(client) {
    const getRequest = (0,_utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__/* .createFilterRequestScope */ .g)(client, {
        method: 'eth_newPendingTransactionFilter',
    });
    const id = await client.request({
        method: 'eth_newPendingTransactionFilter',
    });
    return { id, request: getRequest(id), type: 'transaction' };
}
//# sourceMappingURL=createPendingTransactionFilter.js.map

/***/ }),

/***/ 8442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ estimateContractGas)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2428);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5674);
/* harmony import */ var _utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4459);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3821);
/* harmony import */ var _estimateGas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8732);





/**
 * Estimates the gas required to successfully execute a contract write function call.
 *
 * - Docs: https://viem.sh/docs/contract/estimateContractGas
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`estimateGas` action](https://viem.sh/docs/actions/public/estimateGas) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateContractGasParameters}
 * @returns The gas estimate (in wei). {@link EstimateContractGasReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateContractGas } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gas = await estimateContractGas(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function mint() public']),
 *   functionName: 'mint',
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 * })
 */
async function estimateContractGas(client, parameters) {
    const { abi, address, args, functionName, ...request } = parameters;
    const data = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeFunctionData */ .p)({
        abi,
        args,
        functionName,
    });
    try {
        const gas = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _estimateGas_js__WEBPACK_IMPORTED_MODULE_2__/* .estimateGas */ .Q, 'estimateGas')({
            data,
            to: address,
            ...request,
        });
        return gas;
    }
    catch (error) {
        const account = request.account ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_3__/* .parseAccount */ .J)(request.account) : undefined;
        throw (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_4__/* .getContractError */ .j)(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/estimateContractGas',
            functionName,
            sender: account?.address,
        });
    }
}
//# sourceMappingURL=estimateContractGas.js.map

/***/ }),

/***/ 9988:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ internal_estimateFeesPerGas),
/* harmony export */   _: () => (/* binding */ estimateFeesPerGas)
/* harmony export */ });
/* harmony import */ var _errors_fee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5381);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3821);
/* harmony import */ var _estimateMaxPriorityFeePerGas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2591);
/* harmony import */ var _getBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3190);
/* harmony import */ var _getGasPrice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8577);





/**
 * Returns an estimate for the fees per gas (in wei) for a
 * transaction to be likely included in the next block.
 * Defaults to [`chain.fees.estimateFeesPerGas`](/docs/clients/chains#fees-estimatefeespergas) if set.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateFeesPerGas
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateFeesPerGasParameters}
 * @returns An estimate (in wei) for the fees per gas. {@link EstimateFeesPerGasReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateFeesPerGas } from 'viem/actions'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const maxPriorityFeePerGas = await estimateFeesPerGas(client)
 * // { maxFeePerGas: ..., maxPriorityFeePerGas: ... }
 */
async function estimateFeesPerGas(client, args) {
    return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
    const { block: block_, chain = client.chain, request, type = 'eip1559', } = args || {};
    const baseFeeMultiplier = await (async () => {
        if (typeof chain?.fees?.baseFeeMultiplier === 'function')
            return chain.fees.baseFeeMultiplier({
                block: block_,
                client,
                request,
            });
        return chain?.fees?.baseFeeMultiplier ?? 1.2;
    })();
    if (baseFeeMultiplier < 1)
        throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseFeeScalarError */ .sM();
    const decimals = baseFeeMultiplier.toString().split('.')[1]?.length ?? 0;
    const denominator = 10 ** decimals;
    const multiply = (base) => (base * BigInt(Math.ceil(baseFeeMultiplier * denominator))) /
        BigInt(denominator);
    const block = block_
        ? block_
        : await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _getBlock_js__WEBPACK_IMPORTED_MODULE_2__/* .getBlock */ .g, 'getBlock')({});
    if (typeof chain?.fees?.estimateFeesPerGas === 'function') {
        const fees = (await chain.fees.estimateFeesPerGas({
            block: block_,
            client,
            multiply,
            request,
            type,
        }));
        if (fees !== null)
            return fees;
    }
    if (type === 'eip1559') {
        if (typeof block.baseFeePerGas !== 'bigint')
            throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_0__/* .Eip1559FeesNotSupportedError */ .pw();
        const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === 'bigint'
            ? request.maxPriorityFeePerGas
            : await (0,_estimateMaxPriorityFeePerGas_js__WEBPACK_IMPORTED_MODULE_3__/* .internal_estimateMaxPriorityFeePerGas */ .N)(client, {
                block: block,
                chain,
                request,
            });
        const baseFeePerGas = multiply(block.baseFeePerGas);
        const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas,
        };
    }
    const gasPrice = request?.gasPrice ??
        multiply(await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _getGasPrice_js__WEBPACK_IMPORTED_MODULE_4__/* .getGasPrice */ .L, 'getGasPrice')({}));
    return {
        gasPrice,
    };
}
//# sourceMappingURL=estimateFeesPerGas.js.map

/***/ }),

/***/ 8732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ estimateGas)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2428);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5484);
/* harmony import */ var _experimental_eip7702_utils_recoverAuthorizationAddress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7360);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4031);
/* harmony import */ var _utils_errors_getEstimateGasError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1012);
/* harmony import */ var _utils_formatters_extract_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3918);
/* harmony import */ var _utils_formatters_transactionRequest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(806);
/* harmony import */ var _utils_stateOverride_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1106);
/* harmony import */ var _utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2335);
/* harmony import */ var _wallet_prepareTransactionRequest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4173);
/* harmony import */ var _getBalance_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7351);











/**
 * Estimates the gas necessary to complete a transaction without submitting it to the network.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateGas
 * - JSON-RPC Methods: [`eth_estimateGas`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateGasParameters}
 * @returns The gas estimate (in wei). {@link EstimateGasReturnType}
 *
 * @example
 * import { createPublicClient, http, parseEther } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateGas } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gasEstimate = await estimateGas(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *   value: parseEther('1'),
 * })
 */
async function estimateGas(client, args) {
    const account_ = args.account ?? client.account;
    const account = account_ ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAccount */ .J)(account_) : undefined;
    try {
        const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = (await (0,_wallet_prepareTransactionRequest_js__WEBPACK_IMPORTED_MODULE_1__/* .prepareTransactionRequest */ .f)(client, {
            ...args,
            parameters: 
            // Some RPC Providers do not compute versioned hashes from blobs. We will need
            // to compute them.
            account?.type === 'local' ? undefined : ['blobVersionedHashes'],
        }));
        const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = (0,_utils_stateOverride_js__WEBPACK_IMPORTED_MODULE_3__/* .serializeStateOverride */ .yH)(stateOverride);
        const to = await (async () => {
            // If `to` exists on the parameters, use that.
            if (rest.to)
                return rest.to;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (authorizationList && authorizationList.length > 0)
                return await (0,_experimental_eip7702_utils_recoverAuthorizationAddress_js__WEBPACK_IMPORTED_MODULE_4__/* .recoverAuthorizationAddress */ .g)({
                    authorization: authorizationList[0],
                }).catch(() => {
                    throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_5__/* .BaseError */ .C('`to` is required. Could not infer from `authorizationList`');
                });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        (0,_utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_6__/* .assertRequest */ .c)(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || _utils_formatters_transactionRequest_js__WEBPACK_IMPORTED_MODULE_7__/* .formatTransactionRequest */ .Bv;
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0,_utils_formatters_extract_js__WEBPACK_IMPORTED_MODULE_8__/* .extract */ .o)(rest, { format: chainFormat }),
            from: account?.address,
            accessList,
            authorizationList,
            blobs,
            blobVersionedHashes,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value,
        });
        function estimateGas_rpc(parameters) {
            const { block, request, rpcStateOverride } = parameters;
            return client.request({
                method: 'eth_estimateGas',
                params: rpcStateOverride
                    ? [request, block ?? 'latest', rpcStateOverride]
                    : block
                        ? [request, block]
                        : [request],
            });
        }
        let estimate = BigInt(await estimateGas_rpc({ block, request, rpcStateOverride }));
        // TODO(7702): Remove this once https://github.com/ethereum/execution-apis/issues/561 is resolved.
        //       Authorization list schema is not implemented on JSON-RPC spec yet, so we need to
        //       manually estimate the gas.
        if (authorizationList) {
            const value = await (0,_getBalance_js__WEBPACK_IMPORTED_MODULE_9__/* .getBalance */ .r)(client, { address: request.from });
            const estimates = await Promise.all(authorizationList.map(async (authorization) => {
                const { contractAddress } = authorization;
                const estimate = await estimateGas_rpc({
                    block,
                    request: {
                        authorizationList: undefined,
                        data,
                        from: account?.address,
                        to: contractAddress,
                        value: (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(value),
                    },
                    rpcStateOverride,
                }).catch(() => 100000n);
                return 2n * BigInt(estimate);
            }));
            estimate += estimates.reduce((acc, curr) => acc + curr, 0n);
        }
        return estimate;
    }
    catch (err) {
        throw (0,_utils_errors_getEstimateGasError_js__WEBPACK_IMPORTED_MODULE_10__/* .getEstimateGasError */ .Y)(err, {
            ...args,
            account,
            chain: client.chain,
        });
    }
}
//# sourceMappingURL=estimateGas.js.map

/***/ }),

/***/ 2591:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ internal_estimateMaxPriorityFeePerGas),
/* harmony export */   b: () => (/* binding */ estimateMaxPriorityFeePerGas)
/* harmony export */ });
/* harmony import */ var _errors_fee_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5381);
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1732);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3821);
/* harmony import */ var _getBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3190);
/* harmony import */ var _getGasPrice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8577);





/**
 * Returns an estimate for the max priority fee per gas (in wei) for a
 * transaction to be likely included in the next block.
 * Defaults to [`chain.fees.defaultPriorityFee`](/docs/clients/chains#fees-defaultpriorityfee) if set.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas
 *
 * @param client - Client to use
 * @returns An estimate (in wei) for the max priority fee per gas. {@link EstimateMaxPriorityFeePerGasReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateMaxPriorityFeePerGas } from 'viem/actions'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const maxPriorityFeePerGas = await estimateMaxPriorityFeePerGas(client)
 * // 10000000n
 */
async function estimateMaxPriorityFeePerGas(client, args) {
    return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
    const { block: block_, chain = client.chain, request } = args || {};
    try {
        const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
        if (typeof maxPriorityFeePerGas === 'function') {
            const block = block_ || (await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__/* .getAction */ .T)(client, _getBlock_js__WEBPACK_IMPORTED_MODULE_1__/* .getBlock */ .g, 'getBlock')({}));
            const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
                block,
                client,
                request,
            });
            if (maxPriorityFeePerGas_ === null)
                throw new Error();
            return maxPriorityFeePerGas_;
        }
        if (typeof maxPriorityFeePerGas !== 'undefined')
            return maxPriorityFeePerGas;
        const maxPriorityFeePerGasHex = await client.request({
            method: 'eth_maxPriorityFeePerGas',
        });
        return (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_2__/* .hexToBigInt */ .uU)(maxPriorityFeePerGasHex);
    }
    catch {
        // If the RPC Provider does not support `eth_maxPriorityFeePerGas`
        // fall back to calculating it manually via `gasPrice - baseFeePerGas`.
        // See: https://github.com/ethereum/pm/issues/328#:~:text=eth_maxPriorityFeePerGas%20after%20London%20will%20effectively%20return%20eth_gasPrice%20%2D%20baseFee
        const [block, gasPrice] = await Promise.all([
            block_
                ? Promise.resolve(block_)
                : (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__/* .getAction */ .T)(client, _getBlock_js__WEBPACK_IMPORTED_MODULE_1__/* .getBlock */ .g, 'getBlock')({}),
            (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__/* .getAction */ .T)(client, _getGasPrice_js__WEBPACK_IMPORTED_MODULE_3__/* .getGasPrice */ .L, 'getGasPrice')({}),
        ]);
        if (typeof block.baseFeePerGas !== 'bigint')
            throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_4__/* .Eip1559FeesNotSupportedError */ .pw();
        const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
        if (maxPriorityFeePerGas < 0n)
            return 0n;
        return maxPriorityFeePerGas;
    }
}
//# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map

/***/ }),

/***/ 7351:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ getBalance)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);

/**
 * Returns the balance of an address in wei.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBalance
 * - JSON-RPC Methods: [`eth_getBalance`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)
 *
 * You can convert the balance to ether units with [`formatEther`](https://viem.sh/docs/utilities/formatEther).
 *
 * ```ts
 * const balance = await getBalance(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   blockTag: 'safe'
 * })
 * const balanceAsEther = formatEther(balance)
 * // "6.942"
 * ```
 *
 * @param client - Client to use
 * @param parameters - {@link GetBalanceParameters}
 * @returns The balance of the address in wei. {@link GetBalanceReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBalance } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const balance = await getBalance(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 * // 10000000000000000000000n (wei)
 */
async function getBalance(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : undefined;
    const balance = await client.request({
        method: 'eth_getBalance',
        params: [address, blockNumberHex || blockTag],
    });
    return BigInt(balance);
}
//# sourceMappingURL=getBalance.js.map

/***/ }),

/***/ 9469:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ getBlobBaseFee)
/* harmony export */ });
/**
 * Returns the base fee per blob gas in wei.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlobBaseFee
 * - JSON-RPC Methods: [`eth_blobBaseFee`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blobBaseFee)
 *
 * @param client - Client to use
 * @returns The blob base fee (in wei). {@link GetBlobBaseFeeReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlobBaseFee } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const blobBaseFee = await getBlobBaseFee(client)
 */
async function getBlobBaseFee(client) {
    const baseFee = await client.request({
        method: 'eth_blobBaseFee',
    });
    return BigInt(baseFee);
}
//# sourceMappingURL=getBlobBaseFee.js.map

/***/ }),

/***/ 3190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getBlock)
/* harmony export */ });
/* harmony import */ var _errors_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4484);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);
/* harmony import */ var _utils_formatters_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1566);



/**
 * Returns information about a block at a block number, hash, or tag.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlock
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/fetching-blocks
 * - JSON-RPC Methods:
 *   - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) for `blockNumber` & `blockTag`.
 *   - Calls [`eth_getBlockByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) for `blockHash`.
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockParameters}
 * @returns Information about the block. {@link GetBlockReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlock } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const block = await getBlock(client)
 */
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_, } = {}) {
    const blockTag = blockTag_ ?? 'latest';
    const includeTransactions = includeTransactions_ ?? false;
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : undefined;
    let block = null;
    if (blockHash) {
        block = await client.request({
            method: 'eth_getBlockByHash',
            params: [blockHash, includeTransactions],
        }, { dedupe: true });
    }
    else {
        block = await client.request({
            method: 'eth_getBlockByNumber',
            params: [blockNumberHex || blockTag, includeTransactions],
        }, { dedupe: Boolean(blockNumberHex) });
    }
    if (!block)
        throw new _errors_block_js__WEBPACK_IMPORTED_MODULE_1__/* .BlockNotFoundError */ .l({ blockHash, blockNumber });
    const format = client.chain?.formatters?.block?.format || _utils_formatters_block_js__WEBPACK_IMPORTED_MODULE_2__/* .formatBlock */ .$;
    return format(block);
}
//# sourceMappingURL=getBlock.js.map

/***/ }),

/***/ 9263:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getBlockNumber)
/* harmony export */ });
/* unused harmony export getBlockNumberCache */
/* harmony import */ var _utils_promise_withCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2231);

const cacheKey = (id) => `blockNumber.${id}`;
/** @internal */
function getBlockNumberCache(id) {
    return getCache(cacheKey(id));
}
/**
 * Returns the number of the most recent block seen.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlockNumber
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/fetching-blocks
 * - JSON-RPC Methods: [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockNumberParameters}
 * @returns The number of the block. {@link GetBlockNumberReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlockNumber } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const blockNumber = await getBlockNumber(client)
 * // 69420n
 */
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
    const blockNumberHex = await (0,_utils_promise_withCache_js__WEBPACK_IMPORTED_MODULE_0__/* .withCache */ .nT)(() => client.request({
        method: 'eth_blockNumber',
    }), { cacheKey: cacheKey(client.uid), cacheTime });
    return BigInt(blockNumberHex);
}
//# sourceMappingURL=getBlockNumber.js.map

/***/ }),

/***/ 4749:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getBlockTransactionCount)
/* harmony export */ });
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1732);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);


/**
 * Returns the number of Transactions at a block number, hash, or tag.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlockTransactionCount
 * - JSON-RPC Methods:
 *   - Calls [`eth_getBlockTransactionCountByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber) for `blockNumber` & `blockTag`.
 *   - Calls [`eth_getBlockTransactionCountByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash) for `blockHash`.
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockTransactionCountParameters}
 * @returns The block transaction count. {@link GetBlockTransactionCountReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlockTransactionCount } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const count = await getBlockTransactionCount(client)
 */
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = 'latest', } = {}) {
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : undefined;
    let count;
    if (blockHash) {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByHash',
            params: [blockHash],
        }, { dedupe: true });
    }
    else {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByNumber',
            params: [blockNumberHex || blockTag],
        }, { dedupe: Boolean(blockNumberHex) });
    }
    return (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__/* .hexToNumber */ .ME)(count);
}
//# sourceMappingURL=getBlockTransactionCount.js.map

/***/ }),

/***/ 1263:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ getChainId)
/* harmony export */ });
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1732);

/**
 * Returns the chain ID associated with the current network.
 *
 * - Docs: https://viem.sh/docs/actions/public/getChainId
 * - JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)
 *
 * @param client - Client to use
 * @returns The current chain ID. {@link GetChainIdReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getChainId } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const chainId = await getChainId(client)
 * // 1
 */
async function getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId',
    }, { dedupe: true });
    return (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToNumber */ .ME)(chainIdHex);
}
//# sourceMappingURL=getChainId.js.map

/***/ }),

/***/ 7474:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ getCode)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);

/**
 * Retrieves the bytecode at an address.
 *
 * - Docs: https://viem.sh/docs/contract/getCode
 * - JSON-RPC Methods: [`eth_getCode`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)
 *
 * @param client - Client to use
 * @param parameters - {@link GetCodeParameters}
 * @returns The contract's bytecode. {@link GetCodeReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getCode } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const code = await getCode(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 * })
 */
async function getCode(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : undefined;
    const hex = await client.request({
        method: 'eth_getCode',
        params: [address, blockNumberHex || blockTag],
    }, { dedupe: Boolean(blockNumberHex) });
    if (hex === '0x')
        return undefined;
    return hex;
}
//# sourceMappingURL=getCode.js.map

/***/ }),

/***/ 752:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ getContractEvents)
/* harmony export */ });
/* harmony import */ var _utils_abi_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4849);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3821);
/* harmony import */ var _getLogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1236);



/**
 * Returns a list of event logs emitted by a contract.
 *
 * - Docs: https://viem.sh/docs/actions/public/getContractEvents
 * - JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)
 *
 * @param client - Client to use
 * @param parameters - {@link GetContractEventsParameters}
 * @returns A list of event logs. {@link GetContractEventsReturnType}
 *
 * @example
 * import { createClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getContractEvents } from 'viem/public'
 * import { wagmiAbi } from './abi'
 *
 * const client = createClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const logs = await getContractEvents(client, {
 *  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *  abi: wagmiAbi,
 *  eventName: 'Transfer'
 * })
 */
async function getContractEvents(client, parameters) {
    const { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict, } = parameters;
    const event = eventName
        ? (0,_utils_abi_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .getAbiItem */ .iY)({ abi, name: eventName })
        : undefined;
    const events = !event
        ? abi.filter((x) => x.type === 'event')
        : undefined;
    return (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _getLogs_js__WEBPACK_IMPORTED_MODULE_2__/* .getLogs */ .a, 'getLogs')({
        address,
        args,
        blockHash,
        event,
        events,
        fromBlock,
        toBlock,
        strict,
    });
}
//# sourceMappingURL=getContractEvents.js.map

/***/ }),

/***/ 4531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ getEip712Domain)
/* harmony export */ });
/* harmony import */ var _errors_eip712_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6873);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3821);
/* harmony import */ var _readContract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9321);



/**
 * Reads the EIP-712 domain from a contract, based on the ERC-5267 specification.
 *
 * @param client - A {@link Client} instance.
 * @param parameters - The parameters of the action. {@link GetEip712DomainParameters}
 * @returns The EIP-712 domain, fields, and extensions. {@link GetEip712DomainReturnType}
 *
 * @example
 * ```ts
 * import { createPublicClient, http, getEip712Domain } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const domain = await getEip712Domain(client, {
 *   address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
 * })
 * // {
 * //   domain: {
 * //     name: 'ExampleContract',
 * //     version: '1',
 * //     chainId: 1,
 * //     verifyingContract: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
 * //   },
 * //   fields: '0x0f',
 * //   extensions: [],
 * // }
 * ```
 */
async function getEip712Domain(client, parameters) {
    const { address, factory, factoryData } = parameters;
    try {
        const [fields, name, version, chainId, verifyingContract, salt, extensions,] = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__/* .getAction */ .T)(client, _readContract_js__WEBPACK_IMPORTED_MODULE_1__/* .readContract */ .J, 'readContract')({
            abi,
            address,
            functionName: 'eip712Domain',
            factory,
            factoryData,
        });
        return {
            domain: {
                name,
                version,
                chainId: Number(chainId),
                verifyingContract,
                salt,
            },
            extensions,
            fields,
        };
    }
    catch (e) {
        const error = e;
        if (error.name === 'ContractFunctionExecutionError' &&
            error.cause.name === 'ContractFunctionZeroDataError') {
            throw new _errors_eip712_js__WEBPACK_IMPORTED_MODULE_2__/* .Eip712DomainNotFoundError */ .E({ address });
        }
        throw error;
    }
}
const abi = [
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            { name: 'fields', type: 'bytes1' },
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
            { name: 'salt', type: 'bytes32' },
            { name: 'extensions', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=getEip712Domain.js.map

/***/ }),

/***/ 1907:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ getFeeHistory)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);
/* harmony import */ var _utils_formatters_feeHistory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3595);


/**
 * Returns a collection of historical gas information.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFeeHistory
 * - JSON-RPC Methods: [`eth_feeHistory`](https://docs.alchemy.com/reference/eth-feehistory)
 *
 * @param client - Client to use
 * @param parameters - {@link GetFeeHistoryParameters}
 * @returns The gas estimate (in wei). {@link GetFeeHistoryReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getFeeHistory } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const feeHistory = await getFeeHistory(client, {
 *   blockCount: 4,
 *   rewardPercentiles: [25, 75],
 * })
 */
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = 'latest', rewardPercentiles, }) {
    const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : undefined;
    const feeHistory = await client.request({
        method: 'eth_feeHistory',
        params: [
            (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockCount),
            blockNumberHex || blockTag,
            rewardPercentiles,
        ],
    }, { dedupe: Boolean(blockNumberHex) });
    return (0,_utils_formatters_feeHistory_js__WEBPACK_IMPORTED_MODULE_1__/* .formatFeeHistory */ .y)(feeHistory);
}
//# sourceMappingURL=getFeeHistory.js.map

/***/ }),

/***/ 9080:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ getFilterChanges)
/* harmony export */ });
/* harmony import */ var _utils_abi_parseEventLogs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5294);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2073);


/**
 * Returns a list of logs or hashes based on a [Filter](/docs/glossary/terms#filter) since the last time it was called.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFilterChanges
 * - JSON-RPC Methods: [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)
 *
 * A Filter can be created from the following actions:
 *
 * - [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
 * - [`createContractEventFilter`](https://viem.sh/docs/contract/createContractEventFilter)
 * - [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
 * - [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)
 *
 * Depending on the type of filter, the return value will be different:
 *
 * - If the filter was created with `createContractEventFilter` or `createEventFilter`, it returns a list of logs.
 * - If the filter was created with `createPendingTransactionFilter`, it returns a list of transaction hashes.
 * - If the filter was created with `createBlockFilter`, it returns a list of block hashes.
 *
 * @param client - Client to use
 * @param parameters - {@link GetFilterChangesParameters}
 * @returns Logs or hashes. {@link GetFilterChangesReturnType}
 *
 * @example
 * // Blocks
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createBlockFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createBlockFilter(client)
 * const hashes = await getFilterChanges(client, { filter })
 *
 * @example
 * // Contract Events
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createContractEventFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createContractEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
 *   eventName: 'Transfer',
 * })
 * const logs = await getFilterChanges(client, { filter })
 *
 * @example
 * // Raw Events
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
 * })
 * const logs = await getFilterChanges(client, { filter })
 *
 * @example
 * // Transactions
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createPendingTransactionFilter(client)
 * const hashes = await getFilterChanges(client, { filter })
 */
async function getFilterChanges(_client, { filter, }) {
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [filter.id],
    });
    if (typeof logs[0] === 'string')
        return logs;
    const formattedLogs = logs.map((log) => (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_0__/* .formatLog */ .e)(log));
    if (!('abi' in filter) || !filter.abi)
        return formattedLogs;
    return (0,_utils_abi_parseEventLogs_js__WEBPACK_IMPORTED_MODULE_1__/* .parseEventLogs */ .p)({
        abi: filter.abi,
        logs: formattedLogs,
        strict,
    });
}
//# sourceMappingURL=getFilterChanges.js.map

/***/ }),

/***/ 5606:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ getFilterLogs)
/* harmony export */ });
/* harmony import */ var _utils_abi_parseEventLogs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5294);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2073);


/**
 * Returns a list of event logs since the filter was created.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFilterLogs
 * - JSON-RPC Methods: [`eth_getFilterLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)
 *
 * `getFilterLogs` is only compatible with **event filters**.
 *
 * @param client - Client to use
 * @param parameters - {@link GetFilterLogsParameters}
 * @returns A list of event logs. {@link GetFilterLogsReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter, getFilterLogs } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
 * })
 * const logs = await getFilterLogs(client, { filter })
 */
async function getFilterLogs(_client, { filter, }) {
    const strict = filter.strict ?? false;
    const logs = await filter.request({
        method: 'eth_getFilterLogs',
        params: [filter.id],
    });
    const formattedLogs = logs.map((log) => (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_0__/* .formatLog */ .e)(log));
    if (!filter.abi)
        return formattedLogs;
    return (0,_utils_abi_parseEventLogs_js__WEBPACK_IMPORTED_MODULE_1__/* .parseEventLogs */ .p)({
        abi: filter.abi,
        logs: formattedLogs,
        strict,
    });
}
//# sourceMappingURL=getFilterLogs.js.map

/***/ }),

/***/ 8577:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getGasPrice)
/* harmony export */ });
/**
 * Returns the current price of gas (in wei).
 *
 * - Docs: https://viem.sh/docs/actions/public/getGasPrice
 * - JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)
 *
 * @param client - Client to use
 * @returns The gas price (in wei). {@link GetGasPriceReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getGasPrice } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gasPrice = await getGasPrice(client)
 */
async function getGasPrice(client) {
    const gasPrice = await client.request({
        method: 'eth_gasPrice',
    });
    return BigInt(gasPrice);
}
//# sourceMappingURL=getGasPrice.js.map

/***/ }),

/***/ 1236:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getLogs)
/* harmony export */ });
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9824);
/* harmony import */ var _utils_abi_parseEventLogs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5294);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2073);




/**
 * Returns a list of event logs matching the provided parameters.
 *
 * - Docs: https://viem.sh/docs/actions/public/getLogs
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/filters-and-logs/event-logs
 * - JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)
 *
 * @param client - Client to use
 * @param parameters - {@link GetLogsParameters}
 * @returns A list of event logs. {@link GetLogsReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getLogs } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const logs = await getLogs(client)
 */
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_, } = {}) {
    const strict = strict_ ?? false;
    const events = events_ ?? (event ? [event] : undefined);
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event) => (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeEventTopics */ .R)({
            abi: [event],
            eventName: event.name,
            args: events_ ? undefined : args,
        }));
        // TODO: Clean up type casting
        topics = [encoded];
        if (event)
            topics = topics[0];
    }
    let logs;
    if (blockHash) {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [{ address, topics, blockHash }],
        });
    }
    else {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    fromBlock: typeof fromBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(fromBlock) : fromBlock,
                    toBlock: typeof toBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(toBlock) : toBlock,
                },
            ],
        });
    }
    const formattedLogs = logs.map((log) => (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_2__/* .formatLog */ .e)(log));
    if (!events)
        return formattedLogs;
    return (0,_utils_abi_parseEventLogs_js__WEBPACK_IMPORTED_MODULE_3__/* .parseEventLogs */ .p)({
        abi: events,
        args: args,
        logs: formattedLogs,
        strict,
    });
}
//# sourceMappingURL=getLogs.js.map

/***/ }),

/***/ 6965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ getProof)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);
/* harmony import */ var _utils_formatters_proof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9357);


/**
 * Returns the account and storage values of the specified account including the Merkle-proof.
 *
 * - Docs: https://viem.sh/docs/actions/public/getProof
 * - JSON-RPC Methods:
 *   - Calls [`eth_getProof`](https://eips.ethereum.org/EIPS/eip-1186)
 *
 * @param client - Client to use
 * @param parameters - {@link GetProofParameters}
 * @returns Proof data. {@link GetProofReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getProof } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const block = await getProof(client, {
 *  address: '0x...',
 *  storageKeys: ['0x...'],
 * })
 */
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys, }) {
    const blockTag = blockTag_ ?? 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : undefined;
    const proof = await client.request({
        method: 'eth_getProof',
        params: [address, storageKeys, blockNumberHex || blockTag],
    });
    return (0,_utils_formatters_proof_js__WEBPACK_IMPORTED_MODULE_1__/* .formatProof */ .c)(proof);
}
//# sourceMappingURL=getProof.js.map

/***/ }),

/***/ 2863:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ getStorageAt)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);

/**
 * Returns the value from a storage slot at a given address.
 *
 * - Docs: https://viem.sh/docs/contract/getStorageAt
 * - JSON-RPC Methods: [`eth_getStorageAt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)
 *
 * @param client - Client to use
 * @param parameters - {@link GetStorageAtParameters}
 * @returns The value of the storage slot. {@link GetStorageAtReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getStorageAt } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const code = await getStorageAt(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   slot: toHex(0),
 * })
 */
async function getStorageAt(client, { address, blockNumber, blockTag = 'latest', slot }) {
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : undefined;
    const data = await client.request({
        method: 'eth_getStorageAt',
        params: [address, slot, blockNumberHex || blockTag],
    });
    return data;
}
//# sourceMappingURL=getStorageAt.js.map

/***/ }),

/***/ 3811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ getTransaction)
/* harmony export */ });
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7121);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);
/* harmony import */ var _utils_formatters_transaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);



/**
 * Returns information about a [Transaction](https://viem.sh/docs/glossary/terms#transaction) given a hash or block identifier.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransaction
 * - Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionByHash)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionParameters}
 * @returns The transaction information. {@link GetTransactionReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransaction } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transaction = await getTransaction(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index, }) {
    const blockTag = blockTag_ || 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : undefined;
    let transaction = null;
    if (hash) {
        transaction = await client.request({
            method: 'eth_getTransactionByHash',
            params: [hash],
        }, { dedupe: true });
    }
    else if (blockHash) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [blockHash, (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(index)],
        }, { dedupe: true });
    }
    else if (blockNumberHex || blockTag) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [blockNumberHex || blockTag, (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(index)],
        }, { dedupe: Boolean(blockNumberHex) });
    }
    if (!transaction)
        throw new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__/* .TransactionNotFoundError */ .Kz({
            blockHash,
            blockNumber,
            blockTag,
            hash,
            index,
        });
    const format = client.chain?.formatters?.transaction?.format || _utils_formatters_transaction_js__WEBPACK_IMPORTED_MODULE_2__/* .formatTransaction */ .uP;
    return format(transaction);
}
//# sourceMappingURL=getTransaction.js.map

/***/ }),

/***/ 8977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ getTransactionConfirmations)
/* harmony export */ });
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3821);
/* harmony import */ var _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9263);
/* harmony import */ var _getTransaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3811);



/**
 * Returns the number of blocks passed (confirmations) since the transaction was processed on a block.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionConfirmations
 * - Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionConfirmations`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionConfirmations)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionConfirmationsParameters}
 * @returns The number of blocks passed since the transaction was processed. If confirmations is 0, then the Transaction has not been confirmed & processed yet. {@link GetTransactionConfirmationsReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionConfirmations } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const confirmations = await getTransactionConfirmations(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
    const [blockNumber, transaction] = await Promise.all([
        (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__/* .getAction */ .T)(client, _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_1__/* .getBlockNumber */ .G, 'getBlockNumber')({}),
        hash
            ? (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_0__/* .getAction */ .T)(client, _getTransaction_js__WEBPACK_IMPORTED_MODULE_2__/* .getTransaction */ .x, 'getTransaction')({ hash })
            : undefined,
    ]);
    const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
    if (!transactionBlockNumber)
        return 0n;
    return blockNumber - transactionBlockNumber + 1n;
}
//# sourceMappingURL=getTransactionConfirmations.js.map

/***/ }),

/***/ 1888:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ getTransactionCount)
/* harmony export */ });
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1732);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);


/**
 * Returns the number of [Transactions](https://viem.sh/docs/glossary/terms#transaction) an Account has sent.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionCount
 * - JSON-RPC Methods: [`eth_getTransactionCount`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionCountParameters}
 * @returns The number of transactions an account has sent. {@link GetTransactionCountReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionCount } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionCount = await getTransactionCount(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 */
async function getTransactionCount(client, { address, blockTag = 'latest', blockNumber }) {
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [address, blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(blockNumber) : blockTag],
    }, { dedupe: Boolean(blockNumber) });
    return (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__/* .hexToNumber */ .ME)(count);
}
//# sourceMappingURL=getTransactionCount.js.map

/***/ }),

/***/ 1599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ getTransactionReceipt)
/* harmony export */ });
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7121);
/* harmony import */ var _utils_formatters_transactionReceipt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5991);


/**
 * Returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms#transaction-receipt) given a [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionReceipt
 * - Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionreceipt)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionReceiptParameters}
 * @returns The transaction receipt. {@link GetTransactionReceiptReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionReceipt } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionReceipt = await getTransactionReceipt(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransactionReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getTransactionReceipt',
        params: [hash],
    }, { dedupe: true });
    if (!receipt)
        throw new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_0__/* .TransactionReceiptNotFoundError */ .Kc({ hash });
    const format = client.chain?.formatters?.transactionReceipt?.format ||
        _utils_formatters_transactionReceipt_js__WEBPACK_IMPORTED_MODULE_1__/* .formatTransactionReceipt */ .uL;
    return format(receipt);
}
//# sourceMappingURL=getTransactionReceipt.js.map

/***/ }),

/***/ 642:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ multicall)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2836);
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(135);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5484);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1063);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7576);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5674);
/* harmony import */ var _utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6140);
/* harmony import */ var _utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4459);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3821);
/* harmony import */ var _readContract_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9321);










/**
 * Similar to [`readContract`](https://viem.sh/docs/contract/readContract), but batches up multiple functions on a contract in a single RPC call via the [`multicall3` contract](https://github.com/mds1/multicall).
 *
 * - Docs: https://viem.sh/docs/contract/multicall
 *
 * @param client - Client to use
 * @param parameters - {@link MulticallParameters}
 * @returns An array of results with accompanying status. {@link MulticallReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { multicall } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const abi = parseAbi([
 *   'function balanceOf(address) view returns (uint256)',
 *   'function totalSupply() view returns (uint256)',
 * ])
 * const results = await multicall(client, {
 *   contracts: [
 *     {
 *       address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *       abi,
 *       functionName: 'balanceOf',
 *       args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 *     },
 *     {
 *       address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *       abi,
 *       functionName: 'totalSupply',
 *     },
 *   ],
 * })
 * // [{ result: 424122n, status: 'success' }, { result: 1000000n, status: 'success' }]
 */
async function multicall(client, parameters) {
    const { allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, multicallAddress: multicallAddress_, stateOverride, } = parameters;
    const contracts = parameters.contracts;
    const batchSize = batchSize_ ??
        ((typeof client.batch?.multicall === 'object' &&
            client.batch.multicall.batchSize) ||
            1_024);
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. multicallAddress is required.');
        multicallAddress = (0,_utils_chain_getChainContractAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .getChainContractAddress */ .M)({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3',
        });
    }
    const chunkedCalls = [[]];
    let currentChunk = 0;
    let currentChunkSize = 0;
    for (let i = 0; i < contracts.length; i++) {
        const { abi, address, args, functionName } = contracts[i];
        try {
            const callData = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeFunctionData */ .p)({ abi, args, functionName });
            currentChunkSize += (callData.length - 2) / 2;
            // Check to see if we need to create a new chunk.
            if (
            // Check if batching is enabled.
            batchSize > 0 &&
                // Check if the current size of the batch exceeds the size limit.
                currentChunkSize > batchSize &&
                // Check if the current chunk is not already empty.
                chunkedCalls[currentChunk].length > 0) {
                currentChunk++;
                currentChunkSize = (callData.length - 2) / 2;
                chunkedCalls[currentChunk] = [];
            }
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData,
                    target: address,
                },
            ];
        }
        catch (err) {
            const error = (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_2__/* .getContractError */ .j)(err, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/multicall',
                functionName,
            });
            if (!allowFailure)
                throw error;
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData: '0x',
                    target: address,
                },
            ];
        }
    }
    const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _readContract_js__WEBPACK_IMPORTED_MODULE_4__/* .readContract */ .J, 'readContract')({
        abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_5__/* .multicall3Abi */ .v2,
        address: multicallAddress,
        args: [calls],
        blockNumber,
        blockTag,
        functionName: 'aggregate3',
        stateOverride,
    })));
    const results = [];
    for (let i = 0; i < aggregate3Results.length; i++) {
        const result = aggregate3Results[i];
        // If an error occurred in a `readContract` invocation (ie. network error),
        // then append the failure reason to each contract result.
        if (result.status === 'rejected') {
            if (!allowFailure)
                throw result.reason;
            for (let j = 0; j < chunkedCalls[i].length; j++) {
                results.push({
                    status: 'failure',
                    error: result.reason,
                    result: undefined,
                });
            }
            continue;
        }
        // If the `readContract` call was successful, then decode the results.
        const aggregate3Result = result.value;
        for (let j = 0; j < aggregate3Result.length; j++) {
            // Extract the response from `readContract`
            const { returnData, success } = aggregate3Result[j];
            // Extract the request call data from the original call.
            const { callData } = chunkedCalls[i][j];
            // Extract the contract config for this call from the `contracts` argument
            // for decoding.
            const { abi, address, functionName, args } = contracts[results.length];
            try {
                if (callData === '0x')
                    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_6__/* .AbiDecodingZeroDataError */ .O();
                if (!success)
                    throw new _errors_contract_js__WEBPACK_IMPORTED_MODULE_7__/* .RawContractError */ .$S({ data: returnData });
                const result = (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_8__/* .decodeFunctionResult */ .e)({
                    abi,
                    args,
                    data: returnData,
                    functionName,
                });
                results.push(allowFailure ? { result, status: 'success' } : result);
            }
            catch (err) {
                const error = (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_2__/* .getContractError */ .j)(err, {
                    abi,
                    address,
                    args,
                    docsPath: '/docs/contract/multicall',
                    functionName,
                });
                if (!allowFailure)
                    throw error;
                results.push({ error, result: undefined, status: 'failure' });
            }
        }
    }
    if (results.length !== contracts.length)
        throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_9__/* .BaseError */ .C('multicall results mismatch');
    return results;
}
//# sourceMappingURL=multicall.js.map

/***/ }),

/***/ 9321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ readContract)
/* harmony export */ });
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7576);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5674);
/* harmony import */ var _utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4459);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3821);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9959);





/**
 * Calls a read-only function on a contract, and returns the response.
 *
 * - Docs: https://viem.sh/docs/contract/readContract
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/reading-contracts
 *
 * A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).
 *
 * @param client - Client to use
 * @param parameters - {@link ReadContractParameters}
 * @returns The response from the contract. Type is inferred. {@link ReadContractReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { readContract } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const result = await readContract(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
 *   functionName: 'balanceOf',
 *   args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 * })
 * // 424122n
 */
async function readContract(client, parameters) {
    const { abi, address, args, functionName, ...rest } = parameters;
    const calldata = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeFunctionData */ .p)({
        abi,
        args,
        functionName,
    });
    try {
        const { data } = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _call_js__WEBPACK_IMPORTED_MODULE_2__/* .call */ .T, 'call')({
            ...rest,
            data: calldata,
            to: address,
        });
        return (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeFunctionResult */ .e)({
            abi,
            args,
            functionName,
            data: data || '0x',
        });
    }
    catch (error) {
        throw (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_4__/* .getContractError */ .j)(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName,
        });
    }
}
//# sourceMappingURL=readContract.js.map

/***/ }),

/***/ 7735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ simulateContract)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2428);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7576);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5674);
/* harmony import */ var _utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4459);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3821);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9959);






/**
 * Simulates/validates a contract interaction. This is useful for retrieving **return data** and **revert reasons** of contract write functions.
 *
 * - Docs: https://viem.sh/docs/contract/simulateContract
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/writing-to-contracts
 *
 * This function does not require gas to execute and _**does not**_ change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract), but also supports contract write functions.
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).
 *
 * @param client - Client to use
 * @param parameters - {@link SimulateContractParameters}
 * @returns The simulation result and write request. {@link SimulateContractReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { simulateContract } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const result = await simulateContract(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function mint(uint32) view returns (uint32)']),
 *   functionName: 'mint',
 *   args: ['69420'],
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 */
async function simulateContract(client, parameters) {
    const { abi, address, args, dataSuffix, functionName, ...callRequest } = parameters;
    const account = callRequest.account
        ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAccount */ .J)(callRequest.account)
        : client.account;
    const calldata = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeFunctionData */ .p)({ abi, args, functionName });
    try {
        const { data } = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_2__/* .getAction */ .T)(client, _call_js__WEBPACK_IMPORTED_MODULE_3__/* .call */ .T, 'call')({
            batch: false,
            data: `${calldata}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...callRequest,
            account,
        });
        const result = (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_4__/* .decodeFunctionResult */ .e)({
            abi,
            args,
            functionName,
            data: data || '0x',
        });
        const minimizedAbi = abi.filter((abiItem) => 'name' in abiItem && abiItem.name === parameters.functionName);
        return {
            result,
            request: {
                abi: minimizedAbi,
                address,
                args,
                dataSuffix,
                functionName,
                ...callRequest,
                account,
            },
        };
    }
    catch (error) {
        throw (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_5__/* .getContractError */ .j)(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/simulateContract',
            functionName,
            sender: account?.address,
        });
    }
}
//# sourceMappingURL=simulateContract.js.map

/***/ }),

/***/ 8435:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ uninstallFilter)
/* harmony export */ });
/**
 * Destroys a [`Filter`](https://viem.sh/docs/glossary/types#filter).
 *
 * - Docs: https://viem.sh/docs/actions/public/uninstallFilter
 * - JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)
 *
 * Destroys a Filter that was created from one of the following Actions:
 * - [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
 * - [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
 * - [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)
 *
 * @param client - Client to use
 * @param parameters - {@link UninstallFilterParameters}
 * @returns A boolean indicating if the Filter was successfully uninstalled. {@link UninstallFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'
 *
 * const filter = await createPendingTransactionFilter(client)
 * const uninstalled = await uninstallFilter(client, { filter })
 * // true
 */
async function uninstallFilter(_client, { filter }) {
    return filter.request({
        method: 'eth_uninstallFilter',
        params: [filter.id],
    });
}
//# sourceMappingURL=uninstallFilter.js.map

/***/ }),

/***/ 1234:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ verifyHash)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2836);
/* harmony import */ var _constants_contracts_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3696);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1063);
/* harmony import */ var _utils_abi_encodeDeployData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1825);
/* harmony import */ var _utils_address_getAddress_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5458);
/* harmony import */ var _utils_address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2382);
/* harmony import */ var _utils_data_isBytesEqual_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9767);
/* harmony import */ var _utils_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4031);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3821);
/* harmony import */ var _utils_signature_isErc6492Signature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8485);
/* harmony import */ var _utils_signature_recoverAddress_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2092);
/* harmony import */ var _utils_signature_serializeErc6492Signature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4829);
/* harmony import */ var _utils_signature_serializeSignature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8144);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9959);















/**
 * Verifies a message hash onchain using ERC-6492.
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyHashParameters}
 * @returns Whether or not the signature is valid. {@link VerifyHashReturnType}
 */
async function verifyHash(client, parameters) {
    const { address, factory, factoryData, hash, signature, ...rest } = parameters;
    const signatureHex = (() => {
        if ((0,_utils_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(signature))
            return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature)
            return (0,_utils_signature_serializeSignature_js__WEBPACK_IMPORTED_MODULE_1__/* .serializeSignature */ .h)(signature);
        return (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .bytesToHex */ .My)(signature);
    })();
    const wrappedSignature = await (async () => {
        // If no `factory` or `factoryData` is provided, it is assumed that the
        // address is not a Smart Account, or the Smart Account is already deployed.
        if (!factory && !factoryData)
            return signatureHex;
        // If the signature is already wrapped, return the signature.
        if ((0,_utils_signature_isErc6492Signature_js__WEBPACK_IMPORTED_MODULE_3__/* .isErc6492Signature */ .M)(signatureHex))
            return signatureHex;
        // If the Smart Account is not deployed, wrap the signature with a 6492 wrapper
        // to perform counterfactual validation.
        return (0,_utils_signature_serializeErc6492Signature_js__WEBPACK_IMPORTED_MODULE_4__/* .serializeErc6492Signature */ .E)({
            address: factory,
            data: factoryData,
            signature: signatureHex,
        });
    })();
    try {
        const { data } = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_5__/* .getAction */ .T)(client, _call_js__WEBPACK_IMPORTED_MODULE_6__/* .call */ .T, 'call')({
            data: (0,_utils_abi_encodeDeployData_js__WEBPACK_IMPORTED_MODULE_7__/* .encodeDeployData */ .m)({
                abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_8__/* .universalSignatureValidatorAbi */ ._,
                args: [address, hash, wrappedSignature],
                bytecode: _constants_contracts_js__WEBPACK_IMPORTED_MODULE_9__/* .universalSignatureValidatorByteCode */ .nP,
            }),
            ...rest,
        });
        return (0,_utils_data_isBytesEqual_js__WEBPACK_IMPORTED_MODULE_10__/* .isBytesEqual */ .C)(data ?? '0x0', '0x1');
    }
    catch (error) {
        // Fallback attempt to verify the signature via ECDSA recovery.
        try {
            const verified = (0,_utils_address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_11__/* .isAddressEqual */ .h)((0,_utils_address_getAddress_js__WEBPACK_IMPORTED_MODULE_12__/* .getAddress */ .b)(address), await (0,_utils_signature_recoverAddress_js__WEBPACK_IMPORTED_MODULE_13__/* .recoverAddress */ .x)({ hash, signature }));
            if (verified)
                return true;
        }
        catch { }
        if (error instanceof _errors_contract_js__WEBPACK_IMPORTED_MODULE_14__/* .CallExecutionError */ .zX) {
            // if the execution fails, the signature was not valid and an internal method inside of the validator reverted
            // this can happen for many reasons, for example if signer can not be recovered from the signature
            // or if the signature has no valid format
            return false;
        }
        throw error;
    }
}
//# sourceMappingURL=verifyHash.js.map

/***/ }),

/***/ 2539:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ verifyMessage)
/* harmony export */ });
/* harmony import */ var _utils_signature_hashMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var _verifyHash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1234);


/**
 * Verify that a message was signed by the provided address.
 *
 * Compatible with Smart Contract Accounts & Externally Owned Accounts via [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492).
 *
 * - Docs {@link https://viem.sh/docs/actions/public/verifyMessage}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyMessageParameters}
 * @returns Whether or not the signature is valid. {@link VerifyMessageReturnType}
 */
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
    const hash = (0,_utils_signature_hashMessage_js__WEBPACK_IMPORTED_MODULE_0__/* .hashMessage */ .A)(message);
    return (0,_verifyHash_js__WEBPACK_IMPORTED_MODULE_1__/* .verifyHash */ .K)(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifyMessage.js.map

/***/ }),

/***/ 8176:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ verifyTypedData)
/* harmony export */ });
/* harmony import */ var _utils_signature_hashTypedData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5830);
/* harmony import */ var _verifyHash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1234);


/**
 * Verify that typed data was signed by the provided address.
 *
 * - Docs {@link https://viem.sh/docs/actions/public/verifyTypedData}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyTypedDataParameters}
 * @returns Whether or not the signature is valid. {@link VerifyTypedDataReturnType}
 */
async function verifyTypedData(client, parameters) {
    const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
    const hash = (0,_utils_signature_hashTypedData_js__WEBPACK_IMPORTED_MODULE_0__/* .hashTypedData */ .Zh)({ message, primaryType, types, domain });
    return (0,_verifyHash_js__WEBPACK_IMPORTED_MODULE_1__/* .verifyHash */ .K)(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifyTypedData.js.map

/***/ }),

/***/ 239:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ waitForTransactionReceipt)
/* harmony export */ });
/* harmony import */ var _errors_block_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4484);
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7121);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3821);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7687);
/* harmony import */ var _utils_promise_withRetry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3279);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6798);
/* harmony import */ var _getBlock_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3190);
/* harmony import */ var _getTransaction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3811);
/* harmony import */ var _getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1599);
/* harmony import */ var _watchBlockNumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7694);










/**
 * Waits for the [Transaction](https://viem.sh/docs/glossary/terms#transaction) to be included on a [Block](https://viem.sh/docs/glossary/terms#block) (one confirmation), and then returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms#transaction-receipt).
 *
 * - Docs: https://viem.sh/docs/actions/public/waitForTransactionReceipt
 * - Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/sending-transactions
 * - JSON-RPC Methods:
 *   - Polls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt) on each block until it has been processed.
 *   - If a Transaction has been replaced:
 *     - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) and extracts the transactions
 *     - Checks if one of the Transactions is a replacement
 *     - If so, calls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt).
 *
 * The `waitForTransactionReceipt` action additionally supports Replacement detection (e.g. sped up Transactions).
 *
 * Transactions can be replaced when a user modifies their transaction in their wallet (to speed up or cancel). Transactions are replaced when they are sent from the same nonce.
 *
 * There are 3 types of Transaction Replacement reasons:
 *
 * - `repriced`: The gas price has been modified (e.g. different `maxFeePerGas`)
 * - `cancelled`: The Transaction has been cancelled (e.g. `value === 0n`)
 * - `replaced`: The Transaction has been replaced (e.g. different `value` or `data`)
 *
 * @param client - Client to use
 * @param parameters - {@link WaitForTransactionReceiptParameters}
 * @returns The transaction receipt. {@link WaitForTransactionReceiptReturnType}
 *
 * @example
 * import { createPublicClient, waitForTransactionReceipt, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionReceipt = await waitForTransactionReceipt(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function waitForTransactionReceipt(client, { confirmations = 1, hash, onReplaced, pollingInterval = client.pollingInterval, retryCount = 6, retryDelay = ({ count }) => ~~(1 << count) * 200, // exponential backoff
timeout, }) {
    const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)(['waitForTransactionReceipt', client.uid, hash]);
    let count = 0;
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    return new Promise((resolve, reject) => {
        if (timeout)
            setTimeout(() => reject(new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__/* .WaitForTransactionReceiptTimeoutError */ .WA({ hash })), timeout);
        const _unobserve = (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_2__/* .observe */ .lB)(observerId, { onReplaced, resolve, reject }, (emit) => {
            const _unwatch = (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _watchBlockNumber_js__WEBPACK_IMPORTED_MODULE_4__/* .watchBlockNumber */ .q, 'watchBlockNumber')({
                emitMissed: true,
                emitOnBegin: true,
                poll: true,
                pollingInterval,
                async onBlockNumber(blockNumber_) {
                    const done = (fn) => {
                        _unwatch();
                        fn();
                        _unobserve();
                    };
                    let blockNumber = blockNumber_;
                    if (retrying)
                        return;
                    if (count > retryCount)
                        done(() => emit.reject(new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__/* .WaitForTransactionReceiptTimeoutError */ .WA({ hash })));
                    try {
                        // If we already have a valid receipt, let's check if we have enough
                        // confirmations. If we do, then we can resolve.
                        if (receipt) {
                            if (confirmations > 1 &&
                                (!receipt.blockNumber ||
                                    blockNumber - receipt.blockNumber + 1n < confirmations))
                                return;
                            done(() => emit.resolve(receipt));
                            return;
                        }
                        // Get the transaction to check if it's been replaced.
                        // We need to retry as some RPC Providers may be slow to sync
                        // up mined transactions.
                        if (!transaction) {
                            retrying = true;
                            await (0,_utils_promise_withRetry_js__WEBPACK_IMPORTED_MODULE_5__/* .withRetry */ .b)(async () => {
                                transaction = (await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getTransaction_js__WEBPACK_IMPORTED_MODULE_6__/* .getTransaction */ .x, 'getTransaction')({ hash }));
                                if (transaction.blockNumber)
                                    blockNumber = transaction.blockNumber;
                            }, {
                                delay: retryDelay,
                                retryCount,
                            });
                            retrying = false;
                        }
                        // Get the receipt to check if it's been processed.
                        receipt = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_7__/* .getTransactionReceipt */ .h, 'getTransactionReceipt')({ hash });
                        // Check if we have enough confirmations. If not, continue polling.
                        if (confirmations > 1 &&
                            (!receipt.blockNumber ||
                                blockNumber - receipt.blockNumber + 1n < confirmations))
                            return;
                        done(() => emit.resolve(receipt));
                    }
                    catch (err) {
                        // If the receipt is not found, the transaction will be pending.
                        // We need to check if it has potentially been replaced.
                        if (err instanceof _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__/* .TransactionNotFoundError */ .Kz ||
                            err instanceof _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__/* .TransactionReceiptNotFoundError */ .Kc) {
                            if (!transaction) {
                                retrying = false;
                                return;
                            }
                            try {
                                replacedTransaction = transaction;
                                // Let's retrieve the transactions from the current block.
                                // We need to retry as some RPC Providers may be slow to sync
                                // up mined blocks.
                                retrying = true;
                                const block = await (0,_utils_promise_withRetry_js__WEBPACK_IMPORTED_MODULE_5__/* .withRetry */ .b)(() => (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getBlock_js__WEBPACK_IMPORTED_MODULE_8__/* .getBlock */ .g, 'getBlock')({
                                    blockNumber,
                                    includeTransactions: true,
                                }), {
                                    delay: retryDelay,
                                    retryCount,
                                    shouldRetry: ({ error }) => error instanceof _errors_block_js__WEBPACK_IMPORTED_MODULE_9__/* .BlockNotFoundError */ .l,
                                });
                                retrying = false;
                                const replacementTransaction = block.transactions.find(({ from, nonce }) => from === replacedTransaction.from &&
                                    nonce === replacedTransaction.nonce);
                                // If we couldn't find a replacement transaction, continue polling.
                                if (!replacementTransaction)
                                    return;
                                // If we found a replacement transaction, return it's receipt.
                                receipt = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_7__/* .getTransactionReceipt */ .h, 'getTransactionReceipt')({
                                    hash: replacementTransaction.hash,
                                });
                                // Check if we have enough confirmations. If not, continue polling.
                                if (confirmations > 1 &&
                                    (!receipt.blockNumber ||
                                        blockNumber - receipt.blockNumber + 1n < confirmations))
                                    return;
                                let reason = 'replaced';
                                if (replacementTransaction.to === replacedTransaction.to &&
                                    replacementTransaction.value === replacedTransaction.value) {
                                    reason = 'repriced';
                                }
                                else if (replacementTransaction.from === replacementTransaction.to &&
                                    replacementTransaction.value === 0n) {
                                    reason = 'cancelled';
                                }
                                done(() => {
                                    emit.onReplaced?.({
                                        reason,
                                        replacedTransaction: replacedTransaction,
                                        transaction: replacementTransaction,
                                        transactionReceipt: receipt,
                                    });
                                    emit.resolve(receipt);
                                });
                            }
                            catch (err_) {
                                done(() => emit.reject(err_));
                            }
                        }
                        else {
                            done(() => emit.reject(err));
                        }
                    }
                    finally {
                        count++;
                    }
                },
            });
        });
    });
}
//# sourceMappingURL=waitForTransactionReceipt.js.map

/***/ }),

/***/ 7694:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ watchBlockNumber)
/* harmony export */ });
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1732);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3821);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7687);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4562);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6798);
/* harmony import */ var _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9263);






/**
 * Watches and returns incoming block numbers.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchBlockNumber
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/watching-blocks
 * - JSON-RPC Methods:
 *   - When `poll: true`, calls [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchBlockNumberParameters}
 * @returns A function that can be invoked to stop watching for new block numbers. {@link WatchBlockNumberReturnType}
 *
 * @example
 * import { createPublicClient, watchBlockNumber, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchBlockNumber(client, {
 *   onBlockNumber: (blockNumber) => console.log(blockNumber),
 * })
 */
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = (() => {
        if (typeof poll_ !== 'undefined')
            return poll_;
        if (client.transport.type === 'webSocket')
            return false;
        if (client.transport.type === 'fallback' &&
            client.transport.transports[0].config.type === 'webSocket')
            return false;
        return true;
    })();
    let prevBlockNumber;
    const pollBlockNumber = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
            pollingInterval,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__/* .observe */ .lB)(observerId, { onBlockNumber, onError }, (emit) => (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__/* .poll */ .w)(async () => {
            try {
                const blockNumber = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_4__/* .getBlockNumber */ .G, 'getBlockNumber')({ cacheTime: 0 });
                if (prevBlockNumber) {
                    // If the current block number is the same as the previous,
                    // we can skip.
                    if (blockNumber === prevBlockNumber)
                        return;
                    // If we have missed out on some previous blocks, and the
                    // `emitMissed` flag is truthy, let's emit those blocks.
                    if (blockNumber - prevBlockNumber > 1 && emitMissed) {
                        for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
                            emit.onBlockNumber(i, prevBlockNumber);
                            prevBlockNumber = i;
                        }
                    }
                }
                // If the next block number is greater than the previous,
                // it is not in the past, and we can emit the new block number.
                if (!prevBlockNumber || blockNumber > prevBlockNumber) {
                    emit.onBlockNumber(blockNumber, prevBlockNumber);
                    prevBlockNumber = blockNumber;
                }
            }
            catch (err) {
                emit.onError?.(err);
            }
        }, {
            emitOnBegin,
            interval: pollingInterval,
        }));
    };
    const subscribeBlockNumber = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__/* .observe */ .lB)(observerId, { onBlockNumber, onError }, (emit) => {
            let active = true;
            let unsubscribe = () => (active = false);
            (async () => {
                try {
                    const transport = (() => {
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport) => transport.config.type === 'webSocket');
                            if (!transport)
                                return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: ['newHeads'],
                        onData(data) {
                            if (!active)
                                return;
                            const blockNumber = (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__/* .hexToBigInt */ .uU)(data.result?.number);
                            emit.onBlockNumber(blockNumber, prevBlockNumber);
                            prevBlockNumber = blockNumber;
                        },
                        onError(error) {
                            emit.onError?.(error);
                        },
                    });
                    unsubscribe = unsubscribe_;
                    if (!active)
                        unsubscribe();
                }
                catch (err) {
                    onError?.(err);
                }
            })();
            return () => unsubscribe();
        });
    };
    return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}
//# sourceMappingURL=watchBlockNumber.js.map

/***/ }),

/***/ 9798:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ watchBlocks)
/* harmony export */ });
/* harmony import */ var _utils_formatters_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1566);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3821);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7687);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4562);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6798);
/* harmony import */ var _getBlock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3190);






/**
 * Watches and returns information for incoming blocks.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchBlocks
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/watching-blocks
 * - JSON-RPC Methods:
 *   - When `poll: true`, calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getBlockByNumber) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchBlocksParameters}
 * @returns A function that can be invoked to stop watching for new block numbers. {@link WatchBlocksReturnType}
 *
 * @example
 * import { createPublicClient, watchBlocks, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchBlocks(client, {
 *   onBlock: (block) => console.log(block),
 * })
 */
function watchBlocks(client, { blockTag = 'latest', emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = (() => {
        if (typeof poll_ !== 'undefined')
            return poll_;
        if (client.transport.type === 'webSocket')
            return false;
        if (client.transport.type === 'fallback' &&
            client.transport.transports[0].config.type === 'webSocket')
            return false;
        return true;
    })();
    const includeTransactions = includeTransactions_ ?? false;
    let prevBlock;
    const pollBlocks = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)([
            'watchBlocks',
            client.uid,
            blockTag,
            emitMissed,
            emitOnBegin,
            includeTransactions,
            pollingInterval,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__/* .observe */ .lB)(observerId, { onBlock, onError }, (emit) => (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__/* .poll */ .w)(async () => {
            try {
                const block = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getBlock_js__WEBPACK_IMPORTED_MODULE_4__/* .getBlock */ .g, 'getBlock')({
                    blockTag,
                    includeTransactions,
                });
                if (block.number && prevBlock?.number) {
                    // If the current block number is the same as the previous,
                    // we can skip.
                    if (block.number === prevBlock.number)
                        return;
                    // If we have missed out on some previous blocks, and the
                    // `emitMissed` flag is truthy, let's emit those blocks.
                    if (block.number - prevBlock.number > 1 && emitMissed) {
                        for (let i = prevBlock?.number + 1n; i < block.number; i++) {
                            const block = (await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getBlock_js__WEBPACK_IMPORTED_MODULE_4__/* .getBlock */ .g, 'getBlock')({
                                blockNumber: i,
                                includeTransactions,
                            }));
                            emit.onBlock(block, prevBlock);
                            prevBlock = block;
                        }
                    }
                }
                if (
                // If no previous block exists, emit.
                !prevBlock?.number ||
                    // If the block tag is "pending" with no block number, emit.
                    (blockTag === 'pending' && !block?.number) ||
                    // If the next block number is greater than the previous block number, emit.
                    // We don't want to emit blocks in the past.
                    (block.number && block.number > prevBlock.number)) {
                    emit.onBlock(block, prevBlock);
                    prevBlock = block;
                }
            }
            catch (err) {
                emit.onError?.(err);
            }
        }, {
            emitOnBegin,
            interval: pollingInterval,
        }));
    };
    const subscribeBlocks = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const transport = (() => {
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport) => transport.config.type === 'webSocket');
                        if (!transport)
                            return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: ['newHeads'],
                    onData(data) {
                        if (!active)
                            return;
                        const format = client.chain?.formatters?.block?.format || _utils_formatters_block_js__WEBPACK_IMPORTED_MODULE_5__/* .formatBlock */ .$;
                        const block = format(data.result);
                        onBlock(block, prevBlock);
                        prevBlock = block;
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return () => unsubscribe();
    };
    return enablePolling ? pollBlocks() : subscribeBlocks();
}
//# sourceMappingURL=watchBlocks.js.map

/***/ }),

/***/ 3980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ watchContractEvent)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(135);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6898);
/* harmony import */ var _utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4464);
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9824);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2073);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3821);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7687);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4562);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6798);
/* harmony import */ var _createContractEventFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3587);
/* harmony import */ var _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9263);
/* harmony import */ var _getContractEvents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(752);
/* harmony import */ var _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9080);
/* harmony import */ var _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8435);














/**
 * Watches and returns emitted contract event logs.
 *
 * - Docs: https://viem.sh/docs/contract/watchContractEvent
 *
 * This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent#onLogs).
 *
 * `watchContractEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchContractEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchContractEventParameters}
 * @returns A function that can be invoked to stop watching for new event logs. {@link WatchContractEventReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchContractEvent } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchContractEvent(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['event Transfer(address indexed from, address indexed to, uint256 value)']),
 *   eventName: 'Transfer',
 *   args: { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
 *   onLogs: (logs) => console.log(logs),
 * })
 */
function watchContractEvent(client, parameters) {
    const { abi, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_, } = parameters;
    const enablePolling = (() => {
        if (typeof poll_ !== 'undefined')
            return poll_;
        if (typeof fromBlock === 'bigint')
            return true;
        if (client.transport.type === 'webSocket')
            return false;
        if (client.transport.type === 'fallback' &&
            client.transport.transports[0].config.type === 'webSocket')
            return false;
        return true;
    })();
    const pollContractEvent = () => {
        const strict = strict_ ?? false;
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict,
            fromBlock,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__/* .observe */ .lB)(observerId, { onLogs, onError }, (emit) => {
            let previousBlockNumber;
            if (fromBlock !== undefined)
                previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__/* .poll */ .w)(async () => {
                if (!initialized) {
                    try {
                        filter = (await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _createContractEventFilter_js__WEBPACK_IMPORTED_MODULE_4__/* .createContractEventFilter */ .X, 'createContractEventFilter')({
                            abi,
                            address,
                            args: args,
                            eventName: eventName,
                            strict: strict,
                            fromBlock,
                        }));
                    }
                    catch { }
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_5__/* .getFilterChanges */ .I, 'getFilterChanges')({ filter });
                    }
                    else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_6__/* .getBlockNumber */ .G, 'getBlockNumber')({});
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber < blockNumber) {
                            logs = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getContractEvents_js__WEBPACK_IMPORTED_MODULE_7__/* .getContractEvents */ .u, 'getContractEvents')({
                                abi,
                                address,
                                args,
                                eventName,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                                strict,
                            });
                        }
                        else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0)
                        return;
                    if (batch)
                        emit.onLogs(logs);
                    else
                        for (const log of logs)
                            emit.onLogs([log]);
                }
                catch (err) {
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitialize the filter when this occurs
                    if (filter && err instanceof _errors_rpc_js__WEBPACK_IMPORTED_MODULE_8__/* .InvalidInputRpcError */ .Di)
                        initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_9__/* .uninstallFilter */ .Z, 'uninstallFilter')({ filter });
                unwatch();
            };
        });
    };
    const subscribeContractEvent = () => {
        const strict = strict_ ?? false;
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict,
        ]);
        let active = true;
        let unsubscribe = () => (active = false);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__/* .observe */ .lB)(observerId, { onLogs, onError }, (emit) => {
            ;
            (async () => {
                try {
                    const transport = (() => {
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport) => transport.config.type === 'webSocket');
                            if (!transport)
                                return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const topics = eventName
                        ? (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_10__/* .encodeEventTopics */ .R)({
                            abi: abi,
                            eventName: eventName,
                            args,
                        })
                        : [];
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: ['logs', { address, topics }],
                        onData(data) {
                            if (!active)
                                return;
                            const log = data.result;
                            try {
                                const { eventName, args } = (0,_utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_11__/* .decodeEventLog */ .j)({
                                    abi: abi,
                                    data: log.data,
                                    topics: log.topics,
                                    strict: strict_,
                                });
                                const formatted = (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_12__/* .formatLog */ .e)(log, {
                                    args,
                                    eventName: eventName,
                                });
                                emit.onLogs([formatted]);
                            }
                            catch (err) {
                                let eventName;
                                let isUnnamed;
                                if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_13__/* .DecodeLogDataMismatch */ .fo ||
                                    err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_13__/* .DecodeLogTopicsMismatch */ .l3) {
                                    // If strict mode is on, and log data/topics do not match event definition, skip.
                                    if (strict_)
                                        return;
                                    eventName = err.abiItem.name;
                                    isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
                                }
                                // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                                const formatted = (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_12__/* .formatLog */ .e)(log, {
                                    args: isUnnamed ? [] : {},
                                    eventName,
                                });
                                emit.onLogs([formatted]);
                            }
                        },
                        onError(error) {
                            emit.onError?.(error);
                        },
                    });
                    unsubscribe = unsubscribe_;
                    if (!active)
                        unsubscribe();
                }
                catch (err) {
                    onError?.(err);
                }
            })();
            return () => unsubscribe();
        });
    };
    return enablePolling ? pollContractEvent() : subscribeContractEvent();
}
//# sourceMappingURL=watchContractEvent.js.map

/***/ }),

/***/ 3778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ watchEvent)
/* harmony export */ });
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9824);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7687);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4562);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6798);
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(135);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6898);
/* harmony import */ var _utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4464);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2073);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3821);
/* harmony import */ var _createEventFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(137);
/* harmony import */ var _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9263);
/* harmony import */ var _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9080);
/* harmony import */ var _getLogs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1236);
/* harmony import */ var _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8435);














/**
 * Watches and returns emitted [Event Logs](https://viem.sh/docs/glossary/terms#event-log).
 *
 * - Docs: https://viem.sh/docs/actions/public/watchEvent
 * - JSON-RPC Methods:
 *   - **RPC Provider supports `eth_newFilter`:**
 *     - Calls [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter) to create a filter (called on initialize).
 *     - On a polling interval, it will call [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).
 *   - **RPC Provider does not support `eth_newFilter`:**
 *     - Calls [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) for each block between the polling interval.
 *
 * This Action will batch up all the Event Logs found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/actions/public/watchEvent#onLogs).
 *
 * `watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/actions/public/createEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchEventParameters}
 * @returns A function that can be invoked to stop watching for new Event Logs. {@link WatchEventReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchEvent } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchEvent(client, {
 *   onLogs: (logs) => console.log(logs),
 * })
 */
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_, }) {
    const enablePolling = (() => {
        if (typeof poll_ !== 'undefined')
            return poll_;
        if (typeof fromBlock === 'bigint')
            return true;
        if (client.transport.type === 'webSocket')
            return false;
        if (client.transport.type === 'fallback' &&
            client.transport.transports[0].config.type === 'webSocket')
            return false;
        return true;
    })();
    const strict = strict_ ?? false;
    const pollEvent = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)([
            'watchEvent',
            address,
            args,
            batch,
            client.uid,
            event,
            pollingInterval,
            fromBlock,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__/* .observe */ .lB)(observerId, { onLogs, onError }, (emit) => {
            let previousBlockNumber;
            if (fromBlock !== undefined)
                previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__/* .poll */ .w)(async () => {
                if (!initialized) {
                    try {
                        filter = (await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _createEventFilter_js__WEBPACK_IMPORTED_MODULE_4__/* .createEventFilter */ .X, 'createEventFilter')({
                            address,
                            args,
                            event: event,
                            events,
                            strict,
                            fromBlock,
                        }));
                    }
                    catch { }
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_5__/* .getFilterChanges */ .I, 'getFilterChanges')({ filter });
                    }
                    else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_6__/* .getBlockNumber */ .G, 'getBlockNumber')({});
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getLogs_js__WEBPACK_IMPORTED_MODULE_7__/* .getLogs */ .a, 'getLogs')({
                                address,
                                args,
                                event: event,
                                events,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                            });
                        }
                        else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0)
                        return;
                    if (batch)
                        emit.onLogs(logs);
                    else
                        for (const log of logs)
                            emit.onLogs([log]);
                }
                catch (err) {
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitialize the filter when this occurs
                    if (filter && err instanceof _errors_rpc_js__WEBPACK_IMPORTED_MODULE_8__/* .InvalidInputRpcError */ .Di)
                        initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_9__/* .uninstallFilter */ .Z, 'uninstallFilter')({ filter });
                unwatch();
            };
        });
    };
    const subscribeEvent = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const transport = (() => {
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport) => transport.config.type === 'webSocket');
                        if (!transport)
                            return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const events_ = events ?? (event ? [event] : undefined);
                let topics = [];
                if (events_) {
                    const encoded = events_.flatMap((event) => (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_10__/* .encodeEventTopics */ .R)({
                        abi: [event],
                        eventName: event.name,
                        args,
                    }));
                    // TODO: Clean up type casting
                    topics = [encoded];
                    if (event)
                        topics = topics[0];
                }
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: ['logs', { address, topics }],
                    onData(data) {
                        if (!active)
                            return;
                        const log = data.result;
                        try {
                            const { eventName, args } = (0,_utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_11__/* .decodeEventLog */ .j)({
                                abi: events_ ?? [],
                                data: log.data,
                                topics: log.topics,
                                strict,
                            });
                            const formatted = (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_12__/* .formatLog */ .e)(log, { args, eventName });
                            onLogs([formatted]);
                        }
                        catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_13__/* .DecodeLogDataMismatch */ .fo ||
                                err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_13__/* .DecodeLogTopicsMismatch */ .l3) {
                                // If strict mode is on, and log data/topics do not match event definition, skip.
                                if (strict_)
                                    return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
                            }
                            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                            const formatted = (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_12__/* .formatLog */ .e)(log, {
                                args: isUnnamed ? [] : {},
                                eventName,
                            });
                            onLogs([formatted]);
                        }
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return () => unsubscribe();
    };
    return enablePolling ? pollEvent() : subscribeEvent();
}
//# sourceMappingURL=watchEvent.js.map

/***/ }),

/***/ 932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ watchPendingTransactions)
/* harmony export */ });
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3821);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7687);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4562);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6798);
/* harmony import */ var _createPendingTransactionFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4328);
/* harmony import */ var _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9080);
/* harmony import */ var _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8435);







/**
 * Watches and returns pending transaction hashes.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchPendingTransactions
 * - JSON-RPC Methods:
 *   - When `poll: true`
 *     - Calls [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter) to initialize the filter.
 *     - Calls [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getFilterChanges) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newPendingTransactions"` event.
 *
 * This Action will batch up all the pending transactions found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchPendingTransactions#pollinginterval-optional), and invoke them via [`onTransactions`](https://viem.sh/docs/actions/public/watchPendingTransactions#ontransactions).
 *
 * @param client - Client to use
 * @param parameters - {@link WatchPendingTransactionsParameters}
 * @returns A function that can be invoked to stop watching for new pending transaction hashes. {@link WatchPendingTransactionsReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchPendingTransactions } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = await watchPendingTransactions(client, {
 *   onTransactions: (hashes) => console.log(hashes),
 * })
 */
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const pollPendingTransactions = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)([
            'watchPendingTransactions',
            client.uid,
            batch,
            pollingInterval,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__/* .observe */ .lB)(observerId, { onTransactions, onError }, (emit) => {
            let filter;
            const unwatch = (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__/* .poll */ .w)(async () => {
                try {
                    if (!filter) {
                        try {
                            filter = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _createPendingTransactionFilter_js__WEBPACK_IMPORTED_MODULE_4__/* .createPendingTransactionFilter */ .O, 'createPendingTransactionFilter')({});
                            return;
                        }
                        catch (err) {
                            unwatch();
                            throw err;
                        }
                    }
                    const hashes = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_5__/* .getFilterChanges */ .I, 'getFilterChanges')({ filter });
                    if (hashes.length === 0)
                        return;
                    if (batch)
                        emit.onTransactions(hashes);
                    else
                        for (const hash of hashes)
                            emit.onTransactions([hash]);
                }
                catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_3__/* .getAction */ .T)(client, _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_6__/* .uninstallFilter */ .Z, 'uninstallFilter')({ filter });
                unwatch();
            };
        });
    };
    const subscribePendingTransactions = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: ['newPendingTransactions'],
                    onData(data) {
                        if (!active)
                            return;
                        const transaction = data.result;
                        onTransactions([transaction]);
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return () => unsubscribe();
    };
    return enablePolling
        ? pollPendingTransactions()
        : subscribePendingTransactions();
}
//# sourceMappingURL=watchPendingTransactions.js.map

/***/ }),

/***/ 1598:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ verifySiweMessage)
/* harmony export */ });
/* harmony import */ var _utils_signature_hashMessage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8013);
/* harmony import */ var _utils_siwe_parseSiweMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9596);
/* harmony import */ var _utils_siwe_validateSiweMessage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5265);
/* harmony import */ var _public_verifyHash_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1234);




/**
 * Verifies [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) formatted message was signed.
 *
 * Compatible with Smart Contract Accounts & Externally Owned Accounts via [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492).
 *
 * - Docs {@link https://viem.sh/docs/siwe/actions/verifySiweMessage}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifySiweMessageParameters}
 * @returns Whether or not the signature is valid. {@link VerifySiweMessageReturnType}
 */
async function verifySiweMessage(client, parameters) {
    const { address, domain, message, nonce, scheme, signature, time = new Date(), ...callRequest } = parameters;
    const parsed = (0,_utils_siwe_parseSiweMessage_js__WEBPACK_IMPORTED_MODULE_0__/* .parseSiweMessage */ .v)(message);
    if (!parsed.address)
        return false;
    const isValid = (0,_utils_siwe_validateSiweMessage_js__WEBPACK_IMPORTED_MODULE_1__/* .validateSiweMessage */ .u)({
        address,
        domain,
        message: parsed,
        nonce,
        scheme,
        time,
    });
    if (!isValid)
        return false;
    const hash = (0,_utils_signature_hashMessage_js__WEBPACK_IMPORTED_MODULE_2__/* .hashMessage */ .A)(message);
    return (0,_public_verifyHash_js__WEBPACK_IMPORTED_MODULE_3__/* .verifyHash */ .K)(client, {
        address: parsed.address,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifySiweMessage.js.map

/***/ }),

/***/ 4173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ prepareTransactionRequest)
/* harmony export */ });
/* unused harmony export defaultParameters */
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2428);
/* harmony import */ var _actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9988);
/* harmony import */ var _actions_public_estimateGas_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8732);
/* harmony import */ var _actions_public_getBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3190);
/* harmony import */ var _actions_public_getTransactionCount_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1888);
/* harmony import */ var _errors_fee_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5381);
/* harmony import */ var _utils_blob_blobsToCommitments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1590);
/* harmony import */ var _utils_blob_blobsToProofs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5613);
/* harmony import */ var _utils_blob_commitmentsToVersionedHashes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4457);
/* harmony import */ var _utils_blob_toBlobSidecars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9225);
/* harmony import */ var _utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3821);
/* harmony import */ var _utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2335);
/* harmony import */ var _utils_transaction_getTransactionType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1134);
/* harmony import */ var _public_getChainId_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1263);














const defaultParameters = [
    'blobVersionedHashes',
    'chainId',
    'fees',
    'gas',
    'nonce',
    'type',
];
/**
 * Prepares a transaction request for signing.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest
 *
 * @param args - {@link PrepareTransactionRequestParameters}
 * @returns The transaction request. {@link PrepareTransactionRequestReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { prepareTransactionRequest } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const request = await prepareTransactionRequest(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   to: '0x0000000000000000000000000000000000000000',
 *   value: 1n,
 * })
 *
 * @example
 * // Account Hoisting
 * import { createWalletClient, http } from 'viem'
 * import { privateKeyToAccount } from 'viem/accounts'
 * import { mainnet } from 'viem/chains'
 * import { prepareTransactionRequest } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   account: privateKeyToAccount('0x…'),
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const request = await prepareTransactionRequest(client, {
 *   to: '0x0000000000000000000000000000000000000000',
 *   value: 1n,
 * })
 */
async function prepareTransactionRequest(client, args) {
    const { account: account_ = client.account, blobs, chain, gas, kzg, nonce, nonceManager, parameters = defaultParameters, type, } = args;
    const account = account_ ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAccount */ .J)(account_) : undefined;
    const request = { ...args, ...(account ? { from: account?.address } : {}) };
    let block;
    async function getBlock() {
        if (block)
            return block;
        block = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _actions_public_getBlock_js__WEBPACK_IMPORTED_MODULE_2__/* .getBlock */ .g, 'getBlock')({ blockTag: 'latest' });
        return block;
    }
    let chainId;
    async function getChainId() {
        if (chainId)
            return chainId;
        if (chain)
            return chain.id;
        if (typeof args.chainId !== 'undefined')
            return args.chainId;
        const chainId_ = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _public_getChainId_js__WEBPACK_IMPORTED_MODULE_3__/* .getChainId */ .T, 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    if ((parameters.includes('blobVersionedHashes') ||
        parameters.includes('sidecars')) &&
        blobs &&
        kzg) {
        const commitments = (0,_utils_blob_blobsToCommitments_js__WEBPACK_IMPORTED_MODULE_4__/* .blobsToCommitments */ .S)({ blobs, kzg });
        if (parameters.includes('blobVersionedHashes')) {
            const versionedHashes = (0,_utils_blob_commitmentsToVersionedHashes_js__WEBPACK_IMPORTED_MODULE_5__/* .commitmentsToVersionedHashes */ .d)({
                commitments,
                to: 'hex',
            });
            request.blobVersionedHashes = versionedHashes;
        }
        if (parameters.includes('sidecars')) {
            const proofs = (0,_utils_blob_blobsToProofs_js__WEBPACK_IMPORTED_MODULE_6__/* .blobsToProofs */ .t)({ blobs, commitments, kzg });
            const sidecars = (0,_utils_blob_toBlobSidecars_js__WEBPACK_IMPORTED_MODULE_7__/* .toBlobSidecars */ .T)({
                blobs,
                commitments,
                proofs,
                to: 'hex',
            });
            request.sidecars = sidecars;
        }
    }
    if (parameters.includes('chainId'))
        request.chainId = await getChainId();
    if (parameters.includes('nonce') && typeof nonce === 'undefined' && account) {
        if (nonceManager) {
            const chainId = await getChainId();
            request.nonce = await nonceManager.consume({
                address: account.address,
                chainId,
                client,
            });
        }
        else {
            request.nonce = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _actions_public_getTransactionCount_js__WEBPACK_IMPORTED_MODULE_8__/* .getTransactionCount */ .y, 'getTransactionCount')({
                address: account.address,
                blockTag: 'pending',
            });
        }
    }
    if ((parameters.includes('fees') || parameters.includes('type')) &&
        typeof type === 'undefined') {
        try {
            request.type = (0,_utils_transaction_getTransactionType_js__WEBPACK_IMPORTED_MODULE_9__/* .getTransactionType */ .L)(request);
        }
        catch {
            // infer type from block
            const block = await getBlock();
            request.type =
                typeof block?.baseFeePerGas === 'bigint' ? 'eip1559' : 'legacy';
        }
    }
    if (parameters.includes('fees')) {
        // TODO(4844): derive blob base fees once https://github.com/ethereum/execution-apis/pull/486 is merged.
        if (request.type !== 'legacy' && request.type !== 'eip2930') {
            // EIP-1559 fees
            if (typeof request.maxFeePerGas === 'undefined' ||
                typeof request.maxPriorityFeePerGas === 'undefined') {
                const block = await getBlock();
                const { maxFeePerGas, maxPriorityFeePerGas } = await (0,_actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_10__/* .internal_estimateFeesPerGas */ .O)(client, {
                    block: block,
                    chain,
                    request: request,
                });
                if (typeof args.maxPriorityFeePerGas === 'undefined' &&
                    args.maxFeePerGas &&
                    args.maxFeePerGas < maxPriorityFeePerGas)
                    throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_11__/* .MaxFeePerGasTooLowError */ .RR({
                        maxPriorityFeePerGas,
                    });
                request.maxPriorityFeePerGas = maxPriorityFeePerGas;
                request.maxFeePerGas = maxFeePerGas;
            }
        }
        else {
            // Legacy fees
            if (typeof args.maxFeePerGas !== 'undefined' ||
                typeof args.maxPriorityFeePerGas !== 'undefined')
                throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_11__/* .Eip1559FeesNotSupportedError */ .pw();
            const block = await getBlock();
            const { gasPrice: gasPrice_ } = await (0,_actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_10__/* .internal_estimateFeesPerGas */ .O)(client, {
                block: block,
                chain,
                request: request,
                type: 'legacy',
            });
            request.gasPrice = gasPrice_;
        }
    }
    if (parameters.includes('gas') && typeof gas === 'undefined')
        request.gas = await (0,_utils_getAction_js__WEBPACK_IMPORTED_MODULE_1__/* .getAction */ .T)(client, _actions_public_estimateGas_js__WEBPACK_IMPORTED_MODULE_12__/* .estimateGas */ .Q, 'estimateGas')({
            ...request,
            account: account
                ? { address: account.address, type: 'json-rpc' }
                : undefined,
        });
    (0,_utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_13__/* .assertRequest */ .c)(request);
    delete request.parameters;
    return request;
}
//# sourceMappingURL=prepareTransactionRequest.js.map

/***/ }),

/***/ 8639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ sendRawTransaction)
/* harmony export */ });
/**
 * Sends a **signed** transaction to the network
 *
 * - Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
 * - JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)
 *
 * @param client - Client to use
 * @param parameters - {@link SendRawTransactionParameters}
 * @returns The transaction hash. {@link SendRawTransactionReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { sendRawTransaction } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 *
 * const hash = await sendRawTransaction(client, {
 *   serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
 * })
 */
async function sendRawTransaction(client, { serializedTransaction }) {
    return client.request({
        method: 'eth_sendRawTransaction',
        params: [serializedTransaction],
    }, { retryCount: 0 });
}
//# sourceMappingURL=sendRawTransaction.js.map

/***/ }),

/***/ 8561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ mainnet)
/* harmony export */ });
/* harmony import */ var _utils_chain_defineChain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4861);

const mainnet = /*#__PURE__*/ (0,_utils_chain_defineChain_js__WEBPACK_IMPORTED_MODULE_0__/* .defineChain */ .x)({
    id: 1,
    name: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://cloudflare-eth.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io/api',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
            blockCreated: 19_258_213,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14_353_601,
        },
    },
});
//# sourceMappingURL=mainnet.js.map

/***/ }),

/***/ 5159:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ createClient)
/* harmony export */ });
/* unused harmony export rpcSchema */
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2428);
/* harmony import */ var _utils_uid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1833);


function createClient(parameters) {
    const { batch, cacheTime = parameters.pollingInterval ?? 4_000, ccipRead, key = 'base', name = 'Base Client', pollingInterval = 4_000, type = 'base', } = parameters;
    const chain = parameters.chain;
    const account = parameters.account
        ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAccount */ .J)(parameters.account)
        : undefined;
    const { config, request, value } = parameters.transport({
        chain,
        pollingInterval,
    });
    const transport = { ...config, ...value };
    const client = {
        account,
        batch,
        cacheTime,
        ccipRead,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0,_utils_uid_js__WEBPACK_IMPORTED_MODULE_1__/* .uid */ .L)(),
    };
    function extend(base) {
        return (extendFn) => {
            const extended = extendFn(base);
            for (const key in client)
                delete extended[key];
            const combined = { ...base, ...extended };
            return Object.assign(combined, { extend: extend(combined) });
        };
    }
    return Object.assign(client, { extend: extend(client) });
}
/**
 * Defines a typed JSON-RPC schema for the client.
 * Note: This is a runtime noop function.
 */
function rpcSchema() {
    return null;
}
//# sourceMappingURL=createClient.js.map

/***/ }),

/***/ 4138:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ createPublicClient)
/* harmony export */ });
/* harmony import */ var _createClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5159);
/* harmony import */ var _decorators_public_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3504);


/**
 * Creates a Public Client with a given [Transport](https://viem.sh/docs/clients/intro) configured for a [Chain](https://viem.sh/docs/clients/chains).
 *
 * - Docs: https://viem.sh/docs/clients/public
 *
 * A Public Client is an interface to "public" [JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/) methods such as retrieving block numbers, transactions, reading from smart contracts, etc through [Public Actions](/docs/actions/public/introduction).
 *
 * @param config - {@link PublicClientConfig}
 * @returns A Public Client. {@link PublicClient}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 */
function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = (0,_createClient_js__WEBPACK_IMPORTED_MODULE_0__/* .createClient */ .U)({
        ...parameters,
        key,
        name,
        type: 'publicClient',
    });
    return client.extend(_decorators_public_js__WEBPACK_IMPORTED_MODULE_1__/* .publicActions */ .$);
}
//# sourceMappingURL=createPublicClient.js.map

/***/ }),

/***/ 3504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ publicActions)
/* harmony export */ });
/* harmony import */ var _actions_ens_getEnsAddress_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70);
/* harmony import */ var _actions_ens_getEnsAvatar_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3193);
/* harmony import */ var _actions_ens_getEnsName_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8723);
/* harmony import */ var _actions_ens_getEnsResolver_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8826);
/* harmony import */ var _actions_ens_getEnsText_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9175);
/* harmony import */ var _actions_public_call_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9959);
/* harmony import */ var _actions_public_createBlockFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7332);
/* harmony import */ var _actions_public_createContractEventFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3587);
/* harmony import */ var _actions_public_createEventFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(137);
/* harmony import */ var _actions_public_createPendingTransactionFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4328);
/* harmony import */ var _actions_public_estimateContractGas_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9988);
/* harmony import */ var _actions_public_estimateGas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8732);
/* harmony import */ var _actions_public_estimateMaxPriorityFeePerGas_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2591);
/* harmony import */ var _actions_public_getBalance_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7351);
/* harmony import */ var _actions_public_getBlobBaseFee_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9469);
/* harmony import */ var _actions_public_getBlock_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3190);
/* harmony import */ var _actions_public_getBlockNumber_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9263);
/* harmony import */ var _actions_public_getBlockTransactionCount_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4749);
/* harmony import */ var _actions_public_getChainId_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1263);
/* harmony import */ var _actions_public_getCode_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7474);
/* harmony import */ var _actions_public_getContractEvents_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(752);
/* harmony import */ var _actions_public_getEip712Domain_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4531);
/* harmony import */ var _actions_public_getFeeHistory_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1907);
/* harmony import */ var _actions_public_getFilterChanges_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9080);
/* harmony import */ var _actions_public_getFilterLogs_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(5606);
/* harmony import */ var _actions_public_getGasPrice_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(8577);
/* harmony import */ var _actions_public_getLogs_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1236);
/* harmony import */ var _actions_public_getProof_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6965);
/* harmony import */ var _actions_public_getStorageAt_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2863);
/* harmony import */ var _actions_public_getTransaction_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(3811);
/* harmony import */ var _actions_public_getTransactionConfirmations_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(8977);
/* harmony import */ var _actions_public_getTransactionCount_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(1888);
/* harmony import */ var _actions_public_getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(1599);
/* harmony import */ var _actions_public_multicall_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(642);
/* harmony import */ var _actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(9321);
/* harmony import */ var _actions_public_simulateContract_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(7735);
/* harmony import */ var _actions_public_uninstallFilter_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(8435);
/* harmony import */ var _actions_public_verifyMessage_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(2539);
/* harmony import */ var _actions_public_verifyTypedData_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(8176);
/* harmony import */ var _actions_public_waitForTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(239);
/* harmony import */ var _actions_public_watchBlockNumber_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(7694);
/* harmony import */ var _actions_public_watchBlocks_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(9798);
/* harmony import */ var _actions_public_watchContractEvent_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(3980);
/* harmony import */ var _actions_public_watchEvent_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(3778);
/* harmony import */ var _actions_public_watchPendingTransactions_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(932);
/* harmony import */ var _actions_siwe_verifySiweMessage_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(1598);
/* harmony import */ var _actions_wallet_prepareTransactionRequest_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(4173);
/* harmony import */ var _actions_wallet_sendRawTransaction_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(8639);

















































function publicActions(client) {
    return {
        call: (args) => (0,_actions_public_call_js__WEBPACK_IMPORTED_MODULE_0__/* .call */ .T)(client, args),
        createBlockFilter: () => (0,_actions_public_createBlockFilter_js__WEBPACK_IMPORTED_MODULE_1__/* .createBlockFilter */ .E)(client),
        createContractEventFilter: (args) => (0,_actions_public_createContractEventFilter_js__WEBPACK_IMPORTED_MODULE_2__/* .createContractEventFilter */ .X)(client, args),
        createEventFilter: (args) => (0,_actions_public_createEventFilter_js__WEBPACK_IMPORTED_MODULE_3__/* .createEventFilter */ .X)(client, args),
        createPendingTransactionFilter: () => (0,_actions_public_createPendingTransactionFilter_js__WEBPACK_IMPORTED_MODULE_4__/* .createPendingTransactionFilter */ .O)(client),
        estimateContractGas: (args) => (0,_actions_public_estimateContractGas_js__WEBPACK_IMPORTED_MODULE_5__/* .estimateContractGas */ .W)(client, args),
        estimateGas: (args) => (0,_actions_public_estimateGas_js__WEBPACK_IMPORTED_MODULE_6__/* .estimateGas */ .Q)(client, args),
        getBalance: (args) => (0,_actions_public_getBalance_js__WEBPACK_IMPORTED_MODULE_7__/* .getBalance */ .r)(client, args),
        getBlobBaseFee: () => (0,_actions_public_getBlobBaseFee_js__WEBPACK_IMPORTED_MODULE_8__/* .getBlobBaseFee */ .f)(client),
        getBlock: (args) => (0,_actions_public_getBlock_js__WEBPACK_IMPORTED_MODULE_9__/* .getBlock */ .g)(client, args),
        getBlockNumber: (args) => (0,_actions_public_getBlockNumber_js__WEBPACK_IMPORTED_MODULE_10__/* .getBlockNumber */ .G)(client, args),
        getBlockTransactionCount: (args) => (0,_actions_public_getBlockTransactionCount_js__WEBPACK_IMPORTED_MODULE_11__/* .getBlockTransactionCount */ .L)(client, args),
        getBytecode: (args) => (0,_actions_public_getCode_js__WEBPACK_IMPORTED_MODULE_12__/* .getCode */ .Q)(client, args),
        getChainId: () => (0,_actions_public_getChainId_js__WEBPACK_IMPORTED_MODULE_13__/* .getChainId */ .T)(client),
        getCode: (args) => (0,_actions_public_getCode_js__WEBPACK_IMPORTED_MODULE_12__/* .getCode */ .Q)(client, args),
        getContractEvents: (args) => (0,_actions_public_getContractEvents_js__WEBPACK_IMPORTED_MODULE_14__/* .getContractEvents */ .u)(client, args),
        getEip712Domain: (args) => (0,_actions_public_getEip712Domain_js__WEBPACK_IMPORTED_MODULE_15__/* .getEip712Domain */ .j)(client, args),
        getEnsAddress: (args) => (0,_actions_ens_getEnsAddress_js__WEBPACK_IMPORTED_MODULE_16__/* .getEnsAddress */ .B)(client, args),
        getEnsAvatar: (args) => (0,_actions_ens_getEnsAvatar_js__WEBPACK_IMPORTED_MODULE_17__/* .getEnsAvatar */ .i)(client, args),
        getEnsName: (args) => (0,_actions_ens_getEnsName_js__WEBPACK_IMPORTED_MODULE_18__/* .getEnsName */ .s)(client, args),
        getEnsResolver: (args) => (0,_actions_ens_getEnsResolver_js__WEBPACK_IMPORTED_MODULE_19__/* .getEnsResolver */ .D)(client, args),
        getEnsText: (args) => (0,_actions_ens_getEnsText_js__WEBPACK_IMPORTED_MODULE_20__/* .getEnsText */ .m)(client, args),
        getFeeHistory: (args) => (0,_actions_public_getFeeHistory_js__WEBPACK_IMPORTED_MODULE_21__/* .getFeeHistory */ .T)(client, args),
        estimateFeesPerGas: (args) => (0,_actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_22__/* .estimateFeesPerGas */ ._)(client, args),
        getFilterChanges: (args) => (0,_actions_public_getFilterChanges_js__WEBPACK_IMPORTED_MODULE_23__/* .getFilterChanges */ .I)(client, args),
        getFilterLogs: (args) => (0,_actions_public_getFilterLogs_js__WEBPACK_IMPORTED_MODULE_24__/* .getFilterLogs */ .E)(client, args),
        getGasPrice: () => (0,_actions_public_getGasPrice_js__WEBPACK_IMPORTED_MODULE_25__/* .getGasPrice */ .L)(client),
        getLogs: (args) => (0,_actions_public_getLogs_js__WEBPACK_IMPORTED_MODULE_26__/* .getLogs */ .a)(client, args),
        getProof: (args) => (0,_actions_public_getProof_js__WEBPACK_IMPORTED_MODULE_27__/* .getProof */ .l)(client, args),
        estimateMaxPriorityFeePerGas: (args) => (0,_actions_public_estimateMaxPriorityFeePerGas_js__WEBPACK_IMPORTED_MODULE_28__/* .estimateMaxPriorityFeePerGas */ .b)(client, args),
        getStorageAt: (args) => (0,_actions_public_getStorageAt_js__WEBPACK_IMPORTED_MODULE_29__/* .getStorageAt */ .P)(client, args),
        getTransaction: (args) => (0,_actions_public_getTransaction_js__WEBPACK_IMPORTED_MODULE_30__/* .getTransaction */ .x)(client, args),
        getTransactionConfirmations: (args) => (0,_actions_public_getTransactionConfirmations_js__WEBPACK_IMPORTED_MODULE_31__/* .getTransactionConfirmations */ .d)(client, args),
        getTransactionCount: (args) => (0,_actions_public_getTransactionCount_js__WEBPACK_IMPORTED_MODULE_32__/* .getTransactionCount */ .y)(client, args),
        getTransactionReceipt: (args) => (0,_actions_public_getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_33__/* .getTransactionReceipt */ .h)(client, args),
        multicall: (args) => (0,_actions_public_multicall_js__WEBPACK_IMPORTED_MODULE_34__/* .multicall */ .C)(client, args),
        prepareTransactionRequest: (args) => (0,_actions_wallet_prepareTransactionRequest_js__WEBPACK_IMPORTED_MODULE_35__/* .prepareTransactionRequest */ .f)(client, args),
        readContract: (args) => (0,_actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_36__/* .readContract */ .J)(client, args),
        sendRawTransaction: (args) => (0,_actions_wallet_sendRawTransaction_js__WEBPACK_IMPORTED_MODULE_37__/* .sendRawTransaction */ .L)(client, args),
        simulateContract: (args) => (0,_actions_public_simulateContract_js__WEBPACK_IMPORTED_MODULE_38__/* .simulateContract */ .v)(client, args),
        verifyMessage: (args) => (0,_actions_public_verifyMessage_js__WEBPACK_IMPORTED_MODULE_39__/* .verifyMessage */ .l)(client, args),
        verifySiweMessage: (args) => (0,_actions_siwe_verifySiweMessage_js__WEBPACK_IMPORTED_MODULE_40__/* .verifySiweMessage */ .H)(client, args),
        verifyTypedData: (args) => (0,_actions_public_verifyTypedData_js__WEBPACK_IMPORTED_MODULE_41__/* .verifyTypedData */ .w)(client, args),
        uninstallFilter: (args) => (0,_actions_public_uninstallFilter_js__WEBPACK_IMPORTED_MODULE_42__/* .uninstallFilter */ .Z)(client, args),
        waitForTransactionReceipt: (args) => (0,_actions_public_waitForTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_43__/* .waitForTransactionReceipt */ .n)(client, args),
        watchBlocks: (args) => (0,_actions_public_watchBlocks_js__WEBPACK_IMPORTED_MODULE_44__/* .watchBlocks */ .O)(client, args),
        watchBlockNumber: (args) => (0,_actions_public_watchBlockNumber_js__WEBPACK_IMPORTED_MODULE_45__/* .watchBlockNumber */ .q)(client, args),
        watchContractEvent: (args) => (0,_actions_public_watchContractEvent_js__WEBPACK_IMPORTED_MODULE_46__/* .watchContractEvent */ .q)(client, args),
        watchEvent: (args) => (0,_actions_public_watchEvent_js__WEBPACK_IMPORTED_MODULE_47__/* .watchEvent */ .g)(client, args),
        watchPendingTransactions: (args) => (0,_actions_public_watchPendingTransactions_js__WEBPACK_IMPORTED_MODULE_48__/* .watchPendingTransactions */ .u)(client, args),
    };
}
//# sourceMappingURL=public.js.map

/***/ }),

/***/ 4668:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ createTransport)
/* harmony export */ });
/* harmony import */ var _utils_buildRequest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4718);
/* harmony import */ var _utils_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1833);


/**
 * @description Creates an transport intended to be used with a client.
 */
function createTransport({ key, name, request, retryCount = 3, retryDelay = 150, timeout, type, }, value) {
    const uid = (0,_utils_uid_js__WEBPACK_IMPORTED_MODULE_0__/* .uid */ .L)();
    return {
        config: {
            key,
            name,
            request,
            retryCount,
            retryDelay,
            timeout,
            type,
        },
        request: (0,_utils_buildRequest_js__WEBPACK_IMPORTED_MODULE_1__/* .buildRequest */ .m)(request, { retryCount, retryDelay, uid }),
        value,
    };
}
//# sourceMappingURL=createTransport.js.map

/***/ }),

/***/ 465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ http)
/* harmony export */ });
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1788);
/* harmony import */ var _errors_transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4692);
/* harmony import */ var _utils_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5664);
/* harmony import */ var _utils_rpc_http_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9967);
/* harmony import */ var _createTransport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4668);





/**
 * @description Creates a HTTP transport that connects to a JSON-RPC API.
 */
function http(
/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */
url, config = {}) {
    const { batch, fetchOptions, key = 'http', name = 'HTTP JSON-RPC', onFetchRequest, onFetchResponse, retryDelay, } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
        const { batchSize = 1000, wait = 0 } = typeof batch === 'object' ? batch : {};
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.http[0];
        if (!url_)
            throw new _errors_transport_js__WEBPACK_IMPORTED_MODULE_0__/* .UrlRequiredError */ .b();
        const rpcClient = (0,_utils_rpc_http_js__WEBPACK_IMPORTED_MODULE_1__/* .getHttpRpcClient */ .d)(url_, {
            fetchOptions,
            onRequest: onFetchRequest,
            onResponse: onFetchResponse,
            timeout,
        });
        return (0,_createTransport_js__WEBPACK_IMPORTED_MODULE_2__/* .createTransport */ .o)({
            key,
            name,
            async request({ method, params }) {
                const body = { method, params };
                const { schedule } = (0,_utils_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_3__/* .createBatchScheduler */ .u)({
                    id: url_,
                    wait,
                    shouldSplitBatch(requests) {
                        return requests.length > batchSize;
                    },
                    fn: (body) => rpcClient.request({
                        body,
                    }),
                    sort: (a, b) => a.id - b.id,
                });
                const fn = async (body) => batch
                    ? schedule(body)
                    : [
                        await rpcClient.request({
                            body,
                        }),
                    ];
                const [{ error, result }] = await fn(body);
                if (error)
                    throw new _errors_request_js__WEBPACK_IMPORTED_MODULE_4__/* .RpcRequestError */ .J8({
                        body,
                        error,
                        url: url_,
                    });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'http',
        }, {
            fetchOptions,
            url: url_,
        });
    };
}
//# sourceMappingURL=http.js.map

/***/ }),

/***/ 2836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ag: () => (/* binding */ universalResolverResolveAbi),
/* harmony export */   Rm: () => (/* binding */ addressResolverAbi),
/* harmony export */   SJ: () => (/* binding */ textResolverAbi),
/* harmony export */   _: () => (/* binding */ universalSignatureValidatorAbi),
/* harmony export */   oX: () => (/* binding */ universalResolverReverseAbi),
/* harmony export */   v2: () => (/* binding */ multicall3Abi)
/* harmony export */ });
/* unused harmony exports smartAccountAbi, erc20Abi, erc20Abi_bytes32, erc721Abi, erc4626Abi */
/* [Multicall3](https://github.com/mds1/multicall) */
const multicall3Abi = [
    {
        inputs: [
            {
                components: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'allowFailure',
                        type: 'bool',
                    },
                    {
                        name: 'callData',
                        type: 'bytes',
                    },
                ],
                name: 'calls',
                type: 'tuple[]',
            },
        ],
        name: 'aggregate3',
        outputs: [
            {
                components: [
                    {
                        name: 'success',
                        type: 'bool',
                    },
                    {
                        name: 'returnData',
                        type: 'bytes',
                    },
                ],
                name: 'returnData',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
const universalResolverErrors = [
    {
        inputs: [],
        name: 'ResolverNotFound',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ResolverWildcardNotSupported',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ResolverNotContract',
        type: 'error',
    },
    {
        inputs: [
            {
                name: 'returnData',
                type: 'bytes',
            },
        ],
        name: 'ResolverError',
        type: 'error',
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'status',
                        type: 'uint16',
                    },
                    {
                        name: 'message',
                        type: 'string',
                    },
                ],
                name: 'errors',
                type: 'tuple[]',
            },
        ],
        name: 'HttpError',
        type: 'error',
    },
];
const universalResolverResolveAbi = [
    ...universalResolverErrors,
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes' },
            { name: 'data', type: 'bytes' },
        ],
        outputs: [
            { name: '', type: 'bytes' },
            { name: 'address', type: 'address' },
        ],
    },
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes' },
            { name: 'data', type: 'bytes' },
            { name: 'gateways', type: 'string[]' },
        ],
        outputs: [
            { name: '', type: 'bytes' },
            { name: 'address', type: 'address' },
        ],
    },
];
const universalResolverReverseAbi = [
    ...universalResolverErrors,
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ type: 'bytes', name: 'reverseName' }],
        outputs: [
            { type: 'string', name: 'resolvedName' },
            { type: 'address', name: 'resolvedAddress' },
            { type: 'address', name: 'reverseResolver' },
            { type: 'address', name: 'resolver' },
        ],
    },
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { type: 'bytes', name: 'reverseName' },
            { type: 'string[]', name: 'gateways' },
        ],
        outputs: [
            { type: 'string', name: 'resolvedName' },
            { type: 'address', name: 'resolvedAddress' },
            { type: 'address', name: 'reverseResolver' },
            { type: 'address', name: 'resolver' },
        ],
    },
];
const textResolverAbi = [
    {
        name: 'text',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes32' },
            { name: 'key', type: 'string' },
        ],
        outputs: [{ name: '', type: 'string' }],
    },
];
const addressResolverAbi = [
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ name: 'name', type: 'bytes32' }],
        outputs: [{ name: '', type: 'address' }],
    },
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes32' },
            { name: 'coinType', type: 'uint256' },
        ],
        outputs: [{ name: '', type: 'bytes' }],
    },
];
// ERC-1271
// isValidSignature(bytes32 hash, bytes signature) → bytes4 magicValue
/** @internal */
const smartAccountAbi = [
    {
        name: 'isValidSignature',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'hash', type: 'bytes32' },
            { name: 'signature', type: 'bytes' },
        ],
        outputs: [{ name: '', type: 'bytes4' }],
    },
];
// ERC-6492 - universal deployless signature validator contract
// constructor(address _signer, bytes32 _hash, bytes _signature) → bytes4 returnValue
// returnValue is either 0x1 (valid) or 0x0 (invalid)
const universalSignatureValidatorAbi = [
    {
        inputs: [
            {
                name: '_signer',
                type: 'address',
            },
            {
                name: '_hash',
                type: 'bytes32',
            },
            {
                name: '_signature',
                type: 'bytes',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
];
/** [ERC-20 Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20) */
const erc20Abi = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256',
            },
        ],
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'allowance',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'spender',
                type: 'address',
            },
        ],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'bool',
            },
        ],
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address',
            },
        ],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'decimals',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint8',
            },
        ],
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string',
            },
        ],
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string',
            },
        ],
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'bool',
            },
        ],
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address',
            },
            {
                name: 'recipient',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'bool',
            },
        ],
    },
];
/**
 * [bytes32-flavored ERC-20](https://docs.makerdao.com/smart-contract-modules/mkr-module#4.-gotchas-potential-source-of-user-error)
 * for tokens (ie. Maker) that use bytes32 instead of string.
 */
const erc20Abi_bytes32 = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256',
            },
        ],
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'allowance',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'spender',
                type: 'address',
            },
        ],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'bool',
            },
        ],
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address',
            },
        ],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'decimals',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint8',
            },
        ],
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'bytes32',
            },
        ],
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'bytes32',
            },
        ],
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'bool',
            },
        ],
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address',
            },
            {
                name: 'recipient',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'bool',
            },
        ],
    },
];
/** [ERC-721 Non-Fungible Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-721) */
const erc721Abi = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address',
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256',
            },
        ],
    },
    {
        type: 'event',
        name: 'ApprovalForAll',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'operator',
                type: 'address',
            },
            {
                indexed: false,
                name: 'approved',
                type: 'bool',
            },
        ],
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                name: 'to',
                type: 'address',
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'spender',
                type: 'address',
            },
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        outputs: [],
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address',
            },
        ],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'getApproved',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'address',
            },
        ],
    },
    {
        type: 'function',
        name: 'isApprovedForAll',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'operator',
                type: 'address',
            },
        ],
        outputs: [
            {
                type: 'bool',
            },
        ],
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string',
            },
        ],
    },
    {
        type: 'function',
        name: 'ownerOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                name: 'owner',
                type: 'address',
            },
        ],
    },
    {
        type: 'function',
        name: 'safeTransferFrom',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'from',
                type: 'address',
            },
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        outputs: [],
    },
    {
        type: 'function',
        name: 'safeTransferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'from',
                type: 'address',
            },
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'id',
                type: 'uint256',
            },
            {
                name: 'data',
                type: 'bytes',
            },
        ],
        outputs: [],
    },
    {
        type: 'function',
        name: 'setApprovalForAll',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'operator',
                type: 'address',
            },
            {
                name: 'approved',
                type: 'bool',
            },
        ],
        outputs: [],
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string',
            },
        ],
    },
    {
        type: 'function',
        name: 'tokenByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'index',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'tokenByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'index',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'tokenURI',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        outputs: [
            {
                type: 'string',
            },
        ],
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'sender',
                type: 'address',
            },
            {
                name: 'recipient',
                type: 'address',
            },
            {
                name: 'tokeId',
                type: 'uint256',
            },
        ],
        outputs: [],
    },
];
/** [ERC-4626 Tokenized Vaults Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626) */
const erc4626Abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                name: 'receiver',
                type: 'address',
            },
            {
                indexed: false,
                name: 'assets',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'shares',
                type: 'uint256',
            },
        ],
        name: 'Deposit',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                name: 'receiver',
                type: 'address',
            },
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: false,
                name: 'assets',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'shares',
                type: 'uint256',
            },
        ],
        name: 'Withdraw',
        type: 'event',
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'spender',
                type: 'address',
            },
        ],
        name: 'allowance',
        outputs: [
            {
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'spender',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [
            {
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'asset',
        outputs: [
            {
                name: 'assetTokenAddress',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'account',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
        ],
        name: 'convertToAssets',
        outputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
        ],
        name: 'convertToShares',
        outputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
            {
                name: 'receiver',
                type: 'address',
            },
        ],
        name: 'deposit',
        outputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'caller',
                type: 'address',
            },
        ],
        name: 'maxDeposit',
        outputs: [
            {
                name: 'maxAssets',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'caller',
                type: 'address',
            },
        ],
        name: 'maxMint',
        outputs: [
            {
                name: 'maxShares',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'maxRedeem',
        outputs: [
            {
                name: 'maxShares',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'maxWithdraw',
        outputs: [
            {
                name: 'maxAssets',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
            {
                name: 'receiver',
                type: 'address',
            },
        ],
        name: 'mint',
        outputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
        ],
        name: 'previewDeposit',
        outputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
        ],
        name: 'previewMint',
        outputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
        ],
        name: 'previewRedeem',
        outputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
        ],
        name: 'previewWithdraw',
        outputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
            {
                name: 'receiver',
                type: 'address',
            },
            {
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'redeem',
        outputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalAssets',
        outputs: [
            {
                name: 'totalManagedAssets',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transfer',
        outputs: [
            {
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'from',
                type: 'address',
            },
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [
            {
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256',
            },
            {
                name: 'receiver',
                type: 'address',
            },
            {
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'withdraw',
        outputs: [
            {
                name: 'shares',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
//# sourceMappingURL=abis.js.map

/***/ }),

/***/ 9384:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZJ: () => (/* binding */ bytesPerFieldElement),
/* harmony export */   ou: () => (/* binding */ fieldElementsPerBlob),
/* harmony export */   vP: () => (/* binding */ maxBytesPerTransaction),
/* harmony export */   wb: () => (/* binding */ bytesPerBlob)
/* harmony export */ });
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md#parameters
/** Blob limit per transaction. */
const blobsPerTransaction = 6;
/** The number of bytes in a BLS scalar field element. */
const bytesPerFieldElement = 32;
/** The number of field elements in a blob. */
const fieldElementsPerBlob = 4096;
/** The number of bytes in a blob. */
const bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
/** Blob bytes limit per transaction. */
const maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction -
    // terminator byte (0x80).
    1 -
    // zero byte (0x00) appended to each field element.
    1 * fieldElementsPerBlob * blobsPerTransaction;
//# sourceMappingURL=blob.js.map

/***/ }),

/***/ 1192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ erc6492MagicBytes)
/* harmony export */ });
/* unused harmony export zeroHash */
const erc6492MagicBytes = '0x6492649264926492649264926492649264926492649264926492649264926492';
const zeroHash = '0x0000000000000000000000000000000000000000000000000000000000000000';
//# sourceMappingURL=bytes.js.map

/***/ }),

/***/ 3493:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ aggregate3Signature)
/* harmony export */ });
const aggregate3Signature = '0x82ad56cb';
//# sourceMappingURL=contract.js.map

/***/ }),

/***/ 3696:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LX: () => (/* binding */ deploylessCallViaBytecodeBytecode),
/* harmony export */   WN: () => (/* binding */ deploylessCallViaFactoryBytecode),
/* harmony export */   nP: () => (/* binding */ universalSignatureValidatorByteCode)
/* harmony export */ });
const deploylessCallViaBytecodeBytecode = '0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe';
const deploylessCallViaFactoryBytecode = '0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe';
const universalSignatureValidatorByteCode = '0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572';
//# sourceMappingURL=contracts.js.map

/***/ }),

/***/ 9797:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ versionedHashVersionKzg)
/* harmony export */ });
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md#parameters
const versionedHashVersionKzg = 1;
//# sourceMappingURL=kzg.js.map

/***/ }),

/***/ 4618:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ maxUint256)
/* harmony export */ });
/* unused harmony exports maxInt8, maxInt16, maxInt24, maxInt32, maxInt40, maxInt48, maxInt56, maxInt64, maxInt72, maxInt80, maxInt88, maxInt96, maxInt104, maxInt112, maxInt120, maxInt128, maxInt136, maxInt144, maxInt152, maxInt160, maxInt168, maxInt176, maxInt184, maxInt192, maxInt200, maxInt208, maxInt216, maxInt224, maxInt232, maxInt240, maxInt248, maxInt256, minInt8, minInt16, minInt24, minInt32, minInt40, minInt48, minInt56, minInt64, minInt72, minInt80, minInt88, minInt96, minInt104, minInt112, minInt120, minInt128, minInt136, minInt144, minInt152, minInt160, minInt168, minInt176, minInt184, minInt192, minInt200, minInt208, minInt216, minInt224, minInt232, minInt240, minInt248, minInt256, maxUint8, maxUint16, maxUint24, maxUint32, maxUint40, maxUint48, maxUint56, maxUint64, maxUint72, maxUint80, maxUint88, maxUint96, maxUint104, maxUint112, maxUint120, maxUint128, maxUint136, maxUint144, maxUint152, maxUint160, maxUint168, maxUint176, maxUint184, maxUint192, maxUint200, maxUint208, maxUint216, maxUint224, maxUint232, maxUint240, maxUint248 */
const maxInt8 = (/* unused pure expression or super */ null && (2n ** (8n - 1n) - 1n));
const maxInt16 = (/* unused pure expression or super */ null && (2n ** (16n - 1n) - 1n));
const maxInt24 = (/* unused pure expression or super */ null && (2n ** (24n - 1n) - 1n));
const maxInt32 = (/* unused pure expression or super */ null && (2n ** (32n - 1n) - 1n));
const maxInt40 = (/* unused pure expression or super */ null && (2n ** (40n - 1n) - 1n));
const maxInt48 = (/* unused pure expression or super */ null && (2n ** (48n - 1n) - 1n));
const maxInt56 = (/* unused pure expression or super */ null && (2n ** (56n - 1n) - 1n));
const maxInt64 = (/* unused pure expression or super */ null && (2n ** (64n - 1n) - 1n));
const maxInt72 = (/* unused pure expression or super */ null && (2n ** (72n - 1n) - 1n));
const maxInt80 = (/* unused pure expression or super */ null && (2n ** (80n - 1n) - 1n));
const maxInt88 = (/* unused pure expression or super */ null && (2n ** (88n - 1n) - 1n));
const maxInt96 = (/* unused pure expression or super */ null && (2n ** (96n - 1n) - 1n));
const maxInt104 = (/* unused pure expression or super */ null && (2n ** (104n - 1n) - 1n));
const maxInt112 = (/* unused pure expression or super */ null && (2n ** (112n - 1n) - 1n));
const maxInt120 = (/* unused pure expression or super */ null && (2n ** (120n - 1n) - 1n));
const maxInt128 = (/* unused pure expression or super */ null && (2n ** (128n - 1n) - 1n));
const maxInt136 = (/* unused pure expression or super */ null && (2n ** (136n - 1n) - 1n));
const maxInt144 = (/* unused pure expression or super */ null && (2n ** (144n - 1n) - 1n));
const maxInt152 = (/* unused pure expression or super */ null && (2n ** (152n - 1n) - 1n));
const maxInt160 = (/* unused pure expression or super */ null && (2n ** (160n - 1n) - 1n));
const maxInt168 = (/* unused pure expression or super */ null && (2n ** (168n - 1n) - 1n));
const maxInt176 = (/* unused pure expression or super */ null && (2n ** (176n - 1n) - 1n));
const maxInt184 = (/* unused pure expression or super */ null && (2n ** (184n - 1n) - 1n));
const maxInt192 = (/* unused pure expression or super */ null && (2n ** (192n - 1n) - 1n));
const maxInt200 = (/* unused pure expression or super */ null && (2n ** (200n - 1n) - 1n));
const maxInt208 = (/* unused pure expression or super */ null && (2n ** (208n - 1n) - 1n));
const maxInt216 = (/* unused pure expression or super */ null && (2n ** (216n - 1n) - 1n));
const maxInt224 = (/* unused pure expression or super */ null && (2n ** (224n - 1n) - 1n));
const maxInt232 = (/* unused pure expression or super */ null && (2n ** (232n - 1n) - 1n));
const maxInt240 = (/* unused pure expression or super */ null && (2n ** (240n - 1n) - 1n));
const maxInt248 = (/* unused pure expression or super */ null && (2n ** (248n - 1n) - 1n));
const maxInt256 = (/* unused pure expression or super */ null && (2n ** (256n - 1n) - 1n));
const minInt8 = (/* unused pure expression or super */ null && (-(2n ** (8n - 1n))));
const minInt16 = (/* unused pure expression or super */ null && (-(2n ** (16n - 1n))));
const minInt24 = (/* unused pure expression or super */ null && (-(2n ** (24n - 1n))));
const minInt32 = (/* unused pure expression or super */ null && (-(2n ** (32n - 1n))));
const minInt40 = (/* unused pure expression or super */ null && (-(2n ** (40n - 1n))));
const minInt48 = (/* unused pure expression or super */ null && (-(2n ** (48n - 1n))));
const minInt56 = (/* unused pure expression or super */ null && (-(2n ** (56n - 1n))));
const minInt64 = (/* unused pure expression or super */ null && (-(2n ** (64n - 1n))));
const minInt72 = (/* unused pure expression or super */ null && (-(2n ** (72n - 1n))));
const minInt80 = (/* unused pure expression or super */ null && (-(2n ** (80n - 1n))));
const minInt88 = (/* unused pure expression or super */ null && (-(2n ** (88n - 1n))));
const minInt96 = (/* unused pure expression or super */ null && (-(2n ** (96n - 1n))));
const minInt104 = (/* unused pure expression or super */ null && (-(2n ** (104n - 1n))));
const minInt112 = (/* unused pure expression or super */ null && (-(2n ** (112n - 1n))));
const minInt120 = (/* unused pure expression or super */ null && (-(2n ** (120n - 1n))));
const minInt128 = (/* unused pure expression or super */ null && (-(2n ** (128n - 1n))));
const minInt136 = (/* unused pure expression or super */ null && (-(2n ** (136n - 1n))));
const minInt144 = (/* unused pure expression or super */ null && (-(2n ** (144n - 1n))));
const minInt152 = (/* unused pure expression or super */ null && (-(2n ** (152n - 1n))));
const minInt160 = (/* unused pure expression or super */ null && (-(2n ** (160n - 1n))));
const minInt168 = (/* unused pure expression or super */ null && (-(2n ** (168n - 1n))));
const minInt176 = (/* unused pure expression or super */ null && (-(2n ** (176n - 1n))));
const minInt184 = (/* unused pure expression or super */ null && (-(2n ** (184n - 1n))));
const minInt192 = (/* unused pure expression or super */ null && (-(2n ** (192n - 1n))));
const minInt200 = (/* unused pure expression or super */ null && (-(2n ** (200n - 1n))));
const minInt208 = (/* unused pure expression or super */ null && (-(2n ** (208n - 1n))));
const minInt216 = (/* unused pure expression or super */ null && (-(2n ** (216n - 1n))));
const minInt224 = (/* unused pure expression or super */ null && (-(2n ** (224n - 1n))));
const minInt232 = (/* unused pure expression or super */ null && (-(2n ** (232n - 1n))));
const minInt240 = (/* unused pure expression or super */ null && (-(2n ** (240n - 1n))));
const minInt248 = (/* unused pure expression or super */ null && (-(2n ** (248n - 1n))));
const minInt256 = (/* unused pure expression or super */ null && (-(2n ** (256n - 1n))));
const maxUint8 = (/* unused pure expression or super */ null && (2n ** 8n - 1n));
const maxUint16 = (/* unused pure expression or super */ null && (2n ** 16n - 1n));
const maxUint24 = (/* unused pure expression or super */ null && (2n ** 24n - 1n));
const maxUint32 = (/* unused pure expression or super */ null && (2n ** 32n - 1n));
const maxUint40 = (/* unused pure expression or super */ null && (2n ** 40n - 1n));
const maxUint48 = (/* unused pure expression or super */ null && (2n ** 48n - 1n));
const maxUint56 = (/* unused pure expression or super */ null && (2n ** 56n - 1n));
const maxUint64 = (/* unused pure expression or super */ null && (2n ** 64n - 1n));
const maxUint72 = (/* unused pure expression or super */ null && (2n ** 72n - 1n));
const maxUint80 = (/* unused pure expression or super */ null && (2n ** 80n - 1n));
const maxUint88 = (/* unused pure expression or super */ null && (2n ** 88n - 1n));
const maxUint96 = (/* unused pure expression or super */ null && (2n ** 96n - 1n));
const maxUint104 = (/* unused pure expression or super */ null && (2n ** 104n - 1n));
const maxUint112 = (/* unused pure expression or super */ null && (2n ** 112n - 1n));
const maxUint120 = (/* unused pure expression or super */ null && (2n ** 120n - 1n));
const maxUint128 = (/* unused pure expression or super */ null && (2n ** 128n - 1n));
const maxUint136 = (/* unused pure expression or super */ null && (2n ** 136n - 1n));
const maxUint144 = (/* unused pure expression or super */ null && (2n ** 144n - 1n));
const maxUint152 = (/* unused pure expression or super */ null && (2n ** 152n - 1n));
const maxUint160 = (/* unused pure expression or super */ null && (2n ** 160n - 1n));
const maxUint168 = (/* unused pure expression or super */ null && (2n ** 168n - 1n));
const maxUint176 = (/* unused pure expression or super */ null && (2n ** 176n - 1n));
const maxUint184 = (/* unused pure expression or super */ null && (2n ** 184n - 1n));
const maxUint192 = (/* unused pure expression or super */ null && (2n ** 192n - 1n));
const maxUint200 = (/* unused pure expression or super */ null && (2n ** 200n - 1n));
const maxUint208 = (/* unused pure expression or super */ null && (2n ** 208n - 1n));
const maxUint216 = (/* unused pure expression or super */ null && (2n ** 216n - 1n));
const maxUint224 = (/* unused pure expression or super */ null && (2n ** 224n - 1n));
const maxUint232 = (/* unused pure expression or super */ null && (2n ** 232n - 1n));
const maxUint240 = (/* unused pure expression or super */ null && (2n ** 240n - 1n));
const maxUint248 = (/* unused pure expression or super */ null && (2n ** 248n - 1n));
const maxUint256 = 2n ** 256n - 1n;
//# sourceMappingURL=number.js.map

/***/ }),

/***/ 9026:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J9: () => (/* binding */ solidityPanic),
/* harmony export */   Mc: () => (/* binding */ solidityError),
/* harmony export */   fD: () => (/* binding */ panicReasons)
/* harmony export */ });
// https://docs.soliditylang.org/en/v0.8.16/control-structures.html#panic-via-assert-and-error-via-require
const panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmetic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.',
};
const solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string',
        },
    ],
    name: 'Error',
    type: 'error',
};
const solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256',
        },
    ],
    name: 'Panic',
    type: 'error',
};
//# sourceMappingURL=solidity.js.map

/***/ }),

/***/ 8553:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ presignMessagePrefix)
/* harmony export */ });
const presignMessagePrefix = '\x19Ethereum Signed Message:\n';
//# sourceMappingURL=strings.js.map

/***/ }),

/***/ 1185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eL: () => (/* binding */ etherUnits),
/* harmony export */   sz: () => (/* binding */ gweiUnits)
/* harmony export */ });
/* unused harmony export weiUnits */
const etherUnits = {
    gwei: 9,
    wei: 18,
};
const gweiUnits = {
    ether: -9,
    wei: 9,
};
const weiUnits = {
    ether: -18,
    gwei: -9,
};
//# sourceMappingURL=unit.js.map

/***/ }),

/***/ 135:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BI: () => (/* binding */ BytesSizeMismatchError),
/* harmony export */   Iy: () => (/* binding */ AbiDecodingDataSizeTooSmallError),
/* harmony export */   Iz: () => (/* binding */ AbiFunctionNotFoundError),
/* harmony export */   MR: () => (/* binding */ AbiFunctionOutputsNotFoundError),
/* harmony export */   M_: () => (/* binding */ AbiEventNotFoundError),
/* harmony export */   Nc: () => (/* binding */ AbiEncodingArrayLengthMismatchError),
/* harmony export */   O: () => (/* binding */ AbiDecodingZeroDataError),
/* harmony export */   Wq: () => (/* binding */ AbiErrorSignatureNotFoundError),
/* harmony export */   YE: () => (/* binding */ AbiEncodingLengthMismatchError),
/* harmony export */   YF: () => (/* binding */ AbiConstructorParamsNotFoundError),
/* harmony export */   YW: () => (/* binding */ AbiConstructorNotFoundError),
/* harmony export */   _z: () => (/* binding */ AbiEventSignatureEmptyTopicsError),
/* harmony export */   d_: () => (/* binding */ InvalidDefinitionTypeError),
/* harmony export */   dm: () => (/* binding */ InvalidArrayError),
/* harmony export */   fo: () => (/* binding */ DecodeLogDataMismatch),
/* harmony export */   gH: () => (/* binding */ AbiEncodingBytesSizeMismatchError),
/* harmony export */   j: () => (/* binding */ InvalidAbiDecodingTypeError),
/* harmony export */   kE: () => (/* binding */ AbiEventSignatureNotFoundError),
/* harmony export */   l3: () => (/* binding */ DecodeLogTopicsMismatch),
/* harmony export */   nK: () => (/* binding */ InvalidAbiEncodingTypeError),
/* harmony export */   nM: () => (/* binding */ AbiItemAmbiguityError)
/* harmony export */ });
/* unused harmony exports AbiDecodingDataSizeInvalidError, AbiErrorInputsNotFoundError, AbiErrorNotFoundError, AbiFunctionSignatureNotFoundError, UnsupportedPackedAbiType */
/* harmony import */ var _utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5081);
/* harmony import */ var _utils_data_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6615);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);



class AbiConstructorNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ docsPath }) {
        super([
            'A constructor was not found on the ABI.',
            'Make sure you are using the correct ABI and that the constructor exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorNotFoundError',
        });
    }
}
class AbiConstructorParamsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ docsPath }) {
        super([
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
            'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.',
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorParamsNotFoundError',
        });
    }
}
class AbiDecodingDataSizeInvalidError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ data, size }) {
        super([
            `Data size of ${size} bytes is invalid.`,
            'Size must be in increments of 32 bytes (size % 32 === 0).',
        ].join('\n'), {
            metaMessages: [`Data: ${data} (${size} bytes)`],
            name: 'AbiDecodingDataSizeInvalidError',
        });
    }
}
class AbiDecodingDataSizeTooSmallError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ data, params, size, }) {
        super([`Data size of ${size} bytes is too small for given parameters.`].join('\n'), {
            metaMessages: [
                `Params: (${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__/* .formatAbiParams */ .A)(params, { includeName: true })})`,
                `Data:   ${data} (${size} bytes)`,
            ],
            name: 'AbiDecodingDataSizeTooSmallError',
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class AbiDecodingZeroDataError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: 'AbiDecodingZeroDataError',
        });
    }
}
class AbiEncodingArrayLengthMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ expectedLength, givenLength, type, }) {
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`,
        ].join('\n'), { name: 'AbiEncodingArrayLengthMismatchError' });
    }
}
class AbiEncodingBytesSizeMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${(0,_utils_data_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(value)}) does not match expected size (bytes${expectedSize}).`, { name: 'AbiEncodingBytesSizeMismatchError' });
    }
}
class AbiEncodingLengthMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ expectedLength, givenLength, }) {
        super([
            'ABI encoding params/values length mismatch.',
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`,
        ].join('\n'), { name: 'AbiEncodingLengthMismatchError' });
    }
}
class AbiErrorInputsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(errorName, { docsPath }) {
        super([
            `Arguments (\`args\`) were provided to "${errorName}", but "${errorName}" on the ABI does not contain any parameters (\`inputs\`).`,
            'Cannot encode error result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the inputs exist on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorInputsNotFoundError',
        });
    }
}
class AbiErrorNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(errorName, { docsPath } = {}) {
        super([
            `Error ${errorName ? `"${errorName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorNotFoundError',
        });
    }
}
class AbiErrorSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(signature, { docsPath }) {
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorSignatureNotFoundError',
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
class AbiEventSignatureEmptyTopicsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ docsPath }) {
        super('Cannot extract event signature from empty topics.', {
            docsPath,
            name: 'AbiEventSignatureEmptyTopicsError',
        });
    }
}
class AbiEventSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(signature, { docsPath }) {
        super([
            `Encoded event signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
            name: 'AbiEventSignatureNotFoundError',
        });
    }
}
class AbiEventNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(eventName, { docsPath } = {}) {
        super([
            `Event ${eventName ? `"${eventName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiEventNotFoundError',
        });
    }
}
class AbiFunctionNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(functionName, { docsPath } = {}) {
        super([
            `Function ${functionName ? `"${functionName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionNotFoundError',
        });
    }
}
class AbiFunctionOutputsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(functionName, { docsPath }) {
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.',
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionOutputsNotFoundError',
        });
    }
}
class AbiFunctionSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(signature, { docsPath }) {
        super([
            `Encoded function signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionSignatureNotFoundError',
        });
    }
}
class AbiItemAmbiguityError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(x, y) {
        super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
                `\`${x.type}\` in \`${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__/* .formatAbiItem */ .B)(x.abiItem)}\`, and`,
                `\`${y.type}\` in \`${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__/* .formatAbiItem */ .B)(y.abiItem)}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.',
            ],
            name: 'AbiItemAmbiguityError',
        });
    }
}
class BytesSizeMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ expectedSize, givenSize, }) {
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
            name: 'BytesSizeMismatchError',
        });
    }
}
class DecodeLogDataMismatch extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ abiItem, data, params, size, }) {
        super([
            `Data size of ${size} bytes is too small for non-indexed event parameters.`,
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__/* .formatAbiParams */ .A)(params, { includeName: true })})`,
                `Data:   ${data} (${size} bytes)`,
            ],
            name: 'DecodeLogDataMismatch',
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class DecodeLogTopicsMismatch extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ abiItem, param, }) {
        super([
            `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ''} on event "${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__/* .formatAbiItem */ .B)(abiItem, { includeName: true })}".`,
        ].join('\n'), { name: 'DecodeLogTopicsMismatch' });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
class InvalidAbiEncodingTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(type, { docsPath }) {
        super([
            `Type "${type}" is not a valid encoding type.`,
            'Please provide a valid ABI type.',
        ].join('\n'), { docsPath, name: 'InvalidAbiEncodingType' });
    }
}
class InvalidAbiDecodingTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(type, { docsPath }) {
        super([
            `Type "${type}" is not a valid decoding type.`,
            'Please provide a valid ABI type.',
        ].join('\n'), { docsPath, name: 'InvalidAbiDecodingType' });
    }
}
class InvalidArrayError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(value) {
        super([`Value "${value}" is not a valid array.`].join('\n'), {
            name: 'InvalidArrayError',
        });
    }
}
class InvalidDefinitionTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(type) {
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"',
        ].join('\n'), { name: 'InvalidDefinitionTypeError' });
    }
}
class UnsupportedPackedAbiType extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(type) {
        super(`Type "${type}" is not supported for packed encoding.`, {
            name: 'UnsupportedPackedAbiType',
        });
    }
}
//# sourceMappingURL=abi.js.map

/***/ }),

/***/ 8149:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ InvalidAddressError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class InvalidAddressError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ address }) {
        super(`Address "${address}" is invalid.`, {
            metaMessages: [
                '- Address must be a hex value of 20 bytes (40 hex characters).',
                '- Address must match its checksum counterpart.',
            ],
            name: 'InvalidAddressError',
        });
    }
}
//# sourceMappingURL=address.js.map

/***/ }),

/***/ 5484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ BaseError)
/* harmony export */ });
/* unused harmony export setErrorConfig */
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9241);

let errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = '', docsSlug, }) => docsPath
        ? `${docsBaseUrl ?? 'https://viem.sh'}${docsPath}${docsSlug ? `#${docsSlug}` : ''}`
        : undefined,
    version: _version_js__WEBPACK_IMPORTED_MODULE_0__/* .version */ .r,
};
function setErrorConfig(config) {
    errorConfig = config;
}
class BaseError extends Error {
    constructor(shortMessage, args = {}) {
        const details = (() => {
            if (args.cause instanceof BaseError)
                return args.cause.details;
            if (args.cause?.message)
                return args.cause.message;
            return args.details;
        })();
        const docsPath = (() => {
            if (args.cause instanceof BaseError)
                return args.cause.docsPath || args.docsPath;
            return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...(args.metaMessages ? [...args.metaMessages, ''] : []),
            ...(docsUrl ? [`Docs: ${docsUrl}`] : []),
            ...(details ? [`Details: ${details}`] : []),
            ...(errorConfig.version ? [`Version: ${errorConfig.version}`] : []),
        ].join('\n');
        super(message, args.cause ? { cause: args.cause } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = _version_js__WEBPACK_IMPORTED_MODULE_0__/* .version */ .r;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
function walk(err, fn) {
    if (fn?.(err))
        return err;
    if (err && typeof err === 'object' && 'cause' in err)
        return walk(err.cause, fn);
    return fn ? null : err;
}
//# sourceMappingURL=base.js.map

/***/ }),

/***/ 3882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iq: () => (/* binding */ BlobSizeTooLargeError),
/* harmony export */   zF: () => (/* binding */ EmptyBlobError)
/* harmony export */ });
/* unused harmony exports InvalidVersionedHashSizeError, InvalidVersionedHashVersionError */
/* harmony import */ var _constants_kzg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9797);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);


class BlobSizeTooLargeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ maxSize, size }) {
        super('Blob size is too large.', {
            metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size} bytes`],
            name: 'BlobSizeTooLargeError',
        });
    }
}
class EmptyBlobError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('Blob data must not be empty.', { name: 'EmptyBlobError' });
    }
}
class InvalidVersionedHashSizeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ hash, size, }) {
        super(`Versioned hash "${hash}" size is invalid.`, {
            metaMessages: ['Expected: 32', `Received: ${size}`],
            name: 'InvalidVersionedHashSizeError',
        });
    }
}
class InvalidVersionedHashVersionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ hash, version, }) {
        super(`Versioned hash "${hash}" version is invalid.`, {
            metaMessages: [
                `Expected: ${_constants_kzg_js__WEBPACK_IMPORTED_MODULE_1__/* .versionedHashVersionKzg */ .E}`,
                `Received: ${version}`,
            ],
            name: 'InvalidVersionedHashVersionError',
        });
    }
}
//# sourceMappingURL=blob.js.map

/***/ }),

/***/ 4484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ BlockNotFoundError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class BlockNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ blockHash, blockNumber, }) {
        let identifier = 'Block';
        if (blockHash)
            identifier = `Block at hash "${blockHash}"`;
        if (blockNumber)
            identifier = `Block at number "${blockNumber}"`;
        super(`${identifier} could not be found.`, { name: 'BlockNotFoundError' });
    }
}
//# sourceMappingURL=block.js.map

/***/ }),

/***/ 212:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YE: () => (/* binding */ ClientChainNotConfiguredError),
/* harmony export */   rj: () => (/* binding */ ChainDoesNotSupportContract)
/* harmony export */ });
/* unused harmony exports ChainMismatchError, ChainNotFoundError, InvalidChainIdError */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class ChainDoesNotSupportContract extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ blockNumber, chain, contract, }) {
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
            metaMessages: [
                'This could be due to any of the following:',
                ...(blockNumber &&
                    contract.blockCreated &&
                    contract.blockCreated > blockNumber
                    ? [
                        `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`,
                    ]
                    : [
                        `- The chain does not have the contract "${contract.name}" configured.`,
                    ]),
            ],
            name: 'ChainDoesNotSupportContract',
        });
    }
}
class ChainMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ chain, currentChainId, }) {
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} – ${chain.name}).`, {
            metaMessages: [
                `Current Chain ID:  ${currentChainId}`,
                `Expected Chain ID: ${chain.id} – ${chain.name}`,
            ],
            name: 'ChainMismatchError',
        });
    }
}
class ChainNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super([
            'No chain was provided to the request.',
            'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.',
        ].join('\n'), {
            name: 'ChainNotFoundError',
        });
    }
}
class ClientChainNotConfiguredError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('No chain was provided to the Client.', {
            name: 'ClientChainNotConfiguredError',
        });
    }
}
class InvalidChainIdError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ chainId }) {
        super(typeof chainId === 'number'
            ? `Chain ID "${chainId}" is invalid.`
            : 'Chain ID is invalid.', { name: 'InvalidChainIdError' });
    }
}
//# sourceMappingURL=chain.js.map

/***/ }),

/***/ 1063:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $S: () => (/* binding */ RawContractError),
/* harmony export */   M: () => (/* binding */ ContractFunctionRevertedError),
/* harmony export */   Po: () => (/* binding */ CounterfactualDeploymentFailedError),
/* harmony export */   bG: () => (/* binding */ ContractFunctionExecutionError),
/* harmony export */   rR: () => (/* binding */ ContractFunctionZeroDataError),
/* harmony export */   zX: () => (/* binding */ CallExecutionError)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2428);
/* harmony import */ var _constants_solidity_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9026);
/* harmony import */ var _utils_abi_decodeErrorResult_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5283);
/* harmony import */ var _utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5081);
/* harmony import */ var _utils_abi_formatAbiItemWithArgs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(383);
/* harmony import */ var _utils_abi_getAbiItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4849);
/* harmony import */ var _utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9551);
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5631);
/* harmony import */ var _abi_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(135);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);
/* harmony import */ var _stateOverride_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(836);
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7121);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7988);













class CallExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, }) {
        const account = account_ ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_1__/* .parseAccount */ .J)(account_) : undefined;
        let prettyArgs = (0,_transaction_js__WEBPACK_IMPORTED_MODULE_2__/* .prettyPrint */ .aO)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,_utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_3__/* .formatEther */ .c)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_4__/* .formatGwei */ .Q)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_4__/* .formatGwei */ .Q)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_4__/* .formatGwei */ .Q)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        if (stateOverride) {
            prettyArgs += `\n${(0,_stateOverride_js__WEBPACK_IMPORTED_MODULE_5__/* .prettyStateOverride */ .uj)(stateOverride)}`;
        }
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Raw Call Arguments:',
                prettyArgs,
            ].filter(Boolean),
            name: 'CallExecutionError',
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class ContractFunctionExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender, }) {
        const abiItem = (0,_utils_abi_getAbiItem_js__WEBPACK_IMPORTED_MODULE_6__/* .getAbiItem */ .iY)({ abi, args, name: functionName });
        const formattedArgs = abiItem
            ? (0,_utils_abi_formatAbiItemWithArgs_js__WEBPACK_IMPORTED_MODULE_7__/* .formatAbiItemWithArgs */ .C)({
                abiItem,
                args,
                includeFunctionName: false,
                includeName: false,
            })
            : undefined;
        const functionWithParams = abiItem
            ? (0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_8__/* .formatAbiItem */ .B)(abiItem, { includeName: true })
            : undefined;
        const prettyArgs = (0,_transaction_js__WEBPACK_IMPORTED_MODULE_2__/* .prettyPrint */ .aO)({
            address: contractAddress && (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .getContractAddress */ .R)(contractAddress),
            function: functionWithParams,
            args: formattedArgs &&
                formattedArgs !== '()' &&
                `${[...Array(functionName?.length ?? 0).keys()]
                    .map(() => ' ')
                    .join('')}${formattedArgs}`,
            sender,
        });
        super(cause.shortMessage ||
            `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                prettyArgs && 'Contract Call:',
                prettyArgs,
            ].filter(Boolean),
            name: 'ContractFunctionExecutionError',
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
class ContractFunctionRevertedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ abi, data, functionName, message, }) {
        let cause;
        let decodedData = undefined;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = (0,_utils_abi_decodeErrorResult_js__WEBPACK_IMPORTED_MODULE_10__/* .decodeErrorResult */ .W)({ abi, data });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                }
                else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = _constants_solidity_js__WEBPACK_IMPORTED_MODULE_11__/* .panicReasons */ .fD[firstArg];
                }
                else {
                    const errorWithParams = abiItem
                        ? (0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_8__/* .formatAbiItem */ .B)(abiItem, { includeName: true })
                        : undefined;
                    const formattedArgs = abiItem && errorArgs
                        ? (0,_utils_abi_formatAbiItemWithArgs_js__WEBPACK_IMPORTED_MODULE_7__/* .formatAbiItemWithArgs */ .C)({
                            abiItem,
                            args: errorArgs,
                            includeFunctionName: false,
                            includeName: false,
                        })
                        : undefined;
                    metaMessages = [
                        errorWithParams ? `Error: ${errorWithParams}` : '',
                        formattedArgs && formattedArgs !== '()'
                            ? `       ${[...Array(errorName?.length ?? 0).keys()]
                                .map(() => ' ')
                                .join('')}${formattedArgs}`
                            : '',
                    ];
                }
            }
            catch (err) {
                cause = err;
            }
        }
        else if (message)
            reason = message;
        let signature;
        if (cause instanceof _abi_js__WEBPACK_IMPORTED_MODULE_12__/* .AbiErrorSignatureNotFoundError */ .Wq) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                'Make sure you are using the correct ABI and that the error exists on it.',
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`,
            ];
        }
        super((reason && reason !== 'execution reverted') || signature
            ? [
                `The contract function "${functionName}" reverted with the following ${signature ? 'signature' : 'reason'}:`,
                reason || signature,
            ].join('\n')
            : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages,
            name: 'ContractFunctionRevertedError',
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.reason = reason;
        this.signature = signature;
    }
}
class ContractFunctionZeroDataError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ functionName }) {
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                'This could be due to any of the following:',
                `  - The contract does not have the function "${functionName}",`,
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.',
            ],
            name: 'ContractFunctionZeroDataError',
        });
    }
}
class CounterfactualDeploymentFailedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ factory }) {
        super(`Deployment for counterfactual contract call failed${factory ? ` for factory "${factory}".` : ''}`, {
            metaMessages: [
                'Please ensure:',
                '- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).',
                '- The `factoryData` is a valid encoded function call for contract deployment function on the factory.',
            ],
            name: 'CounterfactualDeploymentFailedError',
        });
    }
}
class RawContractError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ data, message, }) {
        super(message || '', { name: 'RawContractError' });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
//# sourceMappingURL=contract.js.map

/***/ }),

/***/ 5623:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B4: () => (/* binding */ NegativeOffsetError),
/* harmony export */   SK: () => (/* binding */ PositionOutOfBoundsError),
/* harmony export */   hX: () => (/* binding */ RecursiveReadLimitExceededError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class NegativeOffsetError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ offset }) {
        super(`Offset \`${offset}\` cannot be negative.`, {
            name: 'NegativeOffsetError',
        });
    }
}
class PositionOutOfBoundsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ length, position }) {
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, { name: 'PositionOutOfBoundsError' });
    }
}
class RecursiveReadLimitExceededError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ count, limit }) {
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, { name: 'RecursiveReadLimitExceededError' });
    }
}
//# sourceMappingURL=cursor.js.map

/***/ }),

/***/ 1549:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fl: () => (/* binding */ SizeExceedsPaddingSizeError),
/* harmony export */   NV: () => (/* binding */ InvalidBytesLengthError),
/* harmony export */   ii: () => (/* binding */ SliceOffsetOutOfBoundsError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class SliceOffsetOutOfBoundsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`, { name: 'SliceOffsetOutOfBoundsError' });
    }
}
class SizeExceedsPaddingSizeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, { name: 'SizeExceedsPaddingSizeError' });
    }
}
class InvalidBytesLengthError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size} ${type} long.`, { name: 'InvalidBytesLengthError' });
    }
}
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 6873:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Eip712DomainNotFoundError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class Eip712DomainNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ address }) {
        super(`No EIP-712 domain found on contract "${address}".`, {
            metaMessages: [
                'Ensure that:',
                `- The contract is deployed at the address "${address}".`,
                '- `eip712Domain()` function exists on the contract.',
                '- `eip712Domain()` function matches signature to ERC-5267 specification.',
            ],
            name: 'Eip712DomainNotFoundError',
        });
    }
}
//# sourceMappingURL=eip712.js.map

/***/ }),

/***/ 3568:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ty: () => (/* binding */ IntegerOutOfRangeError),
/* harmony export */   u: () => (/* binding */ SizeOverflowError),
/* harmony export */   xO: () => (/* binding */ InvalidBytesBooleanError)
/* harmony export */ });
/* unused harmony exports InvalidHexBooleanError, InvalidHexValueError */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class IntegerOutOfRangeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ max, min, signed, size, value, }) {
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: 'IntegerOutOfRangeError' });
    }
}
class InvalidBytesBooleanError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(bytes) {
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: 'InvalidBytesBooleanError',
        });
    }
}
class InvalidHexBooleanError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(hex) {
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: 'InvalidHexBooleanError' });
    }
}
class InvalidHexValueError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(value) {
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`, { name: 'InvalidHexValueError' });
    }
}
class SizeOverflowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: 'SizeOverflowError' });
    }
}
//# sourceMappingURL=encoding.js.map

/***/ }),

/***/ 6161:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K2: () => (/* binding */ EnsAvatarUriResolutionError),
/* harmony export */   aD: () => (/* binding */ EnsAvatarInvalidMetadataError),
/* harmony export */   gk: () => (/* binding */ EnsAvatarUnsupportedNamespaceError),
/* harmony export */   xP: () => (/* binding */ EnsAvatarInvalidNftUriError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class EnsAvatarInvalidMetadataError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ data }) {
        super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                `Provided data: ${JSON.stringify(data)}`,
            ],
            name: 'EnsAvatarInvalidMetadataError',
        });
    }
}
class EnsAvatarInvalidNftUriError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ reason }) {
        super(`ENS NFT avatar URI is invalid. ${reason}`, {
            name: 'EnsAvatarInvalidNftUriError',
        });
    }
}
class EnsAvatarUriResolutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ uri }) {
        super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: 'EnsAvatarUriResolutionError' });
    }
}
class EnsAvatarUnsupportedNamespaceError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ namespace }) {
        super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`, { name: 'EnsAvatarUnsupportedNamespaceError' });
    }
}
//# sourceMappingURL=ens.js.map

/***/ }),

/***/ 9890:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ EstimateGasExecutionError)
/* harmony export */ });
/* harmony import */ var _utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9551);
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5631);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7121);




class EstimateGasExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, }) {
        const prettyArgs = (0,_transaction_js__WEBPACK_IMPORTED_MODULE_1__/* .prettyPrint */ .aO)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,_utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_2__/* .formatEther */ .c)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_3__/* .formatGwei */ .Q)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_3__/* .formatGwei */ .Q)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_3__/* .formatGwei */ .Q)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Estimate Gas Arguments:',
                prettyArgs,
            ].filter(Boolean),
            name: 'EstimateGasExecutionError',
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
//# sourceMappingURL=estimateGas.js.map

/***/ }),

/***/ 5381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RR: () => (/* binding */ MaxFeePerGasTooLowError),
/* harmony export */   pw: () => (/* binding */ Eip1559FeesNotSupportedError),
/* harmony export */   sM: () => (/* binding */ BaseFeeScalarError)
/* harmony export */ });
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5631);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);


class BaseFeeScalarError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('`baseFeeMultiplier` must be greater than 1.', {
            name: 'BaseFeeScalarError',
        });
    }
}
class Eip1559FeesNotSupportedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('Chain does not support EIP-1559 fees.', {
            name: 'Eip1559FeesNotSupportedError',
        });
    }
}
class MaxFeePerGasTooLowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ maxPriorityFeePerGas }) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__/* .formatGwei */ .Q)(maxPriorityFeePerGas)} gwei).`, { name: 'MaxFeePerGasTooLowError' });
    }
}
//# sourceMappingURL=fee.js.map

/***/ }),

/***/ 1055:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ FilterTypeNotSupportedError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class FilterTypeNotSupportedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(type) {
        super(`Filter type "${type}" is not supported.`, {
            name: 'FilterTypeNotSupportedError',
        });
    }
}
//# sourceMappingURL=log.js.map

/***/ }),

/***/ 1905:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A7: () => (/* binding */ ExecutionRevertedError),
/* harmony export */   BG: () => (/* binding */ FeeCapTooHighError),
/* harmony export */   Fo: () => (/* binding */ IntrinsicGasTooLowError),
/* harmony export */   K0: () => (/* binding */ NonceTooHighError),
/* harmony export */   Oh: () => (/* binding */ NonceTooLowError),
/* harmony export */   RM: () => (/* binding */ UnknownNodeError),
/* harmony export */   jj: () => (/* binding */ FeeCapTooLowError),
/* harmony export */   k5: () => (/* binding */ InsufficientFundsError),
/* harmony export */   lN: () => (/* binding */ TipAboveFeeCapError),
/* harmony export */   lY: () => (/* binding */ IntrinsicGasTooHighError),
/* harmony export */   uC: () => (/* binding */ TransactionTypeNotSupportedError),
/* harmony export */   vW: () => (/* binding */ NonceMaxValueError)
/* harmony export */ });
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5631);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);


class ExecutionRevertedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, message, } = {}) {
        const reason = message
            ?.replace('execution reverted: ', '')
            ?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
            name: 'ExecutionRevertedError',
        });
    }
}
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FeeCapTooHighError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, maxFeePerGas, } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__/* .formatGwei */ .Q)(maxFeePerGas)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause,
            name: 'FeeCapTooHighError',
        });
    }
}
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class FeeCapTooLowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, maxFeePerGas, } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__/* .formatGwei */ .Q)(maxFeePerGas)}` : ''} gwei) cannot be lower than the block base fee.`, {
            cause,
            name: 'FeeCapTooLowError',
        });
    }
}
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class NonceTooHighError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, nonce, } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is higher than the next one expected.`, { cause, name: 'NonceTooHighError' });
    }
}
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});
class NonceTooLowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, nonce, } = {}) {
        super([
            `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is lower than the current nonce of the account.`,
            'Try increasing the nonce or find the latest nonce with `getTransactionCount`.',
        ].join('\n'), { cause, name: 'NonceTooLowError' });
    }
}
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});
class NonceMaxValueError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, nonce, } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}exceeds the maximum allowed nonce.`, { cause, name: 'NonceMaxValueError' });
    }
}
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});
class InsufficientFundsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause } = {}) {
        super([
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.',
        ].join('\n'), {
            cause,
            metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.',
            ],
            name: 'InsufficientFundsError',
        });
    }
}
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds|exceeds transaction sender account balance/
});
class IntrinsicGasTooHighError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, gas, } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`, {
            cause,
            name: 'IntrinsicGasTooHighError',
        });
    }
}
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});
class IntrinsicGasTooLowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, gas, } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction is too low.`, {
            cause,
            name: 'IntrinsicGasTooLowError',
        });
    }
}
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});
class TransactionTypeNotSupportedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause }) {
        super('The transaction type is not supported for this chain.', {
            cause,
            name: 'TransactionTypeNotSupportedError',
        });
    }
}
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});
class TipAboveFeeCapError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas, } = {}) {
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas
                ? ` = ${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__/* .formatGwei */ .Q)(maxPriorityFeePerGas)} gwei`
                : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__/* .formatGwei */ .Q)(maxFeePerGas)} gwei` : ''}).`,
        ].join('\n'), {
            cause,
            name: 'TipAboveFeeCapError',
        });
    }
}
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class UnknownNodeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ cause }) {
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
            cause,
            name: 'UnknownNodeError',
        });
    }
}
//# sourceMappingURL=node.js.map

/***/ }),

/***/ 1788:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ci: () => (/* binding */ HttpRequestError),
/* harmony export */   J8: () => (/* binding */ RpcRequestError),
/* harmony export */   MU: () => (/* binding */ TimeoutError)
/* harmony export */ });
/* unused harmony exports WebSocketRequestError, SocketClosedError */
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6798);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7988);



class HttpRequestError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ body, cause, details, headers, status, url, }) {
        super('HTTP request failed.', {
            cause,
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUrl */ .I)(url)}`,
                body && `Request body: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A)(body)}`,
            ].filter(Boolean),
            name: 'HttpRequestError',
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
class WebSocketRequestError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ body, cause, details, url, }) {
        super('WebSocket request failed.', {
            cause,
            details,
            metaMessages: [
                `URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUrl */ .I)(url)}`,
                body && `Request body: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A)(body)}`,
            ].filter(Boolean),
            name: 'WebSocketRequestError',
        });
    }
}
class RpcRequestError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ body, error, url, }) {
        super('RPC Request failed.', {
            cause: error,
            details: error.message,
            metaMessages: [`URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUrl */ .I)(url)}`, `Request body: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A)(body)}`],
            name: 'RpcRequestError',
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
    }
}
class SocketClosedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ url, } = {}) {
        super('The socket has been closed.', {
            metaMessages: [url && `URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUrl */ .I)(url)}`].filter(Boolean),
            name: 'SocketClosedError',
        });
    }
}
class TimeoutError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ body, url, }) {
        super('The request took too long to respond.', {
            details: 'The request timed out.',
            metaMessages: [`URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUrl */ .I)(url)}`, `Request body: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A)(body)}`],
            name: 'TimeoutError',
        });
    }
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ 6898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CL: () => (/* binding */ InvalidRequestRpcError),
/* harmony export */   D5: () => (/* binding */ InvalidParamsRpcError),
/* harmony export */   Di: () => (/* binding */ InvalidInputRpcError),
/* harmony export */   Gi: () => (/* binding */ MethodNotFoundRpcError),
/* harmony export */   MI: () => (/* binding */ UnknownRpcError),
/* harmony export */   RV: () => (/* binding */ ProviderDisconnectedError),
/* harmony export */   Sf: () => (/* binding */ UnsupportedProviderMethodError),
/* harmony export */   XU: () => (/* binding */ ParseRpcError),
/* harmony export */   YW: () => (/* binding */ TransactionRejectedRpcError),
/* harmony export */   ab: () => (/* binding */ MethodNotSupportedRpcError),
/* harmony export */   bq: () => (/* binding */ InternalRpcError),
/* harmony export */   ch: () => (/* binding */ SwitchChainError),
/* harmony export */   hA: () => (/* binding */ ResourceNotFoundRpcError),
/* harmony export */   qZ: () => (/* binding */ ResourceUnavailableRpcError),
/* harmony export */   s0: () => (/* binding */ LimitExceededRpcError),
/* harmony export */   sV: () => (/* binding */ UnauthorizedProviderError),
/* harmony export */   vx: () => (/* binding */ UserRejectedRequestError),
/* harmony export */   xQ: () => (/* binding */ JsonRpcVersionUnsupportedError),
/* harmony export */   xq: () => (/* binding */ ChainDisconnectedError)
/* harmony export */ });
/* unused harmony exports RpcError, ProviderRpcError */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1788);


const unknownErrorCode = -1;
class RpcError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(cause, { code, docsPath, metaMessages, name, shortMessage, }) {
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages,
            name: name || 'RpcError',
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name || cause.name;
        this.code = (cause instanceof _request_js__WEBPACK_IMPORTED_MODULE_1__/* .RpcRequestError */ .J8 ? cause.code : code ?? unknownErrorCode);
    }
}
class ProviderRpcError extends RpcError {
    constructor(cause, options) {
        super(cause, options);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = options.data;
    }
}
class ParseRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ParseRpcError.code,
            name: 'ParseRpcError',
            shortMessage: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
        });
    }
}
Object.defineProperty(ParseRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32700
});
class InvalidRequestRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidRequestRpcError.code,
            name: 'InvalidRequestRpcError',
            shortMessage: 'JSON is not a valid request object.',
        });
    }
}
Object.defineProperty(InvalidRequestRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32600
});
class MethodNotFoundRpcError extends RpcError {
    constructor(cause, { method } = {}) {
        super(cause, {
            code: MethodNotFoundRpcError.code,
            name: 'MethodNotFoundRpcError',
            shortMessage: `The method${method ? ` "${method}"` : ''} does not exist / is not available.`,
        });
    }
}
Object.defineProperty(MethodNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32601
});
class InvalidParamsRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidParamsRpcError.code,
            name: 'InvalidParamsRpcError',
            shortMessage: [
                'Invalid parameters were provided to the RPC method.',
                'Double check you have provided the correct parameters.',
            ].join('\n'),
        });
    }
}
Object.defineProperty(InvalidParamsRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InternalRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InternalRpcError.code,
            name: 'InternalRpcError',
            shortMessage: 'An internal error was received.',
        });
    }
}
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});
class InvalidInputRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidInputRpcError.code,
            name: 'InvalidInputRpcError',
            shortMessage: [
                'Missing or invalid parameters.',
                'Double check you have provided the correct parameters.',
            ].join('\n'),
        });
    }
}
Object.defineProperty(InvalidInputRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32000
});
class ResourceNotFoundRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ResourceNotFoundRpcError.code,
            name: 'ResourceNotFoundRpcError',
            shortMessage: 'Requested resource not found.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceNotFoundRpcError'
        });
    }
}
Object.defineProperty(ResourceNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32001
});
class ResourceUnavailableRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ResourceUnavailableRpcError.code,
            name: 'ResourceUnavailableRpcError',
            shortMessage: 'Requested resource not available.',
        });
    }
}
Object.defineProperty(ResourceUnavailableRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32002
});
class TransactionRejectedRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: TransactionRejectedRpcError.code,
            name: 'TransactionRejectedRpcError',
            shortMessage: 'Transaction creation failed.',
        });
    }
}
Object.defineProperty(TransactionRejectedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32003
});
class MethodNotSupportedRpcError extends RpcError {
    constructor(cause, { method } = {}) {
        super(cause, {
            code: MethodNotSupportedRpcError.code,
            name: 'MethodNotSupportedRpcError',
            shortMessage: `Method${method ? ` "${method}"` : ''} is not implemented.`,
        });
    }
}
Object.defineProperty(MethodNotSupportedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32004
});
class LimitExceededRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: LimitExceededRpcError.code,
            name: 'LimitExceededRpcError',
            shortMessage: 'Request exceeds defined limit.',
        });
    }
}
Object.defineProperty(LimitExceededRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32005
});
class JsonRpcVersionUnsupportedError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: JsonRpcVersionUnsupportedError.code,
            name: 'JsonRpcVersionUnsupportedError',
            shortMessage: 'Version of JSON-RPC protocol is not supported.',
        });
    }
}
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32006
});
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: UserRejectedRequestError.code,
            name: 'UserRejectedRequestError',
            shortMessage: 'User rejected the request.',
        });
    }
}
Object.defineProperty(UserRejectedRequestError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4001
});
class UnauthorizedProviderError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: UnauthorizedProviderError.code,
            name: 'UnauthorizedProviderError',
            shortMessage: 'The requested method and/or account has not been authorized by the user.',
        });
    }
}
Object.defineProperty(UnauthorizedProviderError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4100
});
class UnsupportedProviderMethodError extends ProviderRpcError {
    constructor(cause, { method } = {}) {
        super(cause, {
            code: UnsupportedProviderMethodError.code,
            name: 'UnsupportedProviderMethodError',
            shortMessage: `The Provider does not support the requested method${method ? ` " ${method}"` : ''}.`,
        });
    }
}
Object.defineProperty(UnsupportedProviderMethodError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4200
});
class ProviderDisconnectedError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: ProviderDisconnectedError.code,
            name: 'ProviderDisconnectedError',
            shortMessage: 'The Provider is disconnected from all chains.',
        });
    }
}
Object.defineProperty(ProviderDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4900
});
class ChainDisconnectedError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: ChainDisconnectedError.code,
            name: 'ChainDisconnectedError',
            shortMessage: 'The Provider is not connected to the requested chain.',
        });
    }
}
Object.defineProperty(ChainDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4901
});
class SwitchChainError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: SwitchChainError.code,
            name: 'SwitchChainError',
            shortMessage: 'An error occurred when attempting to switch chain.',
        });
    }
}
Object.defineProperty(SwitchChainError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4902
});
class UnknownRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            name: 'UnknownRpcError',
            shortMessage: 'An unknown RPC error occurred.',
        });
    }
}
//# sourceMappingURL=rpc.js.map

/***/ }),

/***/ 836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hi: () => (/* binding */ AccountStateConflictError),
/* harmony export */   ft: () => (/* binding */ StateAssignmentConflictError),
/* harmony export */   uj: () => (/* binding */ prettyStateOverride)
/* harmony export */ });
/* unused harmony export prettyStateMapping */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class AccountStateConflictError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ address }) {
        super(`State for account "${address}" is set multiple times.`, {
            name: 'AccountStateConflictError',
        });
    }
}
class StateAssignmentConflictError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('state and stateDiff are set on the same account.', {
            name: 'StateAssignmentConflictError',
        });
    }
}
/** @internal */
function prettyStateMapping(stateMapping) {
    return stateMapping.reduce((pretty, { slot, value }) => {
        return `${pretty}        ${slot}: ${value}\n`;
    }, '');
}
function prettyStateOverride(stateOverride) {
    return stateOverride
        .reduce((pretty, { address, ...state }) => {
        let val = `${pretty}    ${address}:\n`;
        if (state.nonce)
            val += `      nonce: ${state.nonce}\n`;
        if (state.balance)
            val += `      balance: ${state.balance}\n`;
        if (state.code)
            val += `      code: ${state.code}\n`;
        if (state.state) {
            val += '      state:\n';
            val += prettyStateMapping(state.state);
        }
        if (state.stateDiff) {
            val += '      stateDiff:\n';
            val += prettyStateMapping(state.stateDiff);
        }
        return val;
    }, '  State Override:\n')
        .slice(0, -1);
}
//# sourceMappingURL=stateOverride.js.map

/***/ }),

/***/ 7121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kc: () => (/* binding */ TransactionReceiptNotFoundError),
/* harmony export */   Kz: () => (/* binding */ TransactionNotFoundError),
/* harmony export */   Vg: () => (/* binding */ InvalidSerializableTransactionError),
/* harmony export */   WA: () => (/* binding */ WaitForTransactionReceiptTimeoutError),
/* harmony export */   aO: () => (/* binding */ prettyPrint),
/* harmony export */   n3: () => (/* binding */ FeeConflictError)
/* harmony export */ });
/* unused harmony exports InvalidLegacyVError, InvalidSerializedTransactionTypeError, InvalidSerializedTransactionError, InvalidStorageKeySizeError, TransactionExecutionError */
/* harmony import */ var _utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9551);
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5631);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);



function prettyPrint(args) {
    const entries = Object.entries(args)
        .map(([key, value]) => {
        if (value === undefined || value === false)
            return null;
        return [key, value];
    })
        .filter(Boolean);
    const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
    return entries
        .map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`)
        .join('\n');
}
class FeeConflictError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.',
        ].join('\n'), { name: 'FeeConflictError' });
    }
}
class InvalidLegacyVError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ v }) {
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
            name: 'InvalidLegacyVError',
        });
    }
}
class InvalidSerializableTransactionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ transaction }) {
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
                '- an EIP-7702 Transaction with `authorizationList`, or',
                '- a Legacy Transaction with `gasPrice`',
            ],
            name: 'InvalidSerializableTransactionError',
        });
    }
}
class InvalidSerializedTransactionTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ serializedType }) {
        super(`Serialized transaction type "${serializedType}" is invalid.`, {
            name: 'InvalidSerializedTransactionType',
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
class InvalidSerializedTransactionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ attributes, serializedTransaction, type, }) {
        const missing = Object.entries(attributes)
            .map(([key, value]) => (typeof value === 'undefined' ? key : undefined))
            .filter(Boolean);
        super(`Invalid serialized transaction of type "${type}" was provided.`, {
            metaMessages: [
                `Serialized Transaction: "${serializedTransaction}"`,
                missing.length > 0 ? `Missing Attributes: ${missing.join(', ')}` : '',
            ].filter(Boolean),
            name: 'InvalidSerializedTransactionError',
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
class InvalidStorageKeySizeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ storageKey }) {
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, { name: 'InvalidStorageKeySizeError' });
    }
}
class TransactionExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, }) {
        const prettyArgs = prettyPrint({
            chain: chain && `${chain?.name} (id: ${chain?.id})`,
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,_utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_1__/* .formatEther */ .c)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_2__/* .formatGwei */ .Q)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_2__/* .formatGwei */ .Q)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_2__/* .formatGwei */ .Q)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Request Arguments:',
                prettyArgs,
            ].filter(Boolean),
            name: 'TransactionExecutionError',
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class TransactionNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ blockHash, blockNumber, blockTag, hash, index, }) {
        let identifier = 'Transaction';
        if (blockTag && index !== undefined)
            identifier = `Transaction at block time "${blockTag}" at index "${index}"`;
        if (blockHash && index !== undefined)
            identifier = `Transaction at block hash "${blockHash}" at index "${index}"`;
        if (blockNumber && index !== undefined)
            identifier = `Transaction at block number "${blockNumber}" at index "${index}"`;
        if (hash)
            identifier = `Transaction with hash "${hash}"`;
        super(`${identifier} could not be found.`, {
            name: 'TransactionNotFoundError',
        });
    }
}
class TransactionReceiptNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ hash }) {
        super(`Transaction receipt with hash "${hash}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: 'TransactionReceiptNotFoundError',
        });
    }
}
class WaitForTransactionReceiptTimeoutError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ hash }) {
        super(`Timed out while waiting for transaction with hash "${hash}" to be confirmed.`, { name: 'WaitForTransactionReceiptTimeoutError' });
    }
}
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 4692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ UrlRequiredError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

class UrlRequiredError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor() {
        super('No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.', {
            docsPath: '/docs/clients/intro',
            name: 'UrlRequiredError',
        });
    }
}
//# sourceMappingURL=transport.js.map

/***/ }),

/***/ 7988:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ getUrl),
/* harmony export */   R: () => (/* binding */ getContractAddress)
/* harmony export */ });
const getContractAddress = (address) => address;
const getUrl = (url) => url;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9241:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ version)
/* harmony export */ });
const version = '2.21.3';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 1378:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ hashAuthorization)
/* harmony export */ });
/* harmony import */ var _utils_data_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5074);
/* harmony import */ var _utils_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6109);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4031);
/* harmony import */ var _utils_encoding_toRlp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8192);
/* harmony import */ var _utils_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3387);





/**
 * Computes an Authorization hash in [EIP-7702 format](https://eips.ethereum.org/EIPS/eip-7702): `keccak256('0x05' || rlp([chain_id, address, nonce]))`.
 */
function hashAuthorization(parameters) {
    const { chainId, contractAddress, nonce, to } = parameters;
    const hash = (0,_utils_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .S)((0,_utils_data_concat_js__WEBPACK_IMPORTED_MODULE_1__/* .concatHex */ .aP)([
        '0x05',
        (0,_utils_encoding_toRlp_js__WEBPACK_IMPORTED_MODULE_2__/* .toRlp */ .EQ)([(0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToHex */ .cK)(chainId), contractAddress, (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToHex */ .cK)(nonce)]),
    ]));
    if (to === 'bytes')
        return (0,_utils_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_4__/* .hexToBytes */ .aT)(hash);
    return hash;
}
//# sourceMappingURL=hashAuthorization.js.map

/***/ }),

/***/ 7360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ recoverAuthorizationAddress)
/* harmony export */ });
/* harmony import */ var _utils_signature_recoverAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2092);
/* harmony import */ var _hashAuthorization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1378);


async function recoverAuthorizationAddress(parameters) {
    const { authorization, signature } = parameters;
    return (0,_utils_signature_recoverAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .recoverAddress */ .x)({
        hash: (0,_hashAuthorization_js__WEBPACK_IMPORTED_MODULE_1__/* .hashAuthorization */ .C)(authorization),
        signature: (signature ?? authorization),
    });
}
//# sourceMappingURL=recoverAuthorizationAddress.js.map

/***/ }),

/***/ 5682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ decodeAbiParameters)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(135);
/* harmony import */ var _address_getAddress_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5458);
/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8809);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6615);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2174);
/* harmony import */ var _data_trim_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(582);
/* harmony import */ var _encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5310);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4031);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3406);










function decodeAbiParameters(params, data) {
    const bytes = typeof data === 'string' ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToBytes */ .aT)(data) : data;
    const cursor = (0,_cursor_js__WEBPACK_IMPORTED_MODULE_1__/* .createCursor */ .l)(bytes);
    if ((0,_data_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(bytes) === 0 && params.length > 0)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_3__/* .AbiDecodingZeroDataError */ .O();
    if ((0,_data_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(data) && (0,_data_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(data) < 32)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_3__/* .AbiDecodingDataSizeTooSmallError */ .Iy({
            data: typeof data === 'string' ? data : (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .bytesToHex */ .My)(data),
            params: params,
            size: (0,_data_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(data),
        });
    let consumed = 0;
    const values = [];
    for (let i = 0; i < params.length; ++i) {
        const param = params[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: 0,
        });
        consumed += consumed_;
        values.push(data);
    }
    return values;
}
function decodeParameter(cursor, param, { staticPosition }) {
    const arrayComponents = (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__/* .getArrayComponents */ .k)(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, { ...param, type }, { length, staticPosition });
    }
    if (param.type === 'tuple')
        return decodeTuple(cursor, param, { staticPosition });
    if (param.type === 'address')
        return decodeAddress(cursor);
    if (param.type === 'bool')
        return decodeBool(cursor);
    if (param.type.startsWith('bytes'))
        return decodeBytes(cursor, param, { staticPosition });
    if (param.type.startsWith('uint') || param.type.startsWith('int'))
        return decodeNumber(cursor, param);
    if (param.type === 'string')
        return decodeString(cursor, { staticPosition });
    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_3__/* .InvalidAbiDecodingTypeError */ .j(param.type, {
        docsPath: '/docs/contract/decodeAbiParameters',
    });
}
////////////////////////////////////////////////////////////////////
// Type Decoders
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor) {
    const value = cursor.readBytes(32);
    return [(0,_address_getAddress_js__WEBPACK_IMPORTED_MODULE_6__/* .checksumAddress */ .o)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .bytesToHex */ .My)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_7__/* .sliceBytes */ .A1)(value, -20))), 32];
}
function decodeArray(cursor, param, { length, staticPosition }) {
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for (let i = 0; i < length; ++i) {
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                staticPosition: startOfData,
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for (let i = 0; i < length; ++i) {
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                staticPosition: start,
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for (let i = 0; i < length; ++i) {
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: staticPosition + consumed,
        });
        consumed += consumed_;
        value.push(data);
    }
    return [value, consumed];
}
function decodeBool(cursor) {
    return [(0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToBool */ .Pr)(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return ['0x', 32];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [(0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .bytesToHex */ .My)(data), 32];
    }
    const value = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .bytesToHex */ .My)(cursor.readBytes(Number.parseInt(size), 32));
    return [value, 32];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256');
    const value = cursor.readBytes(32);
    return [
        size > 48
            ? (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToBigInt */ .U8)(value, { signed })
            : (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(value, { signed }),
        32,
    ];
}
function decodeTuple(cursor, param, { staticPosition }) {
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for (let i = 0; i < param.components.length; ++i) {
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                staticPosition: start,
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for (let i = 0; i < param.components.length; ++i) {
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            staticPosition,
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
    // Get offset to start of string data.
    const offset = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToNumber */ .Sk)(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return ['', 32];
    }
    const data = cursor.readBytes(length, 32);
    const value = (0,_encoding_fromBytes_js__WEBPACK_IMPORTED_MODULE_8__/* .bytesToString */ .Ar)((0,_data_trim_js__WEBPACK_IMPORTED_MODULE_9__/* .trim */ .B)(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string')
        return true;
    if (type === 'bytes')
        return true;
    if (type.endsWith('[]'))
        return true;
    if (type === 'tuple')
        return param.components?.some(hasDynamicChild);
    const arrayComponents = (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__/* .getArrayComponents */ .k)(param.type);
    if (arrayComponents &&
        hasDynamicChild({ ...param, type: arrayComponents[1] }))
        return true;
    return false;
}
//# sourceMappingURL=decodeAbiParameters.js.map

/***/ }),

/***/ 5283:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ decodeErrorResult)
/* harmony export */ });
/* harmony import */ var _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2174);
/* harmony import */ var _hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7710);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5682);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5081);






function decodeErrorResult(parameters) {
    const { abi, data } = parameters;
    const signature = (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_0__/* .slice */ .di)(data, 0, 4);
    if (signature === '0x')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiDecodingZeroDataError */ .O();
    const abi_ = [...(abi || []), _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__/* .solidityError */ .Mc, _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__/* .solidityPanic */ .J9];
    const abiItem = abi_.find((x) => x.type === 'error' && signature === (0,_hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_3__/* .toFunctionSelector */ .V)((0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_4__/* .formatAbiItem */ .B)(x)));
    if (!abiItem)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiErrorSignatureNotFoundError */ .Wq(signature, {
            docsPath: '/docs/contract/decodeErrorResult',
        });
    return {
        abiItem,
        args: 'inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0
            ? (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__/* .decodeAbiParameters */ .n)(abiItem.inputs, (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_0__/* .slice */ .di)(data, 4))
            : undefined,
        errorName: abiItem.name,
    };
}
//# sourceMappingURL=decodeErrorResult.js.map

/***/ }),

/***/ 4464:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ decodeEventLog)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6615);
/* harmony import */ var _hash_toEventSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9246);
/* harmony import */ var _errors_cursor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5623);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5682);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5081);






const docsPath = '/docs/contract/decodeEventLog';
function decodeEventLog(parameters) {
    const { abi, data, strict: strict_, topics, } = parameters;
    const strict = strict_ ?? true;
    const [signature, ...argTopics] = topics;
    if (!signature)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEventSignatureEmptyTopicsError */ ._z({ docsPath });
    const abiItem = abi.find((x) => x.type === 'event' &&
        signature === (0,_hash_toEventSelector_js__WEBPACK_IMPORTED_MODULE_1__/* .toEventSelector */ .h)((0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__/* .formatAbiItem */ .B)(x)));
    if (!(abiItem && 'name' in abiItem) || abiItem.type !== 'event')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEventSignatureNotFoundError */ .kE(signature, { docsPath });
    const { name, inputs } = abiItem;
    const isUnnamed = inputs?.some((x) => !('name' in x && x.name));
    let args = isUnnamed ? [] : {};
    // Decode topics (indexed args).
    const indexedInputs = inputs.filter((x) => 'indexed' in x && x.indexed);
    for (let i = 0; i < indexedInputs.length; i++) {
        const param = indexedInputs[i];
        const topic = argTopics[i];
        if (!topic)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .DecodeLogTopicsMismatch */ .l3({
                abiItem,
                param: param,
            });
        args[isUnnamed ? i : param.name || i] = decodeTopic({ param, value: topic });
    }
    // Decode data (non-indexed args).
    const nonIndexedInputs = inputs.filter((x) => !('indexed' in x && x.indexed));
    if (nonIndexedInputs.length > 0) {
        if (data && data !== '0x') {
            try {
                const decodedData = (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeAbiParameters */ .n)(nonIndexedInputs, data);
                if (decodedData) {
                    if (isUnnamed)
                        args = [...args, ...decodedData];
                    else {
                        for (let i = 0; i < nonIndexedInputs.length; i++) {
                            args[nonIndexedInputs[i].name] = decodedData[i];
                        }
                    }
                }
            }
            catch (err) {
                if (strict) {
                    if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiDecodingDataSizeTooSmallError */ .Iy ||
                        err instanceof _errors_cursor_js__WEBPACK_IMPORTED_MODULE_4__/* .PositionOutOfBoundsError */ .SK)
                        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .DecodeLogDataMismatch */ .fo({
                            abiItem,
                            data: data,
                            params: nonIndexedInputs,
                            size: (0,_data_size_js__WEBPACK_IMPORTED_MODULE_5__/* .size */ .E)(data),
                        });
                    throw err;
                }
            }
        }
        else if (strict) {
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .DecodeLogDataMismatch */ .fo({
                abiItem,
                data: '0x',
                params: nonIndexedInputs,
                size: 0,
            });
        }
    }
    return {
        eventName: name,
        args: Object.values(args).length > 0 ? args : undefined,
    };
}
function decodeTopic({ param, value }) {
    if (param.type === 'string' ||
        param.type === 'bytes' ||
        param.type === 'tuple' ||
        param.type.match(/^(.*)\[(\d+)?\]$/))
        return value;
    const decodedArg = (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeAbiParameters */ .n)([param], value) || [];
    return decodedArg[0];
}
//# sourceMappingURL=decodeEventLog.js.map

/***/ }),

/***/ 7576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ decodeFunctionResult)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5682);
/* harmony import */ var _getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4849);



const docsPath = '/docs/contract/decodeFunctionResult';
function decodeFunctionResult(parameters) {
    const { abi, args, functionName, data } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0,_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .getAbiItem */ .iY)({ abi, args, name: functionName });
        if (!item)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiFunctionNotFoundError */ .Iz(functionName, { docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'function')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiFunctionNotFoundError */ .Iz(undefined, { docsPath });
    if (!abiItem.outputs)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiFunctionOutputsNotFoundError */ .MR(abiItem.name, { docsPath });
    const values = (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__/* .decodeAbiParameters */ .n)(abiItem.outputs, data);
    if (values && values.length > 1)
        return values;
    if (values && values.length === 1)
        return values[0];
    return undefined;
}
//# sourceMappingURL=decodeFunctionResult.js.map

/***/ }),

/***/ 3406:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ encodeAbiParameters),
/* harmony export */   k: () => (/* binding */ getArrayComponents)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8149);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5484);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1108);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5074);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3633);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2174);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4031);









/**
 * @description Encodes a list of primitive values into an ABI-encoded hex value.
 *
 * - Docs: https://viem.sh/docs/abi/encodeAbiParameters#encodeabiparameters
 *
 *   Generates ABI encoded data using the [ABI specification](https://docs.soliditylang.org/en/latest/abi-spec), given a set of ABI parameters (inputs/outputs) and their corresponding values.
 *
 * @param params - a set of ABI Parameters (params), that can be in the shape of the inputs or outputs attribute of an ABI Item.
 * @param values - a set of values (values) that correspond to the given params.
 * @example
 * ```typescript
 * import { encodeAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   [
 *     { name: 'x', type: 'string' },
 *     { name: 'y', type: 'uint' },
 *     { name: 'z', type: 'bool' }
 *   ],
 *   ['wagmi', 420n, true]
 * )
 * ```
 *
 * You can also pass in Human Readable parameters with the parseAbiParameters utility.
 *
 * @example
 * ```typescript
 * import { encodeAbiParameters, parseAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   parseAbiParameters('string x, uint y, bool z'),
 *   ['wagmi', 420n, true]
 * )
 * ```
 */
function encodeAbiParameters(params, values) {
    if (params.length !== values.length)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEncodingLengthMismatchError */ .YE({
            expectedLength: params.length,
            givenLength: values.length,
        });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParams = prepareParams({
        params: params,
        values: values,
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0)
        return '0x';
    return data;
}
function prepareParams({ params, values, }) {
    const preparedParams = [];
    for (let i = 0; i < params.length; i++) {
        preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
    }
    return preparedParams;
}
function prepareParam({ param, value, }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, { length, param: { ...param, type } });
    }
    if (param.type === 'tuple') {
        return encodeTuple(value, {
            param: param,
        });
    }
    if (param.type === 'address') {
        return encodeAddress(value);
    }
    if (param.type === 'bool') {
        return encodeBool(value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        const signed = param.type.startsWith('int');
        return encodeNumber(value, { signed });
    }
    if (param.type.startsWith('bytes')) {
        return encodeBytes(value, { param });
    }
    if (param.type === 'string') {
        return encodeString(value);
    }
    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidAbiEncodingTypeError */ .nK(param.type, {
        docsPath: '/docs/contract/encodeAbiParameters',
    });
}
function encodeParams(preparedParams) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for (let i = 0; i < preparedParams.length; i++) {
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic)
            staticSize += 32;
        else
            staticSize += (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for (let i = 0; i < preparedParams.length; i++) {
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(staticSize + dynamicSize, { size: 32 }));
            dynamicParams.push(encoded);
            dynamicSize += (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(encoded);
        }
        else {
            staticParams.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concat */ .xW)([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
    if (!(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .P)(value))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_5__/* .InvalidAddressError */ .M({ address: value });
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)(value.toLowerCase()) };
}
function encodeArray(value, { length, param, }) {
    const dynamic = length === null;
    if (!Array.isArray(value))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidArrayError */ .dm(value);
    if (!dynamic && value.length !== length)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEncodingArrayLengthMismatchError */ .Nc({
            expectedLength: length,
            givenLength: value.length,
            type: `${param.type}[${length}]`,
        });
    let dynamicChild = false;
    const preparedParams = [];
    for (let i = 0; i < value.length; i++) {
        const preparedParam = prepareParam({ param, value: value[i] });
        if (preparedParam.dynamic)
            dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(preparedParams.length, { size: 32 });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concat */ .xW)([length, data]) : length,
            };
        }
        if (dynamicChild)
            return { dynamic: true, encoded: data };
    }
    return {
        dynamic: false,
        encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concat */ .xW)(preparedParams.map(({ encoded }) => encoded)),
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split('bytes');
    const bytesSize = (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(value);
    if (!paramSize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0)
            value_ = (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)(value_, {
                dir: 'right',
                size: Math.ceil((value.length - 2) / 2 / 32) * 32,
            });
        return {
            dynamic: true,
            encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concat */ .xW)([(0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(bytesSize, { size: 32 })), value_]),
        };
    }
    if (bytesSize !== Number.parseInt(paramSize))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEncodingBytesSizeMismatchError */ .gH({
            expectedSize: Number.parseInt(paramSize),
            value,
        });
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)(value, { dir: 'right' }) };
}
function encodeBool(value) {
    if (typeof value !== 'boolean')
        throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_7__/* .BaseError */ .C(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .boolToHex */ .$P)(value)) };
}
function encodeNumber(value, { signed }) {
    return {
        dynamic: false,
        encoded: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)(value, {
            size: 32,
            signed,
        }),
    };
}
function encodeString(value) {
    const hexValue = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .stringToHex */ .i3)(value);
    const partsLength = Math.ceil((0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(hexValue) / 32);
    const parts = [];
    for (let i = 0; i < partsLength; i++) {
        parts.push((0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_8__/* .slice */ .di)(hexValue, i * 32, (i + 1) * 32), {
            dir: 'right',
        }));
    }
    return {
        dynamic: true,
        encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concat */ .xW)([
            (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__/* .padHex */ .db)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__/* .numberToHex */ .cK)((0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(hexValue), { size: 32 })),
            ...parts,
        ]),
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for (let i = 0; i < param.components.length; i++) {
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index],
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic)
            dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic
            ? encodeParams(preparedParams)
            : (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concat */ .xW)(preparedParams.map(({ encoded }) => encoded)),
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches
        ? // Return `null` if the array is dynamic.
            [matches[2] ? Number(matches[2]) : null, matches[1]]
        : undefined;
}
//# sourceMappingURL=encodeAbiParameters.js.map

/***/ }),

/***/ 1825:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ encodeDeployData)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5074);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3406);



const docsPath = '/docs/contract/encodeDeployData';
function encodeDeployData(parameters) {
    const { abi, args, bytecode } = parameters;
    if (!args || args.length === 0)
        return bytecode;
    const description = abi.find((x) => 'type' in x && x.type === 'constructor');
    if (!description)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiConstructorNotFoundError */ .YW({ docsPath });
    if (!('inputs' in description))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiConstructorParamsNotFoundError */ .YF({ docsPath });
    if (!description.inputs || description.inputs.length === 0)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiConstructorParamsNotFoundError */ .YF({ docsPath });
    const data = (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeAbiParameters */ .h)(description.inputs, args);
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_2__/* .concatHex */ .aP)([bytecode, data]);
}
//# sourceMappingURL=encodeDeployData.js.map

/***/ }),

/***/ 9824:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ encodeEventTopics)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _errors_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1055);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6109);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3387);
/* harmony import */ var _hash_toEventSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9246);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3406);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5081);
/* harmony import */ var _getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4849);








const docsPath = '/docs/contract/encodeEventTopics';
function encodeEventTopics(parameters) {
    const { abi, eventName, args } = parameters;
    let abiItem = abi[0];
    if (eventName) {
        const item = (0,_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .getAbiItem */ .iY)({ abi, name: eventName });
        if (!item)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiEventNotFoundError */ .M_(eventName, { docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'event')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiEventNotFoundError */ .M_(undefined, { docsPath });
    const definition = (0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__/* .formatAbiItem */ .B)(abiItem);
    const signature = (0,_hash_toEventSelector_js__WEBPACK_IMPORTED_MODULE_3__/* .toEventSelector */ .h)(definition);
    let topics = [];
    if (args && 'inputs' in abiItem) {
        const indexedInputs = abiItem.inputs?.filter((param) => 'indexed' in param && param.indexed);
        const args_ = Array.isArray(args)
            ? args
            : Object.values(args).length > 0
                ? indexedInputs?.map((x) => args[x.name]) ?? []
                : [];
        if (args_.length > 0) {
            topics =
                indexedInputs?.map((param, i) => {
                    if (Array.isArray(args_[i]))
                        return args_[i].map((_, j) => encodeArg({ param, value: args_[i][j] }));
                    return args_[i] ? encodeArg({ param, value: args_[i] }) : null;
                }) ?? [];
        }
    }
    return [signature, ...topics];
}
function encodeArg({ param, value, }) {
    if (param.type === 'string' || param.type === 'bytes')
        return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_4__/* .keccak256 */ .S)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_5__/* .toBytes */ .ZJ)(value));
    if (param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/))
        throw new _errors_log_js__WEBPACK_IMPORTED_MODULE_6__/* .FilterTypeNotSupportedError */ .u(param.type);
    return (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_7__/* .encodeAbiParameters */ .h)([param], [value]);
}
//# sourceMappingURL=encodeEventTopics.js.map

/***/ }),

/***/ 5674:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ encodeFunctionData)
/* harmony export */ });
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5074);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3406);
/* harmony import */ var _prepareEncodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4543);



function encodeFunctionData(parameters) {
    const { args } = parameters;
    const { abi, functionName } = (() => {
        if (parameters.abi.length === 1 &&
            parameters.functionName?.startsWith('0x'))
            return parameters;
        return (0,_prepareEncodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__/* .prepareEncodeFunctionData */ .Q)(parameters);
    })();
    const abiItem = abi[0];
    const signature = functionName;
    const data = 'inputs' in abiItem && abiItem.inputs
        ? (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeAbiParameters */ .h)(abiItem.inputs, args ?? [])
        : undefined;
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_2__/* .concatHex */ .aP)([signature, data ?? '0x']);
}
//# sourceMappingURL=encodeFunctionData.js.map

/***/ }),

/***/ 5081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formatAbiParams),
/* harmony export */   B: () => (/* binding */ formatAbiItem)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);

function formatAbiItem(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== 'function' &&
        abiItem.type !== 'event' &&
        abiItem.type !== 'error')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidDefinitionTypeError */ .d_(abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, { includeName })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params)
        return '';
    return params
        .map((param) => formatAbiParam(param, { includeName }))
        .join(includeName ? ', ' : ',');
}
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith('tuple')) {
        return `(${formatAbiParams(param.components, { includeName })})${param.type.slice('tuple'.length)}`;
    }
    return param.type + (includeName && param.name ? ` ${param.name}` : '');
}
//# sourceMappingURL=formatAbiItem.js.map

/***/ }),

/***/ 383:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ formatAbiItemWithArgs)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6798);

function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false, }) {
    if (!('name' in abiItem))
        return;
    if (!('inputs' in abiItem))
        return;
    if (!abiItem.inputs)
        return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs
        .map((input, i) => `${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? (0,_stringify_js__WEBPACK_IMPORTED_MODULE_0__/* .stringify */ .A)(args[i]) : args[i]}`)
        .join(', ')})`;
}
//# sourceMappingURL=formatAbiItemWithArgs.js.map

/***/ }),

/***/ 4849:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iY: () => (/* binding */ getAbiItem)
/* harmony export */ });
/* unused harmony exports isArgOfType, getAmbiguousTypes */
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(135);
/* harmony import */ var _utils_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1108);
/* harmony import */ var _hash_toEventSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9246);
/* harmony import */ var _hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7710);





function getAbiItem(parameters) {
    const { abi, args = [], name } = parameters;
    const isSelector = (0,_utils_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(name, { strict: false });
    const abiItems = abi.filter((abiItem) => {
        if (isSelector) {
            if (abiItem.type === 'function')
                return (0,_hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_1__/* .toFunctionSelector */ .V)(abiItem) === name;
            if (abiItem.type === 'event')
                return (0,_hash_toEventSelector_js__WEBPACK_IMPORTED_MODULE_2__/* .toEventSelector */ .h)(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0)
        return undefined;
    if (abiItems.length === 1)
        return abiItems[0];
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems) {
        if (!('inputs' in abiItem))
            continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0)
                return abiItem;
            continue;
        }
        if (!abiItem.inputs)
            continue;
        if (abiItem.inputs.length === 0)
            continue;
        if (abiItem.inputs.length !== args.length)
            continue;
        const matched = args.every((arg, index) => {
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter)
                return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem &&
                'inputs' in matchedAbiItem &&
                matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes)
                    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_3__/* .AbiItemAmbiguityError */ .nM({
                        abiItem,
                        type: ambiguousTypes[0],
                    }, {
                        abiItem: matchedAbiItem,
                        type: ambiguousTypes[1],
                    });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem)
        return matchedAbiItem;
    return abiItems[0];
}
/** @internal */
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch (abiParameterType) {
        case 'address':
            return (0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .P)(arg, { strict: false });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default: {
            if (abiParameterType === 'tuple' && 'components' in abiParameter)
                return Object.values(abiParameter.components).every((component, index) => {
                    return isArgOfType(Object.values(arg)[index], component);
                });
            // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
            // https://regexr.com/6v8hp
            if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
                return argType === 'number' || argType === 'bigint';
            // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
            // https://regexr.com/6va55
            if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
                return argType === 'string' || arg instanceof Uint8Array;
            // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
            // https://regexr.com/6va6i
            if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                return (Array.isArray(arg) &&
                    arg.every((x) => isArgOfType(x, {
                        ...abiParameter,
                        // Pop off `[]` or `[M]` from end of type
                        type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, ''),
                    })));
            }
            return false;
        }
    }
}
/** @internal */
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for (const parameterIndex in sourceParameters) {
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' &&
            targetParameter.type === 'tuple' &&
            'components' in sourceParameter &&
            'components' in targetParameter)
            return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [sourceParameter.type, targetParameter.type];
        const ambiguous = (() => {
            if (types.includes('address') && types.includes('bytes20'))
                return true;
            if (types.includes('address') && types.includes('string'))
                return (0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .P)(args[parameterIndex], { strict: false });
            if (types.includes('address') && types.includes('bytes'))
                return (0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .P)(args[parameterIndex], { strict: false });
            return false;
        })();
        if (ambiguous)
            return types;
    }
    return;
}
//# sourceMappingURL=getAbiItem.js.map

/***/ }),

/***/ 5294:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ parseEventLogs)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);
/* harmony import */ var _address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2382);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6109);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3387);
/* harmony import */ var _decodeEventLog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4464);
/* harmony import */ var _getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4849);
// TODO(v3): checksum address.






/**
 * Extracts & decodes logs matching the provided signature(s) (`abi` + optional `eventName`)
 * from a set of opaque logs.
 *
 * @param parameters - {@link ParseEventLogsParameters}
 * @returns The logs. {@link ParseEventLogsReturnType}
 *
 * @example
 * import { createClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { parseEventLogs } from 'viem/op-stack'
 *
 * const client = createClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const receipt = await getTransactionReceipt(client, {
 *   hash: '0xec23b2ba4bc59ba61554507c1b1bc91649e6586eb2dd00c728e8ed0db8bb37ea',
 * })
 *
 * const logs = parseEventLogs({ logs: receipt.logs })
 * // [{ args: { ... }, eventName: 'TransactionDeposited', ... }, ...]
 */
function parseEventLogs(parameters) {
    const { abi, args, logs, strict = true } = parameters;
    const eventName = (() => {
        if (!parameters.eventName)
            return undefined;
        if (Array.isArray(parameters.eventName))
            return parameters.eventName;
        return [parameters.eventName];
    })();
    return logs
        .map((log) => {
        try {
            const abiItem = (0,_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .getAbiItem */ .iY)({
                abi: abi,
                name: log.topics[0],
            });
            if (!abiItem)
                return null;
            const event = (0,_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeEventLog */ .j)({
                ...log,
                abi: [abiItem],
                strict,
            });
            // Check that the decoded event name matches the provided event name.
            if (eventName && !eventName.includes(event.eventName))
                return null;
            // Check that the decoded event args match the provided args.
            if (!includesArgs({
                args: event.args,
                inputs: abiItem.inputs,
                matchArgs: args,
            }))
                return null;
            return { ...event, ...log };
        }
        catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__/* .AbiEventSignatureNotFoundError */ .kE)
                return null;
            if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__/* .DecodeLogDataMismatch */ .fo ||
                err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__/* .DecodeLogTopicsMismatch */ .l3) {
                // If strict mode is on, and log data/topics do not match event definition, skip.
                if (strict)
                    return null;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
            }
            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
            return { ...log, args: isUnnamed ? [] : {}, eventName };
        }
    })
        .filter(Boolean);
}
function includesArgs(parameters) {
    const { args, inputs, matchArgs } = parameters;
    if (!matchArgs)
        return true;
    if (!args)
        return false;
    function isEqual(input, value, arg) {
        try {
            if (input.type === 'address')
                return (0,_address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_3__/* .isAddressEqual */ .h)(value, arg);
            if (input.type === 'string' || input.type === 'bytes')
                return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_4__/* .keccak256 */ .S)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_5__/* .toBytes */ .ZJ)(value)) === arg;
            return value === arg;
        }
        catch {
            return false;
        }
    }
    if (Array.isArray(args) && Array.isArray(matchArgs)) {
        return matchArgs.every((value, index) => {
            if (!value)
                return true;
            const input = inputs[index];
            if (!input)
                return false;
            const value_ = Array.isArray(value) ? value : [value];
            return value_.some((value) => isEqual(input, value, args[index]));
        });
    }
    if (typeof args === 'object' &&
        !Array.isArray(args) &&
        typeof matchArgs === 'object' &&
        !Array.isArray(matchArgs))
        return Object.entries(matchArgs).every(([key, value]) => {
            if (!value)
                return true;
            const input = inputs.find((input) => input.name === key);
            if (!input)
                return false;
            const value_ = Array.isArray(value) ? value : [value];
            return value_.some((value) => isEqual(input, value, args[key]));
        });
    return false;
}
//# sourceMappingURL=parseEventLogs.js.map

/***/ }),

/***/ 4543:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ prepareEncodeFunctionData)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7710);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5081);
/* harmony import */ var _getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4849);




const docsPath = '/docs/contract/encodeFunctionData';
function prepareEncodeFunctionData(parameters) {
    const { abi, args, functionName } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0,_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__/* .getAbiItem */ .iY)({
            abi,
            args,
            name: functionName,
        });
        if (!item)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiFunctionNotFoundError */ .Iz(functionName, { docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'function')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__/* .AbiFunctionNotFoundError */ .Iz(undefined, { docsPath });
    return {
        abi: [abiItem],
        functionName: (0,_hash_toFunctionSelector_js__WEBPACK_IMPORTED_MODULE_2__/* .toFunctionSelector */ .V)((0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_3__/* .formatAbiItem */ .B)(abiItem)),
    };
}
//# sourceMappingURL=prepareEncodeFunctionData.js.map

/***/ }),

/***/ 5458:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ getAddress),
/* harmony export */   o: () => (/* binding */ checksumAddress)
/* harmony export */ });
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8149);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3387);
/* harmony import */ var _lru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7146);
/* harmony import */ var _isAddress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1108);





const checksumAddressCache = /*#__PURE__*/ new _lru_js__WEBPACK_IMPORTED_MODULE_0__/* .LruMap */ .A(8192);
function checksumAddress(address_, 
/**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */
chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`))
        return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = chainId
        ? `${chainId}${address_.toLowerCase()}`
        : address_.substring(2).toLowerCase();
    const hash = (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .S)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .stringToBytes */ .Af)(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for (let i = 0; i < 40; i += 2) {
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    const result = `0x${address.join('')}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}
function getAddress(address, 
/**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */
chainId) {
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .P)(address, { strict: false }))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_4__/* .InvalidAddressError */ .M({ address });
    return checksumAddress(address, chainId);
}
//# sourceMappingURL=getAddress.js.map

/***/ }),

/***/ 1108:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ isAddress)
/* harmony export */ });
/* unused harmony export isAddressCache */
/* harmony import */ var _lru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7146);
/* harmony import */ var _getAddress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5458);


const addressRegex = /^0x[a-fA-F0-9]{40}$/;
/** @internal */
const isAddressCache = /*#__PURE__*/ new _lru_js__WEBPACK_IMPORTED_MODULE_0__/* .LruMap */ .A(8192);
function isAddress(address, options) {
    const { strict = true } = options ?? {};
    const cacheKey = `${address}.${strict}`;
    if (isAddressCache.has(cacheKey))
        return isAddressCache.get(cacheKey);
    const result = (() => {
        if (!addressRegex.test(address))
            return false;
        if (address.toLowerCase() === address)
            return true;
        if (strict)
            return (0,_getAddress_js__WEBPACK_IMPORTED_MODULE_1__/* .checksumAddress */ .o)(address) === address;
        return true;
    })();
    isAddressCache.set(cacheKey, result);
    return result;
}
//# sourceMappingURL=isAddress.js.map

/***/ }),

/***/ 2382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ isAddressEqual)
/* harmony export */ });
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8149);
/* harmony import */ var _isAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1108);


function isAddressEqual(a, b) {
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .isAddress */ .P)(a, { strict: false }))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidAddressError */ .M({ address: a });
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .isAddress */ .P)(b, { strict: false }))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidAddressError */ .M({ address: b });
    return a.toLowerCase() === b.toLowerCase();
}
//# sourceMappingURL=isAddressEqual.js.map

/***/ }),

/***/ 1590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ blobsToCommitments)
/* harmony export */ });
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);


/**
 * Compute commitments from a list of blobs.
 *
 * @example
 * ```ts
 * import { blobsToCommitments, toBlobs } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * ```
 */
function blobsToCommitments(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = (typeof parameters.blobs[0] === 'string'
        ? parameters.blobs.map((x) => (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToBytes */ .aT)(x))
        : parameters.blobs);
    const commitments = [];
    for (const blob of blobs)
        commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
    return (to === 'bytes'
        ? commitments
        : commitments.map((x) => (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My)(x)));
}
//# sourceMappingURL=blobsToCommitments.js.map

/***/ }),

/***/ 5613:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ blobsToProofs)
/* harmony export */ });
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);


/**
 * Compute the proofs for a list of blobs and their commitments.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const proofs = blobsToProofs({ blobs, commitments, kzg })
 * ```
 */
function blobsToProofs(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = (typeof parameters.blobs[0] === 'string'
        ? parameters.blobs.map((x) => (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToBytes */ .aT)(x))
        : parameters.blobs);
    const commitments = (typeof parameters.commitments[0] === 'string'
        ? parameters.commitments.map((x) => (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToBytes */ .aT)(x))
        : parameters.commitments);
    const proofs = [];
    for (let i = 0; i < blobs.length; i++) {
        const blob = blobs[i];
        const commitment = commitments[i];
        proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
    }
    return (to === 'bytes'
        ? proofs
        : proofs.map((x) => (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My)(x)));
}
//# sourceMappingURL=blobsToProofs.js.map

/***/ }),

/***/ 9630:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ commitmentToVersionedHash)
/* harmony export */ });
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);
/* harmony import */ var _hash_sha256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5945);


/**
 * Transform a commitment to it's versioned hash.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   commitmentToVersionedHash,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const [commitment] = blobsToCommitments({ blobs, kzg })
 * const versionedHash = commitmentToVersionedHash({ commitment })
 * ```
 */
function commitmentToVersionedHash(parameters) {
    const { commitment, version = 1 } = parameters;
    const to = parameters.to ?? (typeof commitment === 'string' ? 'hex' : 'bytes');
    const versionedHash = (0,_hash_sha256_js__WEBPACK_IMPORTED_MODULE_0__/* .sha256 */ .s)(commitment, 'bytes');
    versionedHash.set([version], 0);
    return (to === 'bytes' ? versionedHash : (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My)(versionedHash));
}
//# sourceMappingURL=commitmentToVersionedHash.js.map

/***/ }),

/***/ 4457:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ commitmentsToVersionedHashes)
/* harmony export */ });
/* harmony import */ var _commitmentToVersionedHash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9630);

/**
 * Transform a list of commitments to their versioned hashes.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   commitmentsToVersionedHashes,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const versionedHashes = commitmentsToVersionedHashes({ commitments })
 * ```
 */
function commitmentsToVersionedHashes(parameters) {
    const { commitments, version } = parameters;
    const to = parameters.to ?? (typeof commitments[0] === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const commitment of commitments) {
        hashes.push((0,_commitmentToVersionedHash_js__WEBPACK_IMPORTED_MODULE_0__/* .commitmentToVersionedHash */ .I)({
            commitment,
            to,
            version,
        }));
    }
    return hashes;
}
//# sourceMappingURL=commitmentsToVersionedHashes.js.map

/***/ }),

/***/ 9225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ toBlobSidecars)
/* harmony export */ });
/* harmony import */ var _blobsToCommitments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1590);
/* harmony import */ var _blobsToProofs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5613);
/* harmony import */ var _toBlobs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1484);



/**
 * Transforms arbitrary data (or blobs, commitments, & proofs) into a sidecar array.
 *
 * @example
 * ```ts
 * import { toBlobSidecars, stringToHex } from 'viem'
 *
 * const sidecars = toBlobSidecars({ data: stringToHex('hello world') })
 * ```
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   toBlobs,
 *   blobsToProofs,
 *   toBlobSidecars,
 *   stringToHex
 * } from 'viem'
 *
 * const blobs = toBlobs({ data: stringToHex('hello world') })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const proofs = blobsToProofs({ blobs, commitments, kzg })
 *
 * const sidecars = toBlobSidecars({ blobs, commitments, proofs })
 * ```
 */
function toBlobSidecars(parameters) {
    const { data, kzg, to } = parameters;
    const blobs = parameters.blobs ?? (0,_toBlobs_js__WEBPACK_IMPORTED_MODULE_0__/* .toBlobs */ .w)({ data: data, to });
    const commitments = parameters.commitments ?? (0,_blobsToCommitments_js__WEBPACK_IMPORTED_MODULE_1__/* .blobsToCommitments */ .S)({ blobs, kzg: kzg, to });
    const proofs = parameters.proofs ?? (0,_blobsToProofs_js__WEBPACK_IMPORTED_MODULE_2__/* .blobsToProofs */ .t)({ blobs, commitments, kzg: kzg, to });
    const sidecars = [];
    for (let i = 0; i < blobs.length; i++)
        sidecars.push({
            blob: blobs[i],
            commitment: commitments[i],
            proof: proofs[i],
        });
    return sidecars;
}
//# sourceMappingURL=toBlobSidecars.js.map

/***/ }),

/***/ 1484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ toBlobs)
/* harmony export */ });
/* harmony import */ var _constants_blob_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9384);
/* harmony import */ var _errors_blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3882);
/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8809);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4031);






/**
 * Transforms arbitrary data to blobs.
 *
 * @example
 * ```ts
 * import { toBlobs, stringToHex } from 'viem'
 *
 * const blobs = toBlobs({ data: stringToHex('hello world') })
 * ```
 */
function toBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.data === 'string' ? 'hex' : 'bytes');
    const data = (typeof parameters.data === 'string'
        ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToBytes */ .aT)(parameters.data)
        : parameters.data);
    const size_ = (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(data);
    if (!size_)
        throw new _errors_blob_js__WEBPACK_IMPORTED_MODULE_2__/* .EmptyBlobError */ .zF();
    if (size_ > _constants_blob_js__WEBPACK_IMPORTED_MODULE_3__/* .maxBytesPerTransaction */ .vP)
        throw new _errors_blob_js__WEBPACK_IMPORTED_MODULE_2__/* .BlobSizeTooLargeError */ .iq({
            maxSize: _constants_blob_js__WEBPACK_IMPORTED_MODULE_3__/* .maxBytesPerTransaction */ .vP,
            size: size_,
        });
    const blobs = [];
    let active = true;
    let position = 0;
    while (active) {
        const blob = (0,_cursor_js__WEBPACK_IMPORTED_MODULE_4__/* .createCursor */ .l)(new Uint8Array(_constants_blob_js__WEBPACK_IMPORTED_MODULE_3__/* .bytesPerBlob */ .wb));
        let size = 0;
        while (size < _constants_blob_js__WEBPACK_IMPORTED_MODULE_3__/* .fieldElementsPerBlob */ .ou) {
            const bytes = data.slice(position, position + (_constants_blob_js__WEBPACK_IMPORTED_MODULE_3__/* .bytesPerFieldElement */ .ZJ - 1));
            // Push a zero byte so the field element doesn't overflow the BLS modulus.
            blob.pushByte(0x00);
            // Push the current segment of data bytes.
            blob.pushBytes(bytes);
            // If we detect that the current segment of data bytes is less than 31 bytes,
            // we can stop processing and push a terminator byte to indicate the end of the blob.
            if (bytes.length < 31) {
                blob.pushByte(0x80);
                active = false;
                break;
            }
            size++;
            position += 31;
        }
        blobs.push(blob);
    }
    return (to === 'bytes'
        ? blobs.map((x) => x.bytes)
        : blobs.map((x) => (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_5__/* .bytesToHex */ .My)(x.bytes)));
}
//# sourceMappingURL=toBlobs.js.map

/***/ }),

/***/ 4718:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ buildRequest)
/* harmony export */ });
/* unused harmony export shouldRetry */
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5484);
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1788);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6898);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3387);
/* harmony import */ var _promise_withDedupe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210);
/* harmony import */ var _promise_withRetry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3279);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6798);








function buildRequest(request, options = {}) {
    return async (args, overrideOptions = {}) => {
        const { dedupe = false, retryDelay = 150, retryCount = 3, uid, } = {
            ...options,
            ...overrideOptions,
        };
        const requestId = dedupe
            ? (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .S)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .stringToHex */ .i3)(`${uid}.${(0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A)(args)}`))
            : undefined;
        return (0,_promise_withDedupe_js__WEBPACK_IMPORTED_MODULE_3__/* .withDedupe */ .I)(() => (0,_promise_withRetry_js__WEBPACK_IMPORTED_MODULE_4__/* .withRetry */ .b)(async () => {
            try {
                return await request(args);
            }
            catch (err_) {
                const err = err_;
                switch (err.code) {
                    // -32700
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ParseRpcError */ .XU.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ParseRpcError */ .XU(err);
                    // -32600
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InvalidRequestRpcError */ .CL.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InvalidRequestRpcError */ .CL(err);
                    // -32601
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .MethodNotFoundRpcError */ .Gi.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .MethodNotFoundRpcError */ .Gi(err, { method: args.method });
                    // -32602
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InvalidParamsRpcError */ .D5.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InvalidParamsRpcError */ .D5(err);
                    // -32603
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InternalRpcError */ .bq.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InternalRpcError */ .bq(err);
                    // -32000
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InvalidInputRpcError */ .Di.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InvalidInputRpcError */ .Di(err);
                    // -32001
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceNotFoundRpcError */ .hA.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceNotFoundRpcError */ .hA(err);
                    // -32002
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceUnavailableRpcError */ .qZ.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceUnavailableRpcError */ .qZ(err);
                    // -32003
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .TransactionRejectedRpcError */ .YW.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .TransactionRejectedRpcError */ .YW(err);
                    // -32004
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .MethodNotSupportedRpcError */ .ab.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .MethodNotSupportedRpcError */ .ab(err, {
                            method: args.method,
                        });
                    // -32005
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .LimitExceededRpcError */ .s0.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .LimitExceededRpcError */ .s0(err);
                    // -32006
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .JsonRpcVersionUnsupportedError */ .xQ.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .JsonRpcVersionUnsupportedError */ .xQ(err);
                    // 4001
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .UserRejectedRequestError */ .vx.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .UserRejectedRequestError */ .vx(err);
                    // 4100
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .UnauthorizedProviderError */ .sV.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .UnauthorizedProviderError */ .sV(err);
                    // 4200
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .UnsupportedProviderMethodError */ .Sf.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .UnsupportedProviderMethodError */ .Sf(err);
                    // 4900
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ProviderDisconnectedError */ .RV.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ProviderDisconnectedError */ .RV(err);
                    // 4901
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ChainDisconnectedError */ .xq.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .ChainDisconnectedError */ .xq(err);
                    // 4902
                    case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .SwitchChainError */ .ch.code:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .SwitchChainError */ .ch(err);
                    // CAIP-25: User Rejected Error
                    // https://docs.walletconnect.com/2.0/specs/clients/sign/error-codes#rejected-caip-25
                    case 5000:
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .UserRejectedRequestError */ .vx(err);
                    default:
                        if (err_ instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_6__/* .BaseError */ .C)
                            throw err_;
                        throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .UnknownRpcError */ .MI(err);
                }
            }
        }, {
            delay: ({ count, error }) => {
                // If we find a Retry-After header, let's retry after the given time.
                if (error && error instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_7__/* .HttpRequestError */ .Ci) {
                    const retryAfter = error?.headers?.get('Retry-After');
                    if (retryAfter?.match(/\d/))
                        return Number.parseInt(retryAfter) * 1000;
                }
                // Otherwise, let's retry with an exponential backoff.
                return ~~(1 << count) * retryDelay;
            },
            retryCount,
            shouldRetry: ({ error }) => shouldRetry(error),
        }), { enabled: dedupe, id: requestId });
    };
}
/** @internal */
function shouldRetry(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === -1)
            return true; // Unknown error
        if (error.code === _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .LimitExceededRpcError */ .s0.code)
            return true;
        if (error.code === _errors_rpc_js__WEBPACK_IMPORTED_MODULE_5__/* .InternalRpcError */ .bq.code)
            return true;
        return false;
    }
    if (error instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_7__/* .HttpRequestError */ .Ci && error.status) {
        // Forbidden
        if (error.status === 403)
            return true;
        // Request Timeout
        if (error.status === 408)
            return true;
        // Request Entity Too Large
        if (error.status === 413)
            return true;
        // Too Many Requests
        if (error.status === 429)
            return true;
        // Internal Server Error
        if (error.status === 500)
            return true;
        // Bad Gateway
        if (error.status === 502)
            return true;
        // Service Unavailable
        if (error.status === 503)
            return true;
        // Gateway Timeout
        if (error.status === 504)
            return true;
        return false;
    }
    return true;
}
//# sourceMappingURL=buildRequest.js.map

/***/ }),

/***/ 4861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ defineChain)
/* harmony export */ });
function defineChain(chain) {
    return {
        formatters: undefined,
        fees: undefined,
        serializers: undefined,
        ...chain,
    };
}
//# sourceMappingURL=defineChain.js.map

/***/ }),

/***/ 6140:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getChainContractAddress)
/* harmony export */ });
/* harmony import */ var _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);

function getChainContractAddress({ blockNumber, chain, contract: name, }) {
    const contract = chain?.contracts?.[name];
    if (!contract)
        throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__/* .ChainDoesNotSupportContract */ .rj({
            chain,
            contract: { name },
        });
    if (blockNumber &&
        contract.blockCreated &&
        contract.blockCreated > blockNumber)
        throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__/* .ChainDoesNotSupportContract */ .rj({
            blockNumber,
            chain,
            contract: {
                name,
                blockCreated: contract.blockCreated,
            },
        });
    return contract.address;
}
//# sourceMappingURL=getChainContractAddress.js.map

/***/ }),

/***/ 8809:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ createCursor)
/* harmony export */ });
/* harmony import */ var _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5623);

const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .RecursiveReadLimitExceededError */ .hX({
                count: this.recursiveReadCount + 1,
                limit: this.recursiveReadLimit,
            });
    },
    assertPosition(position) {
        if (position < 0 || position > this.bytes.length - 1)
            throw new _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .PositionOutOfBoundsError */ .SK({
                length: this.bytes.length,
                position,
            });
    },
    decrementPosition(offset) {
        if (offset < 0)
            throw new _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .NegativeOffsetError */ .B4({ offset });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount(position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition(offset) {
        if (offset < 0)
            throw new _errors_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .NegativeOffsetError */ .B4({ offset });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes(length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return ((this.dataView.getUint16(position) << 8) +
            this.dataView.getUint8(position + 2));
    },
    inspectUint32(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte(byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes(bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8(value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16(value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24(value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32(value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes(length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining() {
        return this.bytes.length - this.position;
    },
    setPosition(position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return () => (this.position = oldPosition);
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
            return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0)
            this.recursiveReadCount++;
    },
};
function createCursor(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}
//# sourceMappingURL=cursor.js.map

/***/ }),

/***/ 5074:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aP: () => (/* binding */ concatHex),
/* harmony export */   xW: () => (/* binding */ concat)
/* harmony export */ });
/* unused harmony export concatBytes */
function concat(values) {
    if (typeof values[0] === 'string')
        return concatHex(values);
    return concatBytes(values);
}
function concatBytes(values) {
    let length = 0;
    for (const arr of values) {
        length += arr.length;
    }
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
function concatHex(values) {
    return `0x${values.reduce((acc, x) => acc + x.replace('0x', ''), '')}`;
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ 9767:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ isBytesEqual)
/* harmony export */ });
/* harmony import */ var _noble_curves_abstract_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6667);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);



function isBytesEqual(a_, b_) {
    const a = (0,_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(a_) ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__/* .toBytes */ .ZJ)(a_) : a_;
    const b = (0,_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(b_) ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__/* .toBytes */ .ZJ)(b_) : b_;
    return (0,_noble_curves_abstract_utils__WEBPACK_IMPORTED_MODULE_2__/* .equalBytes */ .ex)(a, b);
}
//# sourceMappingURL=isBytesEqual.js.map

/***/ }),

/***/ 8689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ isHex)
/* harmony export */ });
function isHex(value, { strict = true } = {}) {
    if (!value)
        return false;
    if (typeof value !== 'string')
        return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
}
//# sourceMappingURL=isHex.js.map

/***/ }),

/***/ 3633:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ padHex),
/* harmony export */   eV: () => (/* binding */ pad)
/* harmony export */ });
/* unused harmony export padBytes */
/* harmony import */ var _errors_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1549);

function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string')
        return padHex(hexOrBytes, { dir, size });
    return padBytes(hexOrBytes, { dir, size });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null)
        return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2)
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_0__/* .SizeExceedsPaddingSizeError */ .Fl({
            size: Math.ceil(hex.length / 2),
            targetSize: size,
            type: 'hex',
        });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null)
        return bytes;
    if (bytes.length > size)
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_0__/* .SizeExceedsPaddingSizeError */ .Fl({
            size: bytes.length,
            targetSize: size,
            type: 'bytes',
        });
    const paddedBytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] =
            bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
//# sourceMappingURL=pad.js.map

/***/ }),

/***/ 6615:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var _isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);

/**
 * @description Retrieves the size of the value (in bytes).
 *
 * @param value The value (hex or byte array) to retrieve the size of.
 * @returns The size of the value (in bytes).
 */
function size(value) {
    if ((0,_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(value, { strict: false }))
        return Math.ceil((value.length - 2) / 2);
    return value.length;
}
//# sourceMappingURL=size.js.map

/***/ }),

/***/ 2174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1: () => (/* binding */ sliceBytes),
/* harmony export */   di: () => (/* binding */ slice),
/* harmony export */   iN: () => (/* binding */ sliceHex)
/* harmony export */ });
/* harmony import */ var _errors_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1549);
/* harmony import */ var _isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);



/**
 * @description Returns a section of the hex or byte array given a start/end bytes offset.
 *
 * @param value The hex or byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function slice(value, start, end, { strict } = {}) {
    if ((0,_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(value, { strict: false }))
        return sliceHex(value, start, end, {
            strict,
        });
    return sliceBytes(value, start, end, {
        strict,
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0,_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(value) - 1)
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceOffsetOutOfBoundsError */ .ii({
            offset: start,
            position: 'start',
            size: (0,_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(value),
        });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        (0,_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(value) !== end - start) {
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceOffsetOutOfBoundsError */ .ii({
            offset: end,
            position: 'end',
            size: (0,_size_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .E)(value),
        });
    }
}
/**
 * @description Returns a section of the byte array given a start/end bytes offset.
 *
 * @param value The byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict)
        assertEndOffset(value, start, end);
    return value;
}
/**
 * @description Returns a section of the hex value given a start/end bytes offset.
 *
 * @param value The hex value to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_
        .replace('0x', '')
        .slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict)
        assertEndOffset(value, start, end);
    return value;
}
//# sourceMappingURL=slice.js.map

/***/ }),

/***/ 582:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ trim)
/* harmony export */ });
function trim(hexOrBytes, { dir = 'left' } = {}) {
    let data = typeof hexOrBytes === 'string' ? hexOrBytes.replace('0x', '') : hexOrBytes;
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === 'string') {
        if (data.length === 1 && dir === 'right')
            data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
}
//# sourceMappingURL=trim.js.map

/***/ }),

/***/ 5310:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ar: () => (/* binding */ bytesToString),
/* harmony export */   Pr: () => (/* binding */ bytesToBool),
/* harmony export */   Sk: () => (/* binding */ bytesToNumber),
/* harmony export */   U8: () => (/* binding */ bytesToBigInt)
/* harmony export */ });
/* unused harmony export fromBytes */
/* harmony import */ var _errors_encoding_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3568);
/* harmony import */ var _data_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(582);
/* harmony import */ var _fromHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1732);
/* harmony import */ var _toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);




/**
 * Decodes a byte array into a UTF-8 string, hex value, number, bigint or boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes
 * - Example: https://viem.sh/docs/utilities/fromBytes#usage
 *
 * @param bytes Byte array to decode.
 * @param toOrOpts Type to convert to or options.
 * @returns Decoded value.
 *
 * @example
 * import { fromBytes } from 'viem'
 * const data = fromBytes(new Uint8Array([1, 164]), 'number')
 * // 420
 *
 * @example
 * import { fromBytes } from 'viem'
 * const data = fromBytes(
 *   new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]),
 *   'string'
 * )
 * // 'Hello world'
 */
function fromBytes(bytes, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? { to: toOrOpts } : toOrOpts;
    const to = opts.to;
    if (to === 'number')
        return bytesToNumber(bytes, opts);
    if (to === 'bigint')
        return bytesToBigInt(bytes, opts);
    if (to === 'boolean')
        return bytesToBool(bytes, opts);
    if (to === 'string')
        return bytesToString(bytes, opts);
    return bytesToHex(bytes, opts);
}
/**
 * Decodes a byte array into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestobigint
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { bytesToBigInt } from 'viem'
 * const data = bytesToBigInt(new Uint8Array([1, 164]))
 * // 420n
 */
function bytesToBigInt(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined')
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .assertSize */ .Sl)(bytes, { size: opts.size });
    const hex = (0,_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My)(bytes, opts);
    return (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToBigInt */ .uU)(hex, opts);
}
/**
 * Decodes a byte array into a boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestobool
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns Boolean value.
 *
 * @example
 * import { bytesToBool } from 'viem'
 * const data = bytesToBool(new Uint8Array([1]))
 * // true
 */
function bytesToBool(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .assertSize */ .Sl)(bytes, { size: opts.size });
        bytes = (0,_data_trim_js__WEBPACK_IMPORTED_MODULE_2__/* .trim */ .B)(bytes);
    }
    if (bytes.length > 1 || bytes[0] > 1)
        throw new _errors_encoding_js__WEBPACK_IMPORTED_MODULE_3__/* .InvalidBytesBooleanError */ .xO(bytes);
    return Boolean(bytes[0]);
}
/**
 * Decodes a byte array into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestonumber
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { bytesToNumber } from 'viem'
 * const data = bytesToNumber(new Uint8Array([1, 164]))
 * // 420
 */
function bytesToNumber(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined')
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .assertSize */ .Sl)(bytes, { size: opts.size });
    const hex = (0,_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My)(bytes, opts);
    return (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToNumber */ .ME)(hex, opts);
}
/**
 * Decodes a byte array into a UTF-8 string.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestostring
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns String value.
 *
 * @example
 * import { bytesToString } from 'viem'
 * const data = bytesToString(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // 'Hello world'
 */
function bytesToString(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .assertSize */ .Sl)(bytes, { size: opts.size });
        bytes = (0,_data_trim_js__WEBPACK_IMPORTED_MODULE_2__/* .trim */ .B)(bytes, { dir: 'right' });
    }
    return new TextDecoder().decode(bytes);
}
//# sourceMappingURL=fromBytes.js.map

/***/ }),

/***/ 1732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ME: () => (/* binding */ hexToNumber),
/* harmony export */   Sl: () => (/* binding */ assertSize),
/* harmony export */   uU: () => (/* binding */ hexToBigInt)
/* harmony export */ });
/* unused harmony exports fromHex, hexToBool, hexToString */
/* harmony import */ var _errors_encoding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3568);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6615);




function assertSize(hexOrBytes, { size }) {
    if ((0,_data_size_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .E)(hexOrBytes) > size)
        throw new _errors_encoding_js__WEBPACK_IMPORTED_MODULE_1__/* .SizeOverflowError */ .u({
            givenSize: (0,_data_size_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .E)(hexOrBytes),
            maxSize: size,
        });
}
/**
 * Decodes a hex string into a string, number, bigint, boolean, or byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex
 * - Example: https://viem.sh/docs/utilities/fromHex#usage
 *
 * @param hex Hex string to decode.
 * @param toOrOpts Type to convert to or options.
 * @returns Decoded value.
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x1a4', 'number')
 * // 420
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x48656c6c6f20576f726c6421', 'string')
 * // 'Hello world'
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *   size: 32,
 *   to: 'string'
 * })
 * // 'Hello world'
 */
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? { to: toOrOpts } : toOrOpts;
    const to = opts.to;
    if (to === 'number')
        return hexToNumber(hex, opts);
    if (to === 'bigint')
        return hexToBigInt(hex, opts);
    if (to === 'string')
        return hexToString(hex, opts);
    if (to === 'boolean')
        return hexToBool(hex, opts);
    return hexToBytes(hex, opts);
}
/**
 * Decodes a hex value into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextobigint
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x1a4', { signed: true })
 * // 420n
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420n
 */
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size)
        assertSize(hex, { size: opts.size });
    const value = BigInt(hex);
    if (!signed)
        return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << (BigInt(size) * 8n - 1n)) - 1n;
    if (value <= max)
        return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
/**
 * Decodes a hex value into a boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextobool
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Boolean value.
 *
 * @example
 * import { hexToBool } from 'viem'
 * const data = hexToBool('0x01')
 * // true
 *
 * @example
 * import { hexToBool } from 'viem'
 * const data = hexToBool('0x0000000000000000000000000000000000000000000000000000000000000001', { size: 32 })
 * // true
 */
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, { size: opts.size });
        hex = trim(hex);
    }
    if (trim(hex) === '0x00')
        return false;
    if (trim(hex) === '0x01')
        return true;
    throw new InvalidHexBooleanError(hex);
}
/**
 * Decodes a hex string into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextonumber
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToNumber('0x1a4')
 * // 420
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420
 */
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
/**
 * Decodes a hex value into a UTF-8 string.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextostring
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns String value.
 *
 * @example
 * import { hexToString } from 'viem'
 * const data = hexToString('0x48656c6c6f20576f726c6421')
 * // 'Hello world!'
 *
 * @example
 * import { hexToString } from 'viem'
 * const data = hexToString('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *  size: 32,
 * })
 * // 'Hello world'
 */
function hexToString(hex, opts = {}) {
    let bytes = hexToBytes(hex);
    if (opts.size) {
        assertSize(bytes, { size: opts.size });
        bytes = trim(bytes, { dir: 'right' });
    }
    return new TextDecoder().decode(bytes);
}
//# sourceMappingURL=fromHex.js.map

/***/ }),

/***/ 6109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Af: () => (/* binding */ stringToBytes),
/* harmony export */   ZJ: () => (/* binding */ toBytes),
/* harmony export */   aT: () => (/* binding */ hexToBytes)
/* harmony export */ });
/* unused harmony exports boolToBytes, numberToBytes */
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5484);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3633);
/* harmony import */ var _fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1732);
/* harmony import */ var _toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4031);





const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string, hex value, bigint, number or boolean to a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes
 * - Example: https://viem.sh/docs/utilities/toBytes#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes('Hello world')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToBytes(value, opts);
    if (typeof value === 'boolean')
        return boolToBytes(value, opts);
    if ((0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(value))
        return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
/**
 * Encodes a boolean into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#booltobytes
 *
 * @param value Boolean value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true)
 * // Uint8Array([1])
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true, { size: 32 })
 * // Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 */
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertSize */ .Sl)(bytes, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__/* .pad */ .eV)(bytes, { size: opts.size });
    }
    return bytes;
}
// We use very optimized technique to convert hex string to byte array
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102,
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
        return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F)
        return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f)
        return char - (charCodeMap.a - 10);
    return undefined;
}
/**
 * Encodes a hex string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#hextobytes
 *
 * @param hex Hex string to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertSize */ .Sl)(hex, { size: opts.size });
        hex = (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__/* .pad */ .eV)(hex, { dir: 'right', size: opts.size });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
        hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for (let index = 0, j = 0; index < length; index++) {
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_3__/* .BaseError */ .C(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
/**
 * Encodes a number into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#numbertobytes
 *
 * @param value Number to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function numberToBytes(value, opts) {
    const hex = (0,_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .numberToHex */ .cK)(value, opts);
    return hexToBytes(hex);
}
/**
 * Encodes a UTF-8 string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#stringtobytes
 *
 * @param value String to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertSize */ .Sl)(bytes, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__/* .pad */ .eV)(bytes, { dir: 'right', size: opts.size });
    }
    return bytes;
}
//# sourceMappingURL=toBytes.js.map

/***/ }),

/***/ 4031:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* binding */ boolToHex),
/* harmony export */   My: () => (/* binding */ bytesToHex),
/* harmony export */   cK: () => (/* binding */ numberToHex),
/* harmony export */   i3: () => (/* binding */ stringToHex),
/* harmony export */   nj: () => (/* binding */ toHex)
/* harmony export */ });
/* harmony import */ var _errors_encoding_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3568);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3633);
/* harmony import */ var _fromHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1732);



const hexes = /*#__PURE__*/ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, '0'));
/**
 * Encodes a string, number, bigint, or ByteArray into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex
 * - Example: https://viem.sh/docs/utilities/toHex#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world')
 * // '0x48656c6c6f20776f726c6421'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex(420)
 * // '0x1a4'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world', { size: 32 })
 * // '0x48656c6c6f20776f726c64210000000000000000000000000000000000000000'
 */
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean')
        return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
/**
 * Encodes a boolean into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#booltohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true)
 * // '0x1'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(false)
 * // '0x0'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true, { size: 32 })
 * // '0x0000000000000000000000000000000000000000000000000000000000000001'
 */
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .assertSize */ .Sl)(hex, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_1__/* .pad */ .eV)(hex, { size: opts.size });
    }
    return hex;
}
/**
 * Encodes a bytes array into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#bytestohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]), { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */
function bytesToHex(value, opts = {}) {
    let string = '';
    for (let i = 0; i < value.length; i++) {
        string += hexes[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .assertSize */ .Sl)(hex, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_1__/* .pad */ .eV)(hex, { dir: 'right', size: opts.size });
    }
    return hex;
}
/**
 * Encodes a number or bigint into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#numbertohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420)
 * // '0x1a4'
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420, { size: 32 })
 * // '0x00000000000000000000000000000000000000000000000000000000000001a4'
 */
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed)
            maxValue = (1n << (BigInt(size) * 8n - 1n)) - 1n;
        else
            maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    }
    else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if ((maxValue && value > maxValue) || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new _errors_encoding_js__WEBPACK_IMPORTED_MODULE_2__/* .IntegerOutOfRangeError */ .Ty({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`,
        });
    }
    const hex = `0x${(signed && value < 0
        ? (1n << BigInt(size * 8)) + BigInt(value)
        : value).toString(16)}`;
    if (size)
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_1__/* .pad */ .eV)(hex, { size });
    return hex;
}
const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#stringtohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!')
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!', { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
}
//# sourceMappingURL=toHex.js.map

/***/ }),

/***/ 8192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EQ: () => (/* binding */ toRlp)
/* harmony export */ });
/* unused harmony exports bytesToRlp, hexToRlp */
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5484);
/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8809);
/* harmony import */ var _toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);
/* harmony import */ var _toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);




function toRlp(bytes, to = 'hex') {
    const encodable = getEncodable(bytes);
    const cursor = (0,_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .createCursor */ .l)(new Uint8Array(encodable.length));
    encodable.encode(cursor);
    if (to === 'hex')
        return (0,_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .My)(cursor.bytes);
    return cursor.bytes;
}
function bytesToRlp(bytes, to = 'bytes') {
    return toRlp(bytes, to);
}
function hexToRlp(hex, to = 'hex') {
    return toRlp(hex, to);
}
function getEncodable(bytes) {
    if (Array.isArray(bytes))
        return getEncodableList(bytes.map((x) => getEncodable(x)));
    return getEncodableBytes(bytes);
}
function getEncodableList(list) {
    const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
    const sizeOfBodyLength = getSizeOfLength(bodyLength);
    const length = (() => {
        if (bodyLength <= 55)
            return 1 + bodyLength;
        return 1 + sizeOfBodyLength + bodyLength;
    })();
    return {
        length,
        encode(cursor) {
            if (bodyLength <= 55) {
                cursor.pushByte(0xc0 + bodyLength);
            }
            else {
                cursor.pushByte(0xc0 + 55 + sizeOfBodyLength);
                if (sizeOfBodyLength === 1)
                    cursor.pushUint8(bodyLength);
                else if (sizeOfBodyLength === 2)
                    cursor.pushUint16(bodyLength);
                else if (sizeOfBodyLength === 3)
                    cursor.pushUint24(bodyLength);
                else
                    cursor.pushUint32(bodyLength);
            }
            for (const { encode } of list) {
                encode(cursor);
            }
        },
    };
}
function getEncodableBytes(bytesOrHex) {
    const bytes = typeof bytesOrHex === 'string' ? (0,_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .hexToBytes */ .aT)(bytesOrHex) : bytesOrHex;
    const sizeOfBytesLength = getSizeOfLength(bytes.length);
    const length = (() => {
        if (bytes.length === 1 && bytes[0] < 0x80)
            return 1;
        if (bytes.length <= 55)
            return 1 + bytes.length;
        return 1 + sizeOfBytesLength + bytes.length;
    })();
    return {
        length,
        encode(cursor) {
            if (bytes.length === 1 && bytes[0] < 0x80) {
                cursor.pushBytes(bytes);
            }
            else if (bytes.length <= 55) {
                cursor.pushByte(0x80 + bytes.length);
                cursor.pushBytes(bytes);
            }
            else {
                cursor.pushByte(0x80 + 55 + sizeOfBytesLength);
                if (sizeOfBytesLength === 1)
                    cursor.pushUint8(bytes.length);
                else if (sizeOfBytesLength === 2)
                    cursor.pushUint16(bytes.length);
                else if (sizeOfBytesLength === 3)
                    cursor.pushUint24(bytes.length);
                else
                    cursor.pushUint32(bytes.length);
                cursor.pushBytes(bytes);
            }
        },
    };
}
function getSizeOfLength(length) {
    if (length < 2 ** 8)
        return 1;
    if (length < 2 ** 16)
        return 2;
    if (length < 2 ** 24)
        return 3;
    if (length < 2 ** 32)
        return 4;
    throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_3__/* .BaseError */ .C('Length is too large.');
}
//# sourceMappingURL=toRlp.js.map

/***/ }),

/***/ 3787:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ parseAvatarRecord)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3481);

/*
 * @description Parses an ENS avatar record.
 *
 * @example
 * parseAvatarRecord('eip155:1/erc1155:0xb32979486938aa9694bfc898f35dbed459f44424/10063')
 * 'https://ipfs.io/ipfs/QmSP4nq9fnN9dAiCj42ug9Wa79rqmQerZXZch82VqpiH7U/image.gif'
 *
 * @see https://docs.ens.domains/web/avatars
 *
 */
async function parseAvatarRecord(client, { gatewayUrls, record, }) {
    if (/eip155:/i.test(record))
        return parseNftAvatarUri(client, { gatewayUrls, record });
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAvatarUri */ .rr)({ uri: record, gatewayUrls });
}
async function parseNftAvatarUri(client, { gatewayUrls, record, }) {
    // parse NFT URI into properties
    const nft = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseNftUri */ .kS)(record);
    // fetch tokenURI from the NFT contract
    const nftUri = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getNftTokenUri */ .WO)(client, { nft });
    // resolve the URI from the fetched tokenURI
    const { uri: resolvedNftUri, isOnChain, isEncoded, } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .resolveAvatarUri */ .qw)({ uri: nftUri, gatewayUrls });
    // if the resolved URI is on chain, return the data
    if (isOnChain &&
        (resolvedNftUri.includes('data:application/json;base64,') ||
            resolvedNftUri.startsWith('{'))) {
        const encodedJson = isEncoded
            ? // if it is encoded, decode it
                atob(resolvedNftUri.replace('data:application/json;base64,', ''))
            : // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
                resolvedNftUri;
        const decoded = JSON.parse(encodedJson);
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAvatarUri */ .rr)({ uri: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getJsonImage */ .M0)(decoded), gatewayUrls });
    }
    let uriTokenId = nft.tokenID;
    if (nft.namespace === 'erc1155')
        uriTokenId = uriTokenId.replace('0x', '').padStart(64, '0');
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetadataAvatarUri */ .Hu)({
        gatewayUrls,
        uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId),
    });
}
//# sourceMappingURL=parseAvatarRecord.js.map

/***/ }),

/***/ 3481:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hu: () => (/* binding */ getMetadataAvatarUri),
/* harmony export */   M0: () => (/* binding */ getJsonImage),
/* harmony export */   WO: () => (/* binding */ getNftTokenUri),
/* harmony export */   kS: () => (/* binding */ parseNftUri),
/* harmony export */   qw: () => (/* binding */ resolveAvatarUri),
/* harmony export */   rr: () => (/* binding */ parseAvatarUri)
/* harmony export */ });
/* unused harmony exports isImageUri, getGateway */
/* harmony import */ var _actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9321);
/* harmony import */ var _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6161);


const networkRegex = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
/** @internal */
async function isImageUri(uri) {
    try {
        const res = await fetch(uri, { method: 'HEAD' });
        // retrieve content type header to check if content is image
        if (res.status === 200) {
            const contentType = res.headers.get('content-type');
            return contentType?.startsWith('image/');
        }
        return false;
    }
    catch (error) {
        // if error is not cors related then fail
        if (typeof error === 'object' && typeof error.response !== 'undefined') {
            return false;
        }
        // fail in NodeJS, since the error is not cors but any other network issue
        // biome-ignore lint/suspicious/noPrototypeBuiltins:
        if (!globalThis.hasOwnProperty('Image'))
            return false;
        // in case of cors, use image api to validate if given url is an actual image
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve(true);
            };
            img.onerror = () => {
                resolve(false);
            };
            img.src = uri;
        });
    }
}
/** @internal */
function getGateway(custom, defaultGateway) {
    if (!custom)
        return defaultGateway;
    if (custom.endsWith('/'))
        return custom.slice(0, -1);
    return custom;
}
function resolveAvatarUri({ uri, gatewayUrls, }) {
    const isEncoded = base64Regex.test(uri);
    if (isEncoded)
        return { uri, isOnChain: true, isEncoded };
    const ipfsGateway = getGateway(gatewayUrls?.ipfs, 'https://ipfs.io');
    const arweaveGateway = getGateway(gatewayUrls?.arweave, 'https://arweave.net');
    const networkRegexMatch = uri.match(networkRegex);
    const { protocol, subpath, target, subtarget = '', } = networkRegexMatch?.groups || {};
    const isIPNS = protocol === 'ipns:/' || subpath === 'ipns/';
    const isIPFS = protocol === 'ipfs:/' || subpath === 'ipfs/' || ipfsHashRegex.test(uri);
    if (uri.startsWith('http') && !isIPNS && !isIPFS) {
        let replacedUri = uri;
        if (gatewayUrls?.arweave)
            replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
        return { uri: replacedUri, isOnChain: false, isEncoded: false };
    }
    if ((isIPNS || isIPFS) && target) {
        return {
            uri: `${ipfsGateway}/${isIPNS ? 'ipns' : 'ipfs'}/${target}${subtarget}`,
            isOnChain: false,
            isEncoded: false,
        };
    }
    if (protocol === 'ar:/' && target) {
        return {
            uri: `${arweaveGateway}/${target}${subtarget || ''}`,
            isOnChain: false,
            isEncoded: false,
        };
    }
    let parsedUri = uri.replace(dataURIRegex, '');
    if (parsedUri.startsWith('<svg')) {
        // if svg, base64 encode
        parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
    }
    if (parsedUri.startsWith('data:') || parsedUri.startsWith('{')) {
        return {
            uri: parsedUri,
            isOnChain: true,
            isEncoded: false,
        };
    }
    throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarUriResolutionError */ .K2({ uri });
}
function getJsonImage(data) {
    // validation check for json data, must include one of theses properties
    if (typeof data !== 'object' ||
        (!('image' in data) && !('image_url' in data) && !('image_data' in data))) {
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarInvalidMetadataError */ .aD({ data });
    }
    return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri, }) {
    try {
        const res = await fetch(uri).then((res) => res.json());
        const image = await parseAvatarUri({
            gatewayUrls,
            uri: getJsonImage(res),
        });
        return image;
    }
    catch {
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarUriResolutionError */ .K2({ uri });
    }
}
async function parseAvatarUri({ gatewayUrls, uri, }) {
    const { uri: resolvedURI, isOnChain } = resolveAvatarUri({ uri, gatewayUrls });
    if (isOnChain)
        return resolvedURI;
    // check if resolvedURI is an image, if it is return the url
    const isImage = await isImageUri(resolvedURI);
    if (isImage)
        return resolvedURI;
    throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarUriResolutionError */ .K2({ uri });
}
function parseNftUri(uri_) {
    let uri = uri_;
    // parse valid nft spec (CAIP-22/CAIP-29)
    // @see: https://github.com/ChainAgnostic/CAIPs/tree/master/CAIPs
    if (uri.startsWith('did:nft:')) {
        // convert DID to CAIP
        uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }
    const [reference, asset_namespace, tokenID] = uri.split('/');
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');
    if (!eip_namespace || eip_namespace.toLowerCase() !== 'eip155')
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarInvalidNftUriError */ .xP({ reason: 'Only EIP-155 supported' });
    if (!chainID)
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarInvalidNftUriError */ .xP({ reason: 'Chain ID not found' });
    if (!contractAddress)
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarInvalidNftUriError */ .xP({
            reason: 'Contract address not found',
        });
    if (!tokenID)
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarInvalidNftUriError */ .xP({ reason: 'Token ID not found' });
    if (!erc_namespace)
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarInvalidNftUriError */ .xP({ reason: 'ERC namespace not found' });
    return {
        chainID: Number.parseInt(chainID),
        namespace: erc_namespace.toLowerCase(),
        contractAddress: contractAddress,
        tokenID,
    };
}
async function getNftTokenUri(client, { nft }) {
    if (nft.namespace === 'erc721') {
        return (0,_actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__/* .readContract */ .J)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'tokenURI',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: 'tokenId', type: 'uint256' }],
                    outputs: [{ name: '', type: 'string' }],
                },
            ],
            functionName: 'tokenURI',
            args: [BigInt(nft.tokenID)],
        });
    }
    if (nft.namespace === 'erc1155') {
        return (0,_actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__/* .readContract */ .J)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'uri',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: '_id', type: 'uint256' }],
                    outputs: [{ name: '', type: 'string' }],
                },
            ],
            functionName: 'uri',
            args: [BigInt(nft.tokenID)],
        });
    }
    throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__/* .EnsAvatarUnsupportedNamespaceError */ .gk({ namespace: nft.namespace });
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 6008:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ encodeLabelhash)
/* harmony export */ });
function encodeLabelhash(hash) {
    return `[${hash.slice(2)}]`;
}
//# sourceMappingURL=encodeLabelhash.js.map

/***/ }),

/***/ 2529:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ encodedLabelToLabelhash)
/* harmony export */ });
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);

function encodedLabelToLabelhash(label) {
    if (label.length !== 66)
        return null;
    if (label.indexOf('[') !== 0)
        return null;
    if (label.indexOf(']') !== 65)
        return null;
    const hash = `0x${label.slice(1, 65)}`;
    if (!(0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(hash))
        return null;
    return hash;
}
//# sourceMappingURL=encodedLabelToLabelhash.js.map

/***/ }),

/***/ 4045:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ isNullUniversalResolverError)
/* harmony export */ });
/* harmony import */ var _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1063);



/*
 * @description Checks if error is a valid null result UniversalResolver error
 */
function isNullUniversalResolverError(err, callType) {
    if (!(err instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C))
        return false;
    const cause = err.walk((e) => e instanceof _errors_contract_js__WEBPACK_IMPORTED_MODULE_1__/* .ContractFunctionRevertedError */ .M);
    if (!(cause instanceof _errors_contract_js__WEBPACK_IMPORTED_MODULE_1__/* .ContractFunctionRevertedError */ .M))
        return false;
    if (cause.data?.errorName === 'ResolverNotFound')
        return true;
    if (cause.data?.errorName === 'ResolverWildcardNotSupported')
        return true;
    if (cause.data?.errorName === 'ResolverNotContract')
        return true;
    if (cause.data?.errorName === 'ResolverError')
        return true;
    if (cause.data?.errorName === 'HttpError')
        return true;
    // Backwards compatibility for older UniversalResolver contracts
    if (cause.reason?.includes('Wildcard on non-extended resolvers is not supported'))
        return true;
    // No primary name set for address.
    if (callType === 'reverse' && cause.reason === _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__/* .panicReasons */ .fD[50])
        return true;
    return false;
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 2990:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ labelhash)
/* harmony export */ });
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6109);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3387);
/* harmony import */ var _encodedLabelToLabelhash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2529);




/**
 * @description Hashes ENS label
 *
 * - Since ENS labels prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS labels](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `labelhash`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @example
 * labelhash('eth')
 * '0x4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0'
 */
function labelhash(label) {
    const result = new Uint8Array(32).fill(0);
    if (!label)
        return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToHex */ .My)(result);
    return (0,_encodedLabelToLabelhash_js__WEBPACK_IMPORTED_MODULE_1__/* .encodedLabelToLabelhash */ .q)(label) || (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_2__/* .keccak256 */ .S)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_3__/* .stringToBytes */ .Af)(label));
}
//# sourceMappingURL=labelhash.js.map

/***/ }),

/***/ 1433:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ namehash)
/* harmony export */ });
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5074);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3387);
/* harmony import */ var _encodedLabelToLabelhash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2529);





/**
 * @description Hashes ENS name
 *
 * - Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `namehash`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @example
 * namehash('wevm.eth')
 * '0xf246651c1b9a6b141d19c2604e9a58f567973833990f830d882534a747801359'
 *
 * @link https://eips.ethereum.org/EIPS/eip-137
 */
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name)
        return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToHex */ .My)(result);
    const labels = name.split('.');
    // Iterate in reverse order building up hash
    for (let i = labels.length - 1; i >= 0; i -= 1) {
        const hashFromEncodedLabel = (0,_encodedLabelToLabelhash_js__WEBPACK_IMPORTED_MODULE_1__/* .encodedLabelToLabelhash */ .q)(labels[i]);
        const hashed = hashFromEncodedLabel
            ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .toBytes */ .ZJ)(hashFromEncodedLabel)
            : (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_3__/* .keccak256 */ .S)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .stringToBytes */ .Af)(labels[i]), 'bytes');
        result = (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_3__/* .keccak256 */ .S)((0,_data_concat_js__WEBPACK_IMPORTED_MODULE_4__/* .concat */ .xW)([result, hashed]), 'bytes');
    }
    return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToHex */ .My)(result);
}
//# sourceMappingURL=namehash.js.map

/***/ }),

/***/ 7471:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ normalize)
/* harmony export */ });
/* harmony import */ var _adraffy_ens_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6228);

/**
 * @description Normalizes ENS name according to ENSIP-15.
 *
 * @example
 * normalize('wevm.eth')
 * 'wevm.eth'
 *
 * @see https://docs.ens.domains/contract-api-reference/name-processing#normalising-names
 * @see https://github.com/ensdomains/docs/blob/9edf9443de4333a0ea7ec658a870672d5d180d53/ens-improvement-proposals/ensip-15-normalization-standard.md
 */
function normalize(name) {
    return (0,_adraffy_ens_normalize__WEBPACK_IMPORTED_MODULE_0__/* .ens_normalize */ .tt)(name);
}
//# sourceMappingURL=normalize.js.map

/***/ }),

/***/ 428:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ packetToBytes)
/* harmony export */ });
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _encodeLabelhash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6008);
/* harmony import */ var _labelhash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2990);



/*
 * @description Encodes a DNS packet into a ByteArray containing a UDP payload.
 *
 * @example
 * packetToBytes('awkweb.eth')
 * '0x0661776b7765620365746800'
 *
 * @see https://docs.ens.domains/resolution/names#dns
 *
 */
function packetToBytes(packet) {
    // strip leading and trailing `.`
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0)
        return new Uint8Array(1);
    const bytes = new Uint8Array((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__/* .stringToBytes */ .Af)(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for (let i = 0; i < list.length; i++) {
        let encoded = (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__/* .stringToBytes */ .Af)(list[i]);
        // if the length is > 255, make the encoded label value a labelhash
        // this is compatible with the universal resolver
        if (encoded.byteLength > 255)
            encoded = (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__/* .stringToBytes */ .Af)((0,_encodeLabelhash_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeLabelhash */ .j)((0,_labelhash_js__WEBPACK_IMPORTED_MODULE_2__/* .labelhash */ .L)(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1)
        return bytes.slice(0, offset + 1);
    return bytes;
}
//# sourceMappingURL=packetToBytes.js.map

/***/ }),

/***/ 8721:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ getCallError)
/* harmony export */ });
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1063);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1905);
/* harmony import */ var _getNodeError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3405);



function getCallError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0,_getNodeError_js__WEBPACK_IMPORTED_MODULE_0__/* .getNodeError */ .l)(err, args);
        if (cause instanceof _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .UnknownNodeError */ .RM)
            return err;
        return cause;
    })();
    return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_2__/* .CallExecutionError */ .zX(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getCallError.js.map

/***/ }),

/***/ 4459:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ getContractError)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5484);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1063);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6898);




const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender, }) {
    const { code, data, message, shortMessage } = (err instanceof _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__/* .RawContractError */ .$S
        ? err
        : err instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_1__/* .BaseError */ .C
            ? err.walk((err) => 'data' in err) || err.walk()
            : {});
    const cause = (() => {
        if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__/* .AbiDecodingZeroDataError */ .O)
            return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__/* .ContractFunctionZeroDataError */ .rR({ functionName });
        if ([EXECUTION_REVERTED_ERROR_CODE, _errors_rpc_js__WEBPACK_IMPORTED_MODULE_3__/* .InternalRpcError */ .bq.code].includes(code) &&
            (data || message || shortMessage)) {
            return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__/* .ContractFunctionRevertedError */ .M({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: shortMessage ?? message,
            });
        }
        return err;
    })();
    return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__/* .ContractFunctionExecutionError */ .bG(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender,
    });
}
//# sourceMappingURL=getContractError.js.map

/***/ }),

/***/ 1012:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ getEstimateGasError)
/* harmony export */ });
/* harmony import */ var _errors_estimateGas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9890);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1905);
/* harmony import */ var _getNodeError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3405);



function getEstimateGasError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0,_getNodeError_js__WEBPACK_IMPORTED_MODULE_0__/* .getNodeError */ .l)(err, args);
        if (cause instanceof _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .UnknownNodeError */ .RM)
            return err;
        return cause;
    })();
    return new _errors_estimateGas_js__WEBPACK_IMPORTED_MODULE_2__/* .EstimateGasExecutionError */ .W(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getEstimateGasError.js.map

/***/ }),

/***/ 3405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ getNodeError)
/* harmony export */ });
/* unused harmony export containsNodeError */
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1905);




function containsNodeError(err) {
    return (err instanceof TransactionRejectedRpcError ||
        err instanceof InvalidInputRpcError ||
        (err instanceof RpcRequestError && err.code === ExecutionRevertedError.code));
}
function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C
        ? err.walk((e) => e.code === _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionRevertedError */ .A7.code)
        : err;
    if (executionRevertedError instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C)
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionRevertedError */ .A7({
            cause: err,
            message: executionRevertedError.details,
        });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionRevertedError */ .A7.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionRevertedError */ .A7({
            cause: err,
            message: err.details,
        });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .FeeCapTooHighError */ .BG.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .FeeCapTooHighError */ .BG({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .FeeCapTooLowError */ .jj.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .FeeCapTooLowError */ .jj({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceTooHighError */ .K0.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceTooHighError */ .K0({ cause: err, nonce: args?.nonce });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceTooLowError */ .Oh.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceTooLowError */ .Oh({ cause: err, nonce: args?.nonce });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceMaxValueError */ .vW.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .NonceMaxValueError */ .vW({ cause: err, nonce: args?.nonce });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .InsufficientFundsError */ .k5.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .InsufficientFundsError */ .k5({ cause: err });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .IntrinsicGasTooHighError */ .lY.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .IntrinsicGasTooHighError */ .lY({ cause: err, gas: args?.gas });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .IntrinsicGasTooLowError */ .Fo.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .IntrinsicGasTooLowError */ .Fo({ cause: err, gas: args?.gas });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .TransactionTypeNotSupportedError */ .uC.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .TransactionTypeNotSupportedError */ .uC({ cause: err });
    if (_errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .TipAboveFeeCapError */ .lN.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .TipAboveFeeCapError */ .lN({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
            maxPriorityFeePerGas: args?.maxPriorityFeePerGas,
        });
    return new _errors_node_js__WEBPACK_IMPORTED_MODULE_1__/* .UnknownNodeError */ .RM({
        cause: err,
    });
}
//# sourceMappingURL=getNodeError.js.map

/***/ }),

/***/ 5154:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ createFilterRequestScope)
/* harmony export */ });
/**
 * Scopes `request` to the filter ID. If the client is a fallback, it will
 * listen for responses and scope the child transport `request` function
 * to the successful filter ID.
 */
function createFilterRequestScope(client, { method }) {
    const requestMap = {};
    if (client.transport.type === 'fallback')
        client.transport.onResponse?.(({ method: method_, response: id, status, transport, }) => {
            if (status === 'success' && method === method_)
                requestMap[id] = transport.request;
        });
    return ((id) => requestMap[id] || client.request);
}
//# sourceMappingURL=createFilterRequestScope.js.map

/***/ }),

/***/ 1566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ formatBlock)
/* harmony export */ });
/* unused harmony export defineBlock */
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(747);


function formatBlock(block) {
    const transactions = block.transactions?.map((transaction) => {
        if (typeof transaction === 'string')
            return transaction;
        return (0,_transaction_js__WEBPACK_IMPORTED_MODULE_0__/* .formatTransaction */ .uP)(transaction);
    });
    return {
        ...block,
        baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
        blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : undefined,
        difficulty: block.difficulty ? BigInt(block.difficulty) : undefined,
        excessBlobGas: block.excessBlobGas
            ? BigInt(block.excessBlobGas)
            : undefined,
        gasLimit: block.gasLimit ? BigInt(block.gasLimit) : undefined,
        gasUsed: block.gasUsed ? BigInt(block.gasUsed) : undefined,
        hash: block.hash ? block.hash : null,
        logsBloom: block.logsBloom ? block.logsBloom : null,
        nonce: block.nonce ? block.nonce : null,
        number: block.number ? BigInt(block.number) : null,
        size: block.size ? BigInt(block.size) : undefined,
        timestamp: block.timestamp ? BigInt(block.timestamp) : undefined,
        transactions,
        totalDifficulty: block.totalDifficulty
            ? BigInt(block.totalDifficulty)
            : null,
    };
}
const defineBlock = /*#__PURE__*/ (/* unused pure expression or super */ null && (defineFormatter('block', formatBlock)));
//# sourceMappingURL=block.js.map

/***/ }),

/***/ 3918:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ extract)
/* harmony export */ });
/**
 * @description Picks out the keys from `value` that exist in the formatter..
 */
function extract(value_, { format }) {
    if (!format)
        return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys) {
            if (key in value_)
                value[key] = value_[key];
            if (formatted[key] &&
                typeof formatted[key] === 'object' &&
                !Array.isArray(formatted[key]))
                extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
}
//# sourceMappingURL=extract.js.map

/***/ }),

/***/ 3595:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ formatFeeHistory)
/* harmony export */ });
function formatFeeHistory(feeHistory) {
    return {
        baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
        gasUsedRatio: feeHistory.gasUsedRatio,
        oldestBlock: BigInt(feeHistory.oldestBlock),
        reward: feeHistory.reward?.map((reward) => reward.map((value) => BigInt(value))),
    };
}
//# sourceMappingURL=feeHistory.js.map

/***/ }),

/***/ 2073:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ formatLog)
/* harmony export */ });
function formatLog(log, { args, eventName, } = {}) {
    return {
        ...log,
        blockHash: log.blockHash ? log.blockHash : null,
        blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
        logIndex: log.logIndex ? Number(log.logIndex) : null,
        transactionHash: log.transactionHash ? log.transactionHash : null,
        transactionIndex: log.transactionIndex
            ? Number(log.transactionIndex)
            : null,
        ...(eventName ? { args, eventName } : {}),
    };
}
//# sourceMappingURL=log.js.map

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ formatProof)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1732);

function formatStorageProof(storageProof) {
    return storageProof.map((proof) => ({
        ...proof,
        value: BigInt(proof.value),
    }));
}
function formatProof(proof) {
    return {
        ...proof,
        balance: proof.balance ? BigInt(proof.balance) : undefined,
        nonce: proof.nonce ? (0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToNumber */ .ME)(proof.nonce) : undefined,
        storageProof: proof.storageProof
            ? formatStorageProof(proof.storageProof)
            : undefined,
    };
}
//# sourceMappingURL=proof.js.map

/***/ }),

/***/ 747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b4: () => (/* binding */ transactionType),
/* harmony export */   uP: () => (/* binding */ formatTransaction)
/* harmony export */ });
/* unused harmony export defineTransaction */
/* harmony import */ var _encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1732);


const transactionType = {
    '0x0': 'legacy',
    '0x1': 'eip2930',
    '0x2': 'eip1559',
    '0x3': 'eip4844',
    '0x4': 'eip7702',
};
function formatTransaction(transaction) {
    const transaction_ = {
        ...transaction,
        blockHash: transaction.blockHash ? transaction.blockHash : null,
        blockNumber: transaction.blockNumber
            ? BigInt(transaction.blockNumber)
            : null,
        chainId: transaction.chainId ? (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToNumber */ .ME)(transaction.chainId) : undefined,
        gas: transaction.gas ? BigInt(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
        maxFeePerBlobGas: transaction.maxFeePerBlobGas
            ? BigInt(transaction.maxFeePerBlobGas)
            : undefined,
        maxFeePerGas: transaction.maxFeePerGas
            ? BigInt(transaction.maxFeePerGas)
            : undefined,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
            ? BigInt(transaction.maxPriorityFeePerGas)
            : undefined,
        nonce: transaction.nonce ? (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToNumber */ .ME)(transaction.nonce) : undefined,
        to: transaction.to ? transaction.to : null,
        transactionIndex: transaction.transactionIndex
            ? Number(transaction.transactionIndex)
            : null,
        type: transaction.type
            ? transactionType[transaction.type]
            : undefined,
        typeHex: transaction.type ? transaction.type : undefined,
        value: transaction.value ? BigInt(transaction.value) : undefined,
        v: transaction.v ? BigInt(transaction.v) : undefined,
    };
    if (transaction.authorizationList)
        transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
    transaction_.yParity = (() => {
        // If `yParity` is provided, we will use it.
        if (transaction.yParity)
            return Number(transaction.yParity);
        // If no `yParity` provided, try derive from `v`.
        if (typeof transaction_.v === 'bigint') {
            if (transaction_.v === 0n || transaction_.v === 27n)
                return 0;
            if (transaction_.v === 1n || transaction_.v === 28n)
                return 1;
            if (transaction_.v >= 35n)
                return transaction_.v % 2n === 0n ? 1 : 0;
        }
        return undefined;
    })();
    if (transaction_.type === 'legacy') {
        delete transaction_.accessList;
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
        delete transaction_.yParity;
    }
    if (transaction_.type === 'eip2930') {
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
    }
    if (transaction_.type === 'eip1559') {
        delete transaction_.maxFeePerBlobGas;
    }
    return transaction_;
}
const defineTransaction = /*#__PURE__*/ (/* unused pure expression or super */ null && (defineFormatter('transaction', formatTransaction)));
//////////////////////////////////////////////////////////////////////////////
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization) => ({
        contractAddress: authorization.address,
        r: authorization.r,
        s: authorization.s,
        chainId: Number(authorization.chainId),
        nonce: Number(authorization.nonce),
        ...(typeof authorization.yParity !== 'undefined'
            ? { yParity: Number(authorization.yParity) }
            : {}),
        ...(typeof authorization.v !== 'undefined' &&
            typeof authorization.yParity === 'undefined'
            ? { v: Number(authorization.v) }
            : {}),
    }));
}
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 5991:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uL: () => (/* binding */ formatTransactionReceipt)
/* harmony export */ });
/* unused harmony exports receiptStatuses, defineTransactionReceipt */
/* harmony import */ var _encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1732);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2073);
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);




const receiptStatuses = {
    '0x0': 'reverted',
    '0x1': 'success',
};
function formatTransactionReceipt(transactionReceipt) {
    const receipt = {
        ...transactionReceipt,
        blockNumber: transactionReceipt.blockNumber
            ? BigInt(transactionReceipt.blockNumber)
            : null,
        contractAddress: transactionReceipt.contractAddress
            ? transactionReceipt.contractAddress
            : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed
            ? BigInt(transactionReceipt.cumulativeGasUsed)
            : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice
            ? BigInt(transactionReceipt.effectiveGasPrice)
            : null,
        gasUsed: transactionReceipt.gasUsed
            ? BigInt(transactionReceipt.gasUsed)
            : null,
        logs: transactionReceipt.logs
            ? transactionReceipt.logs.map((log) => (0,_log_js__WEBPACK_IMPORTED_MODULE_0__/* .formatLog */ .e)(log))
            : null,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionIndex: transactionReceipt.transactionIndex
            ? (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__/* .hexToNumber */ .ME)(transactionReceipt.transactionIndex)
            : null,
        status: transactionReceipt.status
            ? receiptStatuses[transactionReceipt.status]
            : null,
        type: transactionReceipt.type
            ? _transaction_js__WEBPACK_IMPORTED_MODULE_2__/* .transactionType */ .b4[transactionReceipt.type] || transactionReceipt.type
            : null,
    };
    if (transactionReceipt.blobGasPrice)
        receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
    if (transactionReceipt.blobGasUsed)
        receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
    return receipt;
}
const defineTransactionReceipt = /*#__PURE__*/ (/* unused pure expression or super */ null && (defineFormatter('transactionReceipt', formatTransactionReceipt)));
//# sourceMappingURL=transactionReceipt.js.map

/***/ }),

/***/ 806:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bv: () => (/* binding */ formatTransactionRequest)
/* harmony export */ });
/* unused harmony exports rpcTransactionType, defineTransactionRequest */
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);


const rpcTransactionType = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2',
    eip4844: '0x3',
    eip7702: '0x4',
};
function formatTransactionRequest(request) {
    const rpcRequest = {};
    if (typeof request.authorizationList !== 'undefined')
        rpcRequest.authorizationList = formatAuthorizationList(request.authorizationList);
    if (typeof request.accessList !== 'undefined')
        rpcRequest.accessList = request.accessList;
    if (typeof request.blobVersionedHashes !== 'undefined')
        rpcRequest.blobVersionedHashes = request.blobVersionedHashes;
    if (typeof request.blobs !== 'undefined') {
        if (typeof request.blobs[0] !== 'string')
            rpcRequest.blobs = request.blobs.map((x) => (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToHex */ .My)(x));
        else
            rpcRequest.blobs = request.blobs;
    }
    if (typeof request.data !== 'undefined')
        rpcRequest.data = request.data;
    if (typeof request.from !== 'undefined')
        rpcRequest.from = request.from;
    if (typeof request.gas !== 'undefined')
        rpcRequest.gas = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.gas);
    if (typeof request.gasPrice !== 'undefined')
        rpcRequest.gasPrice = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.gasPrice);
    if (typeof request.maxFeePerBlobGas !== 'undefined')
        rpcRequest.maxFeePerBlobGas = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.maxFeePerBlobGas);
    if (typeof request.maxFeePerGas !== 'undefined')
        rpcRequest.maxFeePerGas = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined')
        rpcRequest.maxPriorityFeePerGas = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined')
        rpcRequest.nonce = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.nonce);
    if (typeof request.to !== 'undefined')
        rpcRequest.to = request.to;
    if (typeof request.type !== 'undefined')
        rpcRequest.type = rpcTransactionType[request.type];
    if (typeof request.value !== 'undefined')
        rpcRequest.value = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(request.value);
    return rpcRequest;
}
const defineTransactionRequest = /*#__PURE__*/ (/* unused pure expression or super */ null && (defineFormatter('transactionRequest', formatTransactionRequest)));
//////////////////////////////////////////////////////////////////////////////
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization) => ({
        address: authorization.contractAddress,
        r: authorization.r,
        s: authorization.s,
        chainId: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(authorization.chainId),
        nonce: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(authorization.nonce),
        ...(typeof authorization.yParity !== 'undefined'
            ? { yParity: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(authorization.yParity) }
            : {}),
        ...(typeof authorization.v !== 'undefined' &&
            typeof authorization.yParity === 'undefined'
            ? { v: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .cK)(authorization.v) }
            : {}),
    }));
}
//# sourceMappingURL=transactionRequest.js.map

/***/ }),

/***/ 3821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ getAction)
/* harmony export */ });
/**
 * Retrieves and returns an action from the client (if exists), and falls
 * back to the tree-shakable action.
 *
 * Useful for extracting overridden actions from a client (ie. if a consumer
 * wants to override the `sendTransaction` implementation).
 */
function getAction(client, actionFn, 
// Some minifiers drop `Function.prototype.name`, or replace it with short letters,
// meaning that `actionFn.name` will not always work. For that case, the consumer
// needs to pass the name explicitly.
name) {
    const action_implicit = client[actionFn.name];
    if (typeof action_implicit === 'function')
        return action_implicit;
    const action_explicit = client[name];
    if (typeof action_explicit === 'function')
        return action_explicit;
    return (params) => actionFn(client, params);
}
//# sourceMappingURL=getAction.js.map

/***/ }),

/***/ 1982:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ hashSignature)
/* harmony export */ });
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _keccak256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3387);


const hash = (value) => (0,_keccak256_js__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .S)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__/* .toBytes */ .ZJ)(value));
function hashSignature(sig) {
    return hash(sig);
}
//# sourceMappingURL=hashSignature.js.map

/***/ }),

/***/ 3387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ keccak256)
/* harmony export */ });
/* harmony import */ var _noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8689);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4031);




function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0,_noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_0__/* .keccak_256 */ .lY)((0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_1__/* .isHex */ .q)(value, { strict: false }) ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .toBytes */ .ZJ)(value) : value);
    if (to === 'bytes')
        return bytes;
    return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__/* .toHex */ .nj)(bytes);
}
//# sourceMappingURL=keccak256.js.map

/***/ }),

/***/ 2077:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ normalizeSignature)
/* harmony export */ });
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);

function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for (let i = 0; i < signature.length; i++) {
        const char = signature[i];
        // If the character is a separator, we want to reactivate.
        if (['(', ')', ','].includes(char))
            active = true;
        // If the character is a "level" token, we want to increment/decrement.
        if (char === '(')
            level++;
        if (char === ')')
            level--;
        // If we aren't active, we don't want to mutate the result.
        if (!active)
            continue;
        // If level === 0, we are at the definition level.
        if (level === 0) {
            if (char === ' ' && ['event', 'function', ''].includes(result))
                result = '';
            else {
                result += char;
                // If we are at the end of the definition, we must be finished.
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        // Ignore spaces
        if (char === ' ') {
            // If the previous character is a separator, and the current section isn't empty, we want to deactivate.
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid)
        throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C('Unable to normalize signature.');
    return result;
}
//# sourceMappingURL=normalizeSignature.js.map

/***/ }),

/***/ 5945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ sha256)
/* harmony export */ });
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2492);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8689);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4031);




function sha256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_0__/* .sha256 */ .s)((0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_1__/* .isHex */ .q)(value, { strict: false }) ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .toBytes */ .ZJ)(value) : value);
    if (to === 'bytes')
        return bytes;
    return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__/* .toHex */ .nj)(bytes);
}
//# sourceMappingURL=sha256.js.map

/***/ }),

/***/ 9246:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ toEventSelector)
/* harmony export */ });
/* harmony import */ var _toSignatureHash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2417);

/**
 * Returns the event selector for a given event definition.
 *
 * @example
 * const selector = toEventSelector('Transfer(address indexed from, address indexed to, uint256 amount)')
 * // 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
 */
const toEventSelector = _toSignatureHash_js__WEBPACK_IMPORTED_MODULE_0__/* .toSignatureHash */ .k;
//# sourceMappingURL=toEventSelector.js.map

/***/ }),

/***/ 7710:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ toFunctionSelector)
/* harmony export */ });
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2174);
/* harmony import */ var _toSignatureHash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2417);


/**
 * Returns the function selector for a given function definition.
 *
 * @example
 * const selector = toFunctionSelector('function ownerOf(uint256 tokenId)')
 * // 0x6352211e
 */
const toFunctionSelector = (fn) => (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_0__/* .slice */ .di)((0,_toSignatureHash_js__WEBPACK_IMPORTED_MODULE_1__/* .toSignatureHash */ .k)(fn), 0, 4);
//# sourceMappingURL=toFunctionSelector.js.map

/***/ }),

/***/ 2549:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ toSignature)
/* harmony export */ });
/* harmony import */ var abitype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8312);
/* harmony import */ var _normalizeSignature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2077);


/**
 * Returns the signature for a given function or event definition.
 *
 * @example
 * const signature = toSignature('function ownerOf(uint256 tokenId)')
 * // 'ownerOf(uint256)'
 *
 * @example
 * const signature_3 = toSignature({
 *   name: 'ownerOf',
 *   type: 'function',
 *   inputs: [{ name: 'tokenId', type: 'uint256' }],
 *   outputs: [],
 *   stateMutability: 'view',
 * })
 * // 'ownerOf(uint256)'
 */
const toSignature = (def) => {
    const def_ = (() => {
        if (typeof def === 'string')
            return def;
        return (0,abitype__WEBPACK_IMPORTED_MODULE_0__/* .formatAbiItem */ .B)(def);
    })();
    return (0,_normalizeSignature_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeSignature */ .i)(def_);
};
//# sourceMappingURL=toSignature.js.map

/***/ }),

/***/ 2417:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ toSignatureHash)
/* harmony export */ });
/* harmony import */ var _hashSignature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var _toSignature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2549);


/**
 * Returns the hash (of the function/event signature) for a given event or function definition.
 */
function toSignatureHash(fn) {
    return (0,_hashSignature_js__WEBPACK_IMPORTED_MODULE_0__/* .hashSignature */ .d)((0,_toSignature_js__WEBPACK_IMPORTED_MODULE_1__/* .toSignature */ .u)(fn));
}
//# sourceMappingURL=toSignatureHash.js.map

/***/ }),

/***/ 7146:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LruMap)
/* harmony export */ });
/**
 * Map with a LRU (Least recently used) policy.
 *
 * @link https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */
class LruMap extends Map {
    constructor(size) {
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize)
            this.delete(this.keys().next().value);
        return this;
    }
}
//# sourceMappingURL=lru.js.map

/***/ }),

/***/ 7687:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lB: () => (/* binding */ observe)
/* harmony export */ });
/* unused harmony exports listenersCache, cleanupCache */
/** @internal */
const listenersCache = /*#__PURE__*/ new Map();
/** @internal */
const cleanupCache = /*#__PURE__*/ new Map();
let callbackCount = 0;
/**
 * @description Sets up an observer for a given function. If another function
 * is set up under the same observer id, the function will only be called once
 * for both instances of the observer.
 */
function observe(observerId, callbacks, fn) {
    const callbackId = ++callbackCount;
    const getListeners = () => listenersCache.get(observerId) || [];
    const unsubscribe = () => {
        const listeners = getListeners();
        listenersCache.set(observerId, listeners.filter((cb) => cb.id !== callbackId));
    };
    const unwatch = () => {
        const cleanup = cleanupCache.get(observerId);
        if (getListeners().length === 1 && cleanup)
            cleanup();
        unsubscribe();
    };
    const listeners = getListeners();
    listenersCache.set(observerId, [
        ...listeners,
        { id: callbackId, fns: callbacks },
    ]);
    if (listeners && listeners.length > 0)
        return unwatch;
    const emit = {};
    for (const key in callbacks) {
        emit[key] = ((...args) => {
            const listeners = getListeners();
            if (listeners.length === 0)
                return;
            for (const listener of listeners)
                listener.fns[key]?.(...args);
        });
    }
    const cleanup = fn(emit);
    if (typeof cleanup === 'function')
        cleanupCache.set(observerId, cleanup);
    return unwatch;
}
//# sourceMappingURL=observe.js.map

/***/ }),

/***/ 4562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ poll)
/* harmony export */ });
/* harmony import */ var _wait_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1422);

/**
 * @description Polls a function at a specified interval.
 */
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
    let active = true;
    const unwatch = () => (active = false);
    const watch = async () => {
        let data = undefined;
        if (emitOnBegin)
            data = await fn({ unpoll: unwatch });
        const initialWait = (await initialWaitTime?.(data)) ?? interval;
        await (0,_wait_js__WEBPACK_IMPORTED_MODULE_0__/* .wait */ .u)(initialWait);
        const poll = async () => {
            if (!active)
                return;
            await fn({ unpoll: unwatch });
            await (0,_wait_js__WEBPACK_IMPORTED_MODULE_0__/* .wait */ .u)(interval);
            poll();
        };
        poll();
    };
    watch();
    return unwatch;
}
//# sourceMappingURL=poll.js.map

/***/ }),

/***/ 5664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ createBatchScheduler)
/* harmony export */ });
const schedulerCache = /*#__PURE__*/ new Map();
/** @internal */
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, sort, }) {
    const exec = async () => {
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args }) => args);
        if (args.length === 0)
            return;
        fn(args)
            .then((data) => {
            if (sort && Array.isArray(data))
                data.sort(sort);
            for (let i = 0; i < scheduler.length; i++) {
                const { pendingPromise } = scheduler[i];
                pendingPromise.resolve?.([data[i], data]);
            }
        })
            .catch((err) => {
            for (let i = 0; i < scheduler.length; i++) {
                const { pendingPromise } = scheduler[i];
                pendingPromise.reject?.(err);
            }
        });
    };
    const flush = () => schedulerCache.delete(id);
    const getBatchedArgs = () => getScheduler().map(({ args }) => args);
    const getScheduler = () => schedulerCache.get(id) || [];
    const setScheduler = (item) => schedulerCache.set(id, [...getScheduler(), item]);
    return {
        flush,
        async schedule(args) {
            const pendingPromise = {};
            const promise = new Promise((resolve, reject) => {
                pendingPromise.resolve = resolve;
                pendingPromise.reject = reject;
            });
            const split = shouldSplitBatch?.([...getBatchedArgs(), args]);
            if (split)
                exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({ args, pendingPromise });
                return promise;
            }
            setScheduler({ args, pendingPromise });
            setTimeout(exec, wait);
            return promise;
        },
    };
}
//# sourceMappingURL=createBatchScheduler.js.map

/***/ }),

/***/ 2231:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nT: () => (/* binding */ withCache)
/* harmony export */ });
/* unused harmony exports promiseCache, responseCache, getCache */
/** @internal */
const promiseCache = /*#__PURE__*/ new Map();
/** @internal */
const responseCache = /*#__PURE__*/ new Map();
function getCache(cacheKey) {
    const buildCache = (cacheKey, cache) => ({
        clear: () => cache.delete(cacheKey),
        get: () => cache.get(cacheKey),
        set: (data) => cache.set(cacheKey, data),
    });
    const promise = buildCache(cacheKey, promiseCache);
    const response = buildCache(cacheKey, responseCache);
    return {
        clear: () => {
            promise.clear();
            response.clear();
        },
        promise,
        response,
    };
}
/**
 * @description Returns the result of a given promise, and caches the result for
 * subsequent invocations against a provided cache key.
 */
async function withCache(fn, { cacheKey, cacheTime = Number.POSITIVE_INFINITY }) {
    const cache = getCache(cacheKey);
    // If a response exists in the cache, and it's not expired, return it
    // and do not invoke the promise.
    // If the max age is 0, the cache is disabled.
    const response = cache.response.get();
    if (response && cacheTime > 0) {
        const age = new Date().getTime() - response.created.getTime();
        if (age < cacheTime)
            return response.data;
    }
    let promise = cache.promise.get();
    if (!promise) {
        promise = fn();
        // Store the promise in the cache so that subsequent invocations
        // will wait for the same promise to resolve (deduping).
        cache.promise.set(promise);
    }
    try {
        const data = await promise;
        // Store the response in the cache so that subsequent invocations
        // will return the same response.
        cache.response.set({ created: new Date(), data });
        return data;
    }
    finally {
        // Clear the promise cache so that subsequent invocations will
        // invoke the promise again.
        cache.promise.clear();
    }
}
//# sourceMappingURL=withCache.js.map

/***/ }),

/***/ 210:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ withDedupe)
/* harmony export */ });
/* unused harmony export promiseCache */
/* harmony import */ var _lru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7146);

/** @internal */
const promiseCache = /*#__PURE__*/ new _lru_js__WEBPACK_IMPORTED_MODULE_0__/* .LruMap */ .A(8192);
/** Deduplicates in-flight promises. */
function withDedupe(fn, { enabled = true, id }) {
    if (!enabled || !id)
        return fn();
    if (promiseCache.get(id))
        return promiseCache.get(id);
    const promise = fn().finally(() => promiseCache.delete(id));
    promiseCache.set(id, promise);
    return promise;
}
//# sourceMappingURL=withDedupe.js.map

/***/ }),

/***/ 3279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ withRetry)
/* harmony export */ });
/* harmony import */ var _wait_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1422);

function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = () => true, } = {}) {
    return new Promise((resolve, reject) => {
        const attemptRetry = async ({ count = 0 } = {}) => {
            const retry = async ({ error }) => {
                const delay = typeof delay_ === 'function' ? delay_({ count, error }) : delay_;
                if (delay)
                    await (0,_wait_js__WEBPACK_IMPORTED_MODULE_0__/* .wait */ .u)(delay);
                attemptRetry({ count: count + 1 });
            };
            try {
                const data = await fn();
                resolve(data);
            }
            catch (err) {
                if (count < retryCount &&
                    (await shouldRetry({ count, error: err })))
                    return retry({ error: err });
                reject(err);
            }
        };
        attemptRetry();
    });
}
//# sourceMappingURL=withRetry.js.map

/***/ }),

/***/ 5494:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ withTimeout)
/* harmony export */ });
function withTimeout(fn, { errorInstance = new Error('timed out'), timeout, signal, }) {
    return new Promise((resolve, reject) => {
        ;
        (async () => {
            let timeoutId;
            try {
                const controller = new AbortController();
                if (timeout > 0) {
                    timeoutId = setTimeout(() => {
                        if (signal) {
                            controller.abort();
                        }
                        else {
                            reject(errorInstance);
                        }
                    }, timeout); // need to cast because bun globals.d.ts overrides @types/node
                }
                resolve(await fn({ signal: controller?.signal || null }));
            }
            catch (err) {
                if (err?.name === 'AbortError')
                    reject(errorInstance);
                reject(err);
            }
            finally {
                clearTimeout(timeoutId);
            }
        })();
    });
}
//# sourceMappingURL=withTimeout.js.map

/***/ }),

/***/ 5600:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BD: () => (/* binding */ bytesRegex),
/* harmony export */   Ge: () => (/* binding */ integerRegex)
/* harmony export */ });
/* unused harmony export arrayRegex */
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
// `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
// https://regexr.com/6va55
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
// `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
// https://regexr.com/6v8hp
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
//# sourceMappingURL=regex.js.map

/***/ }),

/***/ 9967:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ getHttpRpcClient)
/* harmony export */ });
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1788);
/* harmony import */ var _promise_withTimeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5494);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6798);
/* harmony import */ var _id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4374);




function getHttpRpcClient(url, options = {}) {
    return {
        async request(params) {
            const { body, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 10_000, } = params;
            const fetchOptions = {
                ...(options.fetchOptions ?? {}),
                ...(params.fetchOptions ?? {}),
            };
            const { headers, method, signal: signal_ } = fetchOptions;
            try {
                const response = await (0,_promise_withTimeout_js__WEBPACK_IMPORTED_MODULE_0__/* .withTimeout */ .w)(async ({ signal }) => {
                    const init = {
                        ...fetchOptions,
                        body: Array.isArray(body)
                            ? (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__/* .stringify */ .A)(body.map((body) => ({
                                jsonrpc: '2.0',
                                id: body.id ?? _id_js__WEBPACK_IMPORTED_MODULE_2__/* .idCache */ .q.take(),
                                ...body,
                            })))
                            : (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__/* .stringify */ .A)({
                                jsonrpc: '2.0',
                                id: body.id ?? _id_js__WEBPACK_IMPORTED_MODULE_2__/* .idCache */ .q.take(),
                                ...body,
                            }),
                        headers: {
                            'Content-Type': 'application/json',
                            ...headers,
                        },
                        method: method || 'POST',
                        signal: signal_ || (timeout > 0 ? signal : null),
                    };
                    const request = new Request(url, init);
                    if (onRequest)
                        await onRequest(request);
                    const response = await fetch(url, init);
                    return response;
                }, {
                    errorInstance: new _errors_request_js__WEBPACK_IMPORTED_MODULE_3__/* .TimeoutError */ .MU({ body, url }),
                    timeout,
                    signal: true,
                });
                if (onResponse)
                    await onResponse(response);
                let data;
                if (response.headers.get('Content-Type')?.startsWith('application/json'))
                    data = await response.json();
                else {
                    data = await response.text();
                    data = JSON.parse(data || '{}');
                }
                if (!response.ok) {
                    throw new _errors_request_js__WEBPACK_IMPORTED_MODULE_3__/* .HttpRequestError */ .Ci({
                        body,
                        details: (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__/* .stringify */ .A)(data.error) || response.statusText,
                        headers: response.headers,
                        status: response.status,
                        url,
                    });
                }
                return data;
            }
            catch (err) {
                if (err instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_3__/* .HttpRequestError */ .Ci)
                    throw err;
                if (err instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_3__/* .TimeoutError */ .MU)
                    throw err;
                throw new _errors_request_js__WEBPACK_IMPORTED_MODULE_3__/* .HttpRequestError */ .Ci({
                    body,
                    cause: err,
                    url,
                });
            }
        },
    };
}
//# sourceMappingURL=http.js.map

/***/ }),

/***/ 4374:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ idCache)
/* harmony export */ });
function createIdStore() {
    return {
        current: 0,
        take() {
            return this.current++;
        },
        reset() {
            this.current = 0;
        },
    };
}
const idCache = /*#__PURE__*/ createIdStore();
//# sourceMappingURL=id.js.map

/***/ }),

/***/ 8013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ hashMessage)
/* harmony export */ });
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3387);
/* harmony import */ var _toPrefixedMessage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7213);


function hashMessage(message, to_) {
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .S)((0,_toPrefixedMessage_js__WEBPACK_IMPORTED_MODULE_1__/* .toPrefixedMessage */ .E)(message), to_);
}
//# sourceMappingURL=hashMessage.js.map

/***/ }),

/***/ 5830:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zh: () => (/* binding */ hashTypedData)
/* harmony export */ });
/* unused harmony exports hashDomain, hashStruct, encodeType */
/* harmony import */ var _abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3406);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5074);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4031);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3387);
/* harmony import */ var _typedData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3847);
// Implementation forked and adapted from https://github.com/MetaMask/eth-sig-util/blob/main/src/sign-typed-data.ts





function hashTypedData(parameters) {
    const { domain = {}, message, primaryType, } = parameters;
    const types = {
        EIP712Domain: (0,_typedData_js__WEBPACK_IMPORTED_MODULE_0__/* .getTypesForEIP712Domain */ .H4)({ domain }),
        ...parameters.types,
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    (0,_typedData_js__WEBPACK_IMPORTED_MODULE_0__/* .validateTypedData */ .$$)({
        domain,
        message,
        primaryType,
        types,
    });
    const parts = ['0x1901'];
    if (domain)
        parts.push(hashDomain({
            domain,
            types: types,
        }));
    if (primaryType !== 'EIP712Domain')
        parts.push(hashStruct({
            data: message,
            primaryType,
            types: types,
        }));
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .S)((0,_data_concat_js__WEBPACK_IMPORTED_MODULE_2__/* .concat */ .xW)(parts));
}
function hashDomain({ domain, types, }) {
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types,
    });
}
function hashStruct({ data, primaryType, types, }) {
    const encoded = encodeData({
        data,
        primaryType,
        types,
    });
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .S)(encoded);
}
function encodeData({ data, primaryType, types, }) {
    const encodedTypes = [{ type: 'bytes32' }];
    const encodedValues = [hashType({ primaryType, types })];
    for (const field of types[primaryType]) {
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name],
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .encodeAbiParameters */ .h)(encodedTypes, encodedValues);
}
function hashType({ primaryType, types, }) {
    const encodedHashType = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .toHex */ .nj)(encodeType({ primaryType, types }));
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .S)(encodedHashType);
}
function encodeType({ primaryType, types, }) {
    let result = '';
    const unsortedDeps = findTypeDependencies({ primaryType, types });
    unsortedDeps.delete(primaryType);
    const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
    for (const type of deps) {
        result += `${type}(${types[type]
            .map(({ name, type: t }) => `${t} ${name}`)
            .join(',')})`;
    }
    return result;
}
function findTypeDependencies({ primaryType: primaryType_, types, }, results = new Set()) {
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]) {
        findTypeDependencies({ primaryType: field.type, types }, results);
    }
    return results;
}
function encodeField({ types, name, type, value, }) {
    if (types[type] !== undefined) {
        return [
            { type: 'bytes32' },
            (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .S)(encodeData({ data: value, primaryType: type, types })),
        ];
    }
    if (type === 'bytes') {
        const prepend = value.length % 2 ? '0' : '';
        value = `0x${prepend + value.slice(2)}`;
        return [{ type: 'bytes32' }, (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .S)(value)];
    }
    if (type === 'string')
        return [{ type: 'bytes32' }, (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .S)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .toHex */ .nj)(value))];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item) => encodeField({
            name,
            type: parsedType,
            types,
            value: item,
        }));
        return [
            { type: 'bytes32' },
            (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .S)((0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .encodeAbiParameters */ .h)(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v))),
        ];
    }
    return [{ type }, value];
}
//# sourceMappingURL=hashTypedData.js.map

/***/ }),

/***/ 8485:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ isErc6492Signature)
/* harmony export */ });
/* harmony import */ var _constants_bytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1192);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2174);


/** Whether or not the signature is an ERC-6492 formatted signature. */
function isErc6492Signature(signature) {
    return (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_0__/* .sliceHex */ .iN)(signature, -32) === _constants_bytes_js__WEBPACK_IMPORTED_MODULE_1__/* .erc6492MagicBytes */ .I;
}
//# sourceMappingURL=isErc6492Signature.js.map

/***/ }),

/***/ 2092:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ recoverAddress)
/* harmony export */ });
/* harmony import */ var _accounts_utils_publicKeyToAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9465);
/* harmony import */ var _recoverPublicKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4016);


async function recoverAddress({ hash, signature, }) {
    return (0,_accounts_utils_publicKeyToAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .publicKeyToAddress */ .M)(await (0,_recoverPublicKey_js__WEBPACK_IMPORTED_MODULE_1__/* .recoverPublicKey */ .j)({ hash: hash, signature }));
}
//# sourceMappingURL=recoverAddress.js.map

/***/ }),

/***/ 4016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ recoverPublicKey)
/* harmony export */ });
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);
/* harmony import */ var _encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1732);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);



async function recoverPublicKey({ hash, signature, }) {
    const hashHex = (0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(hash) ? hash : (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .toHex */ .nj)(hash);
    const { secp256k1 } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3887));
    const signature_ = (() => {
        // typeof signature: `Signature`
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) {
            const { r, s, v, yParity } = signature;
            const yParityOrV = Number(yParity ?? v);
            const recoveryBit = toRecoveryBit(yParityOrV);
            return new secp256k1.Signature((0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_2__/* .hexToBigInt */ .uU)(r), (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_2__/* .hexToBigInt */ .uU)(s)).addRecoveryBit(recoveryBit);
        }
        // typeof signature: `Hex | ByteArray`
        const signatureHex = (0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .q)(signature) ? signature : (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .toHex */ .nj)(signature);
        const yParityOrV = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_2__/* .hexToNumber */ .ME)(`0x${signatureHex.slice(130)}`);
        const recoveryBit = toRecoveryBit(yParityOrV);
        return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
    })();
    const publicKey = signature_
        .recoverPublicKey(hashHex.substring(2))
        .toHex(false);
    return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
    if (yParityOrV === 0 || yParityOrV === 1)
        return yParityOrV;
    if (yParityOrV === 27)
        return 0;
    if (yParityOrV === 28)
        return 1;
    throw new Error('Invalid yParityOrV value');
}
//# sourceMappingURL=recoverPublicKey.js.map

/***/ }),

/***/ 4829:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ serializeErc6492Signature)
/* harmony export */ });
/* harmony import */ var _constants_bytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1192);
/* harmony import */ var _abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3406);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5074);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6109);




/**
 * @description Serializes a ERC-6492 flavoured signature into hex format.
 *
 * @param signature ERC-6492 signature in object format.
 * @returns ERC-6492 signature in hex format.
 *
 * @example
 * serializeSignature({ address: '0x...', data: '0x...', signature: '0x...' })
 * // '0x000000000000000000000000cafebabecafebabecafebabecafebabecafebabe000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000004deadbeef000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a461f509887bd19e312c0c58467ce8ff8e300d3c1a90b608a760c5b80318eaf15fe57c96f9175d6cd4daad4663763baa7e78836e067d0163e9a2ccf2ff753f5b1b000000000000000000000000000000000000000000000000000000000000006492649264926492649264926492649264926492649264926492649264926492'
 */
function serializeErc6492Signature(parameters) {
    const { address, data, signature, to = 'hex' } = parameters;
    const signature_ = (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_0__/* .concatHex */ .aP)([
        (0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeAbiParameters */ .h)([{ type: 'address' }, { type: 'bytes' }, { type: 'bytes' }], [address, data, signature]),
        _constants_bytes_js__WEBPACK_IMPORTED_MODULE_2__/* .erc6492MagicBytes */ .I,
    ]);
    if (to === 'hex')
        return signature_;
    return (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_3__/* .hexToBytes */ .aT)(signature_);
}
//# sourceMappingURL=serializeErc6492Signature.js.map

/***/ }),

/***/ 8144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ serializeSignature)
/* harmony export */ });
/* harmony import */ var _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3887);
/* harmony import */ var _encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1732);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);



/**
 * @description Converts a signature into hex format.
 *
 * @param signature The signature to convert.
 * @returns The signature in hex format.
 *
 * @example
 * serializeSignature({
 *   r: '0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf',
 *   s: '0x4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8',
 *   yParity: 1
 * })
 * // "0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c"
 */
function serializeSignature({ r, s, to = 'hex', v, yParity, }) {
    const yParity_ = (() => {
        if (yParity === 0 || yParity === 1)
            return yParity;
        if (v && (v === 27n || v === 28n || v >= 35n))
            return v % 2n === 0n ? 1 : 0;
        throw new Error('Invalid `v` or `yParity` value');
    })();
    const signature = `0x${new _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.Signature((0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__/* .hexToBigInt */ .uU)(r), (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__/* .hexToBigInt */ .uU)(s)).toCompactHex()}${yParity_ === 0 ? '1b' : '1c'}`;
    if (to === 'hex')
        return signature;
    return (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .hexToBytes */ .aT)(signature);
}
//# sourceMappingURL=serializeSignature.js.map

/***/ }),

/***/ 7213:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ toPrefixedMessage)
/* harmony export */ });
/* harmony import */ var _constants_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8553);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5074);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6615);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4031);




function toPrefixedMessage(message_) {
    const message = (() => {
        if (typeof message_ === 'string')
            return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .stringToHex */ .i3)(message_);
        if (typeof message_.raw === 'string')
            return message_.raw;
        return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesToHex */ .My)(message_.raw);
    })();
    const prefix = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__/* .stringToHex */ .i3)(`${_constants_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .presignMessagePrefix */ .K}${(0,_data_size_js__WEBPACK_IMPORTED_MODULE_2__/* .size */ .E)(message)}`);
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concat */ .xW)([prefix, message]);
}
//# sourceMappingURL=toPrefixedMessage.js.map

/***/ }),

/***/ 9596:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ parseSiweMessage)
/* harmony export */ });
/**
 * @description Parses EIP-4361 formatted message into message fields object.
 *
 * @see https://eips.ethereum.org/EIPS/eip-4361
 *
 * @returns EIP-4361 fields object
 */
function parseSiweMessage(message) {
    const { scheme, statement, ...prefix } = (message.match(prefixRegex)
        ?.groups ?? {});
    const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = (message.match(suffixRegex)?.groups ?? {});
    const resources = message.split('Resources:')[1]?.split('\n- ').slice(1);
    return {
        ...prefix,
        ...suffix,
        ...(chainId ? { chainId: Number(chainId) } : {}),
        ...(expirationTime ? { expirationTime: new Date(expirationTime) } : {}),
        ...(issuedAt ? { issuedAt: new Date(issuedAt) } : {}),
        ...(notBefore ? { notBefore: new Date(notBefore) } : {}),
        ...(requestId ? { requestId } : {}),
        ...(resources ? { resources } : {}),
        ...(scheme ? { scheme } : {}),
        ...(statement ? { statement } : {}),
    };
}
// https://regexr.com/80gdj
const prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
// https://regexr.com/80gf9
const suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
//# sourceMappingURL=parseSiweMessage.js.map

/***/ }),

/***/ 5265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ validateSiweMessage)
/* harmony export */ });
/* harmony import */ var _address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2382);

/**
 * @description Validates EIP-4361 message.
 *
 * @see https://eips.ethereum.org/EIPS/eip-4361
 */
function validateSiweMessage(parameters) {
    const { address, domain, message, nonce, scheme, time = new Date(), } = parameters;
    if (domain && message.domain !== domain)
        return false;
    if (nonce && message.nonce !== nonce)
        return false;
    if (scheme && message.scheme !== scheme)
        return false;
    if (message.expirationTime && time >= message.expirationTime)
        return false;
    if (message.notBefore && time < message.notBefore)
        return false;
    try {
        if (!message.address)
            return false;
        if (address && !(0,_address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_0__/* .isAddressEqual */ .h)(message.address, address))
            return false;
    }
    catch {
        return false;
    }
    return true;
}
//# sourceMappingURL=validateSiweMessage.js.map

/***/ }),

/***/ 1106:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   yH: () => (/* binding */ serializeStateOverride)
/* harmony export */ });
/* unused harmony exports serializeStateMapping, serializeAccountStateOverride */
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8149);
/* harmony import */ var _errors_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1549);
/* harmony import */ var _errors_stateOverride_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(836);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1108);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);





/** @internal */
function serializeStateMapping(stateMapping) {
    if (!stateMapping || stateMapping.length === 0)
        return undefined;
    return stateMapping.reduce((acc, { slot, value }) => {
        if (slot.length !== 66)
            throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidBytesLengthError */ .NV({
                size: slot.length,
                targetSize: 66,
                type: 'hex',
            });
        if (value.length !== 66)
            throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidBytesLengthError */ .NV({
                size: value.length,
                targetSize: 66,
                type: 'hex',
            });
        acc[slot] = value;
        return acc;
    }, {});
}
/** @internal */
function serializeAccountStateOverride(parameters) {
    const { balance, nonce, state, stateDiff, code } = parameters;
    const rpcAccountStateOverride = {};
    if (code !== undefined)
        rpcAccountStateOverride.code = code;
    if (balance !== undefined)
        rpcAccountStateOverride.balance = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(balance);
    if (nonce !== undefined)
        rpcAccountStateOverride.nonce = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(nonce);
    if (state !== undefined)
        rpcAccountStateOverride.state = serializeStateMapping(state);
    if (stateDiff !== undefined) {
        if (rpcAccountStateOverride.state)
            throw new _errors_stateOverride_js__WEBPACK_IMPORTED_MODULE_2__/* .StateAssignmentConflictError */ .ft();
        rpcAccountStateOverride.stateDiff = serializeStateMapping(stateDiff);
    }
    return rpcAccountStateOverride;
}
/** @internal */
function serializeStateOverride(parameters) {
    if (!parameters)
        return undefined;
    const rpcStateOverride = {};
    for (const { address, ...accountState } of parameters) {
        if (!(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .P)(address, { strict: false }))
            throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_4__/* .InvalidAddressError */ .M({ address });
        if (rpcStateOverride[address])
            throw new _errors_stateOverride_js__WEBPACK_IMPORTED_MODULE_2__/* .AccountStateConflictError */ .Hi({ address: address });
        rpcStateOverride[address] = serializeAccountStateOverride(accountState);
    }
    return rpcStateOverride;
}
//# sourceMappingURL=stateOverride.js.map

/***/ }),

/***/ 6798:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ stringify)
/* harmony export */ });
const stringify = (value, replacer, space) => JSON.stringify(value, (key, value_) => {
    const value = typeof value_ === 'bigint' ? value_.toString() : value_;
    return typeof replacer === 'function' ? replacer(key, value) : value;
}, space);
//# sourceMappingURL=stringify.js.map

/***/ }),

/***/ 2335:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ assertRequest)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2428);
/* harmony import */ var _constants_number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4618);
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8149);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1905);
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7121);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1108);






function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to, } = args;
    const account = account_ ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAccount */ .J)(account_) : undefined;
    if (account && !(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .P)(account.address))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_2__/* .InvalidAddressError */ .M({ address: account.address });
    if (to && !(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .P)(to))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_2__/* .InvalidAddressError */ .M({ address: to });
    if (typeof gasPrice !== 'undefined' &&
        (typeof maxFeePerGas !== 'undefined' ||
            typeof maxPriorityFeePerGas !== 'undefined'))
        throw new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_3__/* .FeeConflictError */ .n3();
    if (maxFeePerGas && maxFeePerGas > _constants_number_js__WEBPACK_IMPORTED_MODULE_4__/* .maxUint256 */ .Ao)
        throw new _errors_node_js__WEBPACK_IMPORTED_MODULE_5__/* .FeeCapTooHighError */ .BG({ maxFeePerGas });
    if (maxPriorityFeePerGas &&
        maxFeePerGas &&
        maxPriorityFeePerGas > maxFeePerGas)
        throw new _errors_node_js__WEBPACK_IMPORTED_MODULE_5__/* .TipAboveFeeCapError */ .lN({ maxFeePerGas, maxPriorityFeePerGas });
}
//# sourceMappingURL=assertRequest.js.map

/***/ }),

/***/ 1134:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getTransactionType)
/* harmony export */ });
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7121);

function getTransactionType(transaction) {
    if (transaction.type)
        return transaction.type;
    if (typeof transaction.authorizationList !== 'undefined')
        return 'eip7702';
    if (typeof transaction.blobs !== 'undefined' ||
        typeof transaction.blobVersionedHashes !== 'undefined' ||
        typeof transaction.maxFeePerBlobGas !== 'undefined' ||
        typeof transaction.sidecars !== 'undefined')
        return 'eip4844';
    if (typeof transaction.maxFeePerGas !== 'undefined' ||
        typeof transaction.maxPriorityFeePerGas !== 'undefined') {
        return 'eip1559';
    }
    if (typeof transaction.gasPrice !== 'undefined') {
        if (typeof transaction.accessList !== 'undefined')
            return 'eip2930';
        return 'legacy';
    }
    throw new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_0__/* .InvalidSerializableTransactionError */ .Vg({ transaction });
}
//# sourceMappingURL=getTransactionType.js.map

/***/ }),

/***/ 3847:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$: () => (/* binding */ validateTypedData),
/* harmony export */   H4: () => (/* binding */ getTypesForEIP712Domain)
/* harmony export */ });
/* unused harmony exports serializeTypedData, domainSeparator */
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(135);
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8149);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1108);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6615);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5600);








function serializeTypedData(parameters) {
    const { domain: domain_, message: message_, primaryType, types, } = parameters;
    const normalizeData = (struct, data_) => {
        const data = { ...data_ };
        for (const param of struct) {
            const { name, type } = param;
            if (type === 'address')
                data[name] = data[name].toLowerCase();
        }
        return data;
    };
    const domain = (() => {
        if (!types.EIP712Domain)
            return {};
        if (!domain_)
            return {};
        return normalizeData(types.EIP712Domain, domain_);
    })();
    const message = (() => {
        if (primaryType === 'EIP712Domain')
            return undefined;
        return normalizeData(types[primaryType], message_);
    })();
    return stringify({ domain, message, primaryType, types });
}
function validateTypedData(parameters) {
    const { domain, message, primaryType, types } = parameters;
    const validateData = (struct, data) => {
        for (const param of struct) {
            const { name, type } = param;
            const value = data[name];
            const integerMatch = type.match(_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .integerRegex */ .Ge);
            if (integerMatch &&
                (typeof value === 'number' || typeof value === 'bigint')) {
                const [_type, base, size_] = integerMatch;
                // If number cannot be cast to a sized hex value, it is out of range
                // and will throw.
                (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(value, {
                    signed: base === 'int',
                    size: Number.parseInt(size_) / 8,
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .P)(value))
                throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_3__/* .InvalidAddressError */ .M({ address: value });
            const bytesMatch = type.match(_regex_js__WEBPACK_IMPORTED_MODULE_0__/* .bytesRegex */ .BD);
            if (bytesMatch) {
                const [_type, size_] = bytesMatch;
                if (size_ && (0,_data_size_js__WEBPACK_IMPORTED_MODULE_4__/* .size */ .E)(value) !== Number.parseInt(size_))
                    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_5__/* .BytesSizeMismatchError */ .BI({
                        expectedSize: Number.parseInt(size_),
                        givenSize: (0,_data_size_js__WEBPACK_IMPORTED_MODULE_4__/* .size */ .E)(value),
                    });
            }
            const struct = types[type];
            if (struct)
                validateData(struct, value);
        }
    };
    // Validate domain types.
    if (types.EIP712Domain && domain)
        validateData(types.EIP712Domain, domain);
    // Validate message types.
    if (primaryType !== 'EIP712Domain')
        validateData(types[primaryType], message);
}
function getTypesForEIP712Domain({ domain, }) {
    return [
        typeof domain?.name === 'string' && { name: 'name', type: 'string' },
        domain?.version && { name: 'version', type: 'string' },
        typeof domain?.chainId === 'number' && {
            name: 'chainId',
            type: 'uint256',
        },
        domain?.verifyingContract && {
            name: 'verifyingContract',
            type: 'address',
        },
        domain?.salt && { name: 'salt', type: 'bytes32' },
    ].filter(Boolean);
}
function domainSeparator({ domain }) {
    return hashDomain({
        domain,
        types: {
            EIP712Domain: getTypesForEIP712Domain({ domain }),
        },
    });
}
//# sourceMappingURL=typedData.js.map

/***/ }),

/***/ 1833:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ uid)
/* harmony export */ });
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for (let i = 0; i < size; i++) {
            buffer += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
}
//# sourceMappingURL=uid.js.map

/***/ }),

/***/ 9551:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ formatEther)
/* harmony export */ });
/* harmony import */ var _constants_unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _formatUnits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1404);


/**
 * Converts numerical wei to a string representation of ether.
 *
 * - Docs: https://viem.sh/docs/utilities/formatEther
 *
 * @example
 * import { formatEther } from 'viem'
 *
 * formatEther(1000000000000000000n)
 * // '1'
 */
function formatEther(wei, unit = 'wei') {
    return (0,_formatUnits_js__WEBPACK_IMPORTED_MODULE_0__/* .formatUnits */ .J)(wei, _constants_unit_js__WEBPACK_IMPORTED_MODULE_1__/* .etherUnits */ .eL[unit]);
}
//# sourceMappingURL=formatEther.js.map

/***/ }),

/***/ 5631:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ formatGwei)
/* harmony export */ });
/* harmony import */ var _constants_unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _formatUnits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1404);


/**
 * Converts numerical wei to a string representation of gwei.
 *
 * - Docs: https://viem.sh/docs/utilities/formatGwei
 *
 * @example
 * import { formatGwei } from 'viem'
 *
 * formatGwei(1000000000n)
 * // '1'
 */
function formatGwei(wei, unit = 'wei') {
    return (0,_formatUnits_js__WEBPACK_IMPORTED_MODULE_0__/* .formatUnits */ .J)(wei, _constants_unit_js__WEBPACK_IMPORTED_MODULE_1__/* .gweiUnits */ .sz[unit]);
}
//# sourceMappingURL=formatGwei.js.map

/***/ }),

/***/ 1404:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ formatUnits)
/* harmony export */ });
/**
 *  Divides a number by a given exponent of base 10 (10exponent), and formats it into a string representation of the number..
 *
 * - Docs: https://viem.sh/docs/utilities/formatUnits
 *
 * @example
 * import { formatUnits } from 'viem'
 *
 * formatUnits(420000000000n, 9)
 * // '420'
 */
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith('-');
    if (negative)
        display = display.slice(1);
    display = display.padStart(decimals, '0');
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals),
    ];
    fraction = fraction.replace(/(0+)$/, '');
    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;
}
//# sourceMappingURL=formatUnits.js.map

/***/ }),

/***/ 1422:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ wait)
/* harmony export */ });
async function wait(time) {
    return new Promise((res) => setTimeout(res, time));
}
//# sourceMappingURL=wait.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ethWarsaw2024:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			230: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkethWarsaw2024"] = self["webpackChunkethWarsaw2024"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7084);

var injectScript = function injectScript() {
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL('webpage-script.js');
  script.dataset.testid = 'idriss-injected-script';
  script.id = chrome.runtime.id;
  document.body.append(script);
};
var bridgeCommunication = function bridgeCommunication() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (0,commands__WEBPACK_IMPORTED_MODULE_0__/* .onWindowMessage */ .lb)(commands__WEBPACK_IMPORTED_MODULE_0__/* .COMMAND_BUS_REQUEST_MESSAGE */ .rx, function (command) {
    chrome.runtime.sendMessage({
      type: commands__WEBPACK_IMPORTED_MODULE_0__/* .COMMAND_BUS_REQUEST_MESSAGE */ .rx,
      data: command
    }, function (response) {
      var messageDetail = {
        response: response,
        commandId: command.id
      };
      var message = {
        type: commands__WEBPACK_IMPORTED_MODULE_0__/* .COMMAND_BUS_RESPONSE_MESSAGE */ .Rl,
        detail: messageDetail
      };
      window.postMessage(message);
    });
  });
};
injectScript();
bridgeCommunication();
/******/ })()
;
//# sourceMappingURL=content-script.js.map