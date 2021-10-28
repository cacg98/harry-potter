import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'staff', component: StaffComponent},
  {path: 'students', component: StudentsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'staff' },
  { path: '**', redirectTo: 'staff' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
