import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamGeneratorComponent } from './components/team-generator/team-generator.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [AppComponent, TeamGeneratorComponent, TeamComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
