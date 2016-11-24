import { ActivatedRoute, Router } from '@angular/router'
import { Component, ViewChild } from '@angular/core';

import { ApiService } from '##rootPath##/common/api.service'
import { BusyService } from '##rootPath##/common/busy.service'
import { ListComponent } from '##rootPath##/common/list.component'
import { ModalComponent } from '##rootPath##/common/modal/modal.component'

@Component({
  selector: 'ng2-cli-##fullName##',
  templateUrl: '##fullName##.component.pug',
  styleUrls: ['##fullName##.component.css'],
})
export class ##entityName## extends ListComponent {
  @ViewChild(ModalComponent) modal
  collection = "##pluralName##"
  default = {name:''}

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
    protected router: Router,
  ) {super(route, api, busy, router)}

}
