import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { DataResponseModel } from '../models/dataResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44353/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let path=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let path = this.apiUrl +"cars/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }  
  getCarById(carID:number):Observable<DataResponseModel<CarDetailDto>>{
    let path = this.apiUrl+ "cars/getbyid?Carid=" + carID;
    return this.httpClient.get<DataResponseModel<CarDetailDto>>(path);
  }

  getByCarIdImage(carID : number) : Observable<ListResponseModel<Car>>{
    let path = this.apiUrl + "carImages/getimagesbycarid?id=" + carID;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

}
