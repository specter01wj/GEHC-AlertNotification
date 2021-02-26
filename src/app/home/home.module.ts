import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { AlertModule } from '../share/alert/alert.module';

@NgModule({
  declarations: [HomeComponent,],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    AlertModule
  ]
})
export class HomeModule { }
