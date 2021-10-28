import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Character[] = [];

  constructor(private studentsService: StudentsService) { }

  private getStudents() {
    this.students = this.studentsService.getStudents();
  }

  ngOnInit(): void {
    this.getStudents();
  }

}
