import { todoListes, Data } from "./../models/Data";
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
  // todoItem: todoListes;
  // data: Data;
  allData: any;

  // item: string;
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

  removeItem(indexOfthisList, indextask) {
    let a = this.todoListes[indexOfthisList].elements.splice(indextask, 1);
    console.log(a);
    this.allData["todoListes"] = this.todoListes;
    console.log(this.allData);
  }
  addnewData(indexOfthisList, inpuTask) {
    let a = this.todoListes[indexOfthisList].elements.push(inpuTask);
    console.log(a);
    // this.todoListes.push(newElements);
    // //this.todoListes.elements.push(newElements);
    // console.log(this.todoListes);
    // var newTodoText = newElements;
    // var thisListe = this.data.todoListes;
    // thisListe.push(newTodoText);

    //objet a poster
    this.allData["todoListes"] = this.todoListes;
    console.log(this.allData);
    this.postToServer(this.allData);
  }
}
