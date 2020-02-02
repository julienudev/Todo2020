import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input()
  todoItem: any;
  isComplete: boolean = false;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.todoItem);
  }
  completeItem() {
    this.isComplete = !this.isComplete;
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
