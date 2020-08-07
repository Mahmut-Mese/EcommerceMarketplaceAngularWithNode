import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  mobileFilter = false;
  backFilter = false;
  constructor() {}

  ngOnInit(): void {}
  toggleMobileFilter(event) {
    this.mobileFilter = !this.mobileFilter;
  }
  toggleMobileBackFilter(event) {
    this.backFilter = !this.backFilter;
  }
}
