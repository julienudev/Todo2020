import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input()
  todoItem: any;
  task: string = "";
  isComplete: boolean = false;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.todoItem);
  }
  completeItem() {
    this.isComplete = !this.isComplete;
  }
  addTodo(): void {
    if (this.task.trim().length === 0) {
      return;
    }

    this.authService.addTodo(this.task);
    this.task = "";
  }

  // deleteItem(i) {
  //   this.todoDoc = this.afs.doc(`Todolist/${i}`);
  //   this.todoDoc.delete();
  //   this.openSnackBar("Item Deleted!", "Dismiss");
  // }
  // editItem(i) {
  //   this.inputValue.content = i.content;
  //   this.editValue = true;
  //   this.inputId = i.id;
  // }

  // completeItem() {
  //   this.isComplete = !this.isComplete;
  // }
}
