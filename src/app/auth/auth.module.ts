import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AuthenticationService } from './services/authentication.service';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [
      LoginComponent,
      RegisterComponent
    ],
    exports: [CommonModule, FormsModule, RouterModule],
    providers: [AuthenticationService]
  })
  export class AuthModule {
  }
