import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyComponent} from "./components/my/my.component";
import {MyDirective} from "./directives/my.directive";
import {ModuloPipe} from "./pipes/modulo.pipe";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {APIResolver} from "./resolvers/APIResolver";
import {AuthGuard} from "./routerGuards/AuthGuard";
import {AuthService} from "./services/auth.service";

const appRotes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: {message: APIResolver}
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {page: 'Home page'}
  },
  {
    path: 'news/:newsId',
    component: NewsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyDirective,
    ModuloPipe,
    HomeComponent,
    LoginComponent,
    NewsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRotes)
  ],
  providers: [APIResolver,
    AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
