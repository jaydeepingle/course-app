import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, EditorComponent        // automatically imports if we just press enter
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService          // Singleton concept : We are passing an instance of CoursesService to entire application
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
