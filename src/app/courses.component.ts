import { Component } from "@angular/core";


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
    // call http end-point to call the list of courses
    getTitle () {
        return this.title;
    }
}