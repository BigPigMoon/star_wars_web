import { IPlanet } from './planet';

export interface PlanetsRequest {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPlanet[];
}
