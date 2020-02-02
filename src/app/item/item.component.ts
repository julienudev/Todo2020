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

    var indexOfthisList = this.todoItem;
    console.log(indexOfthisList);

    let indexTask = this.todoItem.elements.push(this.inputTask);
    console.log(indexTask);

    //console.log(indexTask);

    let data = this.todoItem;
    this.authService.addnewData(data);
  }
}
