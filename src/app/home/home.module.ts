import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AuthModule } from './../auth/auth.module';

import { HomeComponent } from './index';
import { MediaComponent } from './media/index';
import { ProfileComponent } from './profile/index';
import { AddMediaComponent } from './media/add-media.component';

import { SafePipe } from './../shared/_pipes/index';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      AuthModule,
      AsyncLocalStorageModule,
      CarouselModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        MediaComponent,
        ProfileComponent,
        SafePipe,
        AddMediaComponent
    ],
    exports: [CommonModule, FormsModule, RouterModule]
  })
  export class HomeModule {
  }
