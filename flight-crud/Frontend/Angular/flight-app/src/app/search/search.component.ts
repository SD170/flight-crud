import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../services/flight-service.service';
import { Flight } from '../model/flights.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public source: string = "";
  public destination: string = "";
  public list: Flight[] | undefined = [];

  constructor(private fService: FlightServiceService) { }

  ngOnInit(): void {
  }

  async search() {
    this.list = await this.fService.findByRoute(this.source, this.destination);
  }
  getSources(): string[] {
    return FlightServiceService.sources;
  }
  getDests(): string[] {
    return FlightServiceService.dests;
  }

  sortByCol(colName: string) {
    this.list?.sort((f1, f2) => {
      if (colName === 'carrier') {
        return f1.carrier > f2.carrier ? 1 : (f1.carrier < f2.carrier ? -1 : 0);
      } else if (colName === 'source') {
        return f1.source > f2.source ? 1 : (f1.source < f2.source ? -1 : 0);
      } else if (colName === 'destination') {
        return f1.destination > f2.destination ? 1 : (f1.destination < f2.destination ? -1 : 0);
      } else {
        return 0;
      }
    })
  }
}
