import { Component } from '@angular/core';

@Component({
  selector: 'app-team-generator',
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.scss'],
})
export class TeamGeneratorComponent {
  protected members: string[];
  protected newMember: string;
  protected errorMessage: string;

  public constructor() {
    this.members = [];
    this.newMember = '';
    this.errorMessage = '';
  }

  protected onMemberInput(newMember: string): void {
    this.newMember = newMember;
  }

  protected onAddMemberButtonClick(): void {
    if (!this.newMember) {
      this.errorMessage = "Name can't be empty.";
      return;
    }

    this.members.push(this.newMember);
    this.newMember = '';
    this.errorMessage = '';
  }
}
