import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/flights.model';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
  public list: Flight[] | undefined = [];
  private static uri: string = "http://localhost:8900";
  public static sources:string[] = ["Kolkata","Mumbai","Chennai","Bangalore"]; 
  public static dests:string[] = ["Lisbon","Madrid","Manchester","Turin"]; 
  constructor(private http: HttpClient) {

  }


  async save(flight: Flight) {
    console.log(flight);
    this.http.post(FlightServiceService.uri + "/add", flight, {
      responseType:"text"
    }).subscribe(data =>{
      console.log(data);
    });
    // console.log(data);
  }

  getList(){
    return this.http.get<Flight[]>(FlightServiceService.uri + "/list").pipe()
    
  }

  async remove(code: number|null|undefined) {
    const bool = await this.http.delete(FlightServiceService.uri + "/delete/" + code).toPromise();
    if(bool){
      this.list = this.list?.filter((fl)=>{
        if(fl.code==code){
          const ans = confirm("Sure?");
          if(ans){
            return false;
          }
        }
        return true;
      })
    }
  }

  async findByRoute(source: string, dest: string) {
    this.list = await this.http.get<Flight[]>(FlightServiceService.uri + "/listbyroute", {
      params: {
        source: source,
        destination: dest,
      }
    }).toPromise();
    return this.list;
  }
  
}
