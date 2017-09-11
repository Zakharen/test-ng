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
import { HomeModule } from './home/home.module';

import { routing } from './app.routing';

import { AuthGuard } from './shared/_guards/auth.guard';
import {
    AlertService,
    UserService
  } from './shared/_services/index';

// used to create fake backend
import { fakeBackendProvider } from './shared/_helpers/index';

import { AlertComponent } from './shared/_directives/index';
// import { SafePipe } from './shared/_pipes/index';

// add material
// import { MaterialModule } from '@angular/material';
// import 'hammerjs';

import { AddMediaComponent } from './home/media/add-media/add-media.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    HomeModule,
    routing,
    BrowserModule,
    BootstrapModalModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddMediaComponent]
})
export class AppModule { }
