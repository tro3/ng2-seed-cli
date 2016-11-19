import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ApiService } from './api.service'
import { BusyService } from './busy.service'

@Component({
})
export class DetailComponent {
  collection = "Collection needed"
  item: any
  buffItem: any
  editMode = false

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected busy: BusyService,
  ) {}

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.item = data['item']
      this.buffItem = Object.assign(this.item)
    })
  }

  edit() {
    this.editMode = true
    this.buffItem = Object.assign(this.item)
  }

  cancel() {
    this.editMode = false
  }

  save() {
    this.busy.setBusy(true)
    this.api.update(this.collection, this.item._id, this.buffItem)
      .forEach(doc => {
        this.item = doc
        this.editMode = false
        this.busy.setBusy(false)
      })
      .catch(err => {
        console.log(err)
        this.editMode = false
        this.busy.setBusy(false)
      })
  }
}
