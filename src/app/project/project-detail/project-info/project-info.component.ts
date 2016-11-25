import { Component } from '@angular/core'

import { ProjectDetailControllerService } from '../project-detail-controller.service'

@Component({
  selector: 'ng2-cli-project-info',
  templateUrl: 'project-info.component.pug',
  styleUrls: ['project-info.component.css'],
})
export class ProjectInfoComponent {

  constructor(
    protected ctrl: ProjectDetailControllerService,
  ) { }

}
