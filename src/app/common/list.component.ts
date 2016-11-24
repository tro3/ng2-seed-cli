import { ActivatedRoute, Router } from '@angular/router'
import { Component } from '@angular/core';

import { ApiService } from './api.service'
import { BusyService } from './busy.service'
import { ModalComponent } from './modal/modal.component'

@Component({
})
export class ListComponent {
  collection: string = "Collection needed"
  default: any = {}
  items: any[]
  modal: any
  newItem: any

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
    protected router: Router,
  ) {}

  ngOnInit() {
    this.newItem = Object.assign({}, this.default)
    this.route.data.forEach((data) => {
      this.items = data['items']
    })
  }

  goToDetail(item) {
    this.router.navigate([item._id], {relativeTo: this.route})
  }

  open() {
    this.newItem = Object.assign({}, this.default)
    this.modal.open()
  }

  create() {
    this.busy.setBusy(true)
    this.api.create(this.collection, this.newItem)
      .forEach(doc => {
        this.busy.setBusy(false)
        this.goToDetail(doc)
      })
      .catch(err => {
        console.log(err)
        this.busy.setBusy(false)
      })
  }

}
