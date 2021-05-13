import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiURl = 'https://localhost:44353/api/brand/GetAllBrands';
  constructor(private httpClient: HttpClient) { }

  GetBrands():Observable<BrandResponseModel>{
  return this.httpClient.get<BrandResponseModel>(this.apiURl);
  }
}
