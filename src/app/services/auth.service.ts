import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //apiRoot: string = "http://92.222.69.104:80/todo/listes/";

  //loginForm: FormGroup;

  login() {
    
    const httpOptions = {
      headers: new HttpHeaders({
        login: "julien",
        password: "julien"
      })
    };

    let url: string = "http://92.222.69.104:80/todo/listes/";

    this.http.get(url, httpOptions).subscribe(
      res => console.log(res),
      msg => console.log(msg)
    );
  }
}
