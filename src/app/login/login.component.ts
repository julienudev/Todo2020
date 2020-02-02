import { todoListes } from "./../models/data";
import { Data } from "./../models/Data";
import { AuthService } from "./../services/auth.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  todoListes: todoListes;
  isConnected = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      login: [""],
      password: [""]
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  connect2() {
    const httpOptions = {
      headers: new HttpHeaders({
        login: this.f.login.value,
        password: this.f.password.value
      })
    };
    this.authService.getFromServer(httpOptions).subscribe(data => {
      this.todoListes = data;
      this.isConnected = true;
    });
  }
}
