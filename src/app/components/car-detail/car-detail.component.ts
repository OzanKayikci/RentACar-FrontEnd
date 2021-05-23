import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:Car[]=[];
  carImages:CarImage[]=[];
  currentCarImage:CarImage;
  currentCar:Car;
  cars:CarComponent["currentCar"];
  carDetails:Boolean=false;
  imageRoot = environment.apiUrl;
  constructor(
    private carImageService:CarImageService,
     private carService : CarService, 
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
        this.getCarById(params['carID']);
        this.getCarImages(params["carID"]);
   
    });
  }

  getAllCarImages(carImage:CarImage)
  {
  
  }
  getCarImages(carID:Number){
    this.carImageService.getCarImages(carID).subscribe(response=>{
      this.carImages=response.data
    });
      console.log("id " + carID);
  }

  
  getCarById(carID : Number){
    this.carService.getCarById(carID).subscribe(response=>{
      this.car = response.data;
    });
  }
  getDetailsByCarId(cars:Car[]){
    cars.forEach(car => { 
      this.carService.getCarById(car.carID).subscribe((response)=>{
        car.carID =response.data[0].carID;
        console.log(car.carID);
        return car.carID;
      });
    });
    
  }

}
