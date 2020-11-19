let _toDoList = [
    {
        id: Math.floor(Math.random()*Date.now()),
        text: 'wake up',
        done: false,
        createdAt: new Date()
    }
];
const promise = value => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 500);
    });
}

export default {
    getToDoList() {
        return promise(_toDoList);
    },
    addToDoItem(itemText) {
        const item = {
            id: Math.floor(Math.random()*Date.now()),
            text: itemText,
            done: false,
            createdAt: new Date()
        }
        _toDoList.push(item);
        return promise(item);
    },
    removeToDoItem(item) {
        _toDoList.splice(_toDoList.indexOf(item), 1);
        return promise(item);
    },
    clearToDoList() {
        _toDoList = [];
        return promise(_toDoList);
    },
    removeDoneItems() {
        _toDoList = _toDoList.filter(item => !item.done);
        return promise(_toDoList);
    }
}