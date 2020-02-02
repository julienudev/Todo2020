import { Liste, TodoItems, Data } from "./../models/Data";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { Country } from "../models/Country";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: string = "http://92.222.69.104:80/todo/listes/";
  //objet: any = [{}];

  objet: Data[] = [];
  todos: TodoItems[]; //todos: Todo[] = [];
  test: Data;
  constructor(private http: HttpClient) {
    this.getList();
  }

  getList(): Observable<any> {
    var user = this.objet["utilisateur"];
    var pwd = this.objet["password"];
    const httpOptions = {
      headers: new HttpHeaders({
        login: user,
        password: pwd,
        "Content-Type": "application/json"
      })
    };
    let url: string = "http://92.222.69.104:80/todo/listes/";

    return this.http.get<Data[]>(url, httpOptions).pipe(
      map(data => {
        console.log(data);
        let tableauListes = data["todoListes"];
        this.objet = tableauListes;
        console.log(this.objet);
      })
    );
  }

  getFromServer(httpOptions): Observable<any> {
    let url: string = "http://92.222.69.104:80/todo/listes/";

    return this.http.get<Data>(url, httpOptions).pipe(
      map(data => {
        //console.log(data);
        let tableauListes = data["todoListes"];
        this.objet = tableauListes;
        console.log(this.objet);
      })
    );
  }

  // getListService2() {
  //   return this.objet;
  // }

  // addTodo(task: string): void {
  //   if (task.trim().length === 0) {
  //     return;
  //   }
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       "content-type": "application/json"
  //             })
  //   };
  //   let url: string = "http://92.222.69.104:80/todo/listes/todos/";

  //   this.http
  //     .post(this.url ,task,httpOptions {
  //       title: task,
  //       //completed: false
  //     })
  //     .subscribe((response: any) => {
  //       this.todos.push({
  //         //id: response.id,
  //         todoTitle: task
  //         //completed: false,
  //         //editing: false
  //       });
  //     });

  //   //this.idForTodo++;
  // }

  addTodo(task: string) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      login: "julien",
      password: "julien"
    });
    let options = {
      headers: httpHeaders
    };
    let url: string = "http://92.222.69.104:80/todo/listes/todos/";

    let res = this.http.post(url, task, options);

    //console.log(res);
    return res;
  }
}

// login(httpOptions) {
//   let url: string = "http://92.222.69.104:80/todo/listes/";
//   return this.http.get<Liste[]>(url, httpOptions).subscribe(
//     data => {
//       console.log(data);
//       this.objet = data["todoListes"];
//       console.log(this.objet);
//     },
//     (err: HttpErrorResponse) => {
//       if (err.error instanceof Error) {
//         console.log("Client-side error .");
//       } else {
//         console.log("Server-side error .");
//       }
//     }
//   );
// }
// getListService() {
//   return this.objet;
// }
