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
  // @ts-ignore
  studentForm = new FormGroup({
    id: new FormControl(),
    fullName: new FormControl(),
    address: new FormControl(),
    mark: new FormControl()
  });
  listClass: string[] = [];
  index = -1;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private classService: ClassesService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.index = +paramMap.get('id');
      this.getStudentByIndex(this.index);
      });
    }

  ngOnInit() {
    // this.getAllClasses();
  }

  // getAllClasses() {
  //   this.listClass = this.classService.getAllClass();
  // }

  get id() {
    return this.studentForm.get('id');
  }

  getStudentByIndex(id: number) {
    this.studentService.getStudentById(id).subscribe(student_ => {
      this.studentForm = new FormGroup({
        id: new FormControl(student_.id, Validators.required),
        fullName: new FormControl(student_.fullName),
        address: new FormControl(student_.address),
        mark: new FormControl(student_.mark)
      });
    })
  }

  updateStudentInfo(index: number) {
    let newStudent = this.studentForm.value;
    this.studentService.updateStudentInfo(index, newStudent).subscribe(() => {
      alert("Successfully updated");
    }, error => {
      console.log("Error");
    });
  }
}
