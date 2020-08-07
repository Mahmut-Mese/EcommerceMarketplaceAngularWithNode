import { Component, OnInit, ViewChild } from '@angular/core';
import {
  SwiperComponent,
  SwiperConfigInterface,
  SwiperDirective,
} from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public showDestop = true;
  constructor() {}

  ngOnInit(): void {}

  public slideMain = [
 
    {
      src:'./././assets/images/home-banner/2.jpg',
      textHead:'uygun fiyatlı toptan elbiseler',
      textButton:'Alışverişe Başla',
      text:'Online Toptan Alışveriş',
      href: 'categori',
    },
    {
      src:'./././assets/images/home-banner/1.jpg',
      textHead:'uygun fiyatlı toptan elbiseler',
      textButton:'Alışverişe Başla',
      text:'Online Toptan Alışveriş',
      href: 'categori',
    }
  ];
  public slideProducts = [
    {
      src: './././assets/images/pro3/2.jpg',
      store:'a mağazası',
      href: 'categori',
      name:'Yazlık kısa elbise',
      newPrice:'73₺',
      oldPrice:'80₺'
    },
    {
      src: './././assets/images/pro3/5.jpg',
      store:'b mağazası',
      href: 'categori',
      name:' Çapraz Detaylı Scuba Kumaş Elbise',
      newPrice:'11₺'
    },
    {
      src: './././assets/images/pro3/28.jpg',
      store:'c mağazası',
      href: 'categori',
      name:' Çiçek Desenli Elbise',
      newPrice:'12₺',
      oldPrice:'25₺'
    },
    {
      src: './././assets/images/pro3/34.jpg',
      store:'d mağazası',
      href: 'categori',
      name:' düz  Scuba Kumaş Elbise',
      newPrice:'10₺',
      oldPrice:'30₺'
    },
    {
      src: './././assets/images/pro3/37.jpg',
      store:'e mağazası',
      href: 'categori',
      name:' Desensiz Elbise',
      newPrice:'53₺',
      oldPrice:'60₺'
    },
    {
      src: './././assets/images/pro3/38.jpg',
      store:'f mağazası',
      href: 'categori',
      name:'Yazlık kısa elbise',
      newPrice:'173₺',
      oldPrice:'180₺'}
  ];
  public slideCats = [
 
    {
      src:'https://static.farktor.com/Library/Upl/5500103/All/Fr-55001031452020181759_5-elbise.jpg',
      text:'elbise',
      href: 'categori',
    },
    {
      src:'https://static.farktor.com/Library/Upl/5500103/All/Fr-55001031452020181914_1-tayt.jpg',
      text:'tayt',
      href: 'categori',
    },
    {
      src:'https://static.farktor.com/Library/Upl/5500103/All/Fr-55001031452020181939_3-bluz.jpg',
      text:'bluz',
      href: 'categori',
    },
    {
      src:'https://static.farktor.com/Library/Upl/5500103/All/Fr-55001031452020181837_2-ceket.jpg',
      text:'ceket',
      href: 'categori',
    },
    {
      src:'https://static.farktor.com/Library/Upl/5500103/All/Fr-55001031452020184540_7-gomlek.jpg',
      text:'gömlek',
      href: 'categori',
    },
    {
      src:'https://static.farktor.com/Library/Upl/5500103/All/Fr-55001031452020183821_6-tsihrt.jpg',
      text:'tişört',
      href: 'categori',
    } 
  ];
 
  public configMain: SwiperConfigInterface = {
    slidesPerView: 1,
    keyboard: true,
    autoplay: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    lazy: true,
    effect: 'fade',
    speed: 1000,
  };

  public configProducts: SwiperConfigInterface = {
    slidesPerView: 4,
    keyboard: true,
    autoplay: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    lazy: true,
    speed: 1000,
    centeredSlides:false        
  };
  
  public configCats: SwiperConfigInterface = {
    slidesPerView: 6,
    keyboard: true,
    autoplay: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    lazy: true,
    speed: 1000,
    centeredSlides:false        
  };
  public firstCategories=[
    {
      title:'Kadın',
      src: './././assets/images/sub-banner2.jpg',
      href:'categori'
    },
    {
      title:'Erkek',
      src: './././assets/images/sub-banner1.jpg',
      href:'categori'
    }
  ];
  public secondCategories=[
    {
      title:'spor',
      src: './././assets/images/cat/1.png',
      href:'categori'
    },
    {
      title:'casual',
      src: './././assets/images/cat/4.png',
      href:'categori'
    },
  
    {
      title:'çocuk',
      src: './././assets/images/cat/3.png',
      href:'categori'
    },
    {
      title:'gebe',
      src: './././assets/images/cat/2.png',
      href:'categori'
    },
    {
      title:'alt giyim',
      src: './././assets/images/cat/5.png',
      href:'categori'
    },
    {
      title:'üst giyim',
      src: './././assets/images/cat/6.png',
      href:'categori'
    }
  ]
}
