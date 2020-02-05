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
  //isComplete: boolean = false;
  //indexOfthisList: number;
  //@Output() remove: EventEmitter<any> = new EventEmitter();


  constructor(private authService: AuthService) {}

  ngOnInit() {}

  addTask() {
    let inputTask = this.inputTask;
    let indexOfthisList = this.indexOfListe;
    this.authService.addnewData(indexOfthisList, inputTask);
    this.inputTask = "";
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
}
