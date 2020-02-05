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
  @Input() index: number;
  @Input() i: number;
  @Input() yndex: number;

  inputTask: string;
  isComplete: boolean = false;
  indexOfthisList: number;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  addTask() {
    //const newElement = event.target.value;
    let inputTask = this.inputTask;
    console.log(inputTask);

    let indexOfthisList = this.index;
    console.log(indexOfthisList);
    console.log(this.index);

    // let data = this.todoListes;
    // console.log(data);

    this.authService.addnewData(this.index, inputTask);
  }

  removeItem() {
    var indexOfthisList = this.index;
    console.log(indexOfthisList);
    let indexTask = this.i;

    console.log(indexTask);
    console.log();

    this.authService.removeItem(indexOfthisList, indexTask);
  }
}
