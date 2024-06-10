import { Component } from '@angular/core';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css'],
})
export class PersonalinformationComponent {
  myData: string[][] = [
    ['Name', 'Neha Rani'],
    ['DOB', '06/07/1996'],
    ['Work Exp', '5.6 Years'],
    ['Education', 'B.Tech (ECE)'],
  ];

  aboutMe: string[] = [
    'I am a passionate and dedicated dynamic frontend developer with over 5 years of experience in the technology industry specializing in Angular framework.',
    'Lead engineering efforts at HCL Tech, driving innovation and development initiatives.',
    'Key contributions include the enrichment of the Western Union mobile app, enhancing payment options and boosting user engagement.',
    'Proficient in creating responsive interfaces and seamlessly integrating with back-end systems.',
    'Experienced in API integration, rigorous unit testing, and providing support for deployment and functionality.',
    'Skilled in user experience design, performance optimization, and ensuring cross-device compatibility.',
    'Demonstrated ability to gather requirements, lead software development initiatives, and deliver exceptional results.',
    'Committed to ensuring application reliability, accuracy, and operational stability.',
    'I am a team player, a quick learner, and a strong communicator. I am always looking for opportunities to learn and grow.',
  ];
}
