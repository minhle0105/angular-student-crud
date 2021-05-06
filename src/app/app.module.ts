import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import {FormsModule} from '@angular/forms';
import { StudentSearchComponent } from './student/student-search/student-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentSearchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
