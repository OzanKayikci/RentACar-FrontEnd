import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiURl = 'https://localhost:44353/api/brand/GetAllBrands';
  constructor(private httpClient: HttpClient) { }

  GetBrands():Observable<ListResponseModel<Brand>>{
  return this.httpClient.get<ListResponseModel<Brand>>(this.apiURl);
  }
}
