import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  public username: string;
  public password: string;

  constructor(private http: HttpClient) {}

  url: string = "http://92.222.69.104:80/todo/listes/";
  objet: any;

  login(httpOptions) {
    let url: string = "http://92.222.69.104:80/todo/listes/";

    this.http.get(url, httpOptions).subscribe(res => {
      this.objet = res;
      console.log("retour du http dans service" + this.objet);
    });
  }
}
