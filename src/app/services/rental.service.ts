import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rantalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiurl="https://localhost:44353/api/rental/getRentaldetails";
  constructor(private httpCLient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    return this.httpCLient.get<RentalResponseModel>(this.apiurl);
  }
}
