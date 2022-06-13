import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  @Input() public title: string;
  @Input() public members: string[];

  public constructor() {
    this.title = '';
    this.members = [];
  }
}
