import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { ApiService } from '../../common/api.service'
import { BusyService } from '../../common/busy.service'
import { ListComponent } from '../../common/list.component'

@Component({
  selector: 'ng2-cli-project-list',
  templateUrl: 'project-list.component.pug',
  styleUrls: ['project-list.component.css'],
})
export class ProjectListComponent extends ListComponent {

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
    protected router: Router,
  ) {super(route, api, busy, router)}

}
