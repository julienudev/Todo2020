import { todoListes } from "./../models/data";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  todoListes: todoListes;
  inputList: string;
  indexOfListe: number;
  //todoItem:todoListes;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.getList();
  }
  getList() {
    this.todoListes = this.authService.getListService2();
    console.log(this.todoListes);
  }

  addList() {
    let inputList = this.inputList;
    console.log(inputList);

    // let indexOfthisList = todoListes.length;
    // console.log(indexOfthisList);

    this.authService.addnewList(inputList);
    this.inputList = "";
  }
}
