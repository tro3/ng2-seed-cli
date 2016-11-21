import { ActivatedRoute, Router } from '@angular/router'
import { Component } from '@angular/core';

import { ListComponent } from '##rootPath##/common/list.component'

@Component({
  selector: 'ng2-cli-##fullName##',
  templateUrl: '##fullName##.component.pug',
  styleUrls: ['##fullName##.component.css'],
})
export class ##entityName## extends ListComponent {

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
  ) {super(route, router)}

}
