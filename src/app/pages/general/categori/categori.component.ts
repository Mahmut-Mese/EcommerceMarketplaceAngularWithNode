import { Component, OnInit, ElementRef } from '@angular/core';
import { PRODUCTS } from '../../../mocks/mock-products';
import { Product } from '../../../models/products';
import { COLORS } from '../../../mocks/mock-color';
import { Color } from '../../../models/color';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-categori',
  templateUrl: './categori.component.html',
  styleUrls: ['./categori.component.scss'],
})
export class CategoriComponent implements OnInit {
  open = true;
  products: Product[] = [];
  colors= [];
  nums = [79, 48, 12, 4];
  isActive = false;
  paramValue: any;
  orderObj: any;
  searchKey: string;
  existColors: any;
  uniqueColors:any;
  unique: any;
  mobileFilter=false;
  backFilter=false;


  constructor(
    private proService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    // this.products = PRODUCTS;
    // console.log(this.products);
    this.colors = COLORS;
    console.log(this.colors);
    this.getProducts();
    this.getFilter();
  }
  toggleFilter(event) {
    //this.open=!this.open;
    console.log(event.srcElement.parentNode);
    event.srcElement.parentNode.classList.toggle('closed');
  }
  toggleMobileFilter(event) {
this.mobileFilter=!this.mobileFilter
  }
  toggleMobileBackFilter(event) {
    this.backFilter=!this.backFilter
      }
  toggleSubFilter(event) {
    //this.open=!this.open;
    if(event.srcElement.tagName==='LI'){
      event.srcElement.childNodes[1].classList.toggle('d-none');
    }else{
      event.srcElement.parentNode.childNodes[1].classList.toggle('d-none');

    }
  }
  getProducts(): void {
    this.proService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  compare(a, b) {
    if (a > b) return 1;
    if (b > a) return -1;

    return 0;
  }
  onEditClick(skill: any) {
    if (skill === 'desc') {
      console.log('desc');
      console.log(this.products);
      let newarr = this.products.sort((a, b) => b.newPrice - a.newPrice);
      console.log(newarr);
    }
    if (skill === 'asc') {
      let newarr = this.products.sort((a, b) => a.newPrice - b.newPrice);
    }
    if (skill === 'store') {
      let newarr = this.products.sort((a, b) =>
        a.store > b.store ? 1 : a.store === b.store ? 0 : -1
      );
    }
  }

  colorFilter(event) {
    //console.log()

    //let result = this.products.filter(word =>   word.color.includes('beyaz'));

    //let newarr = this.products.sort((a, b) => b.newPrice - a.newPrice);
    //let url=window.location.href;
    if (event.srcElement != undefined) {
      var urlValue = event.srcElement.id;
      event.srcElement.classList.toggle('active');
    }

    //url.includes('beyaz');

    let urlKey = 'color';
    /*  let baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
var newParam = 'color' + '=' + urlValue,
params = '?' + newParam; */
    //window.history.replaceState({}, "", baseUrl + params);
    this.activatedRoute.queryParams.subscribe((params) => {
      this.paramValue = params['color'];
      if (this.paramValue === undefined) {
        this.searchKey = urlValue;
      } else {
        this.searchKey = this.paramValue;
      }

      this.proService
        .getProducts()
        .subscribe(
          (products) =>
            (this.products = products.filter((word) =>
              word[urlKey]
                .split(',')
                .sort()
                .toString()
                .includes(this.searchKey.split(',').sort().toString())
            ))
        );
    });
    if (this.paramValue != undefined && this.paramValue.includes(urlValue)) {
      if (urlValue === this.paramValue) {
        this.router.navigate(['/' + location.pathname + ''], {
          queryParams: { color: null },
          queryParamsHandling: 'merge',
        });
      } else {
        this.paramValue = this.paramValue.replace(',' + urlValue, '');
        this.paramValue = this.paramValue.replace(urlValue + ',', '');

        this.router.navigate(['/' + location.pathname + ''], {
          queryParams: { color: this.paramValue },
          queryParamsHandling: 'merge',
        });
      }
    } else {
      this.paramValue === undefined
        ? (this.paramValue = '')
        : (this.paramValue = this.paramValue + ',');
      this.router.navigate(['/' + location.pathname + ''], {
        queryParams: { color: this.paramValue + urlValue },
        queryParamsHandling: 'merge',
      });
    }
    /* this.activatedRoute.queryParamMap.subscribe(params => {
  this.orderObj = {...params.keys, ...params};

});
let currentColor =this.orderObj.params.color; */

    //if(url.includes(urlValue)){
    // urlValue='white';
    //event.srcElement.setAttribute('class', 'ddd')
    //this.isActive=true;
    //}//else{
    //  const firstParam: string = this.activatedRoute.snapshot.queryParamMap.get('color');
    // console.log(firstParam)

    // this.router.navigate(['/'+location.pathname+''], { queryParams: { 'color': urlValue  }, queryParamsHandling:"merge" });

    //}
  }
  getFilter() {
    let urlKey = 'color';
    this.activatedRoute.queryParams.subscribe((params) => {
      this.paramValue = params['color'];
      if (this.paramValue === undefined) {
        this.searchKey =''
      } else {
        this.searchKey = this.paramValue;
      
      
      
        
      }
      this.proService.getProducts().subscribe((products) => [
        (products.forEach((element) => {
          let tempColor = element.color.replace(/,/g, ' ');
          this.existColors = this.existColors + ' ' + tempColor;
        }),
        (this.unique = this.existColors.split(' ')),
        (this.unique = [...new Set(this.unique)])),
        (this.products = products.filter((word) =>
          word[urlKey]
            .split(',')
            .sort()
            .toString()
            .includes(this.searchKey.split(',').sort().toString())
        )),
      ]);
      console.log(this.unique);
      this.uniqueColors = this.unique.filter(
        (color) => color != '' && color != 'undefined'
      );
      console.log(this.uniqueColors);
    });
  
 
  }

  ngAfterViewInit() {
    if (this.searchKey) {
      this.searchKey.split(',').forEach((element) => {
        (<HTMLElement>this.el.nativeElement)
          .querySelector('.' + element)
          .classList.add('active');
      });
    }
   
  }
}
