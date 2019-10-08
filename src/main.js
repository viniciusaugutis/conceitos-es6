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

/*Operadores Rest e Spread

//REST - serve para pegar o resto das propriedades

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Sotran'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];

const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma (...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));
console.log(somaResto(1, 4, 5));

function somaResto(a, b, ...params) {
    return params.reduce((total, next) => total + next);
}

//Spread : passar informação para outra estrutura de dados (array)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arr3 = [...array1, ...array2];
//mesma coisa que [1, 2, 3, 4, ,5 ,6]
console.log(arr3);

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Sotran'
};

const usuario2 = {...usuario1, empresa2: 'Maptriz', nome: 'Lucas'}
console.log(usuario2);
*/

/* Template literal

const nome = 'Diego';
const idade = 22;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

*/

/*Object short syntax 

const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'Sotran'
}
console.log(usuario);*/

/*import { sub, soma as somaFuncoes} from './funcoes';
import somaFunction from './soma';
import * as funcoes from './funcoes';

console.log(somaFunction(1,2));
console.log(somaFuncoes(1, 2));
console.log(sub(4, 2));
console.log(funcoes);

//export default ele nao precisa das chaves {} para importacao dele nos outros arquivos
*/

alert('Opa');
