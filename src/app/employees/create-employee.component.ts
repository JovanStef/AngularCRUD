import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department';

import { Employee } from '../models/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto: boolean = false;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
  ];
  constructor() {}

  togglePhotoPreview() {
    return (this.previewPhoto = !this.previewPhoto);
  }

  ngOnInit(): void {}
  saveEmployee(employee: Employee): void {
    console.log(employee);
  }
}
