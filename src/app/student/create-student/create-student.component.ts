import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';
import {ClassesService} from '../../service/classes.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = {
    classes: ''
  };
  listClass: string[] = [];

  constructor(private studentService: StudentService,
              private classesService: ClassesService) { }

  ngOnInit() {
    this.getAllClass();
  }

  getAllClass() {
    this.listClass = this.classesService.getAllClass();
  }

  addNewStudent(form: NgForm) {
    let newStudent = form.value;
    this.studentService.createNewStudent(newStudent);
    this.student = {};
  }


}
