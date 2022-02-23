/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2858:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1506:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8926:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4575:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(9489);

var isNativeReflectConstruct = __webpack_require__(7067);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3269:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var unsupportedIterableToArray = __webpack_require__(379);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9842:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(9754);

var isNativeReflectConstruct = __webpack_require__(7067);

var possibleConstructorReturn = __webpack_require__(8585);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9754:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(9489);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 430:
/***/ ((module) => {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7067:
/***/ ((module) => {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6860:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3884:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 521:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(9713);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8)["default"]);

var assertThisInitialized = __webpack_require__(1506);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9489:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(2858);

var iterableToArrayLimit = __webpack_require__(3884);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableRest = __webpack_require__(521);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(2858);

var iterableToArray = __webpack_require__(6860);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableRest = __webpack_require__(521);

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(7228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(9754);

var setPrototypeOf = __webpack_require__(9489);

var isNativeFunction = __webpack_require__(430);

var construct = __webpack_require__(9100);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4961);


/***/ }),

/***/ 28:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = (__webpack_require__(4575)["default"]);

var _createClass = (__webpack_require__(3913)["default"]);

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.issue = exports.issueCommand = void 0;

var os = __importStar(__webpack_require__(2037));

var utils_1 = __webpack_require__(600);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */


function issueCommand(command, properties, message) {
  var cmd = new Command(command, properties, message);
  process.stdout.write(cmd.toString() + os.EOL);
}

exports.issueCommand = issueCommand;

function issue(name) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  issueCommand(name, {}, message);
}

exports.issue = issue;
var CMD_STRING = '::';

var Command = /*#__PURE__*/function () {
  function Command(command, properties, message) {
    _classCallCheck(this, Command);

    if (!command) {
      command = 'missing.command';
    }

    this.command = command;
    this.properties = properties;
    this.message = message;
  }

  _createClass(Command, [{
    key: "toString",
    value: function toString() {
      var cmdStr = CMD_STRING + this.command;

      if (this.properties && Object.keys(this.properties).length > 0) {
        cmdStr += ' ';
        var first = true;

        for (var key in this.properties) {
          if (this.properties.hasOwnProperty(key)) {
            var val = this.properties[key];

            if (val) {
              if (first) {
                first = false;
              } else {
                cmdStr += ',';
              }

              cmdStr += "".concat(key, "=").concat(escapeProperty(val));
            }
          }
        }
      }

      cmdStr += "".concat(CMD_STRING).concat(escapeData(this.message));
      return cmdStr;
    }
  }]);

  return Command;
}();

function escapeData(s) {
  return utils_1.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}

function escapeProperty(s) {
  return utils_1.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
}

/***/ }),

/***/ 8397:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(7757);

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;

var command_1 = __webpack_require__(28);

var file_command_1 = __webpack_require__(3035);

var utils_1 = __webpack_require__(600);

var os = __importStar(__webpack_require__(2037));

var path = __importStar(__webpack_require__(1017));

var oidc_utils_1 = __webpack_require__(335);
/**
 * The code to exit an action
 */


var ExitCode;

(function (ExitCode) {
  /**
   * A code indicating that the action was successful
   */
  ExitCode[ExitCode["Success"] = 0] = "Success";
  /**
   * A code indicating that the action was a failure
   */

  ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {})); //-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------

/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any


function exportVariable(name, val) {
  var convertedVal = utils_1.toCommandValue(val);
  process.env[name] = convertedVal;
  var filePath = process.env['GITHUB_ENV'] || '';

  if (filePath) {
    var delimiter = '_GitHubActionsFileCommandDelimeter_';
    var commandValue = "".concat(name, "<<").concat(delimiter).concat(os.EOL).concat(convertedVal).concat(os.EOL).concat(delimiter);
    file_command_1.issueCommand('ENV', commandValue);
  } else {
    command_1.issueCommand('set-env', {
      name: name
    }, convertedVal);
  }
}

exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */

function setSecret(secret) {
  command_1.issueCommand('add-mask', {}, secret);
}

exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */

function addPath(inputPath) {
  var filePath = process.env['GITHUB_PATH'] || '';

  if (filePath) {
    file_command_1.issueCommand('PATH', inputPath);
  } else {
    command_1.issueCommand('add-path', {}, inputPath);
  }

  process.env['PATH'] = "".concat(inputPath).concat(path.delimiter).concat(process.env['PATH']);
}

exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */

function getInput(name, options) {
  var val = process.env["INPUT_".concat(name.replace(/ /g, '_').toUpperCase())] || '';

  if (options && options.required && !val) {
    throw new Error("Input required and not supplied: ".concat(name));
  }

  if (options && options.trimWhitespace === false) {
    return val;
  }

  return val.trim();
}

exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */

function getMultilineInput(name, options) {
  var inputs = getInput(name, options).split('\n').filter(function (x) {
    return x !== '';
  });
  return inputs;
}

exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */

function getBooleanInput(name, options) {
  var trueValue = ['true', 'True', 'TRUE'];
  var falseValue = ['false', 'False', 'FALSE'];
  var val = getInput(name, options);
  if (trueValue.includes(val)) return true;
  if (falseValue.includes(val)) return false;
  throw new TypeError("Input does not meet YAML 1.2 \"Core Schema\" specification: ".concat(name, "\n") + "Support boolean input list: `true | True | TRUE | false | False | FALSE`");
}

exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function setOutput(name, value) {
  process.stdout.write(os.EOL);
  command_1.issueCommand('set-output', {
    name: name
  }, value);
}

exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */

function setCommandEcho(enabled) {
  command_1.issue('echo', enabled ? 'on' : 'off');
}

exports.setCommandEcho = setCommandEcho; //-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------

/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */

function setFailed(message) {
  process.exitCode = ExitCode.Failure;
  error(message);
}

exports.setFailed = setFailed; //-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------

/**
 * Gets whether Actions Step Debug is on or not
 */

function isDebug() {
  return process.env['RUNNER_DEBUG'] === '1';
}

exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */

function debug(message) {
  command_1.issueCommand('debug', {}, message);
}

exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function error(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function warning(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function notice(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */

function info(message) {
  process.stdout.write(message + os.EOL);
}

exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */

function startGroup(name) {
  command_1.issue('group', name);
}

exports.startGroup = startGroup;
/**
 * End an output group.
 */

function endGroup() {
  command_1.issue('endgroup');
}

exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */

function group(name, fn) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var result;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            startGroup(name);
            _context.prev = 1;
            _context.next = 4;
            return fn();

          case 4:
            result = _context.sent;

          case 5:
            _context.prev = 5;
            endGroup();
            return _context.finish(5);

          case 8:
            return _context.abrupt("return", result);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1,, 5, 8]]);
  }));
}

exports.group = group; //-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------

/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function saveState(name, value) {
  command_1.issueCommand('save-state', {
    name: name
  }, value);
}

exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */

function getState(name) {
  return process.env["STATE_".concat(name)] || '';
}

exports.getState = getState;

function getIDToken(aud) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return oidc_utils_1.OidcClient.getIDToken(aud);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}

exports.getIDToken = getIDToken;

/***/ }),

/***/ 3035:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
 // For internal use, subject to change.

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.issueCommand = void 0; // We use any as a valid input type

/* eslint-disable @typescript-eslint/no-explicit-any */

var fs = __importStar(__webpack_require__(7147));

var os = __importStar(__webpack_require__(2037));

var utils_1 = __webpack_require__(600);

function issueCommand(command, message) {
  var filePath = process.env["GITHUB_".concat(command)];

  if (!filePath) {
    throw new Error("Unable to find environment variable for file command ".concat(command));
  }

  if (!fs.existsSync(filePath)) {
    throw new Error("Missing file at path: ".concat(filePath));
  }

  fs.appendFileSync(filePath, "".concat(utils_1.toCommandValue(message)).concat(os.EOL), {
    encoding: 'utf8'
  });
}

exports.issueCommand = issueCommand;

/***/ }),

/***/ 335:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(7757);

var _classCallCheck = (__webpack_require__(4575)["default"]);

var _createClass = (__webpack_require__(3913)["default"]);

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OidcClient = void 0;

var http_client_1 = __webpack_require__(3710);

var auth_1 = __webpack_require__(290);

var core_1 = __webpack_require__(8397);

var OidcClient = /*#__PURE__*/function () {
  function OidcClient() {
    _classCallCheck(this, OidcClient);
  }

  _createClass(OidcClient, null, [{
    key: "createHttpClient",
    value: function createHttpClient() {
      var allowRetry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var maxRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var requestOptions = {
        allowRetries: allowRetry,
        maxRetries: maxRetry
      };
      return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
  }, {
    key: "getRequestToken",
    value: function getRequestToken() {
      var token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];

      if (!token) {
        throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
      }

      return token;
    }
  }, {
    key: "getIDTokenUrl",
    value: function getIDTokenUrl() {
      var runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];

      if (!runtimeUrl) {
        throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
      }

      return runtimeUrl;
    }
  }, {
    key: "getCall",
    value: function getCall(id_token_url) {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var httpclient, res, id_token;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                httpclient = OidcClient.createHttpClient();
                _context.next = 3;
                return httpclient.getJson(id_token_url)["catch"](function (error) {
                  throw new Error("Failed to get ID Token. \n \n        Error Code : ".concat(error.statusCode, "\n \n        Error Message: ").concat(error.result.message));
                });

              case 3:
                res = _context.sent;
                id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;

                if (id_token) {
                  _context.next = 7;
                  break;
                }

                throw new Error('Response json body do not have ID Token field');

              case 7:
                return _context.abrupt("return", id_token);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "getIDToken",
    value: function getIDToken(audience) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var id_token_url, encodedAudience, id_token;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                // New ID Token is requested from action service
                id_token_url = OidcClient.getIDTokenUrl();

                if (audience) {
                  encodedAudience = encodeURIComponent(audience);
                  id_token_url = "".concat(id_token_url, "&audience=").concat(encodedAudience);
                }

                core_1.debug("ID token url is ".concat(id_token_url));
                _context2.next = 6;
                return OidcClient.getCall(id_token_url);

              case 6:
                id_token = _context2.sent;
                core_1.setSecret(id_token);
                return _context2.abrupt("return", id_token);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                throw new Error("Error message: ".concat(_context2.t0.message));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));
    }
  }]);

  return OidcClient;
}();

exports.OidcClient = OidcClient;

/***/ }),

/***/ 600:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
 // We use any as a valid input type

/* eslint-disable @typescript-eslint/no-explicit-any */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */

function toCommandValue(input) {
  if (input === null || input === undefined) {
    return '';
  } else if (typeof input === 'string' || input instanceof String) {
    return input;
  }

  return JSON.stringify(input);
}

exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */

function toCommandProperties(annotationProperties) {
  if (!Object.keys(annotationProperties).length) {
    return {};
  }

  return {
    title: annotationProperties.title,
    file: annotationProperties.file,
    line: annotationProperties.startLine,
    endLine: annotationProperties.endLine,
    col: annotationProperties.startColumn,
    endColumn: annotationProperties.endColumn
  };
}

exports.toCommandProperties = toCommandProperties;

/***/ }),

/***/ 290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(4575)["default"]);

var _createClass = (__webpack_require__(3913)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var BasicCredentialHandler = /*#__PURE__*/function () {
  function BasicCredentialHandler(username, password) {
    _classCallCheck(this, BasicCredentialHandler);

    this.username = username;
    this.password = password;
  }

  _createClass(BasicCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      options.headers['Authorization'] = 'Basic ' + Buffer.from(this.username + ':' + this.password).toString('base64');
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication(response) {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication(httpClient, requestInfo, objs) {
      return null;
    }
  }]);

  return BasicCredentialHandler;
}();

exports.BasicCredentialHandler = BasicCredentialHandler;

var BearerCredentialHandler = /*#__PURE__*/function () {
  function BearerCredentialHandler(token) {
    _classCallCheck(this, BearerCredentialHandler);

    this.token = token;
  } // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401


  _createClass(BearerCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      options.headers['Authorization'] = 'Bearer ' + this.token;
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication(response) {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication(httpClient, requestInfo, objs) {
      return null;
    }
  }]);

  return BearerCredentialHandler;
}();

exports.BearerCredentialHandler = BearerCredentialHandler;

var PersonalAccessTokenCredentialHandler = /*#__PURE__*/function () {
  function PersonalAccessTokenCredentialHandler(token) {
    _classCallCheck(this, PersonalAccessTokenCredentialHandler);

    this.token = token;
  } // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401


  _createClass(PersonalAccessTokenCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      options.headers['Authorization'] = 'Basic ' + Buffer.from('PAT:' + this.token).toString('base64');
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication(response) {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication(httpClient, requestInfo, objs) {
      return null;
    }
  }]);

  return PersonalAccessTokenCredentialHandler;
}();

exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;

/***/ }),

/***/ 3710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _objectSpread = (__webpack_require__(1109)["default"]);

var _regeneratorRuntime = __webpack_require__(7757);

var _asyncToGenerator = (__webpack_require__(8926)["default"]);

var _createClass = (__webpack_require__(3913)["default"]);

var _classCallCheck = (__webpack_require__(4575)["default"]);

var _assertThisInitialized = (__webpack_require__(1506)["default"]);

var _inherits = (__webpack_require__(2205)["default"]);

var _createSuper = (__webpack_require__(9842)["default"]);

