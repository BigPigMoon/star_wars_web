import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { IPlanet } from 'src/app/models/planet';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
})
export class PeoplePageComponent implements OnInit {
  planet: IPlanet;
  gender = '';

  ngOnInit(): void {
    this.planet = history.state;
  }
}
