import { Injectable } from '@angular/core';
import { Character } from './character';
import { staff } from '../assets/mock-staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private staff: Character[] = staff;

  constructor() { }

  getStaff(): Character[] {
    return this.staff
  }
}
