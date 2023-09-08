import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IPeople } from 'src/app/models/people';
import { PeoplesService } from 'src/app/services/peoples.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit, OnChanges {
  constructor(private peopleService: PeoplesService) {}

  @Input() url: string;
  @Input() gender: string;

  people: IPeople;
  bithday: number;
  loading = false;
  visible = true;

  ngOnInit(): void {
    this.loading = true;
    this.peopleService.getPeople(this.url).subscribe((people) => {
      this.people = people;
      this.loading = false;
      this.setVisible(this.gender);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.people && changes.gender) {
      this.setVisible(changes.gender.currentValue);
    }
  }

  private setVisible(gender: string) {
    if (!gender) {
      this.visible = true;
    } else {
      this.visible = this.people.gender === gender;
    }
  }
}
