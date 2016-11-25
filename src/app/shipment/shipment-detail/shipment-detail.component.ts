import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core';

import { ApiService } from '../../common/api.service'
import { BusyService } from '../../common/busy.service'
import { DetailComponent } from '../../common/detail.component'

@Component({
  selector: 'ng2-cli-shipment-detail',
  templateUrl: 'shipment-detail.component.pug',
  styleUrls: ['shipment-detail.component.css'],
})
export class ShipmentDetailComponent extends DetailComponent {
  collection = "shipments"

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
  ) {super(route, api, busy)}

}
