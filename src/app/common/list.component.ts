import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
})
export class ListComponent {
  items: any[]

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
  ) {}

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.items = data['items']
    })
  }

  goToDetail(item) {
    this.router.navigate([item._id], {relativeTo: this.route})
  }

}
