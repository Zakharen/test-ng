import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AuthModule } from './../auth/auth.module';

import { HomeComponent } from './index';
import { MediaComponent } from './media/index';
import { ProfileComponent } from './profile/index';

import { SafePipe } from './../shared/_pipes/index';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, AuthModule],
    declarations: [
        HomeComponent,
        MediaComponent,
        ProfileComponent,
        SafePipe
    ],
    exports: [CommonModule, FormsModule, RouterModule]
  })
  export class HomeModule {
  }
