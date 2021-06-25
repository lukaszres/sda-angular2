import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyComponent} from "./components/my/my.component";
import {MyDirective} from "./directives/my.directive";

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
