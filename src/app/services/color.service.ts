import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:44353/api/color/GetAllColors';
  constructor( private httpClinet:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClinet.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
