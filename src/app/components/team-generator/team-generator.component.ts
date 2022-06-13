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
  protected numberOfTeams: number | '';
  protected teams: string[][];

  public constructor() {
    this.members = [];
    this.newMember = '';
    this.errorMessage = '';
    this.numberOfTeams = '';
    this.teams = [];
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

  protected onNumberOfTeamsInput(numberOfTeams: string): void {
    this.numberOfTeams = Number(numberOfTeams);
  }

  protected onGenerateButtonClick(): void {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams.';
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members.';
      return;
    }

    this.errorMessage = '';

    this.generateTeams();

    this.members = [];
    this.numberOfTeams = '';
  }

  private generateTeams(): void {
    const members: string[] = [...this.members];

    while (members.length) {
      for (let i: number = 0; i < this.numberOfTeams; i++) {
        const randomIndex: number = Math.floor(Math.random() * members.length);
        const member: string = members.splice(randomIndex, 1)[0];

        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
  }
}
