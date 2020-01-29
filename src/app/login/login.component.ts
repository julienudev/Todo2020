import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
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

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      login: [""],
      password: [""]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  login() {
    console.log("username=" + this.f.login.value);
    console.log("password=" + this.f.password.value);
  }
}
