import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:44353/api/color/GetAllColors';
  constructor( private httpClinet:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    return this.httpClinet.get<ColorResponseModel>(this.apiUrl);
  }
}
