import { Component, OnInit } from '@angular/core';
import {Student} from '../../interface/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student: Student = {
    classes: ''
  };
  students: Student[] = [];
  studentUpdate: Student = {};
  index = 0;
  currentIndex = -1;
  isShowed = false;
  listClass: string[] = ['Java', 'C++'];
  constructor() { }

  ngOnInit() {
  }

  switchStatus() {
    this.isShowed = !this.isShowed;
  }

  createStudent() {
    this.students.push(this.student);
    this.student = {};
  }

  removeStudent(i: number) {
    this.students.splice(i, 1);
  }

  showUpdateForm(i) {
    this.currentIndex = i;
    this.studentUpdate = {
      name: this.students[i].name,
      age: this.students[i].age,
      address: this.students[i].address,
      classes: this.students[i].classes
    };
  }

  updateStudent(i) {
    this.students[i] = this.studentUpdate;
    this.studentUpdate = {};
  }

  findStudentByName(value: string) {
    let studentsSearch = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name.toLowerCase().includes(value.toLowerCase())) {
        studentsSearch.push(this.students[i]);
      }
    }
    this.students = studentsSearch;
  }

  increaseIndex() {
    this.index++;
  }

}
