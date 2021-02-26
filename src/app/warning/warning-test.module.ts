import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WarningRoutingModule } from './warning-routing.module';
import { AlertModule } from '../share/alert/alert.module';

import { WarningTestComponent } from './warning-test.component';



@NgModule({
  declarations: [WarningTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlertModule,
    WarningRoutingModule
  ]
})
export class WarningTestModule { }
