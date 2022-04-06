import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../services/flight-service.service';
import { Flight } from '../model/flights.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Flight[] | undefined = [];
  constructor(private fService: FlightServiceService) {

  }

  ngOnInit(): void {
    // this.fService.getList().subscribe((data)=>{
    //   this
    // })
    // this.fService.getList().then((data) => {
    //   this.list = data;
    //   console.log(data);
    // });
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

  async delete(id: number | null | undefined) {
    await this.fService.remove(id);
    // this.ngOnInit();
  }

}
