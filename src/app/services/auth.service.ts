import { todoListes, Data } from "./../models/Data";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: string = "http://92.222.69.104:80/todo/listes/";
  objet: any = [{}];
  todoListes: todoListes;
  todoItem: todoListes;
  data: Data;
  allData: any;

  //todos: any;
  item: string;
  aze: string[];
  constructor(private http: HttpClient) {}

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

  // addTask(e) {
  //   const item = e.target.value;
  //   if (!item) {
  //     return;
  //   } else console.log(item);

  //   this.aze = this.todoListes.elements;
  //   this.aze.push(item);
  //   this.item = "";
  // }

  removeItem(indexOfthisList, indextask) {
    let a = this.todoListes[indexOfthisList].elements.splice(indextask, 1);
    console.log(a);

    // this.allData["todoListes"] = this.todoListes;
    // console.log(this.allData);
  }
  addnewData(indexOfthisList, indextask, inpuTask) {
    this.todoListes[indexOfthisList].elements.push(inpuTask);
    // this.getListService2();
    // //console.log();
    // console.log(newElements);

    // this.todoListes.push(newElements);
    // //this.todoListes.elements.push(newElements);
    // console.log(this.todoListes);

    // var newTodoText = newElements;
    // var thisListe = this.data.todoListes;
    // thisListe.push(newTodoText);

    //objet a poster
    this.allData["todoListes"] = this.todoListes;
    console.log(this.allData);
  }
}

// getAllList(): Observable<Data> {
//   // we expect all customers ICustomers[]
//   return this.http.get<Data[]>(this.url).pipe(
//     // will map customers into callback func and return actual customer that we want
//     map(data => {
//       console.log(data);

//       // checks if there is an customer with same id as parsed above
//       //let customer = customers.filter((cust: todoListes) => cust.id === id);
//       // if customer has length = is not empty, then return first customer
//       // otherwise return null because there is no existing customer with same id
//       return data && data["todoListes"].length ? data["todoListes"] : null;
//     }),

//     catchError(this.handleError)
//   );
// }
// handleError(
//   handleError: any
// ): import("rxjs").OperatorFunction<todoListes, any> {
//   throw new Error("Method not implemented.");
// }
