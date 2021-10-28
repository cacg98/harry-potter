import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
    StaffComponent
  ]
})
export class StaffModule { }
