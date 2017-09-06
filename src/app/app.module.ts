import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// used to create fake backend
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

// added by Oz:
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthModule } from './auth/auth.module';

import { routing } from './app.routing';

import { AuthGuard } from './shared/_guards/auth.guard';
import {
    AuthenticationService,
    AlertService,
    UserService
  } from './shared/_services/index';

// used to create fake backend
import { fakeBackendProvider } from './shared/_helpers/index';

import { HomeComponent } from './home/index';
import { AlertComponent } from './shared/_directives/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
