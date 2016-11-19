import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { ListComponent } from '../../common/list.component'

@Component({
  selector: 'ng2-cli-project-list',
  templateUrl: 'project-list.component.pug',
  styleUrls: ['project-list.component.css'],
})
export class ProjectListComponent extends ListComponent {

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
  ) {super(route, router)}

}
