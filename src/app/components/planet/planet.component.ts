import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPlanet } from 'src/app/models/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
})
export class PlanetComponent {
  constructor(private router: Router) {}

  @Input() planet: IPlanet;
  @Input() showDetails = true;
  @Input() colum: boolean;

  public details() {
    this.router.navigate(['people'], { state: this.planet });
  }
}
