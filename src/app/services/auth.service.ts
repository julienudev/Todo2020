import { List, TodoItem, Data } from "./../models/Data";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  public username: string;
  public password: string;

  data: Data[];
  list: List[];
  private todoList: TodoItem[] = [
    { task: "install NodeJS" },
    { task: "install Angular CLI" }
  ];
  constructor(private http: HttpClient) {}
  //objet: Data;

  url: string = "http://92.222.69.104:80/todo/listes/";
  //objet: any = {};
  //data: Data;

  getTodoList() {
    return this.todoList;
  }

  login(httpOptions) {
    let url: string = "http://92.222.69.104:80/todo/listes/";

    this.http.get<Data>(url, httpOptions).subscribe(
      data => {
        //console.log(data);
        //this.objet = data;
        console.log(data);
        //bookList = bookList;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
    //console.log(this.objet);
  }
}
