import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     username: "julien",
    //     password: "julien"
    //   })
    // };

    let url: string = "http://92.222.69.104:80/todo/listes/";

    this.http.get(url, httpOptions).subscribe(res => {
      //console.log(data);
      this.objet = res;
      console.log("retour du http dans service" + this.objet);
    });
  }

  // login(username: string, password: string) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       username: "julien",
  //       password: "julien"
  //     })
  //   };

  //   let url: string = "http://92.222.69.104:80/todo/listes/";

  //   this.http
  //     .get(url, httpOptions)
  //     .subscribe(res => console.log("reponse du http :" + res));
  // }
}

//   getData(data: Data): Data[] {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         login: "julien",
//         password: "julien"
//       })
//     };

//     let url: string = "http://92.222.69.104:80/todo/listes/";

//     this.http.get(url, httpOptions).subscribe(
//       res => console.log("reponse du http :" + res),
//       msg => console.log(msg)
//     );

//     //console.log("DATAS AVEC:" + DATAS);

//     return;
//   }
// }
