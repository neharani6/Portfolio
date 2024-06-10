import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

workExpList : WorkExperience[] = [
  {
    role: 'Frontend Lead Engineer',
    company: 'HCL Technology',
    duration: 'Oct 2021 - Present',
    project: 'Western Union Mobile Application',
    description: [
      'Created mobile application development using Angular framework referring to the UI/UX designs or wireframes.',
      'Integrated Plaid, Google Pay, and FPX Wallet for enhanced payment options.',
      'Made the mobile application responsive to use on different mobile devices.',
      'Collaborated with backend developers for RESTful APIs integration.',
      'Wrote unit test cases using Karma and Jasmine.',
      'Supported the end-to-end deployment process and testing.'
    ],
  },
  {
    project: 'Thales Next Gen Drone',
    role: 'Frontend Engineer',
    company: 'L&T Technology Services',
    duration: 'Dec 2020 - Oct 2021',
    description: [
      'Worked on the Thales Next Gen Drone project, enhancing legacy platforms with cognitive capabilities.',
      'Developed reusable components and libraries using Angular',
      'Ensured web application responsiveness across various devices and browsers',
      'Integrated RESTful APIs in collaboration with backend developers',
      'Wrote unit test cases using Karma and Jasmine.',
      'Supported the end-to-end deployment process and testing.'
    ],
  },
  {
    project: 'Delta In-Flight',
    role: 'Frontend Engineer',
    company: 'L&T Technology Services',
    duration: 'Jan 2019 - Dec 2020',
    description: [
      'Contributed to the Delta Flight Products - Ground Analytics System project',
      'Created web applications based on UI/UX designs',
      'Developed reusable components for improved performance',
      'Ensured compatibility across different devices and browsers',
      'Integrated RESTful APIs in collaboration with backend developers',
      'Wrote unit test cases using Karma and Jasmine.',
      'Supported the end-to-end deployment process and testing.'
    ],
  }
];

}
