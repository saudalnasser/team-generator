import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGeneratorComponent } from './team-generator.component';

describe('TeamGeneratorComponent', (): void => {
  let component: TeamGeneratorComponent;
  let fixture: ComponentFixture<TeamGeneratorComponent>;

  beforeEach(async (): Promise<any> => {
    await TestBed.configureTestingModule({
      declarations: [TeamGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
