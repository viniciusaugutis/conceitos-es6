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