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
  test: todoListes;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getList();
    //this.getList2();
  }
  getList() {
    this.todoListes = this.authService.getListService2();
    console.log(this.todoListes);
  }

  // getList2() {
  //   // this.todoListes2=new todoListes();
  //   this.authService.getAllList();
  //   //console.log(this.todoListes);
  //   return todoListes;
  // }
}
