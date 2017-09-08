import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './index';
import { MediaComponent } from './media/index';
import { UserComponent } from './user/index';

import { SafePipe } from './../shared/_pipes/index';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      AsyncLocalStorageModule
    ],
    declarations: [
        HomeComponent,
        MediaComponent,
        UserComponent,
        SafePipe
    ],
    exports: [CommonModule, FormsModule, RouterModule]
  })
  export class HomeModule {
  }
