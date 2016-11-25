import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core';

import { ProjectDetailControllerService } from './project-detail-controller.service'

@Component({
  selector: 'ng2-cli-project-detail',
  templateUrl: 'project-detail.component.pug',
  styleUrls: ['project-detail.component.css'],
})
export class ProjectDetailComponent {

  constructor(
    protected route: ActivatedRoute,
    protected ctrl: ProjectDetailControllerService,
  ) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.ctrl.item = data['item']
    })
  }

}
