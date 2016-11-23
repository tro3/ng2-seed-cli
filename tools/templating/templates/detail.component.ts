import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core';

import { ApiService } from '##rootPath##/common/api.service'
import { BusyService } from '##rootPath##/common/busy.service'
import { DetailComponent } from '##rootPath##/common/detail.component'

@Component({
  selector: 'ng2-cli-##fullName##',
  templateUrl: '##completeName##.pug',
  styleUrls: ['##completeName##.css'],
})
export class ##entityName## extends DetailComponent {
  collection = "##pluralName##"

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
  ) {super(route, api, busy)}

}
