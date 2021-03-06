import { ActivatedRoute, Router } from '@angular/router'
import { Component, ViewChild } from '@angular/core';

import { ApiService } from '../../common/api.service'
import { BusyService } from '../../common/busy.service'
import { ListComponent } from '../../common/list.component'
import { ModalComponent } from '../../common/modal/modal.component'

@Component({
  selector: 'ng2-cli-project-list',
  templateUrl: 'project-list.component.pug',
  styleUrls: ['project-list.component.css'],
})
export class ProjectListComponent extends ListComponent {
  @ViewChild(ModalComponent) modal
  collection = "projects"
  default = {name:''}

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
    protected router: Router,
  ) {super(route, api, busy, router)}

}
