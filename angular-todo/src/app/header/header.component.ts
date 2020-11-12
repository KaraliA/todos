import {Component, OnDestroy, OnInit} from '@angular/core';
import { TodosService } from '../todos.service';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject();
  private todosSub: Subscription;

  uncheckedNumber = 0;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.uncheckedNumber = this.todosService
      .getTodos()
      .filter(todo => !todo.checked).length;

    this.todosSub = this.todosService.todoObservable
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(todoList =>
        this.uncheckedNumber = todoList.filter(todo => !todo.checked).length);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }



}
