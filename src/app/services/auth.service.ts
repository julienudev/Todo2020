import { Liste, TodoItems, Data } from "./../models/Data";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { Country } from "../models/Country";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: string = "http://92.222.69.104:80/todo/listes/";
  objet: Liste[];

  constructor(private http: HttpClient) {}

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

  getFromServer(httpOptions): Observable<any> {
    let url: string = "http://92.222.69.104:80/todo/listes/";

    return this.http.get(url, httpOptions);
  }

  getListService2() {
    return this.objet;
  }
}
