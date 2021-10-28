import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