var _wrapNativeSuper = (__webpack_require__(5957)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var http = __webpack_require__(3685);

var https = __webpack_require__(5687);

var pm = __webpack_require__(5725);

var tunnel;
var HttpCodes;

(function (HttpCodes) {
  HttpCodes[HttpCodes["OK"] = 200] = "OK";
  HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
  HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
  HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
  HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
  HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
  HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
  HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
  HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
  HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
  HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
  HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
  HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
  HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
  HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
  HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
  HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
  HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
  HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
  HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
  HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
  HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
  HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
  HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));

var Headers;

(function (Headers) {
  Headers["Accept"] = "accept";
  Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));

var MediaTypes;

(function (MediaTypes) {
  MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */


function getProxyUrl(serverUrl) {
  var proxyUrl = pm.getProxyUrl(new URL(serverUrl));
  return proxyUrl ? proxyUrl.href : '';
}

exports.getProxyUrl = getProxyUrl;
var HttpRedirectCodes = [HttpCodes.MovedPermanently, HttpCodes.ResourceMoved, HttpCodes.SeeOther, HttpCodes.TemporaryRedirect, HttpCodes.PermanentRedirect];
var HttpResponseRetryCodes = [HttpCodes.BadGateway, HttpCodes.ServiceUnavailable, HttpCodes.GatewayTimeout];
var RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
var ExponentialBackoffCeiling = 10;
var ExponentialBackoffTimeSlice = 5;

var HttpClientError = /*#__PURE__*/function (_Error) {
  _inherits(HttpClientError, _Error);

  var _super = _createSuper(HttpClientError);

  function HttpClientError(message, statusCode) {
    var _this;

    _classCallCheck(this, HttpClientError);

    _this = _super.call(this, message);
    _this.name = 'HttpClientError';
    _this.statusCode = statusCode;
    Object.setPrototypeOf(_assertThisInitialized(_this), HttpClientError.prototype);
    return _this;
  }

  return _createClass(HttpClientError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.HttpClientError = HttpClientError;

var HttpClientResponse = /*#__PURE__*/function () {
  function HttpClientResponse(message) {
    _classCallCheck(this, HttpClientResponse);

    this.message = message;
  }

  _createClass(HttpClientResponse, [{
    key: "readBody",
    value: function readBody() {
      var _this2 = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
          var output;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  output = Buffer.alloc(0);

                  _this2.message.on('data', function (chunk) {
                    output = Buffer.concat([output, chunk]);
                  });

                  _this2.message.on('end', function () {
                    resolve(output.toString());
                  });

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return HttpClientResponse;
}();

exports.HttpClientResponse = HttpClientResponse;

function isHttps(requestUrl) {
  var parsedUrl = new URL(requestUrl);
  return parsedUrl.protocol === 'https:';
}

exports.isHttps = isHttps;

var HttpClient = /*#__PURE__*/function () {
  function HttpClient(userAgent, handlers, requestOptions) {
    _classCallCheck(this, HttpClient);

    this._ignoreSslError = false;
    this._allowRedirects = true;
    this._allowRedirectDowngrade = false;
    this._maxRedirects = 50;
    this._allowRetries = false;
    this._maxRetries = 1;
    this._keepAlive = false;
    this._disposed = false;
    this.userAgent = userAgent;
    this.handlers = handlers || [];
    this.requestOptions = requestOptions;

    if (requestOptions) {
      if (requestOptions.ignoreSslError != null) {
        this._ignoreSslError = requestOptions.ignoreSslError;
      }

      this._socketTimeout = requestOptions.socketTimeout;

      if (requestOptions.allowRedirects != null) {
        this._allowRedirects = requestOptions.allowRedirects;
      }

      if (requestOptions.allowRedirectDowngrade != null) {
        this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
      }

      if (requestOptions.maxRedirects != null) {
        this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
      }

      if (requestOptions.keepAlive != null) {
        this._keepAlive = requestOptions.keepAlive;
      }

      if (requestOptions.allowRetries != null) {
        this._allowRetries = requestOptions.allowRetries;
      }

      if (requestOptions.maxRetries != null) {
        this._maxRetries = requestOptions.maxRetries;
      }
    }
  }

  _createClass(HttpClient, [{
    key: "options",
    value: function options(requestUrl, additionalHeaders) {
      return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
  }, {
    key: "get",
    value: function get(requestUrl, additionalHeaders) {
      return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
  }, {
    key: "del",
    value: function del(requestUrl, additionalHeaders) {
      return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
  }, {
    key: "post",
    value: function post(requestUrl, data, additionalHeaders) {
      return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
  }, {
    key: "patch",
    value: function patch(requestUrl, data, additionalHeaders) {
      return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
  }, {
    key: "put",
    value: function put(requestUrl, data, additionalHeaders) {
      return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
  }, {
    key: "head",
    value: function head(requestUrl, additionalHeaders) {
      return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
  }, {
    key: "sendStream",
    value: function sendStream(verb, requestUrl, stream, additionalHeaders) {
      return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */

  }, {
    key: "getJson",
    value: function () {
      var _getJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(requestUrl) {
        var additionalHeaders,
            res,
            _args2 = arguments;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                additionalHeaders = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                _context2.next = 4;
                return this.get(requestUrl, additionalHeaders);

              case 4:
                res = _context2.sent;
                return _context2.abrupt("return", this._processResponse(res, this.requestOptions));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getJson(_x3) {
        return _getJson.apply(this, arguments);
      }

      return getJson;
    }()
  }, {
    key: "postJson",
    value: function () {
      var _postJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(requestUrl, obj) {
        var additionalHeaders,
            data,
            res,
            _args3 = arguments;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                additionalHeaders = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context3.next = 6;
                return this.post(requestUrl, data, additionalHeaders);

              case 6:
                res = _context3.sent;
                return _context3.abrupt("return", this._processResponse(res, this.requestOptions));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function postJson(_x4, _x5) {
        return _postJson.apply(this, arguments);
      }

      return postJson;
    }()
  }, {
    key: "putJson",
    value: function () {
      var _putJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(requestUrl, obj) {
        var additionalHeaders,
            data,
            res,
            _args4 = arguments;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                additionalHeaders = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context4.next = 6;
                return this.put(requestUrl, data, additionalHeaders);

              case 6:
                res = _context4.sent;
                return _context4.abrupt("return", this._processResponse(res, this.requestOptions));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function putJson(_x6, _x7) {
        return _putJson.apply(this, arguments);
      }

      return putJson;
    }()
  }, {
    key: "patchJson",
    value: function () {
      var _patchJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(requestUrl, obj) {
        var additionalHeaders,
            data,
            res,
            _args5 = arguments;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                additionalHeaders = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context5.next = 6;
                return this.patch(requestUrl, data, additionalHeaders);

              case 6:
                res = _context5.sent;
                return _context5.abrupt("return", this._processResponse(res, this.requestOptions));

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function patchJson(_x8, _x9) {
        return _patchJson.apply(this, arguments);
      }

      return patchJson;
    }()
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */

  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(verb, requestUrl, data, headers) {
        var parsedUrl, info, maxTries, numTries, response, authenticationHandler, i, redirectsRemaining, redirectUrl, parsedRedirectUrl, header;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this._disposed) {
                  _context6.next = 2;
                  break;
                }

                throw new Error('Client has already been disposed.');

              case 2:
                parsedUrl = new URL(requestUrl);
                info = this._prepareRequest(verb, parsedUrl, headers); // Only perform retries on reads since writes may not be idempotent.

                maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1 ? this._maxRetries + 1 : 1;
                numTries = 0;

              case 6:
                if (!(numTries < maxTries)) {
                  _context6.next = 53;
                  break;
                }

                _context6.next = 9;
                return this.requestRaw(info, data);

              case 9:
                response = _context6.sent;

                if (!(response && response.message && response.message.statusCode === HttpCodes.Unauthorized)) {
                  _context6.next = 25;
                  break;
                }

                authenticationHandler = void 0;
                i = 0;

              case 13:
                if (!(i < this.handlers.length)) {
                  _context6.next = 20;
                  break;
                }

                if (!this.handlers[i].canHandleAuthentication(response)) {
                  _context6.next = 17;
                  break;
                }

                authenticationHandler = this.handlers[i];
                return _context6.abrupt("break", 20);

              case 17:
                i++;
                _context6.next = 13;
                break;

              case 20:
                if (!authenticationHandler) {
                  _context6.next = 24;
                  break;
                }

                return _context6.abrupt("return", authenticationHandler.handleAuthentication(this, info, data));

              case 24:
                return _context6.abrupt("return", response);

              case 25:
                redirectsRemaining = this._maxRedirects;

              case 26:
                if (!(HttpRedirectCodes.indexOf(response.message.statusCode) != -1 && this._allowRedirects && redirectsRemaining > 0)) {
                  _context6.next = 43;
                  break;
                }

                redirectUrl = response.message.headers['location'];

                if (redirectUrl) {
                  _context6.next = 30;
                  break;
                }

                return _context6.abrupt("break", 43);

              case 30:
                parsedRedirectUrl = new URL(redirectUrl);

                if (!(parsedUrl.protocol == 'https:' && parsedUrl.protocol != parsedRedirectUrl.protocol && !this._allowRedirectDowngrade)) {
                  _context6.next = 33;
                  break;
                }

                throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');

              case 33:
                _context6.next = 35;
                return response.readBody();

              case 35:
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                  for (header in headers) {
                    // header names are case insensitive
                    if (header.toLowerCase() === 'authorization') {
                      delete headers[header];
                    }
                  }
                } // let's make the request with the new redirectUrl


                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                _context6.next = 39;
                return this.requestRaw(info, data);

              case 39:
                response = _context6.sent;
                redirectsRemaining--;
                _context6.next = 26;
                break;

              case 43:
                if (!(HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1)) {
                  _context6.next = 45;
                  break;
                }

                return _context6.abrupt("return", response);

              case 45:
                numTries += 1;

                if (!(numTries < maxTries)) {
                  _context6.next = 51;
                  break;
                }

                _context6.next = 49;
                return response.readBody();

              case 49:
                _context6.next = 51;
                return this._performExponentialBackoff(numTries);

              case 51:
                _context6.next = 6;
                break;

              case 53:
                return _context6.abrupt("return", response);

              case 54:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function request(_x10, _x11, _x12, _x13) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (this._agent) {
        this._agent.destroy();
      }

      this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */

  }, {
    key: "requestRaw",
    value: function requestRaw(info, data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var callbackForResult = function callbackForResult(err, res) {
          if (err) {
            reject(err);
          }

          resolve(res);
        };

        _this3.requestRawWithCallback(info, data, callbackForResult);
      });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */

  }, {
    key: "requestRawWithCallback",
    value: function requestRawWithCallback(info, data, onResult) {
      var socket;

      if (typeof data === 'string') {
        info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
      }

      var callbackCalled = false;

      var handleResult = function handleResult(err, res) {
        if (!callbackCalled) {
          callbackCalled = true;
          onResult(err, res);
        }
      };

      var req = info.httpModule.request(info.options, function (msg) {
        var res = new HttpClientResponse(msg);
        handleResult(null, res);
      });
      req.on('socket', function (sock) {
        socket = sock;
      }); // If we ever get disconnected, we want the socket to timeout eventually

      req.setTimeout(this._socketTimeout || 3 * 60000, function () {
        if (socket) {
          socket.end();
        }

        handleResult(new Error('Request timeout: ' + info.options.path), null);
      });
      req.on('error', function (err) {
        // err has statusCode property
        // res should have headers
        handleResult(err, null);
      });

      if (data && typeof data === 'string') {
        req.write(data, 'utf8');
      }

      if (data && typeof data !== 'string') {
        data.on('close', function () {
          req.end();
        });
        data.pipe(req);
      } else {
        req.end();
      }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */

  }, {
    key: "getAgent",
    value: function getAgent(serverUrl) {
      var parsedUrl = new URL(serverUrl);
      return this._getAgent(parsedUrl);
    }
  }, {
    key: "_prepareRequest",
    value: function _prepareRequest(method, requestUrl, headers) {
      var info = {};
      info.parsedUrl = requestUrl;
      var usingSsl = info.parsedUrl.protocol === 'https:';
      info.httpModule = usingSsl ? https : http;
      var defaultPort = usingSsl ? 443 : 80;
      info.options = {};
      info.options.host = info.parsedUrl.hostname;
      info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
      info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
      info.options.method = method;
      info.options.headers = this._mergeHeaders(headers);

      if (this.userAgent != null) {
        info.options.headers['user-agent'] = this.userAgent;
      }

      info.options.agent = this._getAgent(info.parsedUrl); // gives handlers an opportunity to participate

      if (this.handlers) {
        this.handlers.forEach(function (handler) {
          handler.prepareRequest(info.options);
        });
      }

      return info;
    }
  }, {
    key: "_mergeHeaders",
    value: function _mergeHeaders(headers) {
      var lowercaseKeys = function lowercaseKeys(obj) {
        return Object.keys(obj).reduce(function (c, k) {
          return c[k.toLowerCase()] = obj[k], c;
        }, {});
      };

      if (this.requestOptions && this.requestOptions.headers) {
        return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
      }

      return lowercaseKeys(headers || {});
    }
  }, {
    key: "_getExistingOrDefaultHeader",
    value: function _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
      var lowercaseKeys = function lowercaseKeys(obj) {
        return Object.keys(obj).reduce(function (c, k) {
          return c[k.toLowerCase()] = obj[k], c;
        }, {});
      };

      var clientHeader;

      if (this.requestOptions && this.requestOptions.headers) {
        clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
      }

      return additionalHeaders[header] || clientHeader || _default;
    }
  }, {
    key: "_getAgent",
    value: function _getAgent(parsedUrl) {
      var agent;
      var proxyUrl = pm.getProxyUrl(parsedUrl);
      var useProxy = proxyUrl && proxyUrl.hostname;

      if (this._keepAlive && useProxy) {
        agent = this._proxyAgent;
      }

      if (this._keepAlive && !useProxy) {
        agent = this._agent;
      } // if agent is already assigned use that agent.


      if (!!agent) {
        return agent;
      }

      var usingSsl = parsedUrl.protocol === 'https:';
      var maxSockets = 100;

      if (!!this.requestOptions) {
        maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
      }

      if (useProxy) {
        // If using proxy, need tunnel
        if (!tunnel) {
          tunnel = __webpack_require__(8808);
        }

        var agentOptions = {
          maxSockets: maxSockets,
          keepAlive: this._keepAlive,
          proxy: _objectSpread(_objectSpread({}, (proxyUrl.username || proxyUrl.password) && {
            proxyAuth: "".concat(proxyUrl.username, ":").concat(proxyUrl.password)
          }), {}, {
            host: proxyUrl.hostname,
            port: proxyUrl.port
          })
        };
        var tunnelAgent;
        var overHttps = proxyUrl.protocol === 'https:';

        if (usingSsl) {
          tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
        } else {
          tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
        }

        agent = tunnelAgent(agentOptions);
        this._proxyAgent = agent;
      } // if reusing agent across request and tunneling agent isn't assigned create a new agent


      if (this._keepAlive && !agent) {
        var options = {
          keepAlive: this._keepAlive,
          maxSockets: maxSockets
        };
        agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
        this._agent = agent;
      } // if not using private agent and tunnel agent isn't setup then use global agent


      if (!agent) {
        agent = usingSsl ? https.globalAgent : http.globalAgent;
      }

      if (usingSsl && this._ignoreSslError) {
        // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
        // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
        // we have to cast it to any and change it directly
        agent.options = Object.assign(agent.options || {}, {
          rejectUnauthorized: false
        });
      }

      return agent;
    }
  }, {
    key: "_performExponentialBackoff",
    value: function _performExponentialBackoff(retryNumber) {
      retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
      var ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
      return new Promise(function (resolve) {
        return setTimeout(function () {
          return resolve();
        }, ms);
      });
    }
  }, {
    key: "_processResponse",
    value: function () {
      var _processResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(res, options) {
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(resolve, reject) {
                    var statusCode, response, obj, contents, msg, err;
                    return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            statusCode = res.message.statusCode;
                            response = {
                              statusCode: statusCode,
                              result: null,
                              headers: {}
                            }; // not found leads to null obj returned

                            // not found leads to null obj returned
                            if (statusCode == HttpCodes.NotFound) {
                              resolve(response);
                            }

                            _context7.prev = 3;
                            _context7.next = 6;
                            return res.readBody();

                          case 6:
                            contents = _context7.sent;

                            if (contents && contents.length > 0) {
                              if (options && options.deserializeDates) {
                                obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                              } else {
                                obj = JSON.parse(contents);
                              }

                              response.result = obj;
                            }

                            response.headers = res.message.headers;
                            _context7.next = 13;
                            break;

                          case 11:
                            _context7.prev = 11;
                            _context7.t0 = _context7["catch"](3);

                          case 13:
                            // note that 3xx redirects are handled by the http layer.
                            if (statusCode > 299) {
                              // if exception/error in body, attempt to get better error
                              if (obj && obj.message) {
                                msg = obj.message;
                              } else if (contents && contents.length > 0) {
                                // it may be the case that the exception is in the body message as string
                                msg = contents;
                              } else {
                                msg = 'Failed request: (' + statusCode + ')';
                              }

                              err = new HttpClientError(msg, statusCode);
                              err.result = response.result;
                              reject(err);
                            } else {
                              resolve(response);
                            }

                          case 14:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, null, [[3, 11]]);
                  }));

                  return function (_x16, _x17) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function _processResponse(_x14, _x15) {
        return _processResponse2.apply(this, arguments);
      }

      return _processResponse;
    }()
  }], [{
    key: "dateTimeDeserializer",
    value: function dateTimeDeserializer(key, value) {
      if (typeof value === 'string') {
        var a = new Date(value);

        if (!isNaN(a.valueOf())) {
          return a;
        }
      }

      return value;
    }
  }]);

  return HttpClient;
}();

exports.HttpClient = HttpClient;

/***/ }),

/***/ 5725:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(3269)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function getProxyUrl(reqUrl) {
  var usingSsl = reqUrl.protocol === 'https:';
  var proxyUrl;

  if (checkBypass(reqUrl)) {
    return proxyUrl;
  }

  var proxyVar;

  if (usingSsl) {
    proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
  } else {
    proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
  }

  if (proxyVar) {
    proxyUrl = new URL(proxyVar);
  }

  return proxyUrl;
}

exports.getProxyUrl = getProxyUrl;

function checkBypass(reqUrl) {
  if (!reqUrl.hostname) {
    return false;
  }

  var noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';

  if (!noProxy) {
    return false;
  } // Determine the request port


  var reqPort;

  if (reqUrl.port) {
    reqPort = Number(reqUrl.port);
  } else if (reqUrl.protocol === 'http:') {
    reqPort = 80;
  } else if (reqUrl.protocol === 'https:') {
    reqPort = 443;
  } // Format the request hostname and hostname with port


  var upperReqHosts = [reqUrl.hostname.toUpperCase()];

  if (typeof reqPort === 'number') {
    upperReqHosts.push("".concat(upperReqHosts[0], ":").concat(reqPort));
  } // Compare request host against noproxy


  var _iterator = _createForOfIteratorHelper(noProxy.split(',').map(function (x) {
    return x.trim().toUpperCase();
  }).filter(function (x) {
    return x;
  })),
      _step;

  try {
    var _loop = function _loop() {
      var upperNoProxyItem = _step.value;

      if (upperReqHosts.some(function (x) {
        return x === upperNoProxyItem;
      })) {
        return {
          v: true
        };
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (typeof _ret === "object") return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}

exports.checkBypass = checkBypass;

/***/ }),

/***/ 1650:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _toArray = (__webpack_require__(8551)["default"]);

var v = Object.defineProperty,
    E = function E(t) {
  return v(t, "__esModule", {
    value: !0
  });
},
    B = function B(t, e) {
  return function () {
    return e || (e = {
      exports: {}
    }, t(e.exports, e)), e.exports;
  };
},
    A = function A(t, e) {
  E(t);

  for (var i in e) {
    v(t, i, {
      get: e[i],
      enumerable: !0
    });
  }
},
    k = B(function (z, b) {
  b.exports = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 43, 50, 90, 70, 120, 80, 30, 50, 50, 70, 90, 40, 50, 40, 50, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 50, 50, 90, 90, 90, 60, 110, 75, 75, 77, 85, 70, 63, 85, 83, 46, 50, 76, 61, 93, 82, 87, 66, 87, 76, 75, 68, 81, 75, 110, 75, 68, 75, 50, 50, 50, 90, 70, 70, 66, 69, 57, 69, 66, 39, 69, 70, 30, 38, 65, 30, 110, 70, 67, 69, 69, 47, 57, 43, 70, 65, 90, 65, 65, 58, 70, 50, 70, 90, 0, 61, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 55, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 55, 110, 39, 43, 70, 70, 70, 70, 50, 70, 70, 110, 60, 71, 90, 0, 110, 70, 60, 90, 60, 60, 70, 71, 70, 40, 70, 60, 60, 71, 110, 110, 110, 60, 75, 75, 75, 75, 75, 75, 110, 77, 70, 70, 70, 70, 46, 46, 46, 46, 85, 82, 87, 87, 87, 87, 87, 90, 87, 81, 81, 81, 81, 68, 67, 68, 66, 66, 66, 66, 66, 66, 110, 57, 66, 66, 66, 66, 30, 30, 30, 30, 67, 70, 67, 67, 67, 67, 67, 90, 67, 70, 70, 70, 70, 65, 69, 65, 75, 66, 75, 66, 75, 66, 77, 57, 77, 57, 77, 57, 77, 57, 85, 71, 85, 69, 70, 66, 70, 66, 70, 66, 70, 66, 70, 66, 85, 69, 85, 69, 85, 69, 85, 69, 83, 70, 83, 70, 46, 30, 46, 30, 46, 30, 46, 30, 46, 30, 96, 68, 50, 38, 76, 65, 65, 61, 30, 61, 30, 61, 33, 61, 50, 62, 31, 82, 70, 82, 70, 82, 70, 80, 82, 70, 87, 67, 87, 67, 87, 67, 120, 110, 76, 47, 76, 47, 76, 47, 75, 57, 75, 57, 75, 57, 75, 57, 68, 43, 68, 43, 68, 43, 81, 70, 81, 70, 81, 69, 81, 70, 81, 70, 81, 69, 110, 90, 68, 65, 68, 75, 58, 75, 58, 75, 58, 33, 69, 77, 64, 69, 75, 62, 76, 76, 59, 83, 96, 64, 69, 65, 60, 83, 58, 59, 70, 79, 72, 100, 43, 43, 73, 64, 42, 65, 120, 81, 68, 86, 89, 67, 120, 98, 74, 69, 70, 59, 56, 65, 58, 41, 74, 41, 70, 83, 73, 86, 78, 68, 74, 67, 63, 61, 61, 56, 57, 70, 70, 52, 50, 67, 29, 48, 50, 32, 140, 140, 130, 94, 90, 61, 110, 110, 99, 76, 61, 32, 32, 85, 68, 76, 68, 76, 68, 81, 70, 76, 68, 81, 70, 61, 76, 61, 76, 61, 100, 94, 88, 69, 79, 69, 72, 64, 85, 68, 85, 68, 61, 56, 28, 140, 140, 130, 85, 69, 110, 61, 82, 70, 75, 66, 110, 110, 87, 67, 72, 60, 76, 61, 63, 58, 60, 61, 30, 27, 32, 32, 76, 63, 85, 68, 68, 37, 70, 45, 71, 61, 76, 68, 75, 57, 68, 43, 58, 55, 81, 68, 81, 100, 85, 68, 67, 63, 76, 61, 60, 61, 85, 68, 85, 68, 85, 68, 85, 68, 69, 57, 63, 100, 63, 28, 100, 100, 75, 81, 56, 62, 68, 55, 55, 62, 62, 81, 95, 75, 75, 62, 61, 25, 96, 69, 87, 44, 86, 69, 61, 69, 69, 69, 56, 61, 70, 70, 61, 66, 86, 51, 51, 71, 64, 45, 70, 69, 65, 59, 65, 68, 68, 68, 42, 41, 45, 56, 53, 33, 72, 100, 100, 100, 69, 70, 69, 68, 89, 86, 84, 45, 45, 47, 45, 45, 45, 45, 61, 61, 56, 47, 48, 53, 59, 41, 41, 72, 73, 68, 57, 85, 57, 53, 63, 77, 56, 59, 49, 49, 49, 53, 85, 58, 65, 67, 69, 53, 64, 51, 70, 50, 49, 110, 110, 130, 88, 78, 96, 110, 74, 77, 68, 64, 71, 71, 40, 40, 26, 27, 27, 35, 35, 51, 36, 26, 52, 35, 22, 28, 29, 29, 31, 31, 38, 39, 40, 40, 70, 70, 20, 70, 31, 31, 20, 40, 31, 31, 42, 42, 31, 31, 50, 50, 50, 50, 70, 70, 70, 70, 70, 70, 23, 38, 41, 20, 35, 40, 31, 43, 43, 43, 43, 43, 42, 42, 37, 46, 48, 24, 24, 26, 26, 32, 31, 47, 47, 41, 27, 31, 31, 31, 31, 42, 42, 50, 0, 0, 53, 0, 51, 68, 52, 39, 49, 0, 46, 51, 53, 38, 47, 0, 52, 52, 39, 39, 39, 11, 46, 47, 44, 44, 26, 17, 41, 48, 48, 48, 48, 25, 25, 0, 49, 46, 21, 40, 41, 38, 40, 57, 53, 53, 52, 52, 52, 51, 68, 68, 62, 62, 68, 62, 79, 41, 0, 40, 57, 48, 41, 68, 0, 0, 52, 42, 53, 38, 40, 51, 47, 45, 52, 52, 52, 57, 44, 0, 45, 41, 52, 48, 45, 45, 56, 41, 20, 48, 51, 47, 83, 52, 51, 51, 51, 51, 51, 45, 44, 36, 45, 44, 44, 45, 44, 51, 40, 41, 45, 45, 46, 37, 65, 51, 32, 32, 79, 64, 79, 79, 68, 56, 56, 56, 50, 66, 79, 79, 79, 79, 70, 70, 75, 50, 83, 96, 59, 79, 97, 79, 83, 100, 30, 75, 75, 62, 77, 70, 75, 83, 87, 46, 76, 75, 93, 82, 71, 87, 83, 66, 79, 74, 68, 68, 90, 75, 96, 90, 46, 68, 69, 56, 70, 30, 69, 69, 68, 65, 67, 56, 50, 70, 69, 30, 65, 65, 70, 65, 55, 67, 70, 69, 56, 69, 55, 69, 87, 65, 90, 89, 30, 69, 67, 69, 89, 62, 57, 64, 59, 59, 70, 85, 86, 61, 85, 68, 73, 59, 59, 56, 60, 56, 73, 88, 98, 92, 74, 61, 74, 55, 73, 73, 67, 66, 81, 61, 51, 45, 61, 67, 56, 33, 86, 58, 58, 63, 67, 76, 95, 80, 78, 81, 81, 81, 70, 70, 87, 62, 77, 75, 46, 46, 50, 120, 120, 90, 76, 83, 68, 83, 75, 75, 75, 62, 82, 70, 110, 68, 83, 83, 76, 81, 93, 83, 87, 83, 66, 77, 68, 68, 90, 75, 84, 78, 110, 110, 86, 100, 75, 77, 110, 78, 66, 68, 65, 52, 68, 66, 88, 58, 70, 70, 65, 68, 77, 70, 67, 70, 69, 59, 55, 65, 92, 65, 71, 67, 96, 98, 70, 87, 63, 60, 92, 66, 66, 66, 70, 52, 60, 57, 30, 30, 38, 100, 100, 70, 65, 70, 65, 70, 97, 85, 69, 60, 99, 82, 66, 59, 97, 83, 94, 81, 120, 110, 57, 53, 76, 77, 75, 63, 69, 55, 69, 55, 130, 110, 75, 62, 96, 84, 97, 85, 71, 59, 69, 0, 0, 0, 0, 0, 0, 0, 78, 63, 69, 60, 70, 62, 62, 52, 62, 52, 67, 55, 110, 88, 65, 56, 76, 65, 76, 65, 72, 57, 90, 76, 83, 70, 110, 78, 110, 96, 82, 66, 72, 58, 66, 53, 68, 65, 68, 65, 75, 65, 99, 74, 75, 60, 78, 67, 78, 70, 85, 65, 85, 65, 30, 100, 84, 69, 60, 78, 64, 78, 62, 78, 63, 75, 60, 96, 82, 30, 72, 60, 72, 60, 100, 93, 63, 58, 83, 66, 76, 58, 100, 84, 65, 56, 64, 64, 78, 63, 78, 63, 76, 63, 87, 67, 75, 63, 74, 59, 69, 52, 69, 52, 69, 52, 75, 60, 61, 46, 95, 85, 65, 45, 69, 55, 69, 55, 68, 62, 90, 95, 87, 71, 59, 55, 110, 89, 110, 91, 68, 57, 78, 70, 74, 59, 78, 64, 84, 76, 91, 75, 110, 81, 85, 68, 100, 87, 75, 69, 110, 88, 120, 100, 76, 66, 74, 68, 49, 44, 98, 89, 62, 58, 73, 65, 79, 84, 63, 81, 81, 68, 71, 63, 60, 80, 75, 64, 57, 80, 72, 66, 65, 77, 79, 68, 80, 61, 81, 70, 59, 66, 73, 67, 81, 68, 81, 61, 54, 63, 69, 75, 69, 64, 77, 79, 79, 44, 37, 33, 42, 29, 38, 0, 79, 82, 56, 67, 70, 55, 58, 52, 56, 63, 63, 55, 30, 84, 58, 54, 55, 51, 57, 58, 58, 30, 56, 48, 58, 45, 81, 48, 67, 58, 58, 83, 70, 56, 43, 81, 65, 55, 69, 59, 79, 39, 44, 79, 79, 79, 79, 88, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.3, 15, 0, 0, 0, 38, 0, 28, 0, 0, 28, 0, 5, 44, 12, 79, 79, 79, 79, 79, 79, 79, 79, 71, 62, 47, 55, 78, 35, 37, 78, 71, 35, 58, 63, 59, 77, 76, 34, 45, 73, 66, 58, 63, 53, 63, 73, 56, 79, 76, 79, 79, 79, 79, 79, 68, 68, 66, 31, 53, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 97, 190, 93, 81, 290, 120, 71, 71, 86, 58, 58, 53, 32, 49, 93, 58, 0, 0, .9, 0, 0, 0, 0, 0, 0, 0, 9, 32, 0, 79, 27, 39, 89, 35, 32, 32, 43, 32, 70, 32, 70, 39, 70, 70, 64, 64, 64, 45, 45, 45, 45, 100, 100, 120, 120, 66, 66, 64, 64, 77, 77, 70, 70, 70, 22, 86, 60, 60, 52, 45, 59, 39, 43, 70, 70, 0, .2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 57, 70, 60, 0, 32, 32, 32, 0, 47, 58, 54, 70, 70, 70, 70, 70, 70, 70, 70, 70, 64, 64, 64, 64, 64, 64, 64, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 100, 100, 100, 120, 120, 66, 64, 86, 86, 86, 86, 86, 86, 60, 60, 77, 77, 77, 60, 60, 60, 77, 77, 77, 77, 77, 77, 52, 52, 52, 52, 59, 59, 59, 59, 59, 57, 64, 39, 49, 49, 49, 43, 43, 43, 43, 43, 43, 43, 43, 70, 79, 70, 43, 70, 70, 64, 64, 35, 39, 7, 4.1, .45, .099, 0, 0, 0, 95, 61, 0, 0, 0, 0, 24, 0, 25, 38, 0, 0, 70, 0, 0, 0, 0, 45, 45, 51, 51, 58, 58, 58, 58, 58, 58, 58, 58, 100, 120, 64, 51, 48, 57, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 70, 70, 70, 70, 70, 70, 70, 64, 64, 45, 45, 45, 100, 64, 64, 64, 86, 86, 77, 77, 77, 45, 45, 59, 59, 59, 52, 45, 45, 100, 64, 64, 100, 45, 64, 32, 32, 70, 70, 70, 43, 43, 64, 64, 64, 100, 100, 60, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 96, 96, 74, 84, 100, 74, 70, 54, 83, 83, 61, 47, 64, 26, 52, 120, 92, 52, 37, 73, 88, 79, 96, 96, 96, 38, 83, 100, 74, 66, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 58, 40, 41, 34, 33, 79, 79, 79, 79, 79, 79, 56, 62, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 0, 0, 0, 0, 0, 73, 73, 73, 100, 80, 80, 110, 58, 58, 52, 74, 91, 79, 60, 60, 60, 60, 110, 110, 110, 110, 85, 87, 61, 70, 68, 71, 75, 82, 85, 77, 55, 63, 60, 58, 83, 61, 71, 58, 70, 56, 56, 62, 87, 62, 64, 64, 67, 44, 45, 78, 81, 81, 60, 79, 63, 75, 56, 73, 100, 73, 54, 100, 100, 100, 73, 73, 73, 73, 73, 73, 73, 73, 100, 100, 100, 100, 73, 100, 100, 130, 0, 0, 73, 73, 73, 73, 73, 85, 87, 61, 82, 60, 58, 87, 67, 91, 79, 73, 73, 52, 82, 51, 53, 54, 54, 56, 59, 58, 72, 53, 52, 55, 34, 80, 80, 110, 110, 80, 80, 57, 82, 67, 61, 80, 50, 61, 62, 62, 73, 120, 120, 79, 98, 130, 54, 72, 73, 75, 83, 68, 79, 79, 78, 83, 79, 79, 66, 78, 76, 72, 70, 69, 76, 58, 65, 88, 85, 100, 60, 60, 73, 60, 67, 75, 74, 60, 67, 69, 79, 72, 83, 60, 79, 64, 62, 60, 79, 81, 79, 79, 79, 77, 62, 72, 54, 79, 79, 73, 51, 100, 100, 100, 73, 73, 73, 73, 79, 79, 100, 100, 79, 79, 130, 130, 73, 57, 79, 79, 79, 79, 79, 79, 79, 79, 100, 79, 79, 79, 79, 73, 60, 79, 62, 83, 68, 73, 73, 79, 79, 65, 58, 53, 80, 55, 67, 70, 62, 76, 69, 61, 60, 46, 66, 44, 75, 70, 30, 62, 58, 70, 30, 79, 79, 79, 79, 79, 34, 23, 32, 79, 89, 110, 97, 98, 78, 78, 79, 79, 79, 79, 73, 89, 79, 79, 78, 89, 76, 76, 90, 92, 75, 76, 79, 76, 79, 73, 73, 79, 75, 76, 78, 75, 76, 76, 76, 79, 79, 76, 75, 77, 75, 75, 91, 73, 79, 78, 78, 79, 76, 75, 79, 75, 73, 79, 79, 12, 79, 26, 23, 50, 64, 64, 79, 79, 79, 79, 62, 62, 79, 79, 67, 58, 19, 79, 79, 79, 19, 79, 79, 79, 79, 79, 79, 79, 76, 90, 76, 75, 79, 75, 79, 79, 79, 79, 79, 79, 79, 93, 68, 69, 70, 77, 76, 70, 70, 80, 77, 36, 26, 73, 78, 170, 46, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 89, 89, 28, 79, 94, 120, 71, 78, 82, 95, 88, 83, 94, 79, 94, 94, 120, 79, 120, 120, 63, 84, 79, 70, 65, 74, 86, 92, 92, 76, 70, 79, 63, 76, 98, 71, 74, 63, 71, 73, 79, 74, 63, 85, 89, 67, 74, 56, 79, 74, 90, 79, 74, 79, 74, 81, 65, 79, 79, 89, 56, 120, 100, 120, 89, 89, 89, 89, 89, 79, 89, 89, 120, 79, 120, 120, 89, 79, 79, 120, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 95, 83, 89, 89, 79, 79, 74, 46, 56, 62, 72, 74, 57, 85, 59, 75, 47, 100, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 28, 46, 48, 79, 84, 100, 88, 90, 91, 90, 90, 62, 79, 79, 70, 91, 79, 79, 75, 95, 87, 84, 84, 84, 94, 83, 70, 87, 84, 79, 84, 85, 84, 84, 79, 84, 74, 85, 73, 79, 79, 75, 94, 85, 88, 75, 82, 87, 79, 87, 87, 79, 85, 80, 75, 75, 85, 79, 79, 4.7, 50, 98, 78, 98, 78, 78, 78, 78, 79, 79, 140, 140, 79, 79, 150, 150, 78, 79, 79, 79, 79, 79, 79, 79, 79, 78, 98, 79, 79, 79, 79, 84, 84, 79, 90, 89, 64, 78, 78, 79, 79, 67, 56, 56, 91, 69, 59, 70, 62, 55, 61, 81, 63, 19, 44, 70, 57, 81, 91, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 62, 76, 79, 98, 120, 100, 69, 100, 120, 79, 79, 79, 78, 78, 86, 79, 83, 83, 170, 78, 79, 79, 79, 91, 71, 79, 83, 79, 100, 85, 79, 79, 79, 140, 75, 79, 79, 79, 74, 100, 64, 79, 79, 79, 73, 76, 59, 70, 88, 93, 73, 80, 100, 100, 110, 130, 79, 79, 79, 79, 120, 80, 64, 110, 120, 79, 79, 79, 140, 130, 160, 79, 190, 180, 230, 62, 79, 79, 92, 79, 79, 79, 79, 79, 79, 150, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 36, 55, 59, 69, 69, 65, 66, 81, 91, 70, 95, 90, 78, 76, 85, 91, 80, 160, 81, 130, 140, 81, 110, 79, 79, 79, 79, 79, 73, 110, 140, 110, 79, 97, 94, 85, 110, 99, 130, 160, 110, 79, 84, 84, 89, 79, 83, 83, 85, 57, 99, 66, 120, 85, 88, 88, 84, 140, 110, 93, 68, 90, 90, 92, 90, 90, 90, 90, 84, 79, 84, 84, 90, 90, 120, 140, 68, 97, 85, 71, 97, 84, 61, 84, 84, 120, 79, 79, 79, 70, 110, 73, 73, 110, 140, 120, 150, 79, 73, 73, 73, 79, 73, 73, 110, 73, 79, 79, 79, 79, 79, 79, 79, 73, 73, 79, 88, 84, 90, 79, 79, 79, 79, 79, 200, 150, 73, 73, 79, 79, 64, 62, 77, 55, 65, 71, 50, 57, 65, 50, 79, 79, 79, 79, 79, 79, 79, 79, 58, 28, 52, 82, 74, 74, 73, 86, 42, 61, 120, 93, 79, 90, 85, 92, 120, 120, 140, 120, 110, 79, 81, 81, 84, 79, 81, 81, 84, 68, 94, 70, 87, 81, 81, 95, 81, 140, 120, 85, 73, 82, 82, 85, 81, 88, 88, 88, 80, 79, 81, 81, 86, 86, 120, 140, 73, 90, 90, 83, 79, 83, 72, 81, 83, 87, 79, 79, 61, 52, 120, 71, 110, 100, 130, 89, 130, 79, 74, 110, 120, 79, 140, 180, 110, 110, 79, 79, 79, 79, 79, 79, 79, 97, 89, 79, 79, 79, 79, 79, 79, 79, 90, 79, 150, 150, 69, 80, 79, 79, 72, 67, 85, 83, 83, 92, 85, 82, 99, 67, 79, 59, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 42, 31, 79, 140, 150, 99, 180, 70, 150, 88, 110, 79, 120, 120, 180, 79, 70, 120, 150, 97, 88, 83, 130, 110, 91, 130, 88, 160, 140, 57, 64, 120, 120, 140, 96, 81, 61, 92, 92, 100, 78, 110, 130, 64, 64, 97, 67, 63, 84, 72, 63, 88, 94, 110, 120, 120, 81, 79, 79, 42, 110, 89, 88, 96, 96, 100, 100, 79, 130, 120, 180, 79, 170, 160, 200, 66, 19, 79, 79, 79, 79, 79, 79, 79, 79, 150, 79, 79, 79, 79, 79, 79, 79, 79, 88, 120, 70, 81, 79, 79, 64, 86, 88, 110, 68, 97, 130, 48, 88, 100, 92, 96, 130, 76, 82, 110, 79, 79, 79, 120, 150, 100, 68, 110, 94, 110, 79, 79, 68, 48, 79, 91, 130, 130, 130, 92, 90, 95, 150, 150, 200, 110, 170, 100, 110, 160, 100, 100, 170, 79, 79, 79, 120, 110, 100, 94, 110, 120, 100, 90, 88, 180, 170, 150, 100, 95, 100, 110, 100, 140, 130, 110, 96, 83, 110, 100, 79, 100, 88, 100, 110, 120, 110, 100, 99, 88, 79, 99, 79, 79, 97, 110, 88, 100, 120, 110, 100, 79, 79, 79, 86, 79, 79, 79, 79, 120, 130, 130, 89, 89, 89, 79, 89, 79, 140, 160, 160, 220, 190, 190, 220, 150, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 200, 63, 160, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 21, 66, 63, 63, 70, 69, 70, 52, 58, 67, 64, 65, 90, 90, 73, 73, 59, 76, 94, 90, 69, 69, 66, 69, 61, 68, 72, 72, 65, 65, 74, 74, 73, 69, 67, 53, 66, 64, 73, 56, 69, 71, 66, 69, 74, 64, 63, 68, 48, 56, 56, 110, 56, 56, 56, 56, 56, 56, 56, 79, 79, 79, 79, 75, 35, 64, 56, 61, 46, 57, 67, 56, 56, 56, 56, 56, 56, 56, 56, 81, 64, 68, 72, 75, 68, 66, 64, 84, 68, 73, 85, 140, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 68, 60, 79, 62, 79, 79, 56, 61, 79, 60, 79, 79, 62, 79, 79, 79, 79, 79, 79, 64, 66, 69, 71, 79, 68, 58, 58, 74, 73, 73, 74, 79, 68, 61, 60, 79, 61, 79, 59, 79, 79, 61, 84, 79, 61, 61, 58, 56, 0, 47, 47, 0, 0, 0, 0, 0, 0, 79, 0, 0, 54, 79, 79, 38, 65, 37, 37, 37, 79, 65, 79, 0, 0, 0, 0, 36, 0, 79, 79, 61, 56, 55, 63, 56, 58, 69, 69, 73, 69, 79, 79, 110, 110, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 69, 54, 85, 85, 130, 66, 130, 160, 42, 63, 71, 18, 18, 27, 50, 27, 27, 34, 120, 65, 40, 71, 52, 83, 45, 37, 32, 55, 55, 34, 55, 58, 38, 38, 60, 57, 76, 55, 63, 63, 52, 56, 56, 60, 57, 76, 55, 63, 63, 56, 56, 55, 58, 41, 55, 33, 60, 6.3, 150, 150, 54, 54, 31, 47, 57, 57, 57, 56, 52, 59, 57, 52, 79, 51, 52, 52, 52, 56, 52, 52, 52, 52, 56, 52, 57, 57, 57, 56, 57, 59, 57, 52, 56, 52, 52, 54, 52, 62, 54, 59, 57, 57, 57, 52, 66, 56, 54, 58, 58, 79, 79, 79, 79, 60, 55, 60, 61, 120, 56, 120, 56, 120, 53, 54, 57, 57, 22, 51, 54, 60, 41, 41, 15, 57, 41, 37, 0, 58, 52, 58, 79, 79, 79, 79, 56, 56, 56, 56, 56, 56, 56, 56, 79, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 59, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 79, 56, 56, 64, 43, 54, 65, 45, 36, 50, 71, 39, 61, 66, 64, 68, 79, 70, 55, 220, 52, 23, 130, 53, 70, 72, 67, 70, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 120, 66, 68, 120, 66, 68, 120, 66, 84, 110, 120, 75, 66, 75, 68, 130, 120, 120, 63, 68, 69, 68, 68, 68, 120, 68, 120, 67, 120, 68, 120, 120, 66, 110, 79, 120, 130, 66, 66, 65, 79, 130, 240, 79, 120, 65, 65, 65, 65, 120, 65, 79, 79, 79, 65, 65, 90, 68, 65, 76, 81, 65, 65, 170, 68, 66, 66, 66, 66, 66, 68, 68, 68, 68, 23, 43, 66, 81, 66, 97, 68, 68, 68, 68, 66, 94, 120, 170, 65, 65, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 73, 74, 78, 77, 67, 87, 73, 86, 62, 70, 86, 77, 69, 75, 78, 76, 81, 68, 65, 75, 75, 78, 71, 69, 69, 69, 70, 85, 65, 73, 69, 74, 81, 63, 67, 67, 74, 87, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 51, 63, 64, 100, 56, 60, 80, 110, 65, 53, 130, 55, 56, 95, 57, 59, 91, 54, 85, 92, 86, 56, 88, 51, 58, 53, 62, 56, 56, 63, 55, 87, 52, 74, 63, 60, 54, 60, 93, 66, 66, 66, 66, 59, 66, 79, 79, 79, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 79, 79, 79, 79, 79, 0, 0, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 95, 110, 110, 110, 95, 79, 79, 79, 79, 79, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 79, 79, 79, 79, 79, 79, 76, 99, 71, 73, 72, 80, 99, 120, 71, 91, 91, 71, 94, 81, 120, 95, 110, 130, 130, 110, 130, 110, 110, 130, 120, 150, 130, 120, 130, 120, 120, 130, 110, 130, 110, 110, 110, 120, 110, 110, 67, 78, 76, 99, 92, 68, 90, 99, 74, 97, 97, 74, 96, 74, 74, 97, 84, 100, 100, 84, 100, 88, 84, 100, 94, 94, 94, 94, 94, 94, 94, 94, 110, 79, 130, 94, 94, 130, 79, 79, 97, 97, 97, 97, 97, 110, 97, 79, 110, 79, 140, 97, 97, 120, 79, 79, 78, 99, 99, 78, 98, 100, 78, 99, 84, 100, 100, 84, 100, 100, 84, 100, 85, 85, 85, 86, 86, 85, 85, 85, 85, 86, 85, 86, 85, 100, 87, 85, 76, 95, 90, 76, 89, 74, 110, 110, 110, 79, 110, 83, 89, 110, 79, 79, 58, 77, 72, 70, 71, 75, 87, 81, 83, 96, 91, 83, 89, 83, 100, 86, 70, 95, 95, 70, 94, 72, 71, 87, 79, 100, 100, 79, 100, 79, 79, 99, 120, 79, 110, 95, 100, 110, 79, 79, 98, 120, 120, 98, 120, 98, 98, 79, 140, 79, 130, 120, 120, 130, 79, 79, 100, 120, 100, 100, 100, 130, 100, 130, 74, 98, 95, 72, 95, 72, 78, 79, 82, 100, 100, 82, 100, 99, 82, 100, 120, 120, 120, 120, 120, 140, 120, 120, 64, 80, 91, 65, 100, 77, 90, 110, 84, 110, 110, 82, 100, 93, 91, 110, 84, 110, 100, 78, 100, 99, 91, 100, 85, 110, 110, 84, 110, 100, 92, 110, 64, 92, 67, 70, 66, 88, 64, 79, 110, 79, 100, 69, 81, 100, 79, 79, 81, 100, 81, 81, 81, 97, 87, 81, 120, 140, 140, 120, 140, 120, 120, 140, 150, 150, 150, 150, 180, 150, 150, 150, 73, 97, 95, 72, 95, 93, 74, 95, 76, 98, 97, 73, 96, 95, 77, 95, 74, 98, 76, 67, 76, 72, 77, 91, 94, 95, 100, 95, 110, 92, 94, 92, 85, 86, 85, 86, 85, 85, 85, 85, 89, 130, 100, 79, 79, 79, 79, 78, 100, 33, 68, 39, 39, 39, 55, 33, 100, 61, 56, 59, 60, 72, 66, 67, 71, 62, 46, 82, 82, 96, 60, 71, 87, 90, 58, 62, 110, 79, 79, 79, 170, 160, 130, 170, 120, 110, 98, 140, 110, 110, 120, 140, 110, 97, 86, 120, 32, 60, 32, 32, 60, 76, 51, 99, 110, 56, 79, 79, 79, 79, 79, 79, 81, 74, 71, 77, 110, 41, 70, 80, 59, 69, 81, 54, 66, 100, 68, 97, 50, 62, 120, 100, 70, 66, 80, 99, 57, 91, 90, 91, 68, 78, 83, 59, 83, 100, 73, 63, 68, 88, 72, 130, 89, 100, 110, 57, 87, 120, 63, 71, 56, 72, 74, 54, 100, 63, 76, 84, 84, 81, 58, 92, 78, 67, 67, 76, 73, 95, 62, 76, 91, 80, 80, 71, 86, 90, 120, 83, 94, 63, 63, 130, 74, 88, 73, 88, 68, 79, 79, 79, 56, 67, 46, 74, 50, 79, 79, 79, 79, 87, 87, 87, 87, 82, 82, 82, 82, 82, 82, 82, 88, 88, 88, 88, 88, 88, 97, 100, 97, 100, 82, 100, 97, 100, 97, 82, 73, 65, 54, 35, 35, 50, 50, 38, 53, 55, 35, 23, 44, 45, 44, 120, 98, 110, 120, 91, 91, 91, 91, 84, 84, 84, 84, 84, 84, 84, 92, 92, 92, 94, 92, 91, 95, 100, 95, 100, 100, 95, 100, 95, 84, 46, 15, 40, 90, 90, 90, 90, 77, 77, 77, 77, 77, 77, 77, 110, 100, 100, 110, 100, 110, 91, 92, 91, 92, 92, 91, 92, 91, 93, 38, 110, 110, 96, 96, 69, 69, 69, 69, 69, 69, 69, 69, 69, 84, 84, 81, 87, 81, 87, 84, 84, 84, 84, 84, 84, 84, 84, 84, 43, 43, 85, 88, 87, 87, 72, 72, 72, 72, 72, 72, 72, 72, 72, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 41, 41, 71, 68, 68, 68, 68, 68, 68, 68, 68, 80, 86, 84, 77, 84, 77, 77, 84, 77, 84, 84, 77, 84, 77, 82, 38, 38, 38, 47, 67, 100, 100, 100, 100, 100, 100, 100, 100, 100, 120, 120, 120, 100, 120, 100, 100, 60, 50, 60, 96, 96, 96, 96, 96, 96, 96, 96, 96, 110, 110, 110, 110, 110, 110, 96, 110, 96, 110, 110, 97, 110, 97, 55, 49, 74, 65, 65, 65, 65, 65, 65, 65, 65, 65, 77, 80, 80, 77, 81, 77, 70, 85, 70, 85, 81, 83, 86, 78, 80, 39, 45, 39, 55, 39, 39, 39, 120, 120, 110, 110, 95, 95, 95, 75, 75, 75, 75, 110, 110, 110, 110, 110, 110, 90, 90, 90, 90, 90, 90, 90, 90, 57, 64, 64, 64, 64, 64, 64, 64, 64, 64, 79, 79, 79, 79, 79, 79, 82, 79, 82, 79, 79, 79, 79, 79, 79, 38, 51, 37, 37, 100, 100, 100, 100, 100, 100, 68, 68, 68, 68, 68, 68, 83, 83, 40, 49, 74, 89, 89, 89, 89, 94, 94, 94, 94, 110, 110, 54, 92, 92, 92, 92, 92, 92, 82, 82, 82, 82, 98, 98, 50, 90, 90, 77, 77, 66, 90, 90, 77, 77, 86, 86, 86, 84, 84, 84, 84, 54, 78, 37, 110, 110, 110, 110, 110, 110, 110, 82, 69, 69, 69, 69, 89, 89, 89, 89, 130, 130, 130, 110, 110, 130, 130, 60, 93, 69, 69, 69, 69, 100, 100, 100, 100, 60, 96, 96, 96, 96, 96, 96, 55, 64, 64, 64, 64, 64, 64, 64, 38, 63, 56, 56, 56, 56, 63, 63, 63, 63, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 91, 91, 83, 83, 83, 83, 91, 91, 83, 83, 83, 83, 91, 91, 84, 84, 84, 84, 91, 91, 84, 84, 84, 84, 88, 88, 75, 75, 75, 75, 88, 88, 71, 71, 71, 71, 90, 90, 76, 76, 76, 76, 44, 110, 110, 62, 62, 62, 62, 110, 110, 73, 73, 73, 73, 110, 110, 73, 73, 73, 73, 52, 72, 72, 98, 98, 98, 98, 110, 110, 62, 62, 62, 62, 90, 90, 75, 75, 75, 75, 70, 70, 70, 100, 100, 100, 100, 100, 74, 74, 100, 100, 100, 100, 100, 100, 69, 69, 69, 69, 100, 100, 71, 71, 71, 71, 96, 96, 69, 68, 68, 69, 110, 110, 70, 70, 70, 70, 130, 130, 64, 64, 64, 64, 84, 84, 76, 76, 76, 76, 45, 45, 84, 84, 76, 76, 76, 76, 110, 110, 62, 62, 62, 62, 110, 110, 68, 68, 68, 68, 41, 110, 110, 70, 70, 70, 70, 110, 110, 62, 62, 62, 62, 110, 110, 70, 70, 70, 70, 69, 53, 110, 160, 160, 170, 140, 140, 160, 160, 79, 79, 79, 79, 79, 79, 79, 79, 79, 54, 54, 76, 98, 120, 140, 54, 76, 98, 120, 140, 54, 76, 98, 120, 140, 54, 76, 98, 120, 140, 81, 140, 110, 120, 140, 98, 81, 81, 79, 79, 79, 67, 67, 52, 52, 52, 63, 53, 53, 43, 55, 55, 59, 69, 45, 45, 69, 67, 55, 50, 65, 65, 65, 70, 69, 69, 53, 41, 41, 71, 30, 71, 45, 71, 20, 30, 82, 84, 71, 45, 71, 64, 79, 59, 41, 20, 32, 67, 67, 43, 50, 53, 45, 53, 45, 65, 65, 56, 32, 43, 50, 66, 54, 67, 65, 110, 71, 110, 79, 69, 65, 56, 20, 67, 53, 62, 32, 32, 62, 69, 56, 48, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 66, 66, 66, 100, 66, 66, 66, 66, 140, 100, 66, 66, 66, 100, 140, 66, 66, 68, 66, 66, 66, 66, 66, 66, 66, 100, 39, 100, 39, 66, 66, 100, 100, 110, 64, 66, 100, 66, 100, 66, 66, 78, 68, 66, 66, 66, 66, 66, 66, 66, 66, 66, 0, 0, 94, 61, 61, 61, 61, 52, 52, 52, 99, 110, 110, 91, 91, 98, 130, 140, 52, 87, 79, 52, 66, 52, 52, 53, 52, 52, 52, 52, 52, 52, 51, 68, 38, 58, 200, 71, 130, 42, 58, 54, 79, 79, 58, 58, 73, 97, 65, 65, 65, 77, 65, 62, 79, 79, 79, 79, 79, 79, 41, 45, 18, 72, 45, 44, 31, 59, 31, 49, 79, 79, 79, 79, 79, 79, 62, 24, 32, 33, 42, 61, 20, 33, 36, 37, 20, 0, 0, 0, 0, 110, 58, 69, 54, 47, 62, 47, 61, 57, 57, 63, 110, 110, 110, 110, 110, 110, 69, 66, 53, 47, 47, 47, 52, 54, 59, 43, 51, 52, 50, 70, 58, 61, 47, 56, 43, 42, 41, 42, 40, 43, 39, 61, 49, 53, 44, 47, 53, 60, 71, 44, 35, 32, 47, 52, 50, 63, 49, 50, 56, 57, 50, 57, 58, 55, 48, 42, 47, 49, 39, 41, 41, 46, 49, 44, 61, 54, 48, 67, 40, 45, 51, 42, 57, 82, 48, 48, 50, 48, 48, 45, 42, 55, 61, 62, 57, 49, 50, 56, 59, 42, 84, 43, 51, 57, 110, 110, 110, 110, 110, 110, 110, 110, 49, 35, 54, 58, 57, 42, 64, 44, 52, 51, 58, 46, 45, 37, 45, 40, 42, 42, 53, 60, 63, 55, 47, 49, 42, 54, 48, 46, 63, 51, 56, 58, 56, 47, 67, 52, 63, 62, 32, 45, 51, 66, 110, 110, 110, 110, 110, 110, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 71, 58, 73, 97, 65, 65, 65, 77, 65, 62, 140, 140, 140, 160, 140, 140, 70, 58, 73, 97, 65, 65, 65, 77, 65, 62, 140, 140, 140, 160, 140, 140, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 62, 77, 93, 64, 64, 70, 72, 57, 52, 32, 37, 62, 52, 80, 69, 73, 64, 73, 73, 74, 100, 68, 66, 66, 56, 62, 62, 54, 68, 74, 92, 74, 61, 85, 63, 57, 48, 64, 54, 57, 69, 56, 63, 65, 35, 48, 33, 39, 40, 31, 31, 37, 39, 19, 24, 35, 29, 45, 38, 38, 42, 40, 32, 35, 33, 38, 44, 39, 39, 40, 57, 40, 40, 36, 36, 31, 31, 40, 21, 38, 60, 40, 40, 33, 40, 40, 40, 27, 40, 44, 60, 35, 40, 40, 39, 39, 54, 40, 21, 28, 41, 36, 40, 40, 39, 55, 38, 100, 68, 70, 40, 92, 61, 69, 44, 40, 55, 40, 55, 61, 42, 61, 98, 24, 24, 61, 60, 63, 61, 61, 31, 78, 55, 24, 92, 61, 61, 37, 55, 43, 55, 55, 55, 61, 61, 61, 61, 50, 50, 72, 24, 55, 24, 61, 60, 41, 39, 38, 41, 35, 25, 25, 41, 42, 17, 17, 17, 17, 30, 17, 17, 30, 63, 63, 42, 42, 42, 42, 41, 37, 17, 24, 42, 43, 42, 39, 35, 39, 39, 39, 41, 43, 52, 52, 0, 0, 52, 52, 52, 52, 56, 56, 38, 57, 57, 48, 41, 43, 79, 79, 79, 60, 58, 59, 53, 46, 48, 48, 79, 44, 46, 33, 42, 47, 45, 44, 43, 47, 45, 42, 45, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 0, 0, 72, 60, 63, 69, 75, 69, 63, 69, 77, 57, 82, 69, 85, 69, 82, 69, 82, 69, 82, 69, 70, 66, 70, 66, 60, 61, 60, 61, 60, 61, 59, 40, 79, 69, 81, 68, 83, 70, 81, 68, 81, 68, 81, 68, 32, 32, 46, 30, 76, 65, 76, 65, 72, 64, 61, 30, 59, 32, 59, 32, 59, 32, 93, 110, 95, 100, 93, 110, 81, 68, 82, 70, 81, 68, 81, 68, 87, 67, 85, 68, 87, 67, 87, 67, 66, 69, 61, 69, 70, 45, 76, 47, 70, 45, 70, 45, 59, 56, 75, 57, 59, 56, 59, 56, 59, 56, 70, 41, 68, 43, 70, 41, 70, 41, 76, 68, 76, 68, 76, 68, 81, 70, 76, 68, 75, 65, 75, 65, 110, 90, 110, 90, 110, 90, 94, 85, 110, 90, 69, 67, 69, 67, 69, 57, 67, 63, 75, 58, 67, 63, 68, 41, 85, 57, 61, 36, 47, 46, 92, 55, 75, 66, 75, 66, 75, 66, 75, 66, 75, 66, 75, 66, 75, 66, 75, 66, 75, 66, 75, 66, 75, 66, 75, 66, 70, 66, 70, 66, 70, 66, 70, 66, 70, 66, 70, 66, 70, 66, 70, 66, 46, 30, 46, 30, 87, 67, 87, 67, 87, 67, 87, 67, 87, 67, 87, 67, 87, 67, 89, 67, 89, 67, 89, 67, 89, 67, 89, 67, 81, 70, 81, 70, 83, 73, 83, 73, 83, 73, 83, 73, 83, 73, 68, 65, 68, 65, 68, 65, 68, 65, 100, 65, 56, 49, 50, 50, 76, 76, 76, 76, 76, 76, 76, 76, 76, 79, 100, 100, 97, 98, 86, 84, 52, 52, 52, 52, 52, 52, 79, 79, 79, 79, 100, 100, 100, 100, 79, 79, 68, 68, 68, 68, 68, 68, 68, 68, 100, 100, 120, 120, 120, 120, 110, 100, 40, 40, 40, 40, 40, 40, 40, 40, 51, 51, 73, 75, 73, 74, 60, 56, 68, 68, 68, 68, 68, 68, 79, 79, 100, 100, 130, 130, 120, 76, 79, 79, 66, 66, 66, 66, 66, 66, 66, 66, 79, 96, 79, 120, 79, 120, 79, 100, 99, 99, 99, 99, 99, 99, 99, 99, 100, 110, 130, 130, 120, 120, 110, 110, 69, 69, 56, 56, 70, 70, 30, 30, 67, 67, 69, 69, 89, 89, 79, 79, 76, 76, 76, 76, 76, 76, 76, 76, 120, 120, 140, 140, 140, 140, 130, 120, 68, 68, 68, 68, 68, 68, 68, 68, 140, 140, 160, 160, 160, 160, 150, 150, 99, 99, 99, 99, 99, 99, 99, 99, 140, 150, 170, 170, 160, 160, 150, 150, 76, 76, 76, 76, 76, 79, 76, 76, 76, 76, 75, 75, 120, 68, 30, 68, 68, 68, 68, 68, 68, 79, 68, 68, 70, 83, 83, 96, 120, 68, 68, 68, 40, 40, 30, 30, 79, 79, 40, 40, 32, 32, 46, 59, 79, 68, 68, 68, 66, 66, 69, 69, 67, 67, 66, 66, 70, 70, 68, 83, 80, 70, 70, 70, 79, 79, 99, 99, 99, 79, 99, 99, 87, 97, 90, 100, 130, 70, 68, 79, 55, 110, 55, 110, 37, 28, 18, 70, 40, 22, 6.9, 0, 0, 0, 0, 0, 64, 64, 70, 70, 110, 110, 65, 70, 30, 30, 30, 30, 50, 50, 50, 50, 70, 70, 60, 52, 37, 52, 90, 35, 0, 0, 0, 0, 0, 0, 0, 19, 170, 150, 40, 61, 61, 36, 60, 83, 39, 50, 50, 79, 69, 46, 70, 55, 55, 51, 100, 36, 40, 36, 36, 89, 78, 78, 70, 70, 60, 60, 53, 35, 55, 53, 61, 110, 55, 77, 65, 110, 65, 65, 110, 65, 77, 110, 31, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 24, 79, 79, 60, 60, 46, 60, 60, 46, 46, 46, 46, 25, 25, 60, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 25, 25, 79, 31, 31, 31, 28, 31, 66, 66, 66, 66, 66, 66, 66, 66, 79, 79, 79, 70, 77, 77, 70, 70, 110, 82, 130, 130, 110, 92, 69];
});

A(exports, {
  badgen: function badgen() {
    return V;
  },
  calcWidth: function calcWidth() {
    return x;
  }
});

var S = k(),
    T = function T(t) {
  var e = t[64];
  return function (_ref) {
    var _ref2 = _toArray(_ref),
        i = _ref2.slice(0);

    var r = 0,
        g = 0,
        n = i.length;

    for (; n--;) {
      g = t[i[n].charCodeAt()], r += g === void 0 ? e : g;
    }

    return r;
  };
},
    x = T(S);

var d = {
  green: "3C1",
  blue: "08C",
  red: "E43",
  yellow: "DB1",
  orange: "F73",
  purple: "94E",
  pink: "E5B",
  grey: "999",
  gray: "999",
  cyan: "1BC",
  black: "2A2A2A"
};

function V(_ref3) {
  var t = _ref3.label,
      e = _ref3.subject,
      i = _ref3.status,
      _ref3$color = _ref3.color,
      r = _ref3$color === void 0 ? "blue" : _ref3$color,
      g = _ref3.style,
      n = _ref3.icon,
      _ref3$iconWidth = _ref3.iconWidth,
      h = _ref3$iconWidth === void 0 ? 13 : _ref3$iconWidth,
      _ref3$labelColor = _ref3.labelColor,
      f = _ref3$labelColor === void 0 ? "555" : _ref3$labelColor,
      _ref3$scale = _ref3.scale,
      l = _ref3$scale === void 0 ? 1 : _ref3$scale;
  if (L(typeof i == "string", "<status> must be string"), t = t === void 0 ? e : t, !t && !n) return W({
    status: i,
    color: r,
    style: g,
    scale: l
  });
  r = d[r] || r, f = d[f] || f, h = h * 10;
  var m = n ? t.length ? h + 30 : h - 18 : 0,
      c = n ? m + 50 : 50,
      o = x(t),
      $ = x(i),
      a = o + 100 + m,
      w = $ + 100,
      s = a + w,
      u = n ? ' xmlns:xlink="http://www.w3.org/1999/xlink"' : "";
  t = y(t), i = y(i);
  var p = j({
    label: t,
    status: i
  });
  return g === "flat" ? "<svg width=\"".concat(l * s / 10, "\" height=\"").concat(l * 20, "\" viewBox=\"0 0 ").concat(s, " 200\" xmlns=\"http://www.w3.org/2000/svg\"").concat(u, " role=\"img\" aria-label=\"").concat(p, "\">\n  <title>").concat(p, "</title>\n  <g>\n    <rect fill=\"#").concat(f, "\" width=\"").concat(a, "\" height=\"200\"/>\n    <rect fill=\"#").concat(r, "\" x=\"").concat(a, "\" width=\"").concat(w, "\" height=\"200\"/>\n  </g>\n  <g aria-hidden=\"true\" fill=\"#fff\" text-anchor=\"start\" font-family=\"Verdana,DejaVu Sans,sans-serif\" font-size=\"110\">\n    <text x=\"").concat(c + 10, "\" y=\"148\" textLength=\"").concat(o, "\" fill=\"#000\" opacity=\"0.1\">").concat(t, "</text>\n    <text x=\"").concat(c, "\" y=\"138\" textLength=\"").concat(o, "\">").concat(t, "</text>\n    <text x=\"").concat(a + 55, "\" y=\"148\" textLength=\"").concat($, "\" fill=\"#000\" opacity=\"0.1\">").concat(i, "</text>\n    <text x=\"").concat(a + 45, "\" y=\"138\" textLength=\"").concat($, "\">").concat(i, "</text>\n  </g>\n  ").concat(n ? "<image x=\"40\" y=\"35\" width=\"".concat(h, "\" height=\"132\" xlink:href=\"").concat(n, "\"/>") : "", "\n</svg>") : "<svg width=\"".concat(l * s / 10, "\" height=\"").concat(l * 20, "\" viewBox=\"0 0 ").concat(s, " 200\" xmlns=\"http://www.w3.org/2000/svg\"").concat(u, " role=\"img\" aria-label=\"").concat(p, "\">\n  <title>").concat(p, "</title>\n  <linearGradient id=\"a\" x2=\"0\" y2=\"100%\">\n    <stop offset=\"0\" stop-opacity=\".1\" stop-color=\"#EEE\"/>\n    <stop offset=\"1\" stop-opacity=\".1\"/>\n  </linearGradient>\n  <mask id=\"m\"><rect width=\"").concat(s, "\" height=\"200\" rx=\"30\" fill=\"#FFF\"/></mask>\n  <g mask=\"url(#m)\">\n    <rect width=\"").concat(a, "\" height=\"200\" fill=\"#").concat(f, "\"/>\n    <rect width=\"").concat(w, "\" height=\"200\" fill=\"#").concat(r, "\" x=\"").concat(a, "\"/>\n    <rect width=\"").concat(s, "\" height=\"200\" fill=\"url(#a)\"/>\n  </g>\n  <g aria-hidden=\"true\" fill=\"#fff\" text-anchor=\"start\" font-family=\"Verdana,DejaVu Sans,sans-serif\" font-size=\"110\">\n    <text x=\"").concat(c + 10, "\" y=\"148\" textLength=\"").concat(o, "\" fill=\"#000\" opacity=\"0.25\">").concat(t, "</text>\n    <text x=\"").concat(c, "\" y=\"138\" textLength=\"").concat(o, "\">").concat(t, "</text>\n    <text x=\"").concat(a + 55, "\" y=\"148\" textLength=\"").concat($, "\" fill=\"#000\" opacity=\"0.25\">").concat(i, "</text>\n    <text x=\"").concat(a + 45, "\" y=\"138\" textLength=\"").concat($, "\">").concat(i, "</text>\n  </g>\n  ").concat(n ? "<image x=\"40\" y=\"35\" width=\"".concat(h, "\" height=\"130\" xlink:href=\"").concat(n, "\"/>") : "", "\n</svg>");
}

function W(_ref4) {
  var t = _ref4.status,
      e = _ref4.color,
      i = _ref4.style,
      r = _ref4.scale;
  L(typeof t == "string", "<status> must be string"), e = d[e] || e || d.blue;
  var g = x(t),
      n = g + 115;
  return t = y(t), i === "flat" ? "<svg width=\"".concat(r * n / 10, "\" height=\"").concat(r * 20, "\" viewBox=\"0 0 ").concat(n, " 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"").concat(t, "\">\n  <title>").concat(t, "</title>\n  <g>\n    <rect fill=\"#").concat(e, "\" x=\"0\" width=\"").concat(n, "\" height=\"200\"/>\n  </g>\n  <g aria-hidden=\"true\" fill=\"#fff\" text-anchor=\"start\" font-family=\"Verdana,DejaVu Sans,sans-serif\" font-size=\"110\">\n    <text x=\"65\" y=\"148\" textLength=\"").concat(g, "\" fill=\"#000\" opacity=\"0.1\">").concat(t, "</text>\n    <text x=\"55\" y=\"138\" textLength=\"").concat(g, "\">").concat(t, "</text>\n  </g>\n</svg>") : "<svg width=\"".concat(r * n / 10, "\" height=\"").concat(r * 20, "\" viewBox=\"0 0 ").concat(n, " 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"").concat(t, "\">\n  <title>").concat(t, "</title>\n  <linearGradient id=\"a\" x2=\"0\" y2=\"100%\">\n    <stop offset=\"0\" stop-opacity=\".1\" stop-color=\"#EEE\"/>\n    <stop offset=\"1\" stop-opacity=\".1\"/>\n  </linearGradient>\n  <mask id=\"m\"><rect width=\"").concat(n, "\" height=\"200\" rx=\"30\" fill=\"#FFF\"/></mask>\n  <g mask=\"url(#m)\">\n    <rect width=\"").concat(n, "\" height=\"200\" fill=\"#").concat(e, "\" x=\"0\"/>\n    <rect width=\"").concat(n, "\" height=\"200\" fill=\"url(#a)\"/>\n  </g>\n  <g aria-hidden=\"true\" fill=\"#fff\" text-anchor=\"start\" font-family=\"Verdana,DejaVu Sans,sans-serif\" font-size=\"110\">\n    <text x=\"65\" y=\"148\" textLength=\"").concat(g, "\" fill=\"#000\" opacity=\"0.25\">").concat(t, "</text>\n    <text x=\"55\" y=\"138\" textLength=\"").concat(g, "\">").concat(t, "</text>\n  </g>\n</svg>");
}

function y(t) {
  return t.replace(/\u0026/g, "&amp;").replace(/\u003C/g, "&lt;").replace(/\u003E/g, "&gt;").replace(/\u0022/g, "&quot;").replace(/\u0027/g, "&apos;");
}

function j(_ref5) {
  var t = _ref5.label,
      e = _ref5.status;
  var i = t ? "".concat(t, ": ") : "";
  return i + e;
}

function L(t, e) {
  if (!t) throw new TypeError(e);
}

typeof window == "object" && (window.badgen = V);

/***/ }),

/***/ 1081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(4527);

var path = __webpack_require__(1017);

var mkdirsSync = (__webpack_require__(5027).mkdirsSync);

var utimesMillisSync = (__webpack_require__(2818).utimesMillisSync);

var stat = __webpack_require__(1577);

function copySync(src, dest, opts) {
  if (typeof opts === 'function') {
    opts = {
      filter: opts
    };
  }

  opts = opts || {};
  opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now

  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber
  // Warn about using preserveTimestamps on 32-bit node

  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269");
  }

  var _stat$checkPathsSync = stat.checkPathsSync(src, dest, 'copy', opts),
      srcStat = _stat$checkPathsSync.srcStat,
      destStat = _stat$checkPathsSync.destStat;

  stat.checkParentPathsSync(src, srcStat, dest, 'copy');
  return handleFilterAndCopy(destStat, src, dest, opts);
}

function handleFilterAndCopy(destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return;
  var destParent = path.dirname(dest);
  if (!fs.existsSync(destParent)) mkdirsSync(destParent);
  return getStats(destStat, src, dest, opts);
}

function startCopy(destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return;
  return getStats(destStat, src, dest, opts);
}

function getStats(destStat, src, dest, opts) {
  var statSync = opts.dereference ? fs.statSync : fs.lstatSync;
  var srcStat = statSync(src);
  if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);else if (srcStat.isSocket()) throw new Error("Cannot copy a socket file: ".concat(src));else if (srcStat.isFIFO()) throw new Error("Cannot copy a FIFO pipe: ".concat(src));
  throw new Error("Unknown file: ".concat(src));
}

function onFile(srcStat, destStat, src, dest, opts) {
  if (!destStat) return copyFile(srcStat, src, dest, opts);
  return mayCopyFile(srcStat, src, dest, opts);
}

function mayCopyFile(srcStat, src, dest, opts) {
  if (opts.overwrite) {
    fs.unlinkSync(dest);
    return copyFile(srcStat, src, dest, opts);
  } else if (opts.errorOnExist) {
    throw new Error("'".concat(dest, "' already exists"));
  }
}

function copyFile(srcStat, src, dest, opts) {
  fs.copyFileSync(src, dest);
  if (opts.preserveTimestamps) handleTimestamps(srcStat.mode, src, dest);
  return setDestMode(dest, srcStat.mode);
}

function handleTimestamps(srcMode, src, dest) {
  // Make sure the file is writable before setting the timestamp
  // otherwise open fails with EPERM when invoked with 'r+'
  // (through utimes call)
  if (fileIsNotWritable(srcMode)) makeFileWritable(dest, srcMode);
  return setDestTimestamps(src, dest);
}

function fileIsNotWritable(srcMode) {
  return (srcMode & 128) === 0;
}

function makeFileWritable(dest, srcMode) {
  return setDestMode(dest, srcMode | 128);
}

function setDestMode(dest, srcMode) {
  return fs.chmodSync(dest, srcMode);
}

function setDestTimestamps(src, dest) {
  // The initial srcStat.atime cannot be trusted
  // because it is modified by the read(2) system call
  // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
  var updatedSrcStat = fs.statSync(src);
  return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
}

function onDir(srcStat, destStat, src, dest, opts) {
  if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts);
  return copyDir(src, dest, opts);
}

function mkDirAndCopy(srcMode, src, dest, opts) {
  fs.mkdirSync(dest);
  copyDir(src, dest, opts);
  return setDestMode(dest, srcMode);
}

function copyDir(src, dest, opts) {
  fs.readdirSync(src).forEach(function (item) {
    return copyDirItem(item, src, dest, opts);
  });
}

function copyDirItem(item, src, dest, opts) {
  var srcItem = path.join(src, item);
  var destItem = path.join(dest, item);

  var _stat$checkPathsSync2 = stat.checkPathsSync(srcItem, destItem, 'copy', opts),
      destStat = _stat$checkPathsSync2.destStat;

  return startCopy(destStat, srcItem, destItem, opts);
}

function onLink(destStat, src, dest, opts) {
  var resolvedSrc = fs.readlinkSync(src);

  if (opts.dereference) {
    resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
  }

  if (!destStat) {
    return fs.symlinkSync(resolvedSrc, dest);
  } else {
    var resolvedDest;

    try {
      resolvedDest = fs.readlinkSync(dest);
    } catch (err) {
      // dest exists and is a regular file or directory,
      // Windows may throw UNKNOWN error. If dest already exists,
      // fs throws error anyway, so no need to guard against it here.
      if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlinkSync(resolvedSrc, dest);
      throw err;
    }

    if (opts.dereference) {
      resolvedDest = path.resolve(process.cwd(), resolvedDest);
    }

    if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
      throw new Error("Cannot copy '".concat(resolvedSrc, "' to a subdirectory of itself, '").concat(resolvedDest, "'."));
    } // prevent copy if src is a subdir of dest since unlinking
    // dest in this case would result in removing src contents
    // and therefore a broken symlink would be created.


    if (fs.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
      throw new Error("Cannot overwrite '".concat(resolvedDest, "' with '").concat(resolvedSrc, "'."));
    }

    return copyLink(resolvedSrc, dest);
  }
}

function copyLink(resolvedSrc, dest) {
  fs.unlinkSync(dest);
  return fs.symlinkSync(resolvedSrc, dest);
}

module.exports = copySync;

/***/ }),

/***/ 2264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(4527);

var path = __webpack_require__(1017);

var mkdirs = (__webpack_require__(5027).mkdirs);

var pathExists = (__webpack_require__(9109).pathExists);

var utimesMillis = (__webpack_require__(2818).utimesMillis);

var stat = __webpack_require__(1577);

function copy(src, dest, opts, cb) {
  if (typeof opts === 'function' && !cb) {
    cb = opts;
    opts = {};
  } else if (typeof opts === 'function') {
    opts = {
      filter: opts
    };
  }

  cb = cb || function () {};

  opts = opts || {};
  opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now

  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber
  // Warn about using preserveTimestamps on 32-bit node

  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269");
  }

  stat.checkPaths(src, dest, 'copy', opts, function (err, stats) {
    if (err) return cb(err);
    var srcStat = stats.srcStat,
        destStat = stats.destStat;
    stat.checkParentPaths(src, srcStat, dest, 'copy', function (err) {
      if (err) return cb(err);
      if (opts.filter) return handleFilter(checkParentDir, destStat, src, dest, opts, cb);
      return checkParentDir(destStat, src, dest, opts, cb);
    });
  });
}

function checkParentDir(destStat, src, dest, opts, cb) {
  var destParent = path.dirname(dest);
  pathExists(destParent, function (err, dirExists) {
    if (err) return cb(err);
    if (dirExists) return getStats(destStat, src, dest, opts, cb);
    mkdirs(destParent, function (err) {
      if (err) return cb(err);
      return getStats(destStat, src, dest, opts, cb);
    });
  });
}

function handleFilter(onInclude, destStat, src, dest, opts, cb) {
  Promise.resolve(opts.filter(src, dest)).then(function (include) {
    if (include) return onInclude(destStat, src, dest, opts, cb);
    return cb();
  }, function (error) {
    return cb(error);
  });
}

function startCopy(destStat, src, dest, opts, cb) {
  if (opts.filter) return handleFilter(getStats, destStat, src, dest, opts, cb);
  return getStats(destStat, src, dest, opts, cb);
}

function getStats(destStat, src, dest, opts, cb) {
  var stat = opts.dereference ? fs.stat : fs.lstat;
  stat(src, function (err, srcStat) {
    if (err) return cb(err);
    if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts, cb);else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts, cb);else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts, cb);else if (srcStat.isSocket()) return cb(new Error("Cannot copy a socket file: ".concat(src)));else if (srcStat.isFIFO()) return cb(new Error("Cannot copy a FIFO pipe: ".concat(src)));
    return cb(new Error("Unknown file: ".concat(src)));
  });
}

function onFile(srcStat, destStat, src, dest, opts, cb) {
  if (!destStat) return copyFile(srcStat, src, dest, opts, cb);
  return mayCopyFile(srcStat, src, dest, opts, cb);
}

function mayCopyFile(srcStat, src, dest, opts, cb) {
  if (opts.overwrite) {
    fs.unlink(dest, function (err) {
      if (err) return cb(err);
      return copyFile(srcStat, src, dest, opts, cb);
    });
  } else if (opts.errorOnExist) {
    return cb(new Error("'".concat(dest, "' already exists")));
  } else return cb();
}

function copyFile(srcStat, src, dest, opts, cb) {
  fs.copyFile(src, dest, function (err) {
    if (err) return cb(err);
    if (opts.preserveTimestamps) return handleTimestampsAndMode(srcStat.mode, src, dest, cb);
    return setDestMode(dest, srcStat.mode, cb);
  });
}

function handleTimestampsAndMode(srcMode, src, dest, cb) {
  // Make sure the file is writable before setting the timestamp
  // otherwise open fails with EPERM when invoked with 'r+'
  // (through utimes call)
  if (fileIsNotWritable(srcMode)) {
    return makeFileWritable(dest, srcMode, function (err) {
      if (err) return cb(err);
      return setDestTimestampsAndMode(srcMode, src, dest, cb);
    });
  }

  return setDestTimestampsAndMode(srcMode, src, dest, cb);
}

function fileIsNotWritable(srcMode) {
  return (srcMode & 128) === 0;
}

function makeFileWritable(dest, srcMode, cb) {
  return setDestMode(dest, srcMode | 128, cb);
}

function setDestTimestampsAndMode(srcMode, src, dest, cb) {
  setDestTimestamps(src, dest, function (err) {
    if (err) return cb(err);
    return setDestMode(dest, srcMode, cb);
  });
}

function setDestMode(dest, srcMode, cb) {
  return fs.chmod(dest, srcMode, cb);
}

function setDestTimestamps(src, dest, cb) {
  // The initial srcStat.atime cannot be trusted
  // because it is modified by the read(2) system call
  // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
  fs.stat(src, function (err, updatedSrcStat) {
    if (err) return cb(err);
    return utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime, cb);
  });
}

function onDir(srcStat, destStat, src, dest, opts, cb) {
  if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts, cb);
  return copyDir(src, dest, opts, cb);
}

function mkDirAndCopy(srcMode, src, dest, opts, cb) {
  fs.mkdir(dest, function (err) {
    if (err) return cb(err);
    copyDir(src, dest, opts, function (err) {
      if (err) return cb(err);
      return setDestMode(dest, srcMode, cb);
    });
  });
}

function copyDir(src, dest, opts, cb) {
  fs.readdir(src, function (err, items) {
    if (err) return cb(err);
    return copyDirItems(items, src, dest, opts, cb);
  });
}

function copyDirItems(items, src, dest, opts, cb) {
  var item = items.pop();
  if (!item) return cb();
  return copyDirItem(items, item, src, dest, opts, cb);
}

function copyDirItem(items, item, src, dest, opts, cb) {
  var srcItem = path.join(src, item);
  var destItem = path.join(dest, item);
  stat.checkPaths(srcItem, destItem, 'copy', opts, function (err, stats) {
    if (err) return cb(err);
    var destStat = stats.destStat;
    startCopy(destStat, srcItem, destItem, opts, function (err) {
      if (err) return cb(err);
      return copyDirItems(items, src, dest, opts, cb);
    });
  });
}

function onLink(destStat, src, dest, opts, cb) {
  fs.readlink(src, function (err, resolvedSrc) {
    if (err) return cb(err);

    if (opts.dereference) {
      resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
    }

    if (!destStat) {
      return fs.symlink(resolvedSrc, dest, cb);
    } else {
      fs.readlink(dest, function (err, resolvedDest) {
        if (err) {
          // dest exists and is a regular file or directory,
          // Windows may throw UNKNOWN error. If dest already exists,
          // fs throws error anyway, so no need to guard against it here.
          if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlink(resolvedSrc, dest, cb);
          return cb(err);
        }

        if (opts.dereference) {
          resolvedDest = path.resolve(process.cwd(), resolvedDest);
        }

        if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
          return cb(new Error("Cannot copy '".concat(resolvedSrc, "' to a subdirectory of itself, '").concat(resolvedDest, "'.")));
        } // do not copy if src is a subdir of dest since unlinking
        // dest in this case would result in removing src contents
        // and therefore a broken symlink would be created.


        if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
          return cb(new Error("Cannot overwrite '".concat(resolvedDest, "' with '").concat(resolvedSrc, "'.")));
        }

        return copyLink(resolvedSrc, dest, cb);
      });
    }
  });
}

