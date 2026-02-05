/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/Licerepo.js"
/*!*************************!*\
  !*** ./bin/Licerepo.js ***!
  \*************************/
(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LicerepoNpm = __webpack_require__(/*! ./LicerepoNpm */ "./bin/LicerepoNpm.js");
var LicerepoComposer = __webpack_require__(/*! ./LicerepoComposer */ "./bin/LicerepoComposer.js");
var LicerepoYaml = __webpack_require__(/*! ./LicerepoYaml */ "./bin/LicerepoYaml.js");
var Licerepo = function () {
  function Licerepo() {
    _classCallCheck(this, Licerepo);
  }
  return _createClass(Licerepo, [{
    key: "fetchNpm",
    value: function () {
      var _fetchNpm = _asyncToGenerator(_regenerator().m(function _callee(packageName) {
        var version,
          npm,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              version = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'latest';
              console.log(packageName);
              npm = new LicerepoNpm();
              _context.n = 1;
              return npm.fetch(packageName, version);
            case 1:
              return _context.a(2, _context.v);
          }
        }, _callee);
      }));
      function fetchNpm(_x) {
        return _fetchNpm.apply(this, arguments);
      }
      return fetchNpm;
    }()
  }, {
    key: "fetchYaml",
    value: function () {
      var _fetchYaml = _asyncToGenerator(_regenerator().m(function _callee2(packageName) {
        var version,
          _args2 = arguments;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              version = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'latest';
              _context2.n = 1;
              return new LicerepoYaml().fetch(packageName, version);
            case 1:
              return _context2.a(2, _context2.v);
          }
        }, _callee2);
      }));
      function fetchYaml(_x2) {
        return _fetchYaml.apply(this, arguments);
      }
      return fetchYaml;
    }()
  }, {
    key: "fetchComposer",
    value: function () {
      var _fetchComposer = _asyncToGenerator(_regenerator().m(function _callee3(packageName) {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return new LicerepoComposer().fetch(packageName);
            case 1:
              return _context3.a(2, _context3.v);
          }
        }, _callee3);
      }));
      function fetchComposer(_x3) {
        return _fetchComposer.apply(this, arguments);
      }
      return fetchComposer;
    }()
  }]);
}();
module.exports = Licerepo;

/***/ },

/***/ "./bin/LicerepoComposer.js"
/*!*********************************!*\
  !*** ./bin/LicerepoComposer.js ***!
  \*********************************/
(module) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var LicerepoComposer = _createClass(function LicerepoComposer() {
  _classCallCheck(this, LicerepoComposer);
});
module.exports = LicerepoComposer;

/***/ },

/***/ "./bin/LicerepoNpm.js"
/*!****************************!*\
  !*** ./bin/LicerepoNpm.js ***!
  \****************************/
