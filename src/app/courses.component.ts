import { Component } from "@angular/core";
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>  
        </ul>
    `
})

// register this created component in a module

export class CoursesComponent {
    title = "List of courses";
    courses;
    
    constructor() {
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
}