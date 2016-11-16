import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'ng2-cli-project-list',
  templateUrl: 'project-list.component.pug',
  styleUrls: ['project-list.component.css'],
})
export class ProjectListComponent {
  items: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
