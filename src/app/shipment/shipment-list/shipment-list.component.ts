import { ActivatedRoute, Router } from '@angular/router'
import { Component, ViewChild } from '@angular/core';

import { ApiService } from '../../common/api.service'
import { BusyService } from '../../common/busy.service'
import { ListComponent } from '../../common/list.component'
import { ModalComponent } from '../../common/modal/modal.component'

@Component({
  selector: 'ng2-cli-shipment-list',
  templateUrl: 'shipment-list.component.pug',
  styleUrls: ['shipment-list.component.css'],
})
export class ShipmentListComponent extends ListComponent {
  @ViewChild(ModalComponent) modal
  collection = "shipments"
  default = {name:''}

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
    protected router: Router,
  ) {super(route, api, busy, router)}

}
