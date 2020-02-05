import { todoListes } from "./../models/data";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input()
  todoItem: todoListes;
  @Input() indexOfListe: number;
  //@Input() i: number;

  //y: number;
  inputTask: string;
  isComplete: boolean = false;
  indexOfthisList: number;
  //@Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  addTask() {
    let inputTask = this.inputTask;
    console.log(inputTask);
    let indexOfthisList = this.indexOfListe;
    console.log(indexOfthisList);
    // console.log(this.index);
    // this.authService.addnewData(this.index, inputTask);
  }

  removeItem(y) {
    var indexOfthisList = this.indexOfListe;
    console.log(indexOfthisList);

    console.log(y);

    this.authService.removeItem(indexOfthisList, y);
  }
}
