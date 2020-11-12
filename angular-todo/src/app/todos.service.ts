import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToDoItem {
  id: number;
  name: string;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todoList = [];
  private internalIdCounter = 0;
  private todos = new Subject<ToDoItem[]>();

  todoObservable = this.todos.asObservable();

  constructor() { }

  getTodos(): ToDoItem[] {
    return this.todoList;
  }

  addTodo(name: string): void {
    this.todoList.push({
      id: this.generateId(),
      name,
      checked: false
    });

    this.todos.next(this.todoList);
  }

  removeToDo(id: number): void {
    const index = this.todoList.findIndex(todo => todo.id === id);

    if (index !== -1) {
      this.todoList = [...this.todoList.slice(0, index), ...this.todoList.slice(index + 1)];
    }

    this.todos.next(this.todoList);
  }

  checkTodo(id: number): void {
    const index = this.todoList.findIndex(todo => todo.id === id);

    if (index !== -1) {
      this.todoList[index].checked = !this.todoList[index].checked;
    }

    this.todos.next(this.todoList);
  }

  private generateId(): number {
    return this.internalIdCounter++;
  }
}
