import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();
  todos = [];
  todoName = '';

  constructor(private todosService: TodosService) { }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.todoName.replace(' ', '').length) {
      return;
    }

    this.todosService.addTodo(this.todoName);
    this.todoName = '';
  }

  onRemove(id: number): void {
    this.todosService.removeToDo(id);
  }
  onCheck(id: number): void {
    this.todosService.checkTodo(id);
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
    this.todosService.todoObservable
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(todos => this.todos = todos);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
