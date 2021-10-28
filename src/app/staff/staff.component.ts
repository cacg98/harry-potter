import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staff: Character[] = [];

  constructor(private staffService: StaffService) { }

  private getStaff() {
    this.staff = this.staffService.getStaff();
  }

  ngOnInit(): void {
    this.getStaff();
  }

}
