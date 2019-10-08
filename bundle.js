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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/* Classes\r\nclass List {\r\n    constructor() {\r\n        this.data = [];\r\n    }\r\n\r\n    add(data) {\r\n        this.data.push(data);\r\n        console.log(this.data);\r\n    }\r\n}\r\n\r\nclass MatematicaStatic {\r\n    static soma(a, b) {\r\n        return a + b;\r\n    }\r\n}\r\nclass TodoList extends List {\r\n    constructor() {\r\n        super();\r\n        this.usuario = 'Vinicius';\r\n    }\r\n}\r\n\r\nconst MinhaLista = new TodoList();\r\n\r\ndocument.getElementById('novotodo').onclick = function() {\r\n    MinhaLista.add('Oi');\r\n}\r\n\r\nMatematicaStatic.soma(1, 5);\r\n*/\n\n/*Constantes e let\r\nconst a = 5;\r\n\r\nfunction teste (x) {\r\n    let y = 2;\r\n\r\n    if (x > 5) {\r\n        console.log(x, y);\r\n        console.log(a);\r\n    }\r\n}\r\n\r\nteste(10);*/\n\n/*Operação em vetores\r\n\r\nconst arr = [1, 3, 4, 5, 8, 9];\r\n\r\nconst newArr = arr.map(function(item, index) {\r\n    return item * 2 + index;\r\n});\r\n\r\nconsole.log(newArr);\r\n\r\nconst sum = arr.reduce(function(total, next) {\r\n    return total + next;\r\n});\r\n\r\nconsole.log(sum);\r\n\r\nconst filter = arr.filter(function(item) {\r\n    return item % 2 === 0;\r\n});\r\n\r\nconsole.log(filter);\r\n\r\nconst find = arr.find(function(item) {\r\n    return item == 4;\r\n});\r\n\r\nconsole.log(find);*/\n\n/*Arrow Functions\r\n\r\nconst arr = [1, 3, 5, 7];\r\n\r\nconst newArr = arr.map(item => {\r\n    return item + 2;\r\n});\r\n\r\nconst newArray2 = arr.map(item => item + 2);\r\n\r\nconsole.log(newArr);\r\n\r\nconst teste = () => {\r\n    return 'teste';\r\n}\r\n\r\nconsole.log(teste());*/\n\n/*Valores padrão\r\n\r\nfunction soma (a = 1, b = 3) {\r\n    return a + b;\r\n}\r\n\r\nconst somaArrowFunction = (a = 3, b = 6) => a + b;\r\nsoma(1);\r\nconsole.log(soma());\r\n*/\n\n/*Desestruturação de objetos\r\n\r\nconst usuario = {\r\n    nome: 'Diego',\r\n    idade: 23,\r\n    endereco: {\r\n        cidade: 'Londrina',\r\n        estado: 'Paraná'\r\n    },\r\n};\r\n\r\nconst { nome, idade, endereco: {cidade} } = usuario;\r\nconsole.log(nome);\r\nconsole.log(idade);\r\nconsole.log(cidade);\r\n\r\nfunction mostraNome({ nome }) {\r\n    console.log(nome);\r\n}\r\n\r\nmostraNome(usuario);*/\n\n/*Operadores Rest e Spread\r\n\r\n//REST - serve para pegar o resto das propriedades\r\n\r\nconst usuario = {\r\n    nome: 'Diego',\r\n    idade: 23,\r\n    empresa: 'Sotran'\r\n};\r\n\r\nconst {nome, ...resto} = usuario;\r\n\r\nconsole.log(nome);\r\nconsole.log(resto);\r\n\r\nconst arr = [1,2,3,4];\r\n\r\nconst [ a, b, ...c] = arr;\r\n\r\nconsole.log(a);\r\nconsole.log(b);\r\nconsole.log(c);\r\n\r\nfunction soma (...params) {\r\n    return params.reduce((total, next) => total + next);\r\n}\r\n\r\nconsole.log(soma(1, 3, 4));\r\nconsole.log(somaResto(1, 4, 5));\r\n\r\nfunction somaResto(a, b, ...params) {\r\n    return params.reduce((total, next) => total + next);\r\n}\r\n\r\n//Spread : passar informação para outra estrutura de dados (array)\r\n\r\nconst array1 = [1, 2, 3];\r\nconst array2 = [4, 5, 6];\r\n\r\nconst arr3 = [...array1, ...array2];\r\n//mesma coisa que [1, 2, 3, 4, ,5 ,6]\r\nconsole.log(arr3);\r\n\r\nconst usuario1 = {\r\n    nome: 'Diego',\r\n    idade: 23,\r\n    empresa: 'Sotran'\r\n};\r\n\r\nconst usuario2 = {...usuario1, empresa2: 'Maptriz', nome: 'Lucas'}\r\nconsole.log(usuario2);\r\n*/\n\n/* Template literal\r\n\r\nconst nome = 'Diego';\r\nconst idade = 22;\r\n\r\nconsole.log(`Meu nome é ${nome} e tenho ${idade} anos`);\r\n\r\n*/\n\n/*Object short syntax \r\n\r\nconst nome = 'Diego';\r\nconst idade = 23;\r\n\r\nconst usuario = {\r\n    nome,\r\n    idade,\r\n    empresa: 'Sotran'\r\n}\r\nconsole.log(usuario);*/\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });