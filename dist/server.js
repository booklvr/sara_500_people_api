/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/models/index.js":
/*!********************************!*\
  !*** ./src/js/models/index.js ***!
  \********************************/
/*! exports provided: connectDb, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDb\", function() { return connectDb; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./src/js/models/user.js\");\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person */ \"./src/js/models/person.js\");\n\n\n\n\nconst connectDb = () => {\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DATABASE_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true\n  });\n};\n\nconst models = {\n  User: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Person: _person__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (models);\n\n//# sourceURL=webpack:///./src/js/models/index.js?");

/***/ }),

/***/ "./src/js/models/person.js":
/*!*********************************!*\
  !*** ./src/js/models/person.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst personSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  city: {\n    type: String,\n    required: true\n  },\n  country: {\n    type: String,\n    required: true\n  },\n  food: {\n    type: String,\n    required: true\n  },\n  job: {\n    type: String,\n    required: true\n  },\n  skill: {\n    type: String,\n    required: true\n  },\n  dinner: {\n    type: String,\n    required: true\n  },\n  extra: {\n    type: String\n  },\n  user: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'User'\n  }\n});\nconst Person = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Person', personSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Person);\n\n//# sourceURL=webpack:///./src/js/models/person.js?");

/***/ }),

/***/ "./src/js/models/user.js":
/*!*******************************!*\
  !*** ./src/js/models/user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  username: {\n    type: String,\n    unique: true\n  }\n});\n\nuserSchema.statics.findByLogin = async function (login) {\n  let user = await this.findOne({\n    username: login\n  });\n\n  if (!user) {\n    console.log('no user found');\n  }\n\n  return user;\n};\n\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/js/models/user.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session */ \"./src/server/routes/session.js\");\n/* harmony import */ var _persons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persons */ \"./src/server/routes/persons.js\");\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ \"./src/server/routes/users.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  session: _session__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  persons: _persons__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  users: _users__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/persons.js":
/*!**************************************!*\
  !*** ./src/server/routes/persons.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])(); // Get all peoples answers\n\nrouter.get('/', async (req, res) => {\n  const persons = await req.context.models.Person.find();\n  return res.send(persons);\n});\nrouter.get('/:personId', async (req, res) => {\n  const person = await req.context.models.Person.findById(req.params.personId);\n  return res.send(person);\n});\nrouter.post('/', async (req, res) => {\n  const person = await req.context.models.Person.create({\n    name: req.body.name,\n    city: req.body.city,\n    country: req.body.country,\n    food: req.body.food,\n    job: req.body.job,\n    skill: req.body.skill,\n    dinner: req.body.dinner,\n    etc: req.body.etc,\n    user: req.context.me.id\n  });\n  return res.send(person);\n});\nrouter.delete('/:personId', async (req, res) => {\n  const person = await req.context.models.Person.findById(req.params.personId);\n  let result = null;\n\n  if (person) {\n    result = await person.remove();\n  }\n\n  return res.send(result);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/persons.js?");

/***/ }),

/***/ "./src/server/routes/session.js":
/*!**************************************!*\
  !*** ./src/server/routes/session.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.get('/', async (req, res) => {\n  return res.send('hello');\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/session.js?");

/***/ }),

/***/ "./src/server/routes/users.js":
/*!************************************!*\
  !*** ./src/server/routes/users.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])(); // Get all peoples answers\n\nrouter.get('/', async (req, res) => {\n  const users = await req.context.models.User.find();\n  return res.send(users);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/users.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _js_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/models */ \"./src/js/models/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n\n // load environment variables from\n\n // creates a cors header to prevent \"Cross-Origin Request Blocked errors\"\n\n // creates express server\n\n\n\n\n\n // creates unique ideas uudiv4()\n//import models and routes\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()(),\n      DIST_DIR = __dirname,\n      HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html'),\n      compiler = webpack__WEBPACK_IMPORTED_MODULE_4___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default.a); //MIDDLEWARE\n// MIDDLEWARE COMES FIRST\n\napp.use(async (req, res, next) => {\n  req.context = {\n    models: _js_models__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    me: await _js_models__WEBPACK_IMPORTED_MODULE_9__[\"default\"].User.findByLogin('saradewaal') // pseuda authenticated user\n\n  };\n  next();\n});\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler, {\n  publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default()(compiler));\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.json()); // body-parser - parses incoming request stream and makes it accessible on req.body and exposes it as json\n//ROUTES\n\napp.use('/session', _routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"].session);\napp.use('/persons', _routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"].persons);\napp.use('/users', _routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"].users); // add cors header to every request by default\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()()); // HOMEPAGE TEST\n\napp.get('/', (req, res, next) => {\n  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {\n    if (err) {\n      return next(err);\n    }\n\n    res.set('content-type', 'text/html');\n    res.send(result);\n    res.end();\n  });\n});\nconst eraseDataBaseOnSync = true;\nconst PORT = process.env.PORT || 3000;\nObject(_js_models__WEBPACK_IMPORTED_MODULE_9__[\"connectDb\"])().then(async () => {\n  if (eraseDataBaseOnSync) {\n    await Promise.all([_js_models__WEBPACK_IMPORTED_MODULE_9__[\"default\"].User.deleteMany({}), _js_models__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Person.deleteMany({})]);\n    createPersons();\n  }\n\n  app.listen(process.env.PORT, () => {\n    console.log(`Example app listenning on port ${process.env.PORT}!`);\n  });\n});\n\nconst createPersons = async () => {\n  console.log('YOU ARE ADDING A USER AND PERSON');\n  const sara = new _js_models__WEBPACK_IMPORTED_MODULE_9__[\"default\"].User({\n    username: 'saradewaal'\n  });\n  const person1 = new _js_models__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Person({\n    name: 'nick',\n    city: 'busan',\n    country: 'korea',\n    food: 'steak',\n    job: 'robber',\n    skill: 'hacker',\n    dinner: 'Nietzsche'\n  });\n  await sara.save();\n  await person1.save();\n};\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\"); // const MiniCssExtractPlugin = require('mini-css-extract-plugin');\n\n\nconst HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    app: ['@babel/polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: 'source-map',\n  module: {\n    rules: [{\n      enforce: \"pre\",\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"eslint-loader\",\n      options: {\n        emitWarning: true,\n        failOnError: false,\n        failOnWarning: false,\n        rules: {\n          \"no-console\": 0,\n          \"no-undef\": 0\n        }\n      }\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader',\n      query: {\n        presets: ['@babel/preset-env']\n      }\n    }, {\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" // options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.(sc|c)ss$/,\n      use: [// MiniCssExtractPlugin.loader,\n      'style-loader', 'css-loader', 'postcss-loader', 'sass-loader']\n    }, {\n      test: /\\.(png|jpe?g|gif)$/i,\n      use: [{\n        loader: 'file-loader'\n      }]\n    }, {\n      test: /\\.(eot|svg|ttf|woff)$/i,\n      use: [{\n        loader: 'file-loader'\n      }]\n    }]\n  },\n  plugins: [new HtmlWebpackPlugin({\n    title: '500 Chance Encounters',\n    template: './src/html/index.html',\n    excludeChunks: ['server']\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin() // new MiniCssExtractPlugin({\n  //     filename: 'style.css',\n  //     chunkFilename: '[id].css',\n  // })\n  ]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv/config\");\n\n//# sourceURL=webpack:///external_%22dotenv/config%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });