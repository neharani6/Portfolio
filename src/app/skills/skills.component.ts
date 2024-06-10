import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'JavaScript, TypeScript',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'RxJS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'HTML5',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'CSS3/SCSS, Bootstrap, Angular Material',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'Karma, Jasmine',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'Git, GitHub/GitLab, SVN',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Postman',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'JIRA',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Splunk, Aptimize, Amplitude',
      level: 'Intermidiate',
      rating: 80,
    },
  ];
}
