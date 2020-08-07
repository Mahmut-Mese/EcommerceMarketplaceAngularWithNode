import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';

 
@Injectable()
export class CarService {
    actions: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
    imgs: string[] = ['../assets/images/pro3/1.jpg', '../assets/images/pro3/28.jpg', '../assets/images/pro3/28.jpg', '../assets/images/pro3/28.jpg',
     '../assets/images/pro3/28.jpg', '../assets/images/pro3/28.jpg', '../assets/images/pro3/28.jpg', '../assets/images/pro3/28.jpg',
      '../assets/images/pro3/28.jpg', '../assets/images/pro3/28.jpg'];

    colors: string[] = ['Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'];
    prices: string[] = ['1000', '2000', '3000', '212', '32323', '43434', '433434'];

    
    constructor(private http: HttpClient) { }

    getCarsSmall() {
        return this.http.get<any>('assets/cars-small.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; });
    }

    getCarsMedium() {
        return this.http.get<any>('assets/cars-medium.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; });
    }

    generateCar(): Car {
        return {
            product_name: this.generateProduct_name(),
            action: this.actions,
            year: this.generateYear(),
            price: this.generatePrice(),
            img: this.imgs

        }
    }

    generateProduct_name() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return text;
    }

    generateaction() {
        return this.actions[Math.floor(Math.random() * Math.floor(10))];
    }
    generatePrice() {
        return this.prices[Math.floor(Math.random() * Math.floor(10))];
    }

    generateColor() {
        return this.colors[Math.floor(Math.random() * Math.floor(7))];
    }

    generateYear() {
        return 2000 + Math.floor(Math.random() * Math.floor(19));
    }
    
   
}