function copyLink(resolvedSrc, dest, cb) {
  fs.unlink(dest, function (err) {
    if (err) return cb(err);
    return fs.symlink(resolvedSrc, dest, cb);
  });
}

module.exports = copy;

/***/ }),

/***/ 5470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var u = (__webpack_require__(7385).fromCallback);

module.exports = {
  copy: u(__webpack_require__(2264)),
  copySync: __webpack_require__(1081)
};

/***/ }),

/***/ 1032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = __webpack_require__(7757);

var _asyncToGenerator = (__webpack_require__(8926)["default"]);

var u = (__webpack_require__(7385).fromPromise);

var fs = __webpack_require__(9278);

var path = __webpack_require__(1017);

var mkdir = __webpack_require__(5027);

var remove = __webpack_require__(177);

var emptyDir = u( /*#__PURE__*/function () {
  var _emptyDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(dir) {
    var items;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fs.readdir(dir);

          case 3:
            items = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", mkdir.mkdirs(dir));

          case 9:
            return _context.abrupt("return", Promise.all(items.map(function (item) {
              return remove.remove(path.join(dir, item));
            })));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  function emptyDir(_x) {
    return _emptyDir.apply(this, arguments);
  }

  return emptyDir;
}());

function emptyDirSync(dir) {
  var items;

  try {
    items = fs.readdirSync(dir);
  } catch (_unused2) {
    return mkdir.mkdirsSync(dir);
  }

  items.forEach(function (item) {
    item = path.join(dir, item);
    remove.removeSync(item);
  });
}

module.exports = {
  emptyDirSync: emptyDirSync,
  emptydirSync: emptyDirSync,
  emptyDir: emptyDir,
  emptydir: emptyDir
};

/***/ }),

/***/ 2060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var u = (__webpack_require__(7385).fromCallback);

var path = __webpack_require__(1017);

var fs = __webpack_require__(4527);

var mkdir = __webpack_require__(5027);

function createFile(file, callback) {
  function makeFile() {
    fs.writeFile(file, '', function (err) {
      if (err) return callback(err);
      callback();
    });
  }

  fs.stat(file, function (err, stats) {
    // eslint-disable-line handle-callback-err
    if (!err && stats.isFile()) return callback();
    var dir = path.dirname(file);
    fs.stat(dir, function (err, stats) {
      if (err) {
        // if the directory doesn't exist, make it
        if (err.code === 'ENOENT') {
          return mkdir.mkdirs(dir, function (err) {
            if (err) return callback(err);
            makeFile();
          });
        }

        return callback(err);
      }

      if (stats.isDirectory()) makeFile();else {
        // parent is not a directory
        // This is just to cause an internal ENOTDIR error to be thrown
        fs.readdir(dir, function (err) {
          if (err) return callback(err);
        });
      }
    });
  });
}

function createFileSync(file) {
  var stats;

  try {
    stats = fs.statSync(file);
  } catch (_unused) {}

  if (stats && stats.isFile()) return;
  var dir = path.dirname(file);

  try {
    if (!fs.statSync(dir).isDirectory()) {
      // parent is not a directory
      // This is just to cause an internal ENOTDIR error to be thrown
      fs.readdirSync(dir);
    }
  } catch (err) {
    // If the stat call above failed because the directory doesn't exist, create it
    if (err && err.code === 'ENOENT') mkdir.mkdirsSync(dir);else throw err;
  }

  fs.writeFileSync(file, '');
}

