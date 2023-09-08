import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './components/people/people.component';
import { FormsModule } from '@angular/forms';
import { NumberorNotPipe } from './pipes/numberor-not.pipe';
import { BirthdayPipe } from './pipes/birthday.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetsPageComponent,
    PeoplePageComponent,
    PeopleComponent,
    NumberorNotPipe,
    BirthdayPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
