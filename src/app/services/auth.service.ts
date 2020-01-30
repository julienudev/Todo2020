import { Liste, TodoItems, Data } from "./../models/Data";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  // public username: string;
  // public password: string;

  //data: Data[];
  //data: any = null;

  //listItem: TodoItem[];
  // private listItem: TodoItems[] = [
  //   { oneItem: "install NodeJS" },
  //   { oneItem: "install Angular CLI" }
  // ];
  // todoItem: TodoItems;
  constructor(private http: HttpClient) {}

  // objet: Liste;

  url: string = "http://92.222.69.104:80/todo/listes/";
  // data: Data[];
  //test: List;

  // list: Liste[];

  // public Data = [];

  // getFromServer(httpOptions) {
  //   this.http
  //     .get<Data[]>("http://92.222.69.104:80/todo/listes/", httpOptions)
  //     .subscribe(
  //       response => {
  //         this.data = response;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log("Erreur ! : " + error);
  //       }
  //     );
  // }

  objet: any = [{}];
  //public todoList = [{}];

  login(httpOptions) {
    let url: string = "http://92.222.69.104:80/todo/listes/";
    return this.http.get<any>(url, httpOptions).subscribe(
      data => {
        console.log(data);
        let tableauListes = data["todoListes"];
        //this.list = tableauListes;
        console.log(tableauListes);
        // let liste1 = tableauListes[0];
        // console.log(liste1);
        this.objet = tableauListes;
        console.log(this.objet);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  }

  getListService() {
    return this.objet;
  }
}