module.exports = {
  createFile: u(createFile),
  createFileSync: createFileSync
};

/***/ }),

/***/ 7951:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(2060),
    createFile = _require.createFile,
    createFileSync = _require.createFileSync;

var _require2 = __webpack_require__(5613),
    createLink = _require2.createLink,
    createLinkSync = _require2.createLinkSync;

var _require3 = __webpack_require__(6761),
    createSymlink = _require3.createSymlink,
    createSymlinkSync = _require3.createSymlinkSync;

module.exports = {
  // file
  createFile: createFile,
  createFileSync: createFileSync,
  ensureFile: createFile,
  ensureFileSync: createFileSync,
  // link
  createLink: createLink,
  createLinkSync: createLinkSync,
  ensureLink: createLink,
  ensureLinkSync: createLinkSync,
  // symlink
  createSymlink: createSymlink,
  createSymlinkSync: createSymlinkSync,
  ensureSymlink: createSymlink,
  ensureSymlinkSync: createSymlinkSync
};

/***/ }),

/***/ 5613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var u = (__webpack_require__(7385).fromCallback);

var path = __webpack_require__(1017);

var fs = __webpack_require__(4527);

var mkdir = __webpack_require__(5027);

var pathExists = (__webpack_require__(9109).pathExists);

var _require = __webpack_require__(1577),
    areIdentical = _require.areIdentical;

