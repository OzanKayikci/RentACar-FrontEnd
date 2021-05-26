import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CartItems } from 'src/app/models/cartItems';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetailDto;
  currentCarImage:CarImage;
  currentCar:Car;
  carImages:CarImage[]=[]
  cars:CarComponent["currentCar"];
  imageRoot = environment.apiUrl;
  constructor(
    private carImageService:CarImageService,
     private carService : CarService, 
     private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService
     ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
        this.getCarById(params['carID']);
        this.getCarImages(params["carID"]);
   
    });
  }

  getAllCarImages(carImage:CarImage)
  {
  
  }
  getCarImages(carID:number){
    this.carImageService.getCarImages(carID).subscribe(response=>{
      this.carImages=response.data
      console.log("id " +carID +  JSON.stringify(this.carImages[0].imagePath));
    });
     
  }

  
  getCarById(carID : number){
    this.carService.getCarById(carID).subscribe(response=>{
      this.carDetails= response.data;
      console.log("asd " + JSON.stringify(response.data.carName));
    });
  }
  addToCart(car: Car) {
   this.cartService.addToCart(car);
  }

}
