import { AuthService } from "./../services/auth.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  //datas: Data[];
  //public login: string;
  //public password: string;
  objet: any;
  //tab: any;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  //user = new User();

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      login: [""],
      password: [""]
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  toService() {
    const httpOptions = {
      headers: new HttpHeaders({
        login: this.f.login.value,
        password: this.f.login.value
      })
    };

    this.authService.login(httpOptions);
  }

  submit() {
    // let login = this.f.login.value;
    // let password = this.f.login.value;

    const url = "http://92.222.69.104:80/todo/listes/";
    // const body = JSON.stringify({username: username,
    //                              password: password});
    const httpOptions = {
      headers: new HttpHeaders({
        login: this.f.login.value,
        password: this.f.login.value
      })
    };
    //console.log(Headers);

    this.http.get(url, httpOptions).subscribe(
      data => {
        //console.log(data);
        this.objet = data;
        console.log(this.objet);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  }
}

// ngOnInit() {
//   this.registerForm = this.formBuilder.group({
//     username: [""],
//     password: [""]
//   });
// }
// get f() {
//   return this.registerForm.controls;
// }

// newData(): void {
//   this.data = new Data();
// }

// private save(): void {
//   console.log("fonction save" + this.data);

//   this.authService.getData(this.data);
// }

// login() {
//   console.log("username=" + this.f.username.value);
//   console.log("password=" + this.f.password.value);

//   this.save();
// }

//this.datas = this.authService.getData();

// get f() {
//   return this.registerForm.controls;
// }

// login() {
//   console.log("username=" + this.f.username.value);
//   console.log("password=" + this.f.password.value);
//   let username = this.f.username.value;
//   let password = this.f.password.value;
//   //this.authService.getData();
// }

//   //loginForm: FormGroup;

//   loginForm = new FormGroup({
//     login: new FormControl(""),
//     password: new FormControl("")
//   });

//   httpOptions = {
//     headers: new HttpHeaders({
//       login: "julien",
//       password: "julien"
//     })
//   };
//   constructor(public http: HttpClient) {}

//   ngOnInit() {}

//   login() {
//     console.log(this.loginForm.value);

//     let url: string = "http://92.222.69.104:80/todo/listes/";

//     this.http.get(url, this.httpOptions).subscribe(
//       res => console.log(res),
//       msg => console.log(msg)
//     );
//   }
// }

// public submit() {
//   //console.log(this.f.username.value);

//   this.authService.login(this.f.username.value, this.f.password.value);
// }

// submit() {
//   this.authService.SingUp(this.user).then((e:Response) => {
//     // console.log(e);
//     this._toastr.success(e.code, e.message, {
//       timeOut: 1500

//     }).onHidden.subscribe(e=>{
//       // console.log(e);
//       this._route.navigate(["/"]);
//     })
//   }).catch((err:Response) => this._toastr.error(err.code, err.message, {
//     timeOut: 3000
//   }));
// }
