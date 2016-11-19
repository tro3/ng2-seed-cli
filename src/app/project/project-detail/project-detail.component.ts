import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ApiService } from '../../common/api.service'
import { BusyService } from '../../common/busy.service'
import { DetailComponent } from '../../common/detail.component'

@Component({
  selector: 'ng2-cli-project-detail',
  templateUrl: 'project-detail.component.pug',
  styleUrls: ['project-detail.component.css'],
})
export class ProjectDetailComponent extends DetailComponent {
  collection = "projects"

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
  ) {super(route, api, busy)}

}
