import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  @Output()
  s = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  search(value: string) {
    this.s.emit(value);
  }
}
