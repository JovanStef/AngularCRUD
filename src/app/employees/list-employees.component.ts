import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { mainModule } from 'process';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Marija',
      gender: 'female',
      email: 'mail@mail.com',
      phoneNumber: 555555555,
      contactPreference: 'mail',
      dateOfBirth: new Date(),
      department: 'Department',
      isActive: true,
      photoPath:
        'http://www.teoteater.ee/wp-content/uploads/2019/09/Profile.jpg',
    },
    {
      id: 2,
      name: 'Marija',
      gender: 'female',
      email: 'mail@mail.com',
      phoneNumber: 555555555,
      contactPreference: 'mail',
      dateOfBirth: new Date(),
      department: 'Department',
      isActive: true,
      photoPath:
        'http://www.teoteater.ee/wp-content/uploads/2019/09/Profile.jpg',
    },
    {
      id: 3,
      name: 'Marija',
      gender: 'female',
      email: 'mail@mail.com',
      phoneNumber: 555555555,
      contactPreference: 'mail',
      dateOfBirth: new Date(),
      department: 'Department',
      isActive: true,
      photoPath:
        'http://www.teoteater.ee/wp-content/uploads/2019/09/Profile.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
