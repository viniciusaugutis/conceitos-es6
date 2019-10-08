"use strict";

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

/*Desestruturação de objetos*/
var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Londrina',
    estado: 'Paraná'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);
