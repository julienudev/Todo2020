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

  isComplete: boolean = false;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
