import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'FRONTEND DEVELOPER – HCL Technology Ltd.',
      technologies: '',
      description: [''],
    },
    {
      title: '',
      technologies: '',
      description: [''],
    },
    {
      title: '',
      technologies: '',
      description: [''],
    },
  ];
}
