import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  imagePath ='https://localhost:44353/api/carimages';
  constructor(private httpClient: HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let path= this.imagePath+"/getimagesbycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }
}
