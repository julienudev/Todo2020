import { todoListes } from "./../models/data";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  todoListes: todoListes;
  inputList: string;
  indexOfListe: number;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.getList();
  }
  getList() {
    this.todoListes = this.authService.getListService2();
  }
  addList() {
    if (
      this.inputList === undefined ||
      this.inputList == null ||
      this.inputList.length <= 0
    ) {
      return;
    } else {
      let inputList = this.inputList;
      this.authService.addnewList(inputList);
      this.inputList = "";
    }
  }
}
