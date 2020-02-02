import { element } from "protractor";
import { todoListes, Data } from "./../models/Data";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: string = "http://92.222.69.104:80/todo/listes/";
  objet: any = [{}];
  todoListes: todoListes;
  //todos: any;

  constructor(private http: HttpClient) {}

  getFromServer(httpOptions): Observable<any> {
    let url: string = "http://92.222.69.104:80/todo/listes/";

    return this.http.get(url, httpOptions).pipe(
      map(data => {
        console.log(data);
        this.todoListes = data["todoListes"];
        console.log(this.todoListes);
      })
    );
  }

  getListService2() {
    return this.todoListes;
  }
}
