import { AuthService } from "./services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { TodoListService } from "./services/todo-list.service";
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ItemComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
