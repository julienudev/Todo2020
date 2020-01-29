import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Todo2020";

  // onSubmit() {
  //   console.log("loginForm.value " + this.loginForm.value);
  // }

  ngOnInit() {}
}

// data: {
//   username: string;
//   password: string;
//   todolistes: string[];
// };
// dataChanged: string[];
// listes: string[];

// //loginForm: FormGroup;

// //apiRoot: string = "http://92.222.69.104:80/todo/listes/";

// constructor(private http: HttpClient) {}

// apiRoot: string = "http://92.222.69.104:80/todo/listes/";

// doGETWithHeaders() {
//   console.log(
//     "oh les ptits jeunes, il faut bosser , au lieu d'aller boire des pintes"
//   );
//   const httpOptions = {
//     headers: new HttpHeaders({
//       login: "julien",
//       password: "julien"
//     })
//   };

//   let url = `${this.apiRoot}`;

//   this.http.get(url, httpOptions).subscribe(
//     res => console.log(res),
//     msg => console.log(msg)
//   );
// }
