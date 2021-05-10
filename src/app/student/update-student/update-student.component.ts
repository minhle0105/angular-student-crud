import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute} from '@angular/router';
import {ClassesService} from '../../service/classes.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: Student = {};
  studentForm: FormGroup;
  listClass: string[] = [];
  index = -1;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private classService: ClassesService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.index = +paramMap.get('id');
      let student = this.getStudentByIndex(this.index);
      this.studentForm = new FormGroup({
        id: new FormControl(student.id, Validators.required),
        fullName: new FormControl(student.fullName),
        address: new FormControl(student.address),
        mark: new FormControl(student.mark),
        classes: new FormControl(student.classes)
      });
    });
  }

  ngOnInit() {
    this.getAllClasses();
  }

  getAllClasses() {
    this.listClass = this.classService.getAllClass();
  }

  get id() {
    return this.studentForm.get('id');
  }

  getStudentByIndex(index: number) {
    let students = this.studentService.getAllStudents();
    return students[index];
  }

  updateStudentInfo(index: number) {
    let newStudent = this.studentForm.value;
    this.studentService.updateStudentInfo(index, newStudent);
  }

}
