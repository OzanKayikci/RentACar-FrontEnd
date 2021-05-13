import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiurl="https://localhost:44353/api/customer/GetAllCustomers";
  constructor(private httpCLient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
 return this.httpCLient.get<CustomerResponseModel>(this.apiurl);
  }
}
