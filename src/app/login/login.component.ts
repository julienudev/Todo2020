import { Data } from "./../models/Data";
import { AuthService } from "./../services/auth.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { TodoItems } from "../models/Data";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  //objet: any;
  //Data: any = [];
  //TodoItem: TodoItems = null;
  todoList = [{}];
  isConnected = false;

  //todoList: Data[];

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

  // connect() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       login: this.f.login.value,
  //       password: this.f.password.value
  //     })
  //   };
  //   this.authService.login(httpOptions);
  // }

  // getList() {
  //   this.todoList = this.authService.getListService();
  //   console.log(this.todoList);
  // }

  connect2() {
    const httpOptions = {
      headers: new HttpHeaders({
        login: this.f.login.value,
        password: this.f.password.value
      })
    };
    this.authService.getFromServer(httpOptions).subscribe(data => {
      this.todoList = data;
      this.isConnected = true;
      //console.log(data);
    });
  }

  // getList() {
  //   this.todoList = this.authService.getListService2();
  //   console.log(this.todoList);
  // }
}