function createLink(srcpath, dstpath, callback) {
  function makeLink(srcpath, dstpath) {
    fs.link(srcpath, dstpath, function (err) {
      if (err) return callback(err);
      callback(null);
    });
  }

  fs.lstat(dstpath, function (_, dstStat) {
    fs.lstat(srcpath, function (err, srcStat) {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink');
        return callback(err);
      }

      if (dstStat && areIdentical(srcStat, dstStat)) return callback(null);
      var dir = path.dirname(dstpath);
      pathExists(dir, function (err, dirExists) {
        if (err) return callback(err);
        if (dirExists) return makeLink(srcpath, dstpath);
        mkdir.mkdirs(dir, function (err) {
          if (err) return callback(err);
          makeLink(srcpath, dstpath);
        });
      });
    });
  });
}

function createLinkSync(srcpath, dstpath) {
  var dstStat;

  try {
    dstStat = fs.lstatSync(dstpath);
  } catch (_unused) {}

  try {
    var srcStat = fs.lstatSync(srcpath);
    if (dstStat && areIdentical(srcStat, dstStat)) return;
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink');
    throw err;
  }

  var dir = path.dirname(dstpath);
  var dirExists = fs.existsSync(dir);
  if (dirExists) return fs.linkSync(srcpath, dstpath);
  mkdir.mkdirsSync(dir);
  return fs.linkSync(srcpath, dstpath);
}

module.exports = {
  createLink: u(createLink),
  createLinkSync: createLinkSync
};

/***/ }),

/***/ 6918:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var path = __webpack_require__(1017);

var fs = __webpack_require__(4527);

var pathExists = (__webpack_require__(9109).pathExists);
/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */


function symlinkPaths(srcpath, dstpath, callback) {
  if (path.isAbsolute(srcpath)) {
    return fs.lstat(srcpath, function (err) {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureSymlink');
        return callback(err);
      }

      return callback(null, {
        toCwd: srcpath,
        toDst: srcpath
      });
    });
  } else {
    var dstdir = path.dirname(dstpath);
    var relativeToDst = path.join(dstdir, srcpath);
    return pathExists(relativeToDst, function (err, exists) {
      if (err) return callback(err);

      if (exists) {
        return callback(null, {
          toCwd: relativeToDst,
          toDst: srcpath
        });
      } else {
        return fs.lstat(srcpath, function (err) {
          if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink');
            return callback(err);
          }

          return callback(null, {
            toCwd: srcpath,
            toDst: path.relative(dstdir, srcpath)
          });
        });
      }
    });
  }
}

function symlinkPathsSync(srcpath, dstpath) {
  var exists;

  if (path.isAbsolute(srcpath)) {
    exists = fs.existsSync(srcpath);
    if (!exists) throw new Error('absolute srcpath does not exist');
    return {
      toCwd: srcpath,
      toDst: srcpath
    };
  } else {
    var dstdir = path.dirname(dstpath);
    var relativeToDst = path.join(dstdir, srcpath);
    exists = fs.existsSync(relativeToDst);

    if (exists) {
      return {
        toCwd: relativeToDst,
        toDst: srcpath
      };
    } else {
      exists = fs.existsSync(srcpath);
      if (!exists) throw new Error('relative srcpath does not exist');
      return {
        toCwd: srcpath,
        toDst: path.relative(dstdir, srcpath)
      };
    }
  }
}

module.exports = {
  symlinkPaths: symlinkPaths,
  symlinkPathsSync: symlinkPathsSync
};

/***/ }),

/***/ 3249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(4527);

function symlinkType(srcpath, type, callback) {
  callback = typeof type === 'function' ? type : callback;
  type = typeof type === 'function' ? false : type;
  if (type) return callback(null, type);
  fs.lstat(srcpath, function (err, stats) {
    if (err) return callback(null, 'file');
    type = stats && stats.isDirectory() ? 'dir' : 'file';
    callback(null, type);
  });
}

function symlinkTypeSync(srcpath, type) {
  var stats;
  if (type) return type;

  try {
    stats = fs.lstatSync(srcpath);
  } catch (_unused) {
    return 'file';
  }

  return stats && stats.isDirectory() ? 'dir' : 'file';
}

module.exports = {
  symlinkType: symlinkType,
  symlinkTypeSync: symlinkTypeSync
};

/***/ }),

/***/ 6761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _slicedToArray = (__webpack_require__(3038)["default"]);

var u = (__webpack_require__(7385).fromCallback);

var path = __webpack_require__(1017);

var fs = __webpack_require__(9278);

var _mkdirs = __webpack_require__(5027);

var mkdirs = _mkdirs.mkdirs;
var mkdirsSync = _mkdirs.mkdirsSync;

var _symlinkPaths = __webpack_require__(6918);

var symlinkPaths = _symlinkPaths.symlinkPaths;
var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;

var _symlinkType = __webpack_require__(3249);

var symlinkType = _symlinkType.symlinkType;
var symlinkTypeSync = _symlinkType.symlinkTypeSync;

var pathExists = (__webpack_require__(9109).pathExists);

var _require = __webpack_require__(1577),
    areIdentical = _require.areIdentical;

function createSymlink(srcpath, dstpath, type, callback) {
  callback = typeof type === 'function' ? type : callback;
  type = typeof type === 'function' ? false : type;
  fs.lstat(dstpath, function (err, stats) {
    if (!err && stats.isSymbolicLink()) {
      Promise.all([fs.stat(srcpath), fs.stat(dstpath)]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            srcStat = _ref2[0],
            dstStat = _ref2[1];

        if (areIdentical(srcStat, dstStat)) return callback(null);

        _createSymlink(srcpath, dstpath, type, callback);
      });
    } else _createSymlink(srcpath, dstpath, type, callback);
  });
}

function _createSymlink(srcpath, dstpath, type, callback) {
  symlinkPaths(srcpath, dstpath, function (err, relative) {
    if (err) return callback(err);
    srcpath = relative.toDst;
    symlinkType(relative.toCwd, type, function (err, type) {
      if (err) return callback(err);
      var dir = path.dirname(dstpath);
      pathExists(dir, function (err, dirExists) {
        if (err) return callback(err);
        if (dirExists) return fs.symlink(srcpath, dstpath, type, callback);
        mkdirs(dir, function (err) {
          if (err) return callback(err);
          fs.symlink(srcpath, dstpath, type, callback);
        });
      });
    });
  });
}

function createSymlinkSync(srcpath, dstpath, type) {
  var stats;

  try {
    stats = fs.lstatSync(dstpath);
  } catch (_unused) {}

  if (stats && stats.isSymbolicLink()) {
    var srcStat = fs.statSync(srcpath);
    var dstStat = fs.statSync(dstpath);
    if (areIdentical(srcStat, dstStat)) return;
  }

  var relative = symlinkPathsSync(srcpath, dstpath);
  srcpath = relative.toDst;
  type = symlinkTypeSync(relative.toCwd, type);
  var dir = path.dirname(dstpath);
  var exists = fs.existsSync(dir);
  if (exists) return fs.symlinkSync(srcpath, dstpath, type);
  mkdirsSync(dir);
  return fs.symlinkSync(srcpath, dstpath, type);
}

module.exports = {
  createSymlink: u(createSymlink),
  createSymlinkSync: createSymlinkSync
};

/***/ }),

/***/ 9278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
 // This is adapted from https://github.com/normalize/mz
// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors

var u = (__webpack_require__(7385).fromCallback);

var fs = __webpack_require__(4527);

var api = ['access', 'appendFile', 'chmod', 'chown', 'close', 'copyFile', 'fchmod', 'fchown', 'fdatasync', 'fstat', 'fsync', 'ftruncate', 'futimes', 'lchmod', 'lchown', 'link', 'lstat', 'mkdir', 'mkdtemp', 'open', 'opendir', 'readdir', 'readFile', 'readlink', 'realpath', 'rename', 'rm', 'rmdir', 'stat', 'symlink', 'truncate', 'unlink', 'utimes', 'writeFile'].filter(function (key) {
  // Some commands are not available on some systems. Ex:
  // fs.opendir was added in Node.js v12.12.0
  // fs.rm was added in Node.js v14.14.0
  // fs.lchown is not available on at least some Linux
  return typeof fs[key] === 'function';
}); // Export cloned fs:

Object.assign(exports, fs); // Universalify async methods:

api.forEach(function (method) {
  exports[method] = u(fs[method]);
});
exports.realpath.native = u(fs.realpath["native"]); // We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module

exports.exists = function (filename, callback) {
  if (typeof callback === 'function') {
    return fs.exists(filename, callback);
  }

  return new Promise(function (resolve) {
    return fs.exists(filename, resolve);
  });
}; // fs.read(), fs.write(), & fs.writev() need special treatment due to multiple callback args


exports.read = function (fd, buffer, offset, length, position, callback) {
  if (typeof callback === 'function') {
    return fs.read(fd, buffer, offset, length, position, callback);
  }

  return new Promise(function (resolve, reject) {
    fs.read(fd, buffer, offset, length, position, function (err, bytesRead, buffer) {
      if (err) return reject(err);
      resolve({
        bytesRead: bytesRead,
        buffer: buffer
      });
    });
  });
}; // Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// We need to handle both cases, so we use ...args


exports.write = function (fd, buffer) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (typeof args[args.length - 1] === 'function') {
    return fs.write.apply(fs, [fd, buffer].concat(args));
  }

  return new Promise(function (resolve, reject) {
    fs.write.apply(fs, [fd, buffer].concat(args, [function (err, bytesWritten, buffer) {
      if (err) return reject(err);
      resolve({
        bytesWritten: bytesWritten,
        buffer: buffer
      });
    }]));
  });
}; // fs.writev only available in Node v12.9.0+


if (typeof fs.writev === 'function') {
  // Function signature is
  // s.writev(fd, buffers[, position], callback)
  // We need to handle the optional arg, so we use ...args
  exports.writev = function (fd, buffers) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    if (typeof args[args.length - 1] === 'function') {
      return fs.writev.apply(fs, [fd, buffers].concat(args));
    }

    return new Promise(function (resolve, reject) {
      fs.writev.apply(fs, [fd, buffers].concat(args, [function (err, bytesWritten, buffers) {
        if (err) return reject(err);
        resolve({
          bytesWritten: bytesWritten,
          buffers: buffers
        });
      }]));
    });
  };
}

/***/ }),

/***/ 5064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _objectSpread = (__webpack_require__(1109)["default"]);

module.exports = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __webpack_require__(9278)), __webpack_require__(5470)), __webpack_require__(1032)), __webpack_require__(7951)), __webpack_require__(6206)), __webpack_require__(5027)), __webpack_require__(9614)), __webpack_require__(4644)), __webpack_require__(9109)), __webpack_require__(177));

/***/ }),

/***/ 6206:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var u = (__webpack_require__(7385).fromPromise);

var jsonFile = __webpack_require__(1347);

jsonFile.outputJson = u(__webpack_require__(3419));
jsonFile.outputJsonSync = __webpack_require__(1803); // aliases

jsonFile.outputJSON = jsonFile.outputJson;
jsonFile.outputJSONSync = jsonFile.outputJsonSync;
jsonFile.writeJSON = jsonFile.writeJson;
jsonFile.writeJSONSync = jsonFile.writeJsonSync;
jsonFile.readJSON = jsonFile.readJson;
jsonFile.readJSONSync = jsonFile.readJsonSync;
module.exports = jsonFile;

/***/ }),

/***/ 1347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var jsonFile = __webpack_require__(5641);

module.exports = {
  // jsonfile exports
  readJson: jsonFile.readFile,
  readJsonSync: jsonFile.readFileSync,
  writeJson: jsonFile.writeFile,
  writeJsonSync: jsonFile.writeFileSync
};

/***/ }),

/***/ 1803:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(9309),
    stringify = _require.stringify;

var _require2 = __webpack_require__(4644),
    outputFileSync = _require2.outputFileSync;

function outputJsonSync(file, data, options) {
  var str = stringify(data, options);
  outputFileSync(file, str, options);
}

module.exports = outputJsonSync;

/***/ }),

/***/ 3419:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = __webpack_require__(7757);

var _asyncToGenerator = (__webpack_require__(8926)["default"]);

var _require = __webpack_require__(9309),
    stringify = _require.stringify;

var _require2 = __webpack_require__(4644),
    outputFile = _require2.outputFile;

function outputJson(_x, _x2) {
  return _outputJson.apply(this, arguments);
}

function _outputJson() {
  _outputJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file, data) {
    var options,
        str,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            str = stringify(data, options);
            _context.next = 4;
            return outputFile(file, str, options);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _outputJson.apply(this, arguments);
}

module.exports = outputJson;

/***/ }),

/***/ 5027:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var u = (__webpack_require__(7385).fromPromise);

var _require = __webpack_require__(7368),
    _makeDir = _require.makeDir,
    makeDirSync = _require.makeDirSync;

var makeDir = u(_makeDir);
module.exports = {
  mkdirs: makeDir,
  mkdirsSync: makeDirSync,
  // alias
  mkdirp: makeDir,
  mkdirpSync: makeDirSync,
  ensureDir: makeDir,
  ensureDirSync: makeDirSync
};

/***/ }),

/***/ 7368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = __webpack_require__(7757);

var _asyncToGenerator = (__webpack_require__(8926)["default"]);

var _objectSpread = (__webpack_require__(1109)["default"]);

var fs = __webpack_require__(9278);

var _require = __webpack_require__(2288),
    checkPath = _require.checkPath;

var getMode = function getMode(options) {
  var defaults = {
    mode: 511
  };
  if (typeof options === 'number') return options;
  return _objectSpread(_objectSpread({}, defaults), options).mode;
};

module.exports.makeDir = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(dir, options) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            checkPath(dir);
            return _context.abrupt("return", fs.mkdir(dir, {
              mode: getMode(options),
              recursive: true
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports.makeDirSync = function (dir, options) {
  checkPath(dir);
  return fs.mkdirSync(dir, {
    mode: getMode(options),
    recursive: true
  });
};

/***/ }),

/***/ 2288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Adapted from https://github.com/sindresorhus/make-dir
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var path = __webpack_require__(1017); // https://github.com/nodejs/node/issues/8987
// https://github.com/libuv/libuv/pull/1088


module.exports.checkPath = function checkPath(pth) {
  if (process.platform === 'win32') {
    var pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ''));

    if (pathHasInvalidWinCharacters) {
      var error = new Error("Path contains invalid characters: ".concat(pth));
      error.code = 'EINVAL';
      throw error;
    }
  }
};

/***/ }),

/***/ 9614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var u = (__webpack_require__(7385).fromCallback);

module.exports = {
  move: u(__webpack_require__(8417)),
  moveSync: __webpack_require__(697)
};

/***/ }),

/***/ 697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(4527);

var path = __webpack_require__(1017);

var copySync = (__webpack_require__(5470).copySync);

var removeSync = (__webpack_require__(177).removeSync);

var mkdirpSync = (__webpack_require__(5027).mkdirpSync);

var stat = __webpack_require__(1577);

function moveSync(src, dest, opts) {
  opts = opts || {};
  var overwrite = opts.overwrite || opts.clobber || false;

  var _stat$checkPathsSync = stat.checkPathsSync(src, dest, 'move', opts),
      srcStat = _stat$checkPathsSync.srcStat,
      _stat$checkPathsSync$ = _stat$checkPathsSync.isChangingCase,
      isChangingCase = _stat$checkPathsSync$ === void 0 ? false : _stat$checkPathsSync$;

  stat.checkParentPathsSync(src, srcStat, dest, 'move');
  if (!isParentRoot(dest)) mkdirpSync(path.dirname(dest));
  return doRename(src, dest, overwrite, isChangingCase);
}

function isParentRoot(dest) {
  var parent = path.dirname(dest);
  var parsedPath = path.parse(parent);
  return parsedPath.root === parent;
}

function doRename(src, dest, overwrite, isChangingCase) {
  if (isChangingCase) return rename(src, dest, overwrite);

  if (overwrite) {
    removeSync(dest);
    return rename(src, dest, overwrite);
  }

  if (fs.existsSync(dest)) throw new Error('dest already exists.');
  return rename(src, dest, overwrite);
}

function rename(src, dest, overwrite) {
  try {
    fs.renameSync(src, dest);
  } catch (err) {
    if (err.code !== 'EXDEV') throw err;
    return moveAcrossDevice(src, dest, overwrite);
  }
}

function moveAcrossDevice(src, dest, overwrite) {
  var opts = {
    overwrite: overwrite,
    errorOnExist: true
  };
  copySync(src, dest, opts);
  return removeSync(src);
}

module.exports = moveSync;

/***/ }),

/***/ 8417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(4527);

var path = __webpack_require__(1017);

var copy = (__webpack_require__(5470).copy);

var remove = (__webpack_require__(177).remove);

var mkdirp = (__webpack_require__(5027).mkdirp);

var pathExists = (__webpack_require__(9109).pathExists);

var stat = __webpack_require__(1577);

function move(src, dest, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  var overwrite = opts.overwrite || opts.clobber || false;
  stat.checkPaths(src, dest, 'move', opts, function (err, stats) {
    if (err) return cb(err);
    var srcStat = stats.srcStat,
        _stats$isChangingCase = stats.isChangingCase,
        isChangingCase = _stats$isChangingCase === void 0 ? false : _stats$isChangingCase;
    stat.checkParentPaths(src, srcStat, dest, 'move', function (err) {
      if (err) return cb(err);
      if (isParentRoot(dest)) return doRename(src, dest, overwrite, isChangingCase, cb);
      mkdirp(path.dirname(dest), function (err) {
        if (err) return cb(err);
        return doRename(src, dest, overwrite, isChangingCase, cb);
      });
    });
  });
}

function isParentRoot(dest) {
  var parent = path.dirname(dest);
  var parsedPath = path.parse(parent);
  return parsedPath.root === parent;
}

function doRename(src, dest, overwrite, isChangingCase, cb) {
  if (isChangingCase) return rename(src, dest, overwrite, cb);

  if (overwrite) {
    return remove(dest, function (err) {
      if (err) return cb(err);
      return rename(src, dest, overwrite, cb);
    });
  }

  pathExists(dest, function (err, destExists) {
    if (err) return cb(err);
    if (destExists) return cb(new Error('dest already exists.'));
    return rename(src, dest, overwrite, cb);
  });
}

function rename(src, dest, overwrite, cb) {
  fs.rename(src, dest, function (err) {
    if (!err) return cb();
    if (err.code !== 'EXDEV') return cb(err);
    return moveAcrossDevice(src, dest, overwrite, cb);
  });
}

function moveAcrossDevice(src, dest, overwrite, cb) {
  var opts = {
    overwrite: overwrite,
    errorOnExist: true
  };
  copy(src, dest, opts, function (err) {
    if (err) return cb(err);
    return remove(src, cb);
  });
}

module.exports = move;

/***/ }),

/***/ 4644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var u = (__webpack_require__(7385).fromCallback);

var fs = __webpack_require__(4527);

var path = __webpack_require__(1017);

var mkdir = __webpack_require__(5027);

var pathExists = (__webpack_require__(9109).pathExists);

function outputFile(file, data, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding;
    encoding = 'utf8';
  }

  var dir = path.dirname(file);
  pathExists(dir, function (err, itDoes) {
    if (err) return callback(err);
    if (itDoes) return fs.writeFile(file, data, encoding, callback);
    mkdir.mkdirs(dir, function (err) {
      if (err) return callback(err);
      fs.writeFile(file, data, encoding, callback);
    });
  });
}

function outputFileSync(file) {
  var dir = path.dirname(file);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (fs.existsSync(dir)) {
    return fs.writeFileSync.apply(fs, [file].concat(args));
  }

  mkdir.mkdirsSync(dir);
  fs.writeFileSync.apply(fs, [file].concat(args));
}

module.exports = {
  outputFile: u(outputFile),
  outputFileSync: outputFileSync
};

/***/ }),

/***/ 9109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var u = (__webpack_require__(7385).fromPromise);

var fs = __webpack_require__(9278);

function pathExists(path) {
  return fs.access(path).then(function () {
    return true;
  })["catch"](function () {
    return false;
  });
}

module.exports = {
  pathExists: u(pathExists),
  pathExistsSync: fs.existsSync
};

/***/ }),

/***/ 177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(4527);

