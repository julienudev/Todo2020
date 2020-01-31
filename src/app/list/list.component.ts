import { AuthService } from "./../services/auth.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { TodoItems } from "../models/Data";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  todoList = [{}];
  TodoItem: TodoItems = null;

  getList() {
    this.todoList = this.authService.getFromServer();
    console.log(this.todoList);
  }
  // getFromServer(){

  // }
  removeItem() {
    this.remove.emit(this.todoList);
  }
}
