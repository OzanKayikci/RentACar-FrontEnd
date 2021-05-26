import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carImages: CarImage[] = [];
  currentCar: Car;
  currentImage: CarImage;
  filterText = '';
  imageRoot = environment.apiUrl + 'carimages' + '/getimagesbycarid?id=';

  dataLoaded = false;
  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
  
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      if (response.data[0]) {
        this.cars = response.data;
      }
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getImagesByCarId(cars: Car[]) {
    cars.forEach((car) => {
      this.carImageService.getCarImages(car.carID).subscribe((response) => {
        car.imagePath = response.data[0].imagePath;
        return car.imagePath;
      });
    });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }
  setCarDetails(car: Car) {
    // this.dataLoaded=false;
    this.currentCar = car;
  }
  getCurrentCarDetails(car: Car) {
    if ((this.currentCar = car)) {
      return 'list-group-item ';
    }
    return 'list-group-item active';
  }

}
