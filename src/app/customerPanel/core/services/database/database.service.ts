import { Injectable } from '@angular/core';
import { ProjectData } from 'src/app/dataStructures';
import { ErrorHandlerService } from '../errorHandler/error-handler.service';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    private errorHandler: ErrorHandlerService,
  ) {}
  getProjects():ProjectData[] {
    let projects:ProjectData[] = []
    for (let index = 0; index < 4; index++) {
      projects.push({
        projectName: 'Project ' + index,
        projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis, fringilla magna in, vulputate enim. Fusce ut euismod ligula, id laoreet ex. ',
        projectTags: ['tag1', 'tag2', 'tag3'],
        projectFeatures: [
          {
            name: 'feature1',
            icon: '',
          },
          {
            name: 'feature2',
            icon: '',
          },
          {
            name: 'feature3',
            icon: '',
          },
        ],
      });
    }
    return projects
  }
}
