import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flights.model';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public flight:Flight;
  constructor(private fService:FlightServiceService ) {
    this.flight = new Flight("","","");
  }

  ngOnInit(): void {
  }
  async save(){
    await this.fService.save(this.flight);
    this.flight = new Flight("","","");
  }
  getSources():string[]{
    return FlightServiceService.sources;
  }
  getDests():string[]{
    return FlightServiceService.dests;
  }
}
