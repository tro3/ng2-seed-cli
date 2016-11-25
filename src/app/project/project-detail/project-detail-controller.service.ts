import { Injectable } from '@angular/core';

import { ApiService } from '../../common/api.service'
import { BusyService } from '../../common/busy.service'

@Injectable()
export class ProjectDetailControllerService {
  collection: string = "projects"
  _item: any
  buffItem: any
  editMode: boolean = false

  constructor(
    protected api: ApiService,
    protected busy: BusyService,
  ) {}

  set item(val) {
    this._item = val
//    this.buffItem = Object.assign({}, this._item)
  }

  get item() {
    return this._item
  }

  edit() {
    this.buffItem = Object.assign({}, this._item)
    this.editMode = true
  }

  cancel() {
    this.editMode = false
  }

  save() {
    this.busy.setBusy(true)
    this.api.update(this.collection, this._item._id, this.buffItem)
      .forEach(doc => {
        this._item = doc
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
