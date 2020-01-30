import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Data } from "../models/Data";

@Injectable()
export class TodoListService {
  data: any = null;

  constructor(private http: HttpClient) {}
  //objet: Liste;

  url: string = "http://92.222.69.104:80/todo/listes/";

  getList() {
    //let url: string = "http://92.222.69.104:80/todo/listes/";

    return this.http.get(this.url);
  }
}
