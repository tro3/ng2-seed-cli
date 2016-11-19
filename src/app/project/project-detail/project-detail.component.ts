import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ApiService } from '../../common/api.service'
import { BusyService } from '../../common/busy.service'

@Component({
  selector: 'ng2-cli-project-detail',
  templateUrl: 'project-detail.component.pug',
  styleUrls: ['project-detail.component.css'],
})
export class ProjectDetailComponent {
  item: any
  buffItem: any
  editMode = false

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private busy: BusyService,
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
    this.api.update('projects', this.item._id, this.buffItem)
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
