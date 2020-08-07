import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor() {}
src='assets/images/pro3/1.jpg';
  ngOnInit(): void {}
  public slideDetPhotos = [
    {
      src: './././assets/images/pro3/1.jpg',
      href: 'product',
    },
    {
      src: './././assets/images/pro3/2.jpg',
      href: 'product',
    },
    {
      src: './././assets/images/pro3/27.jpg',
      href: 'product',
    },
    {
      src: './././assets/images/pro3/1.jpg',
      href: 'product',
    },
  ];

  public configDetPhotos: SwiperConfigInterface = {
    slidesPerView: 4,
    keyboard: true,
    autoplay: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    lazy: true,
    speed: 1000,
    centeredSlides:false  
  };
  changePhoto(event){
    this.src= event.srcElement.getAttribute('src');

    console.log(this.src)
  }
}