(module) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LicerepoNpm = function () {
  function LicerepoNpm() {
    _classCallCheck(this, LicerepoNpm);
    _defineProperty(this, "BASE_URL", 'https://registry.npmjs.org/');
  }
  return _createClass(LicerepoNpm, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(function () {
      var _ref = _asyncToGenerator(_regenerator().m(function _callee(packageName) {
        var version,
          _pkg$distTags,
          _pkg$distTags2,
          _pkg$securityAdvisori,
          _pkg$repository,
          _pkg$time,
          _pkg$time2,
          _pkg$maintainers,
          encodedName,
          url,
          res,
          pkg,
          versionData,
          latestVersion,
          vulnerabilities,
          dependencies,
          devDependencies,
          peerDependencies,
          depList,
          _i,
          _Object$entries,
          _Object$entries$_i,
          name,
          range,
          _i2,
          _Object$entries2,
          _Object$entries2$_i,
          _name,
          _range,
          _i3,
          _Object$entries3,
          _Object$entries3$_i,
          _name2,
          _range2,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              version = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'latest';
              this.packageName = packageName;
              this.version = version;
              if (this._validatePackageName(packageName).valid) {
                _context.n = 1;
                break;
              }
              throw new Error("Invalid package name: ".concat(this.packageName, " \u2014 ").concat(this._validatePackageName(this.packageName).reason));
            case 1:
              if (this._validateVersion(version).valid) {
                _context.n = 2;
                break;
              }
              throw new Error("Invalid package version: ".concat(this.version, " \u2014 ").concat(this._validateVersion(this.version).reason));
            case 2:
              _context.p = 2;
              encodedName = encodeURIComponent(this.packageName);
              url = this.version === 'latest' ? "".concat(this.BASE_URL, "/").concat(encodedName) : "".concat(this.BASE_URL, "/").concat(encodedName, "/").concat(this.version);
              _context.n = 3;
              return fetch(url, {
                headers: {
                  'Accept': 'application/json'
                }
              });
            case 3:
              res = _context.v;
              if (res.ok) {
                _context.n = 5;
                break;
              }
              if (!(res.status === 404)) {
                _context.n = 4;
                break;
              }
              return _context.a(2, {
                error: "Package '".concat(this.packageName, "' not found.")
              });
            case 4:
              throw new Error("HTTP ".concat(res.status, ". [").concat(res.statusText, "]"));
            case 5:
              _context.n = 6;
              return res.json();
            case 6:
              pkg = _context.v;
              versionData = this.version === 'latest' ? (_pkg$distTags = pkg['dist-tags']) !== null && _pkg$distTags !== void 0 && _pkg$distTags.latest ? pkg.versions[pkg['dist-tags'].latest] : pkg : pkg;
              latestVersion = this.version === 'latest' ? ((_pkg$distTags2 = pkg['dist-tags']) === null || _pkg$distTags2 === void 0 ? void 0 : _pkg$distTags2.latest) || 'unknown' : this.version;
              vulnerabilities = (pkg === null || pkg === void 0 || (_pkg$securityAdvisori = pkg.securityAdvisories) === null || _pkg$securityAdvisori === void 0 ? void 0 : _pkg$securityAdvisori.count) || 0;
              dependencies = versionData.dependencies || {};
              devDependencies = versionData.devDependencies || {};
              peerDependencies = versionData.peerDependencies || {};
              depList = [];
              for (_i = 0, _Object$entries = Object.entries(dependencies); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), name = _Object$entries$_i[0], range = _Object$entries$_i[1];
                depList.push({
                  name: name,
                  version: range,
                  type: 'dependency'
                });
              }
              for (_i2 = 0, _Object$entries2 = Object.entries(devDependencies); _i2 < _Object$entries2.length; _i2++) {
                _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), _name = _Object$entries2$_i[0], _range = _Object$entries2$_i[1];
                depList.push({
                  name: _name,
                  version: _range,
                  type: 'devDependency'
                });
              }
              for (_i3 = 0, _Object$entries3 = Object.entries(peerDependencies); _i3 < _Object$entries3.length; _i3++) {
                _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2), _name2 = _Object$entries3$_i[0], _range2 = _Object$entries3$_i[1];
                depList.push({
                  name: _name2,
                  version: _range2,
                  type: 'peerDependency'
                });
              }
              return _context.a(2, {
                name: pkg.name,
                version: latestVersion,
                description: pkg.description || null,
                license: this._normalizeLicense(pkg.license || pkg.licenses),
                homepage: pkg.homepage || null,
                repository: ((_pkg$repository = pkg.repository) === null || _pkg$repository === void 0 ? void 0 : _pkg$repository.url) || pkg.repository || null,
                deprecated: versionData !== null && versionData !== void 0 && versionData.deprecated ? true : false,
                deprecationMessage: (versionData === null || versionData === void 0 ? void 0 : versionData.deprecated) || null,
                lastPublished: ((_pkg$time = pkg.time) === null || _pkg$time === void 0 ? void 0 : _pkg$time[latestVersion]) || ((_pkg$time2 = pkg.time) === null || _pkg$time2 === void 0 ? void 0 : _pkg$time2.modified) || null,
                maintainers: ((_pkg$maintainers = pkg.maintainers) === null || _pkg$maintainers === void 0 ? void 0 : _pkg$maintainers.map(function (m) {
                  return m.name;
                })) || [],
                vulnerabilitiesCount: vulnerabilities,
                hasVulnerabilities: vulnerabilities > 0,
                dependencies: {
                  total: depList.length,
                  list: depList
                },
                error: null
              });
            case 7:
              _context.p = 7;
              _t = _context.v;
              return _context.a(2, {
                name: this.packageName,
                version: this.version,
                error: _t.message
              });
          }
        }, _callee, this, [[2, 7]]);
      }));
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "_normalizeLicense",
    value: function _normalizeLicense(licenseField) {
      if (!licenseField) return null;
      if (typeof licenseField === 'string') return licenseField;
      if (Array.isArray(licenseField)) {
        return licenseField.map(function (l) {
          return typeof l === 'string' ? l : l.type || l.url;
        }).filter(Boolean).join(' OR ');
      }
      if (licenseField.type) return licenseField.type;
      return null;
    }
  }, {
    key: "_validatePackageName",
    value: function _validatePackageName(name) {
      if (typeof name !== 'string') {
        return {
          valid: false,
          reason: 'Name must be a string'
        };
      }
      name = name.trim();
      if (name.length === 0) {
        return {
          valid: false,
          reason: 'Name cannot be empty'
        };
      }
      if (name.length > 214) {
        return {
          valid: false,
          reason: 'Name exceeds 214 characters'
        };
      }
      if (name !== name.toLowerCase()) {
        return {
          valid: false,
          reason: 'Name must be lowercase'
        };
      }
      if (name === 'node_modules' || name === 'favicon.ico') {
        return {
          valid: false,
          reason: 'Reserved package name'
        };
      }
      var scopedRegex = /^@[a-z0-9][a-z0-9-_]*\/[a-z0-9][a-z0-9-._]*$/;
      var unscopedRegex = /^[a-z0-9][a-z0-9-._]*$/;
      if (name.startsWith('@')) {
        if (!scopedRegex.test(name)) {
          return {
            valid: false,
            reason: 'Invalid scoped package name'
          };
        }
      } else {
        if (!unscopedRegex.test(name)) {
          return {
            valid: false,
            reason: 'Invalid package name format'
          };
        }
      }
      if (name.startsWith('.') || name.startsWith('_') || name.endsWith('.') || name.endsWith('_')) {
        return {
          valid: false,
          reason: 'Cannot start or end with . or _'
        };
      }
      return {
        valid: true
      };
    }
  }, {
    key: "_validateVersion",
    value: function _validateVersion(version) {
      if (typeof version !== 'string' || version.trim() === '') {
        return {
          valid: false,
          reason: 'Version must be a non-empty string.'
        };
      }
      var semver = '(0|[1-9]\\d*)\\.' + '(0|[1-9]\\d*)\\.' + '(0|[1-9]\\d*)' + '(?:-([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?' + '(?:\\+([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?';
      var range = new RegExp('^\\s*(' + '\\*|' + 'latest|' + '[~^]?' + semver + '|' + '(>=|<=|>|<)=?\\s*' + semver + '|' + semver.replace(/\\\.\\d+/g, '(?:\\.x|\\.\\*)') + ')(\\s+.*)?\\s*$');
      if (!range.test(version)) {
        return {
          valid: false,
          reason: 'Invalid npm version or range.'
        };
      }
      return {
        valid: true
      };
    }
  }]);
}();
module.exports = LicerepoNpm;

