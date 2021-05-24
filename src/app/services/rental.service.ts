import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiurl="https://localhost:44353/api/rental/getRentaldetails";
  constructor(private httpCLient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpCLient.get<ListResponseModel<Rental>>(this.apiurl);
  }
}