var u = (__webpack_require__(7385).fromCallback);

var rimraf = __webpack_require__(2059);

function remove(path, callback) {
  // Node 14.14.0+
  if (fs.rm) return fs.rm(path, {
    recursive: true,
    force: true
  }, callback);
  rimraf(path, callback);
}

function removeSync(path) {
  // Node 14.14.0+
  if (fs.rmSync) return fs.rmSync(path, {
    recursive: true,
    force: true
  });
  rimraf.sync(path);
}

module.exports = {
  remove: u(remove),
  removeSync: removeSync
};

/***/ }),

/***/ 2059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(4527);

var path = __webpack_require__(1017);

var assert = __webpack_require__(9491);

var isWindows = process.platform === 'win32';

function defaults(options) {
  var methods = ['unlink', 'chmod', 'stat', 'lstat', 'rmdir', 'readdir'];
  methods.forEach(function (m) {
    options[m] = options[m] || fs[m];
    m = m + 'Sync';
    options[m] = options[m] || fs[m];
  });
  options.maxBusyTries = options.maxBusyTries || 3;
}

function rimraf(p, options, cb) {
  var busyTries = 0;

  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  assert(p, 'rimraf: missing path');
  assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string');
  assert.strictEqual(typeof cb, 'function', 'rimraf: callback function required');
  assert(options, 'rimraf: invalid options argument provided');
  assert.strictEqual(typeof options, 'object', 'rimraf: options should be object');
  defaults(options);
  rimraf_(p, options, function CB(er) {
    if (er) {
      if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') && busyTries < options.maxBusyTries) {
        busyTries++;
        var time = busyTries * 100; // try again, with the same exact callback as this one.

        return setTimeout(function () {
          return rimraf_(p, options, CB);
        }, time);
      } // already gone


      if (er.code === 'ENOENT') er = null;
    }

    cb(er);
  });
} // Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.


function rimraf_(p, options, cb) {
  assert(p);
  assert(options);
  assert(typeof cb === 'function'); // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.

  options.lstat(p, function (er, st) {
    if (er && er.code === 'ENOENT') {
      return cb(null);
    } // Windows can EPERM on stat.  Life is suffering.


    if (er && er.code === 'EPERM' && isWindows) {
      return fixWinEPERM(p, options, er, cb);
    }

    if (st && st.isDirectory()) {
      return rmdir(p, options, er, cb);
    }

    options.unlink(p, function (er) {
      if (er) {
        if (er.code === 'ENOENT') {
          return cb(null);
        }

        if (er.code === 'EPERM') {
          return isWindows ? fixWinEPERM(p, options, er, cb) : rmdir(p, options, er, cb);
        }

        if (er.code === 'EISDIR') {
          return rmdir(p, options, er, cb);
        }
      }

      return cb(er);
    });
  });
}

function fixWinEPERM(p, options, er, cb) {
  assert(p);
  assert(options);
  assert(typeof cb === 'function');
  options.chmod(p, 438, function (er2) {
    if (er2) {
      cb(er2.code === 'ENOENT' ? null : er);
    } else {
      options.stat(p, function (er3, stats) {
        if (er3) {
          cb(er3.code === 'ENOENT' ? null : er);
        } else if (stats.isDirectory()) {
          rmdir(p, options, er, cb);
        } else {
          options.unlink(p, cb);
        }
      });
    }
  });
}

function fixWinEPERMSync(p, options, er) {
  var stats;
  assert(p);
  assert(options);

  try {
    options.chmodSync(p, 438);
  } catch (er2) {
    if (er2.code === 'ENOENT') {
      return;
    } else {
      throw er;
    }
  }

  try {
    stats = options.statSync(p);
  } catch (er3) {
    if (er3.code === 'ENOENT') {
      return;
    } else {
      throw er;
    }
  }

  if (stats.isDirectory()) {
    rmdirSync(p, options, er);
  } else {
    options.unlinkSync(p);
  }
}

function rmdir(p, options, originalEr, cb) {
  assert(p);
  assert(options);
  assert(typeof cb === 'function'); // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.

  options.rmdir(p, function (er) {
    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
      rmkids(p, options, cb);
    } else if (er && er.code === 'ENOTDIR') {
      cb(originalEr);
    } else {
      cb(er);
    }
  });
}

function rmkids(p, options, cb) {
  assert(p);
  assert(options);
  assert(typeof cb === 'function');
  options.readdir(p, function (er, files) {
    if (er) return cb(er);
    var n = files.length;
    var errState;
    if (n === 0) return options.rmdir(p, cb);
    files.forEach(function (f) {
      rimraf(path.join(p, f), options, function (er) {
        if (errState) {
          return;
        }

        if (er) return cb(errState = er);

        if (--n === 0) {
          options.rmdir(p, cb);
        }
      });
    });
  });
} // this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.


function rimrafSync(p, options) {
  var st;
  options = options || {};
  defaults(options);
  assert(p, 'rimraf: missing path');
  assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string');
  assert(options, 'rimraf: missing options');
  assert.strictEqual(typeof options, 'object', 'rimraf: options should be object');

  try {
    st = options.lstatSync(p);
  } catch (er) {
    if (er.code === 'ENOENT') {
      return;
    } // Windows can EPERM on stat.  Life is suffering.


    if (er.code === 'EPERM' && isWindows) {
      fixWinEPERMSync(p, options, er);
    }
  }

  try {
    // sunos lets the root user unlink directories, which is... weird.
    if (st && st.isDirectory()) {
      rmdirSync(p, options, null);
    } else {
      options.unlinkSync(p);
    }
  } catch (er) {
    if (er.code === 'ENOENT') {
      return;
    } else if (er.code === 'EPERM') {
      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
    } else if (er.code !== 'EISDIR') {
      throw er;
    }

    rmdirSync(p, options, er);
  }
}

function rmdirSync(p, options, originalEr) {
  assert(p);
  assert(options);

  try {
    options.rmdirSync(p);
  } catch (er) {
    if (er.code === 'ENOTDIR') {
      throw originalEr;
    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
      rmkidsSync(p, options);
    } else if (er.code !== 'ENOENT') {
      throw er;
    }
  }
}

function rmkidsSync(p, options) {
  assert(p);
  assert(options);
  options.readdirSync(p).forEach(function (f) {
    return rimrafSync(path.join(p, f), options);
  });

  if (isWindows) {
    // We only end up here once we got ENOTEMPTY at least once, and
    // at this point, we are guaranteed to have removed all the kids.
    // So, we know that it won't be ENOENT or ENOTDIR or anything else.
    // try really hard to delete stuff on windows, because it has a
    // PROFOUNDLY annoying habit of not closing handles promptly when
    // files are deleted, resulting in spurious ENOTEMPTY errors.
    var startTime = Date.now();

    do {
      try {
        var ret = options.rmdirSync(p, options);
        return ret;
      } catch (_unused) {}
    } while (Date.now() - startTime < 500); // give up after 500ms

  } else {
    var _ret = options.rmdirSync(p, options);

    return _ret;
  }
}

module.exports = rimraf;
rimraf.sync = rimrafSync;

/***/ }),

/***/ 1577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _slicedToArray = (__webpack_require__(3038)["default"]);

var fs = __webpack_require__(9278);

var path = __webpack_require__(1017);

var util = __webpack_require__(3837);

function getStats(src, dest, opts) {
  var statFunc = opts.dereference ? function (file) {
    return fs.stat(file, {
      bigint: true
    });
  } : function (file) {
    return fs.lstat(file, {
      bigint: true
    });
  };
  return Promise.all([statFunc(src), statFunc(dest)["catch"](function (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  })]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        srcStat = _ref2[0],
        destStat = _ref2[1];

    return {
      srcStat: srcStat,
      destStat: destStat
    };
  });
}

function getStatsSync(src, dest, opts) {
  var destStat;
  var statFunc = opts.dereference ? function (file) {
    return fs.statSync(file, {
      bigint: true
    });
  } : function (file) {
    return fs.lstatSync(file, {
      bigint: true
    });
  };
  var srcStat = statFunc(src);

  try {
    destStat = statFunc(dest);
  } catch (err) {
    if (err.code === 'ENOENT') return {
      srcStat: srcStat,
      destStat: null
    };
    throw err;
  }

  return {
    srcStat: srcStat,
    destStat: destStat
  };
}

function checkPaths(src, dest, funcName, opts, cb) {
  util.callbackify(getStats)(src, dest, opts, function (err, stats) {
    if (err) return cb(err);
    var srcStat = stats.srcStat,
        destStat = stats.destStat;

    if (destStat) {
      if (areIdentical(srcStat, destStat)) {
        var srcBaseName = path.basename(src);
        var destBaseName = path.basename(dest);

        if (funcName === 'move' && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
          return cb(null, {
            srcStat: srcStat,
            destStat: destStat,
            isChangingCase: true
          });
        }

        return cb(new Error('Source and destination must not be the same.'));
      }

      if (srcStat.isDirectory() && !destStat.isDirectory()) {
        return cb(new Error("Cannot overwrite non-directory '".concat(dest, "' with directory '").concat(src, "'.")));
      }

      if (!srcStat.isDirectory() && destStat.isDirectory()) {
        return cb(new Error("Cannot overwrite directory '".concat(dest, "' with non-directory '").concat(src, "'.")));
      }
    }

    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
      return cb(new Error(errMsg(src, dest, funcName)));
    }

    return cb(null, {
      srcStat: srcStat,
      destStat: destStat
    });
  });
}

function checkPathsSync(src, dest, funcName, opts) {
  var _getStatsSync = getStatsSync(src, dest, opts),
      srcStat = _getStatsSync.srcStat,
      destStat = _getStatsSync.destStat;

  if (destStat) {
    if (areIdentical(srcStat, destStat)) {
      var srcBaseName = path.basename(src);
      var destBaseName = path.basename(dest);

      if (funcName === 'move' && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
        return {
          srcStat: srcStat,
          destStat: destStat,
          isChangingCase: true
        };
      }

      throw new Error('Source and destination must not be the same.');
    }

    if (srcStat.isDirectory() && !destStat.isDirectory()) {
      throw new Error("Cannot overwrite non-directory '".concat(dest, "' with directory '").concat(src, "'."));
    }

    if (!srcStat.isDirectory() && destStat.isDirectory()) {
      throw new Error("Cannot overwrite directory '".concat(dest, "' with non-directory '").concat(src, "'."));
    }
  }

  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
    throw new Error(errMsg(src, dest, funcName));
  }

  return {
    srcStat: srcStat,
    destStat: destStat
  };
} // recursively check if dest parent is a subdirectory of src.
// It works for all file types including symlinks since it
// checks the src and dest inodes. It starts from the deepest
// parent and stops once it reaches the src parent or the root path.


function checkParentPaths(src, srcStat, dest, funcName, cb) {
  var srcParent = path.resolve(path.dirname(src));
  var destParent = path.resolve(path.dirname(dest));
  if (destParent === srcParent || destParent === path.parse(destParent).root) return cb();
  fs.stat(destParent, {
    bigint: true
  }, function (err, destStat) {
    if (err) {
      if (err.code === 'ENOENT') return cb();
      return cb(err);
    }

    if (areIdentical(srcStat, destStat)) {
      return cb(new Error(errMsg(src, dest, funcName)));
    }

    return checkParentPaths(src, srcStat, destParent, funcName, cb);
  });
}

function checkParentPathsSync(src, srcStat, dest, funcName) {
  var srcParent = path.resolve(path.dirname(src));
  var destParent = path.resolve(path.dirname(dest));
  if (destParent === srcParent || destParent === path.parse(destParent).root) return;
  var destStat;

  try {
    destStat = fs.statSync(destParent, {
      bigint: true
    });
  } catch (err) {
    if (err.code === 'ENOENT') return;
    throw err;
  }

  if (areIdentical(srcStat, destStat)) {
    throw new Error(errMsg(src, dest, funcName));
  }

  return checkParentPathsSync(src, srcStat, destParent, funcName);
}

function areIdentical(srcStat, destStat) {
  return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
} // return true if dest is a subdir of src, otherwise false.
// It only checks the path strings.


function isSrcSubdir(src, dest) {
  var srcArr = path.resolve(src).split(path.sep).filter(function (i) {
    return i;
  });
  var destArr = path.resolve(dest).split(path.sep).filter(function (i) {
    return i;
  });
  return srcArr.reduce(function (acc, cur, i) {
    return acc && destArr[i] === cur;
  }, true);
}

function errMsg(src, dest, funcName) {
  return "Cannot ".concat(funcName, " '").concat(src, "' to a subdirectory of itself, '").concat(dest, "'.");
}

module.exports = {
  checkPaths: checkPaths,
  checkPathsSync: checkPathsSync,
  checkParentPaths: checkParentPaths,
  checkParentPathsSync: checkParentPathsSync,
  isSrcSubdir: isSrcSubdir,
  areIdentical: areIdentical
};

/***/ }),

/***/ 2818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(4527);

function utimesMillis(path, atime, mtime, callback) {
  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
  fs.open(path, 'r+', function (err, fd) {
    if (err) return callback(err);
    fs.futimes(fd, atime, mtime, function (futimesErr) {
      fs.close(fd, function (closeErr) {
        if (callback) callback(futimesErr || closeErr);
      });
    });
  });
}

function utimesMillisSync(path, atime, mtime) {
  var fd = fs.openSync(path, 'r+');
  fs.futimesSync(fd, atime, mtime);
  return fs.closeSync(fd);
}

module.exports = {
  utimesMillis: utimesMillis,
  utimesMillisSync: utimesMillisSync
};

/***/ }),

/***/ 3992:
/***/ ((module) => {

"use strict";


module.exports = clone;

var getPrototypeOf = Object.getPrototypeOf || function (obj) {
  return obj.__proto__;
};

function clone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Object) var copy = {
    __proto__: getPrototypeOf(obj)
  };else var copy = Object.create(null);
  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
  });
  return copy;
}

/***/ }),

/***/ 4527:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fs = __webpack_require__(7147);

var polyfills = __webpack_require__(3594);

var legacy = __webpack_require__(6771);

var clone = __webpack_require__(3992);

var util = __webpack_require__(3837);
/* istanbul ignore next - node 0.x polyfill */


var gracefulQueue;
var previousSymbol;
/* istanbul ignore else - node 0.x polyfill */

if (typeof Symbol === 'function' && typeof Symbol["for"] === 'function') {
  gracefulQueue = Symbol["for"]('graceful-fs.queue'); // This is used in testing by future versions

  previousSymbol = Symbol["for"]('graceful-fs.previous');
} else {
  gracefulQueue = '___graceful-fs.queue';
  previousSymbol = '___graceful-fs.previous';
}

function noop() {}

function publishQueue(context, queue) {
  Object.defineProperty(context, gracefulQueue, {
    get: function get() {
      return queue;
    }
  });
}

var debug = noop;
if (util.debuglog) debug = util.debuglog('gfs4');else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) debug = function debug() {
  var m = util.format.apply(util, arguments);
  m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
  console.error(m);
}; // Once time initialization

if (!fs[gracefulQueue]) {
  // This queue can be shared by multiple loaded instances
  var queue = global[gracefulQueue] || [];
  publishQueue(fs, queue); // Patch fs.close/closeSync to shared queue version, because we need
  // to retry() whenever a close happens *anywhere* in the program.
  // This is essential when multiple graceful-fs instances are
  // in play at the same time.

  fs.close = function (fs$close) {
    function close(fd, cb) {
      return fs$close.call(fs, fd, function (err) {
        // This function uses the graceful-fs shared queue
        if (!err) {
          resetQueue();
        }

        if (typeof cb === 'function') cb.apply(this, arguments);
      });
    }

    Object.defineProperty(close, previousSymbol, {
      value: fs$close
    });
    return close;
  }(fs.close);

  fs.closeSync = function (fs$closeSync) {
    function closeSync(fd) {
      // This function uses the graceful-fs shared queue
      fs$closeSync.apply(fs, arguments);
      resetQueue();
    }

    Object.defineProperty(closeSync, previousSymbol, {
      value: fs$closeSync
    });
    return closeSync;
  }(fs.closeSync);

  if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
    process.on('exit', function () {
      debug(fs[gracefulQueue]);

      (__webpack_require__(9491).equal)(fs[gracefulQueue].length, 0);
    });
  }
}

if (!global[gracefulQueue]) {
  publishQueue(global, fs[gracefulQueue]);
}

module.exports = patch(clone(fs));

if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
  module.exports = patch(fs);
  fs.__patched = true;
}

function patch(fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs);
  fs.gracefulify = patch;
  fs.createReadStream = createReadStream;
  fs.createWriteStream = createWriteStream;
  var fs$readFile = fs.readFile;
  fs.readFile = readFile;

  function readFile(path, options, cb) {
    if (typeof options === 'function') cb = options, options = null;
    return go$readFile(path, options, cb);

    function go$readFile(path, options, cb, startTime) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readFile, [path, options, cb], err, startTime || Date.now(), Date.now()]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
        }
      });
    }
  }

  var fs$writeFile = fs.writeFile;
  fs.writeFile = writeFile;

  function writeFile(path, data, options, cb) {
    if (typeof options === 'function') cb = options, options = null;
    return go$writeFile(path, data, options, cb);

    function go$writeFile(path, data, options, cb, startTime) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$writeFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
        }
      });
    }
  }

  var fs$appendFile = fs.appendFile;
  if (fs$appendFile) fs.appendFile = appendFile;

  function appendFile(path, data, options, cb) {
    if (typeof options === 'function') cb = options, options = null;
    return go$appendFile(path, data, options, cb);

    function go$appendFile(path, data, options, cb, startTime) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$appendFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
        }
      });
    }
  }

  var fs$copyFile = fs.copyFile;
  if (fs$copyFile) fs.copyFile = copyFile;

  function copyFile(src, dest, flags, cb) {
    if (typeof flags === 'function') {
      cb = flags;
      flags = 0;
    }

    return go$copyFile(src, dest, flags, cb);

    function go$copyFile(src, dest, flags, cb, startTime) {
      return fs$copyFile(src, dest, flags, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$copyFile, [src, dest, flags, cb], err, startTime || Date.now(), Date.now()]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
        }
      });
    }
  }

  var fs$readdir = fs.readdir;
  fs.readdir = readdir;

  function readdir(path, options, cb) {
    if (typeof options === 'function') cb = options, options = null;
    return go$readdir(path, options, cb);

    function go$readdir(path, options, cb, startTime) {
      return fs$readdir(path, options, function (err, files) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readdir, [path, options, cb], err, startTime || Date.now(), Date.now()]);else {
          if (files && files.sort) files.sort();
          if (typeof cb === 'function') cb.call(this, err, files);
        }
      });
    }
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs);
    ReadStream = legStreams.ReadStream;
    WriteStream = legStreams.WriteStream;
  }

  var fs$ReadStream = fs.ReadStream;

  if (fs$ReadStream) {
    ReadStream.prototype = Object.create(fs$ReadStream.prototype);
    ReadStream.prototype.open = ReadStream$open;
  }

  var fs$WriteStream = fs.WriteStream;

  if (fs$WriteStream) {
    WriteStream.prototype = Object.create(fs$WriteStream.prototype);
    WriteStream.prototype.open = WriteStream$open;
  }

  Object.defineProperty(fs, 'ReadStream', {
    get: function get() {
      return ReadStream;
    },
    set: function set(val) {
      ReadStream = val;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(fs, 'WriteStream', {
    get: function get() {
      return WriteStream;
    },
    set: function set(val) {
      WriteStream = val;
    },
    enumerable: true,
    configurable: true
  }); // legacy names

  var FileReadStream = ReadStream;
  Object.defineProperty(fs, 'FileReadStream', {
    get: function get() {
      return FileReadStream;
    },
    set: function set(val) {
      FileReadStream = val;
    },
    enumerable: true,
    configurable: true
  });
  var FileWriteStream = WriteStream;
  Object.defineProperty(fs, 'FileWriteStream', {
    get: function get() {
      return FileWriteStream;
    },
    set: function set(val) {
      FileWriteStream = val;
    },
    enumerable: true,
    configurable: true
  });

  function ReadStream(path, options) {
    if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
  }

  function ReadStream$open() {
    var that = this;
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose) that.destroy();
        that.emit('error', err);
      } else {
        that.fd = fd;
        that.emit('open', fd);
        that.read();
      }
    });
  }

  function WriteStream(path, options) {
    if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
  }

  function WriteStream$open() {
    var that = this;
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy();
        that.emit('error', err);
      } else {
        that.fd = fd;
        that.emit('open', fd);
      }
    });
  }

  function createReadStream(path, options) {
    return new fs.ReadStream(path, options);
  }

  function createWriteStream(path, options) {
    return new fs.WriteStream(path, options);
  }

  var fs$open = fs.open;
  fs.open = open;

  function open(path, flags, mode, cb) {
    if (typeof mode === 'function') cb = mode, mode = null;
    return go$open(path, flags, mode, cb);

    function go$open(path, flags, mode, cb, startTime) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$open, [path, flags, mode, cb], err, startTime || Date.now(), Date.now()]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
        }
      });
    }
  }

  return fs;
}

