import { Injectable } from '@angular/core';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];

  constructor() { }

  getAllStudents() {
    return this.students;
  }

  createNewStudent(student: Student) {
    this.students.push(student);
  }

  updateStudentInfo(index: number, student: Student) {
    this.students[index] = student;
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

}
