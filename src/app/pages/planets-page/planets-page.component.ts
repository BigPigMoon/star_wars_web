import { Component, OnInit } from '@angular/core';
import { IPlanet } from 'src/app/models/planet';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
})
export class PlanetsPageComponent implements OnInit {
  constructor(public planetService: PlanetsService) {}

  planets: IPlanet[] = [];

  loading = false;
  page: number;

  prevPageAvaible: boolean;
  nextPageAvaible: boolean;

  private loadData() {
    this.loading = true;

    this.planetService.getOnPage(this.page).subscribe((planets) => {
      this.prevPageAvaible = planets.previous !== null;
      this.nextPageAvaible = planets.next !== null;
      this.planets = planets.results;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    const storagePaginationPage = localStorage.getItem('paginationPage');
    this.page = storagePaginationPage ? parseInt(storagePaginationPage) : 1;
    this.loadData();
  }

  public incPage(): void {
    this.page++;
    localStorage.setItem('paginationPage', this.page.toString());
    this.loadData();
  }

  public decPage(): void {
    this.page--;
    localStorage.setItem('paginationPage', this.page.toString());
    this.loadData();
  }
}
