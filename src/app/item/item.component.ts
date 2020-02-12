import { todoListes } from "./../models/data";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() todoItem: todoListes;
  @Input() indexOfListe: number;
  //i: number;
  inputTask: string;
  inputChange: string;
  editable: boolean;
  //isComplete: boolean = false;
  //indexOfthisList: number;
  //@Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.editable = false;
    this.inputTask === undefined;
  }

  addTask() {
    if (
      this.inputTask === undefined ||
      this.inputTask == null ||
      this.inputTask.length <= 0
    ) {
      return;
    } else {
      let inputTask = this.inputTask;
      let indexOfthisList = this.indexOfListe;
      this.authService.addnewData(indexOfthisList, inputTask);
      this.inputTask = "";
    }
  }

  // updateTask() {
  //   let inputChange = this.inputChange;
  //   let indexOfthisList = this.indexOfListe;
  //   this.authService.addnewData(indexOfthisList, inputChange);
  //   this.inputChange = "";
  // }

  removeItem(i) {
    var indexOfthisList = this.indexOfListe;
    this.authService.removeItem(indexOfthisList, i);
  }
  editStatut() {
    this.editable = true;
  }
  editItem(item, updatedTodo) {
    var indexOfthisList = this.indexOfListe;
    console.log(updatedTodo.value);

    this.authService.editItem(indexOfthisList, item);
    this.editable = false;
  }

  removeList(indexOfListe) {
    let indexOfthisList = indexOfListe;
    console.log(indexOfthisList);

    this.authService.removeList(indexOfthisList);
  }
}
