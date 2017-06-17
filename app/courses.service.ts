import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Courses} from './courses';

@Injectable() 

export class CoursesService {
    courses = Courses;
    getCourses() {
        return Observable.of(this.courses);
    }
}