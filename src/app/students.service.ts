import { Injectable } from '@angular/core';
import { Character } from './character';
import { students } from '../assets/mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Character[] = students;

  constructor() { }
  
  getStudents(): Character[] {
    return this.students
  }
}
