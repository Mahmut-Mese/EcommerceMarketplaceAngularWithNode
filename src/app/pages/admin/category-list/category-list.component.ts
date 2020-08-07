import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/carservice';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: [
    `
      /* Column Priorities */
      @media only all {
        th.ui-p-6,
        td.ui-p-6,
        th.ui-p-5,
        td.ui-p-5,
        th.ui-p-4,
        td.ui-p-4,
        th.ui-p-3,
        td.ui-p-3,
        th.ui-p-2,
        td.ui-p-2,
        th.ui-p-1,
        td.ui-p-1 {
          display: none;
        }
      }

      /* Show priority 1 at 320px (20em x 16px) */
      @media screen and (min-width: 20em) {
        th.ui-p-1,
        td.ui-p-1 {
          display: table-cell;
        }
      }

      /* Show priority 2 at 480px (30em x 16px) */
      @media screen and (min-width: 30em) {
        th.ui-p-2,
        td.ui-p-2 {
          display: table-cell;
        }
      }

      /* Show priority 3 at 640px (40em x 16px) */
      @media screen and (min-width: 40em) {
        th.ui-p-3,
        td.ui-p-3 {
          display: table-cell;
        }
      }

      /* Show priority 4 at 800px (50em x 16px) */
      @media screen and (min-width: 50em) {
        th.ui-p-4,
        td.ui-p-4 {
          display: table-cell;
        }
      }

      /* Show priority 5 at 960px (60em x 16px) */
      @media screen and (min-width: 60em) {
        th.ui-p-5,
        td.ui-p-5 {
          display: table-cell;
        }
      }

      /* Show priority 6 at 1,120px (70em x 16px) */
      @media screen and (min-width: 70em) {
        th.ui-p-6,
        td.ui-p-6 {
          display: table-cell;
        }
      }
    `,
  ],
})
 
export class CategoryListComponent {
  displayDialog: boolean;

  car: Car = {};

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCarsSmall().then((cars) => (this.cars = cars));

    this.cols = [
    

      { field: 'img', header: 'IMAGE' },

      { field: 'product_name', header: 'NAME' },
      { field: 'price', header: 'LİNK' },
      { field: 'quantity', header: 'MENU SIRASI' },
      { field: 'action', header: 'ACTION' }
     ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar) cars.push(this.car);
    else cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = {};
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }
  
}