function enqueue(elem) {
  debug('ENQUEUE', elem[0].name, elem[1]);
  fs[gracefulQueue].push(elem);
  retry();
} // keep track of the timeout between retry() calls


var retryTimer; // reset the startTime and lastTime to now
// this resets the start of the 60 second overall timeout as well as the
// delay between attempts so that we'll retry these jobs sooner

function resetQueue() {
  var now = Date.now();

  for (var i = 0; i < fs[gracefulQueue].length; ++i) {
    // entries that are only a length of 2 are from an older version, don't
    // bother modifying those since they'll be retried anyway.
    if (fs[gracefulQueue][i].length > 2) {
      fs[gracefulQueue][i][3] = now; // startTime

      fs[gracefulQueue][i][4] = now; // lastTime
    }
  } // call retry to make sure we're actively processing the queue


  retry();
}

function retry() {
  // clear the timer and remove it to help prevent unintended concurrency
  clearTimeout(retryTimer);
  retryTimer = undefined;
  if (fs[gracefulQueue].length === 0) return;
  var elem = fs[gracefulQueue].shift();
  var fn = elem[0];
  var args = elem[1]; // these items may be unset if they were added by an older graceful-fs

  var err = elem[2];
  var startTime = elem[3];
  var lastTime = elem[4]; // if we don't have a startTime we have no way of knowing if we've waited
  // long enough, so go ahead and retry this item now

  if (startTime === undefined) {
    debug('RETRY', fn.name, args);
    fn.apply(null, args);
  } else if (Date.now() - startTime >= 60000) {
    // it's been more than 60 seconds total, bail now
    debug('TIMEOUT', fn.name, args);
    var cb = args.pop();
    if (typeof cb === 'function') cb.call(null, err);
  } else {
    // the amount of time between the last attempt and right now
    var sinceAttempt = Date.now() - lastTime; // the amount of time between when we first tried, and when we last tried
    // rounded up to at least 1

    var sinceStart = Math.max(lastTime - startTime, 1); // backoff. wait longer than the total time we've been retrying, but only
    // up to a maximum of 100ms

    var desiredDelay = Math.min(sinceStart * 1.2, 100); // it's been long enough since the last retry, do it again

    if (sinceAttempt >= desiredDelay) {
      debug('RETRY', fn.name, args);
      fn.apply(null, args.concat([startTime]));
    } else {
      // if we can't do this job yet, push it to the end of the queue
      // and let the next iteration check again
      fs[gracefulQueue].push(elem);
    }
  } // schedule our next run if one isn't already scheduled


  if (retryTimer === undefined) {
    retryTimer = setTimeout(retry, 0);
  }
}

/***/ }),

/***/ 6771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stream = (__webpack_require__(2781).Stream);

module.exports = legacy;

function legacy(fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  };

  function ReadStream(path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);
    Stream.call(this);
    var self = this;
    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;
    this.flags = 'r';
    this.mode = 438;
    /*=0666*/

    this.bufferSize = 64 * 1024;
    options = options || {}; // Mixin options into this

    var keys = Object.keys(options);

    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }

      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function () {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);

      self._read();
    });
  }

  function WriteStream(path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);
    Stream.call(this);
    this.path = path;
    this.fd = null;
    this.writable = true;
    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438;
    /*=0666*/

    this.bytesWritten = 0;
    options = options || {}; // Mixin options into this

    var keys = Object.keys(options);

    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }

      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;

      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);

      this.flush();
    }
  }
}

/***/ }),

/***/ 3594:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constants = __webpack_require__(2057);

var origCwd = process.cwd;
var cwd = null;
var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;

process.cwd = function () {
  if (!cwd) cwd = origCwd.call(process);
  return cwd;
};

try {
  process.cwd();
} catch (er) {} // This check is needed until node.js 12 is required


if (typeof process.chdir === 'function') {
  var chdir = process.chdir;

  process.chdir = function (d) {
    cwd = null;
    chdir.call(process, d);
  };

  if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
}

module.exports = patch;

function patch(fs) {
  // (re-)implement some things that are known busted or missing.
  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs);
  } // lutimes implementation, or no-op


  if (!fs.lutimes) {
    patchLutimes(fs);
  } // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.


  fs.chown = chownFix(fs.chown);
  fs.fchown = chownFix(fs.fchown);
  fs.lchown = chownFix(fs.lchown);
  fs.chmod = chmodFix(fs.chmod);
  fs.fchmod = chmodFix(fs.fchmod);
  fs.lchmod = chmodFix(fs.lchmod);
  fs.chownSync = chownFixSync(fs.chownSync);
  fs.fchownSync = chownFixSync(fs.fchownSync);
  fs.lchownSync = chownFixSync(fs.lchownSync);
  fs.chmodSync = chmodFixSync(fs.chmodSync);
  fs.fchmodSync = chmodFixSync(fs.fchmodSync);
  fs.lchmodSync = chmodFixSync(fs.lchmodSync);
  fs.stat = statFix(fs.stat);
  fs.fstat = statFix(fs.fstat);
  fs.lstat = statFix(fs.lstat);
  fs.statSync = statFixSync(fs.statSync);
  fs.fstatSync = statFixSync(fs.fstatSync);
  fs.lstatSync = statFixSync(fs.lstatSync); // if lchmod/lchown do not exist, then make them no-ops

  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb);
    };

    fs.lchmodSync = function () {};
  }

  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb);
    };

    fs.lchownSync = function () {};
  } // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.
  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.


  if (platform === "win32") {
    fs.rename = function (fs$rename) {
      return function (from, to, cb) {
        var start = Date.now();
        var backoff = 0;
        fs$rename(from, to, function CB(er) {
          if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 60000) {
            setTimeout(function () {
              fs.stat(to, function (stater, st) {
                if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);else cb(er);
              });
            }, backoff);
            if (backoff < 100) backoff += 10;
            return;
          }

          if (cb) cb(er);
        });
      };
    }(fs.rename);
  } // if read() returns EAGAIN, then just try it again.


  fs.read = function (fs$read) {
    function read(fd, buffer, offset, length, position, callback_) {
      var _callback;

      if (callback_ && typeof callback_ === 'function') {
        var eagCounter = 0;

        _callback = function callback(er, _, __) {
          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter++;
            return fs$read.call(fs, fd, buffer, offset, length, position, _callback);
          }

          callback_.apply(this, arguments);
        };
      }

      return fs$read.call(fs, fd, buffer, offset, length, position, _callback);
    } // This ensures `util.promisify` works as it does for native `fs.read`.


    if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
    return read;
  }(fs.read);

  fs.readSync = function (fs$readSync) {
    return function (fd, buffer, offset, length, position) {
      var eagCounter = 0;

      while (true) {
        try {
          return fs$readSync.call(fs, fd, buffer, offset, length, position);
        } catch (er) {
          if (er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter++;
            continue;
          }

          throw er;
        }
      }
    };
  }(fs.readSync);

  function patchLchmod(fs) {
    fs.lchmod = function (path, mode, callback) {
      fs.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function (err, fd) {
        if (err) {
          if (callback) callback(err);
          return;
        } // prefer to return the chmod error, if one occurs,
        // but still try to close, and report closing errors if they occur.


        fs.fchmod(fd, mode, function (err) {
          fs.close(fd, function (err2) {
            if (callback) callback(err || err2);
          });
        });
      });
    };

    fs.lchmodSync = function (path, mode) {
      var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode); // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.

      var threw = true;
      var ret;

      try {
        ret = fs.fchmodSync(fd, mode);
        threw = false;
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd);
          } catch (er) {}
        } else {
          fs.closeSync(fd);
        }
      }

      return ret;
    };
  }

  function patchLutimes(fs) {
    if (constants.hasOwnProperty("O_SYMLINK")) {
      fs.lutimes = function (path, at, mt, cb) {
        fs.open(path, constants.O_SYMLINK, function (er, fd) {
          if (er) {
            if (cb) cb(er);
            return;
          }

          fs.futimes(fd, at, mt, function (er) {
            fs.close(fd, function (er2) {
              if (cb) cb(er || er2);
            });
          });
        });
      };

      fs.lutimesSync = function (path, at, mt) {
        var fd = fs.openSync(path, constants.O_SYMLINK);
        var ret;
        var threw = true;

        try {
          ret = fs.futimesSync(fd, at, mt);
          threw = false;
        } finally {
          if (threw) {
            try {
              fs.closeSync(fd);
            } catch (er) {}
          } else {
            fs.closeSync(fd);
          }
        }

        return ret;
      };
    } else {
      fs.lutimes = function (_a, _b, _c, cb) {
        if (cb) process.nextTick(cb);
      };

      fs.lutimesSync = function () {};
    }
  }

  function chmodFix(orig) {
    if (!orig) return orig;
    return function (target, mode, cb) {
      return orig.call(fs, target, mode, function (er) {
        if (chownErOk(er)) er = null;
        if (cb) cb.apply(this, arguments);
      });
    };
  }

  function chmodFixSync(orig) {
    if (!orig) return orig;
    return function (target, mode) {
      try {
        return orig.call(fs, target, mode);
      } catch (er) {
        if (!chownErOk(er)) throw er;
      }
    };
  }

  function chownFix(orig) {
    if (!orig) return orig;
    return function (target, uid, gid, cb) {
      return orig.call(fs, target, uid, gid, function (er) {
        if (chownErOk(er)) er = null;
        if (cb) cb.apply(this, arguments);
      });
    };
  }

  function chownFixSync(orig) {
    if (!orig) return orig;
    return function (target, uid, gid) {
      try {
        return orig.call(fs, target, uid, gid);
      } catch (er) {
        if (!chownErOk(er)) throw er;
      }
    };
  }

  function statFix(orig) {
    if (!orig) return orig; // Older versions of Node erroneously returned signed integers for
    // uid + gid.

    return function (target, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = null;
      }

      function callback(er, stats) {
        if (stats) {
          if (stats.uid < 0) stats.uid += 0x100000000;
          if (stats.gid < 0) stats.gid += 0x100000000;
        }

        if (cb) cb.apply(this, arguments);
      }

      return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
    };
  }

  function statFixSync(orig) {
    if (!orig) return orig; // Older versions of Node erroneously returned signed integers for
    // uid + gid.

    return function (target, options) {
      var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);

      if (stats) {
        if (stats.uid < 0) stats.uid += 0x100000000;
        if (stats.gid < 0) stats.gid += 0x100000000;
      }

      return stats;
    };
  } // ENOSYS means that the fs doesn't support the op. Just ignore
  // that, because it doesn't matter.
  //
  // if there's no getuid, or if getuid() is something other
  // than 0, and the error is EINVAL or EPERM, then just ignore
  // it.
  //
  // This specific case is a silent failure in cp, install, tar,
  // and most other unix tools that manage permissions.
  //
  // When running as root, or if other types of errors are
  // encountered, then it's strict.


  function chownErOk(er) {
    if (!er) return true;
    if (er.code === "ENOSYS") return true;
    var nonroot = !process.getuid || process.getuid() !== 0;

    if (nonroot) {
      if (er.code === "EINVAL" || er.code === "EPERM") return true;
    }

    return false;
  }
}

/***/ }),

/***/ 5641:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _regeneratorRuntime = __webpack_require__(7757);

var _asyncToGenerator = (__webpack_require__(8926)["default"]);

var _fs;

try {
  _fs = __webpack_require__(4527);
} catch (_) {
  _fs = __webpack_require__(7147);
}

var universalify = __webpack_require__(7385);

var _require = __webpack_require__(9309),
    stringify = _require.stringify,
    stripBom = _require.stripBom;

function _readFile(_x) {
  return _readFile2.apply(this, arguments);
}

function _readFile2() {
  _readFile2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file) {
    var options,
        fs,
        shouldThrow,
        data,
        obj,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

            if (typeof options === 'string') {
              options = {
                encoding: options
              };
            }

            fs = options.fs || _fs;
            shouldThrow = 'throws' in options ? options["throws"] : true;
            _context.next = 6;
            return universalify.fromCallback(fs.readFile)(file, options);

          case 6:
            data = _context.sent;
            data = stripBom(data);
            _context.prev = 8;
            obj = JSON.parse(data, options ? options.reviver : null);
            _context.next = 20;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](8);

            if (!shouldThrow) {
              _context.next = 19;
              break;
            }

            _context.t0.message = "".concat(file, ": ").concat(_context.t0.message);
            throw _context.t0;

          case 19:
            return _context.abrupt("return", null);

          case 20:
            return _context.abrupt("return", obj);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 12]]);
  }));
  return _readFile2.apply(this, arguments);
}

var readFile = universalify.fromPromise(_readFile);

function readFileSync(file) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') {
    options = {
      encoding: options
    };
  }

  var fs = options.fs || _fs;
  var shouldThrow = 'throws' in options ? options["throws"] : true;

  try {
    var content = fs.readFileSync(file, options);
    content = stripBom(content);
    return JSON.parse(content, options.reviver);
  } catch (err) {
    if (shouldThrow) {
      err.message = "".concat(file, ": ").concat(err.message);
      throw err;
    } else {
      return null;
    }
  }
}

function _writeFile(_x2, _x3) {
  return _writeFile2.apply(this, arguments);
}

function _writeFile2() {
  _writeFile2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(file, obj) {
    var options,
        fs,
        str,
        _args2 = arguments;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
            fs = options.fs || _fs;
            str = stringify(obj, options);
            _context2.next = 5;
            return universalify.fromCallback(fs.writeFile)(file, str, options);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _writeFile2.apply(this, arguments);
}

var writeFile = universalify.fromPromise(_writeFile);

function writeFileSync(file, obj) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var fs = options.fs || _fs;
  var str = stringify(obj, options); // not sure if fs.writeFileSync returns anything, but just in case

  return fs.writeFileSync(file, str, options);
}

var jsonfile = {
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
};
module.exports = jsonfile;

/***/ }),

/***/ 9309:
/***/ ((module) => {

function stringify(obj) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$EOL = _ref.EOL,
      EOL = _ref$EOL === void 0 ? '\n' : _ref$EOL,
      _ref$finalEOL = _ref.finalEOL,
      finalEOL = _ref$finalEOL === void 0 ? true : _ref$finalEOL,
      _ref$replacer = _ref.replacer,
      replacer = _ref$replacer === void 0 ? null : _ref$replacer,
      spaces = _ref.spaces;

  var EOF = finalEOL ? EOL : '';
  var str = JSON.stringify(obj, replacer, spaces);
  return str.replace(/\n/g, EOL) + EOF;
}

function stripBom(content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8');
  return content.replace(/^\uFEFF/, '');
}

module.exports = {
  stringify: stringify,
  stripBom: stripBom
};

/***/ }),

/***/ 4961:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 8808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7938);

/***/ }),

/***/ 7938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var net = __webpack_require__(1808);

var tls = __webpack_require__(4404);

var http = __webpack_require__(3685);

var https = __webpack_require__(5687);

var events = __webpack_require__(2361);

var assert = __webpack_require__(9491);

var util = __webpack_require__(3837);

exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;

function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];
  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);

    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];

      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }

    socket.destroy();
    self.removeSocket(socket);
  });
}

util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({
    request: req
  }, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  } // If we are under maxSockets create a new one.


  self.createSocket(options, function (socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);
  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });

  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }

  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6

  connectReq.once('response', onResponse); // for v0.6

  connectReq.once('upgrade', onUpgrade); // for v0.6

  connectReq.once('connect', onConnect); // for v0.7 or later

  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function () {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }

    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }

    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();
    debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket);

  if (pos === -1) {
    return;
  }

  this.sockets.splice(pos, 1);
  var pending = this.requests.shift();

  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function (socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function (socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    }); // 0 is dummy port for v0.6

    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}

function toOptions(host, port, localAddress) {
  if (typeof host === 'string') {
    // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }

  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];

    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);

      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];

        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }

  return target;
}

var debug;

if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function debug() {
    var args = Array.prototype.slice.call(arguments);

    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }

    console.error.apply(console, args);
  };
} else {
  debug = function debug() {};
}

exports.debug = debug; // for test

/***/ }),

/***/ 7385:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.fromCallback = function (fn) {
  return Object.defineProperty(function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[args.length - 1] === 'function') fn.apply(this, args);else {
      return new Promise(function (resolve, reject) {
        fn.call.apply(fn, [_this].concat(args, [function (err, res) {
          return err != null ? reject(err) : resolve(res);
        }]));
      });
    }
  }, 'name', {
    value: fn.name
  });
};

exports.fromPromise = function (fn) {
  return Object.defineProperty(function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var cb = args[args.length - 1];
    if (typeof cb !== 'function') return fn.apply(this, args);else fn.apply(this, args.slice(0, -1)).then(function (r) {
      return cb(null, r);
    }, cb);
  }, 'name', {
    value: fn.name
  });
};

/***/ }),

/***/ 875:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 875;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 2057:
/***/ ((module) => {

"use strict";
module.exports = require("constants");

/***/ }),

/***/ 2361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./node_modules/fs-extra/lib/index.js
var lib = __webpack_require__(5064);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
var core = __webpack_require__(8397);
// EXTERNAL MODULE: ./node_modules/badgen/dist/index.js
var dist = __webpack_require__(1650);
;// CONCATENATED MODULE: ./src/badges.ts
function badge(option,summary){var _ref=option||{},_ref$label=_ref.label,label=_ref$label===void 0?'coverage':_ref$label,_ref$style=_ref.style,style=_ref$style===void 0?'classic':_ref$style;var total=summary.total;var pct=total.statements.pct;var colorData={'#49c31a':[100],'#97c40f':[99.99,90],'#a0a127':[89.99,80],'#cba317':[79.99,60],'#ce0000':[59.99,0]};var color=Object.keys(colorData).find(function(value,idx){if(colorData[value].length===1&&pct>=colorData[value][0]){return true;}if(colorData[value].length===2&&pct<=colorData[value][0]&&pct>=colorData[value][1]){return true;}return false;});return (0,dist.badgen)({style:style,label:label,status:"".concat(pct,"%"),color:color.replace(/^#/,'')});}
;// CONCATENATED MODULE: ./src/action.ts
;_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){var output,source,label,style,sourceData,svgStr;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;output=external_path_default().resolve(process.cwd(),(0,core.getInput)('output')||'coverage/badges.svg');source=external_path_default().resolve(process.cwd(),(0,core.getInput)('source')||'coverage/coverage-summary.json');label=(0,core.getInput)('label')||'coverage';style=(0,core.getInput)('style')||'classic';lib_default().ensureDirSync(external_path_default().dirname(output));if(lib_default().existsSync(source)){_context.next=9;break;}(0,core.setFailed)("File \x1B[31m".concat(source,"\x1B[0m does not exist.\n please specify the file directory\n\x1B[35mnpm\x1B[0m coverage-badges-cli \x1B[33m--source\x1B[0m coverage/coverage-summary.json"));return _context.abrupt("return");case 9:(0,core.info)("Source Path: \x1B[32;1m".concat(source,"\x1B[0m"));(0,core.info)("Output Path: \x1B[32;1m".concat(output,"\x1B[0m"));sourceData=__webpack_require__(875)(source);(0,core.startGroup)("Source Path: \x1B[32;1m".concat(source,"\x1B[0m"));(0,core.info)("".concat(JSON.stringify(sourceData,null,2)));(0,core.endGroup)();svgStr=badge({label:label,style:style},sourceData);(0,core.setOutput)('svg',svgStr);(0,core.startGroup)("SVG String: \x1B[32;1m".concat(output,"\x1B[0m"));(0,core.info)("".concat(svgStr));(0,core.endGroup)();lib_default().writeFileSync(output,svgStr);(0,core.info)("\nCreate Coverage Badges: \x1B[32;1m".concat(external_path_default().relative(process.cwd(),output),"\x1B[0m\n"));_context.next=27;break;case 24:_context.prev=24;_context.t0=_context["catch"](0);(0,core.setFailed)(_context.t0.message);case 27:case"end":return _context.stop();}}},_callee,null,[[0,24]]);}))();
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;