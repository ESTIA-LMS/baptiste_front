import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TokenInterceptorProvider } from './_helpers/token.interceptor';

import  { User } from './_models/user'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [HttpClientModule, TokenInterceptorProvider, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
