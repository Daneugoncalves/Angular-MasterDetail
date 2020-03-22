import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';
import {InMemoryDatabase} from './in-memory-database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: true,
      tapToDismiss: true
    }),
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