/***/ },

/***/ "./bin/LicerepoYaml.js"
/*!*****************************!*\
  !*** ./bin/LicerepoYaml.js ***!
  \*****************************/
(module) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LicerepoYaml = function () {
  function LicerepoYaml() {
    _classCallCheck(this, LicerepoYaml);
    _defineProperty(this, "BASE_URL", 'https://pub.dev/api/packages/');
  }
  return _createClass(LicerepoYaml, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(function () {
      var _ref = _asyncToGenerator(_regenerator().m(function _callee(packageName) {
        var version,
          _data$score,
          url,
          isDev,
          fetchUrl,
          res,
          data,
          latest,
          pubspec,
          dependencies,
          devDependencies,
          depList,
          _i,
          _Object$entries,
          _Object$entries$_i,
          name,
          constraint,
          versionRange,
          _i2,
          _Object$entries2,
          _Object$entries2$_i,
          _name,
          _constraint,
          _versionRange,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              version = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'latest';
              this.packageName = packageName;
              this.version = version;
              if (this._validatePackageName(packageName).valid) {
                _context.n = 1;
                break;
              }
              throw new Error("Invalid package name: ".concat(this.packageName, " \u2014 ").concat(this._validatePackageName(this.packageName).reason));
            case 1:
              if (!(version !== 'latest')) {
                _context.n = 2;
                break;
              }
              throw new Error("pub.dev fetch currently only supports version = 'latest'");
            case 2:
              _context.p = 2;
              url = "".concat(this.BASE_URL).concat(encodeURIComponent(this.packageName));
              isDev = "development" === 'development';
              fetchUrl = url;
              if (isDev) {
                fetchUrl = "https://corsproxy.io/?".concat(encodeURIComponent(url));
              }
              _context.n = 3;
              return fetch(fetchUrl, {
                headers: {
                  'Accept': 'application/json'
                }
              });
            case 3:
              res = _context.v;
              if (res.ok) {
                _context.n = 5;
                break;
              }
              if (!(res.status === 404)) {
                _context.n = 4;
                break;
              }
              return _context.a(2, {
                error: "Package '".concat(this.packageName, "' not found.")
              });
            case 4:
              throw new Error("HTTP ".concat(res.status, ". [").concat(res.statusText, "]"));
            case 5:
              _context.n = 6;
              return res.json();
            case 6:
              data = _context.v;
              latest = data.latest;
              pubspec = (latest === null || latest === void 0 ? void 0 : latest.pubspec) || {};
              dependencies = pubspec.dependencies || {};
              devDependencies = pubspec.dev_dependencies || {};
              depList = [];
              for (_i = 0, _Object$entries = Object.entries(dependencies); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), name = _Object$entries$_i[0], constraint = _Object$entries$_i[1];
                versionRange = typeof constraint === 'string' ? constraint : (constraint === null || constraint === void 0 ? void 0 : constraint.version) || null;
                depList.push({
                  name: name,
                  version: versionRange,
                  type: 'dependency'
                });
              }
              for (_i2 = 0, _Object$entries2 = Object.entries(devDependencies); _i2 < _Object$entries2.length; _i2++) {
                _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), _name = _Object$entries2$_i[0], _constraint = _Object$entries2$_i[1];
                _versionRange = typeof _constraint === 'string' ? _constraint : (_constraint === null || _constraint === void 0 ? void 0 : _constraint.version) || null;
                depList.push({
                  name: _name,
                  version: _versionRange,
                  type: 'dev_dependency'
                });
              }
              return _context.a(2, {
                name: data.name,
                version: latest.version,
                description: pubspec.description || null,
                license: pubspec.license || null,
                homepage: pubspec.homepage || pubspec.repository || null,
                repository: pubspec.repository || null,
                deprecated: !!latest.isDiscontinued,
                deprecationMessage: latest.isDiscontinued ? 'Package is discontinued' : null,
                lastPublished: latest.published || null,
                maintainers: data.publisher ? [data.publisher] : [],
                vulnerabilitiesCount: null,
                hasVulnerabilities: false,
                dependencies: {
                  total: depList.length,
                  list: depList
                },
                likes: data.likes || 0,
                popularity: data.popularity || 0,
                pubPoints: ((_data$score = data.score) === null || _data$score === void 0 ? void 0 : _data$score.grantedPoints) || null,
                error: null
              });
            case 7:
              _context.p = 7;
              _t = _context.v;
              return _context.a(2, {
                name: this.packageName,
                version: this.version,
                error: _t.message
              });
          }
        }, _callee, this, [[2, 7]]);
      }));
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "_validatePackageName",
    value: function _validatePackageName(name) {
      if (typeof name !== 'string') {
        return {
          valid: false,
          reason: 'Name must be a string'
        };
      }
      name = name.trim();
      if (name.length === 0) {
        return {
          valid: false,
          reason: 'Name cannot be empty'
        };
      }
      if (name.length > 100) {
        return {
          valid: false,
          reason: 'Name is too long (max ~100 characters)'
        };
      }
      var regex = /^[a-z0-9][a-z0-9_-]*[a-z0-9]$/;
      if (!regex.test(name)) {
        return {
          valid: false,
          reason: 'Name must contain only lowercase letters, numbers, underscores and hyphens, and must not start or end with hyphen/underscore'
        };
      }
      return {
        valid: true
      };
    }
  }, {
    key: "_validateVersion",
    value: function _validateVersion(version) {
      if (version === 'latest') {
        return {
          valid: true
        };
      }
      return {
        valid: false,
        reason: 'pub.dev fetch only supports version = "latest"'
      };
    }
  }]);
}();
module.exports = LicerepoYaml;

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./bin/LicerepoNpm.js");
/******/ 	__webpack_require__("./bin/LicerepoComposer.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./bin/Licerepo.js");
/******/ 	
/******/ })()
;