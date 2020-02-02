import { AuthService } from "./../services/auth.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { TodoItems, Data } from "../models/Data";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Output() remove: EventEmitter<any> = new EventEmitter();
  todoTitle: string;
  todoList: Data[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.todoTitle = "";
    //this.getList();
    this.getList();
  }

  getList() {
    this.authService.getList().subscribe(data => {
      this.todoList = data;
      console.log(this.todoList);
    });
    return this.todoList;
  }
  // getFromServer(){

  // }
  // removeItem() {
  //   this.remove.emit(this.todoList);
  // }
}

//   addTodo(): void {
//   if (this.todoTitle.trim().length === 0) {
//     return;
//   }

//   this.authService.addTodo(this.todoTitle);

//   this.todoTitle = '';
// }

// todoList: Data[];
// TodoItem: TodoItems = null;
// Listes: any;
// d: Data[];
