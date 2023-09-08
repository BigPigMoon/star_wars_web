import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';

const routes: Routes = [
  { path: '', component: PlanetsPageComponent },
  { path: 'people', component: PeoplePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
