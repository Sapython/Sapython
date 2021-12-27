import { Component, Input, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/structures/method.structure';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: ProjectData = {
    projectName: '',
    projectDescription: '',
    projectTags: [],
    projectFeatures: [  
      {
        name: '',
        icon: '',
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
    if (this.project.projectDescription.length > 200) {
      this.project.projectDescription = this.project.projectDescription.substring(0, 200) + '...';
    }
  }

}
