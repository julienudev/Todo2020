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

  inputTask: string;
  isComplete: boolean = false;
  indexOfthisList: number;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  addTask(event) {
    //const newElement = event.target.value;
    var inputTask = this.inputTask;
    console.log(inputTask);

    var indexOfthisList = this.index;
    console.log(indexOfthisList);

    // let indexTask = this.todoItem.elements.length - 1;
    let indexTask = this.i;

    console.log(indexTask);

    // let data = this.todoItem;
    // console.log(data);

    this.authService.addnewData(indexOfthisList, indexTask, inputTask);
  }

  removeItem() {
    var indexOfthisList = this.index;
    console.log(indexOfthisList);

    let indexTask = this.i;

    console.log(indexTask);
    console.log();

    this.authService.removeItem(indexOfthisList, indexTask);
  }

  onNameChange(val) {
    console.log("Changed", val);
  }
}
