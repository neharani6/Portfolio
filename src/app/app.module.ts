import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveDirective } from './responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    BanerComponent,
    PersonalinformationComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResponsiveDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
