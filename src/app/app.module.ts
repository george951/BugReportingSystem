import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { NavComponent } from './main/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgBugsComponent } from './ng-bugs/ng-bugs.component';

@NgModule({
  declarations: [
    AppComponent,
    NgBugsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
