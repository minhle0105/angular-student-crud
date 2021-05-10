import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  classes: string[] = ['C02', 'C11'];

  constructor() { }

  getAllClass() {
    return this.classes;
  }
}
