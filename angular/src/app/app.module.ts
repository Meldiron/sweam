import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import {ApiService} from './api.service';
import {AlertService} from './alert.service';

import { SweetAlertService } from 'ng2-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    BodyComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    AlertService,
    SweetAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
