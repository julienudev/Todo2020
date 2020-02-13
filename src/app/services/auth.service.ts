import { todoListes } from "./../models/data";
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
  login: string;
  password: string;

  constructor(private http: HttpClient) {}

  signIn(login, password): Observable<any> {
    let url: string =
      "http://92.222.69.104:80/todo/create/" + login + "/" + password;

    return this.http.get(url).pipe(
      map(data => {
        console.log(data);
        this.allData = data;
        this.todoListes = data["todoListes"];
        console.log(this.todoListes);
      })
    );
  }

  postToServer(allData) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    let url: string = "http://92.222.69.104:80/todo/listes/";
    this.http
      .post(url, allData, httpOptions)
      .subscribe(data => console.log(data));
  }

  getFromServer(httpOptions): Observable<any> {
    let url: string = "http://92.222.69.104:80/todo/listes/";

    return this.http.get(url, httpOptions).pipe(
      map(data => {
        this.allData = data;
        this.todoListes = data["todoListes"];
      })
    );
  }

  getListService2() {
    return this.todoListes;
  }

  removeItem(indexOfthisList, i) {
    let a = this.todoListes[indexOfthisList].elements.splice(i, 1);
    this.allData["todoListes"] = this.todoListes;
    this.postToServer(this.allData);
  }

  // editItem(indexOfthisList, item) {
  //    this.allData["todoListes"] = this.todoListes;
  //   console.log(this.allData);
  //   this.postToServer(this.allData);
  // }

  updateTodo(item, i, indexOfListe) {
    this.todoListes[indexOfListe].elements[i] = item;
    this.allData["todoListes"] = this.todoListes;
    this.postToServer(this.allData);
  }
  addnewData(indexOfthisList, inpuTask) {
    let a = this.todoListes[indexOfthisList].elements.push(inpuTask);
    this.allData["todoListes"] = this.todoListes;
    this.postToServer(this.allData);
  }

  addnewList(inputList) {
    var obj = {
      name: inputList,
      elements: []
    };
    console.log(obj);
    this.allData.todoListes.push(obj);
    this.postToServer(this.allData);
  }

  removeList(indexOfthisList) {
    this.allData.todoListes.splice(indexOfthisList, 1);
    this.postToServer(this.allData);
  }
}
