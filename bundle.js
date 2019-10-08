"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Classes
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class MatematicaStatic {
    static soma(a, b) {
        return a + b;
    }
}
class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Vinicius';
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Oi');
}

MatematicaStatic.soma(1, 5);
*/

/*Constantes e let
const a = 5;

function teste (x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
        console.log(a);
    }
}

teste(10);*/

/*Operação em vetores

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
    return item * 2 + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item == 4;
});

console.log(find);*/

/*Arrow Functions

const arr = [1, 3, 5, 7];

const newArr = arr.map(item => {
    return item + 2;
});

const newArray2 = arr.map(item => item + 2);

console.log(newArr);

const teste = () => {
    return 'teste';
}

console.log(teste());*/

/*Valores padrão

function soma (a = 1, b = 3) {
    return a + b;
}

const somaArrowFunction = (a = 3, b = 6) => a + b;
soma(1);
console.log(soma());
*/

/*Desestruturação de objetos

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Londrina',
        estado: 'Paraná'
    },
};

const { nome, idade, endereco: {cidade} } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome }) {
    console.log(nome);
}

mostraNome(usuario);*/

/*Operadores Rest e Spread*/
//REST - serve para pegar o resto das propriedades
var usuario = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Sotran'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 3, 4));
console.log(somaResto(1, 4, 5));

function somaResto(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
} //Spread : passar informação para outra estrutura de dados (array)


var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var arr3 = [].concat(array1, array2); //mesma coisa que [1, 2, 3, 4, ,5 ,6]

console.log(arr3);
var usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Sotran'
};

var usuario2 = _objectSpread({}, usuario1, {
  empresa2: 'Maptriz',
  nome: 'Lucas'
});

console.log(usuario2);
