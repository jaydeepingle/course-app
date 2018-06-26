import { Component } from "@angular/core";


@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor=""></li>  
        </ul>
    `
})

// register this created component in a module

export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3"];

    getTitle () {
        return this.title;
    }
}