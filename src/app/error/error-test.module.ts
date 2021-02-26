import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ErrorRoutingModule } from './error-routing.module';
import { AlertModule } from '../share/alert/alert.module';

import { ErrorTestComponent } from './error-test.component';



@NgModule({
  declarations: [ErrorTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlertModule,
    ErrorRoutingModule
  ]
})
export class ErrorTestModule { }
