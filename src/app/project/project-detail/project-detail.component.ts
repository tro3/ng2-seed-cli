import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ng2-cli-project-detail',
  templateUrl: 'project-detail.component.pug',
  styleUrls: ['project-detail.component.css'],
})
export class ProjectDetailComponent {
  item: any

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.item = data['item']
    })
  }
}
