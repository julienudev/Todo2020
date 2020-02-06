import { todoListes } from "../models/todoListes";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: string = "http://92.222.69.104:80/todo/listes/";
  todoListes: todoListes;
  allData: any;

  constructor(private http: HttpClient) {}

  postToServer(allData) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    console.log(allData);

    let url: string = "http://92.222.69.104:80/todo/listes/";
    this.http
      .post(url, allData, httpOptions)
      .subscribe(data => console.log(data));
  }

  getFromServer(httpOptions): Observable<any> {
    let url: string = "http://92.222.69.104:80/todo/listes/";

    return this.http.get(url, httpOptions).pipe(
      map(data => {
        console.log(data);
        this.allData = data;
        this.todoListes = data["todoListes"];
        console.log(this.todoListes);
      })
    );
  }

  getListService2() {
    return this.todoListes;
  }

  removeItem(indexOfthisList, i) {
    let a = this.todoListes[indexOfthisList].elements.splice(i, 1);
    console.log(a);
    this.allData["todoListes"] = this.todoListes;
    console.log(this.allData);
    this.postToServer(this.allData);
  }
  addnewData(indexOfthisList, inpuTask) {
    let a = this.todoListes[indexOfthisList].elements.push(inpuTask);
    console.log(a);
    this.allData["todoListes"] = this.todoListes;
    console.log(this.allData);
    this.postToServer(this.allData);
  }
}
