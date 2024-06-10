import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "Oriental University, Indore",
      course: 'B.TECH',
      duration: '2013-2017',
      score: '85%',
    },
    {
      institute: 'S.B.N. College, Patam',
      course: 'HSC',
      duration: '2012-2013',
      score: '65%',
    },
    {
      institute: 'High School, Patam',
      course: 'SSC',
      duration: '2011-2012',
      score: '68%',
    }
  ];
}
