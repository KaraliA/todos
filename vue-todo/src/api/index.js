let _toDoList = [
    {
        id: Math.floor(Math.random()*Date.now()),
        text: 'wake up',
        done: false
    }
];

export default {
    getToDoList(cb) {
        setTimeout(() => cb(_toDoList), 100);
    },
    addToDoItem(itemText, cb) {
        _toDoList.push({
            id: Math.floor(Math.random()*Date.now()),
            text: itemText,
            done: false
        });
        setTimeout(() => cb(), 100);
    },
    removeToDoItem(item, cb) {
        _toDoList.splice(_toDoList.indexOf(item), 1);
        setTimeout(() => cb(), 100);
    },
    clearToDoList(cb) {
        _toDoList = [];
        setTimeout(() => cb(), 100);
    },
    removeDoneItems(cb) {
        _toDoList = _toDoList.filter(item => !item.done);
        setTimeout(() => cb(), 100);
    }
}