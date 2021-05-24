import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiurl="https://localhost:44353/api/customer/GetAllCustomers";
  constructor(private httpCLient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
 return this.httpCLient.get<ListResponseModel<Customer>>(this.apiurl);
  }
}
