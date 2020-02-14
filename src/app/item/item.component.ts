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
  inputTask: string;
  inputChange: string;
  editable: boolean;

  constructor(private authService: AuthService) { }

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
      this.editable = false;
    }
  }
  removeItem(i) {
    var indexOfthisList = this.indexOfListe;
    this.authService.removeItem(indexOfthisList, i);
    this.editable = false;

  }
  editStatut() {
    this.editable = true;
  }
  removeList(indexOfListe) {
    let indexOfthisList = indexOfListe;
    this.authService.removeList(indexOfthisList);
    this.editable = false;

  }
  updateTodo(item, newValue, i, indexOfListe) {
    item = newValue;
    this.editable = false;
    this.authService.updateTodo(item, i, indexOfListe);

  }
}
