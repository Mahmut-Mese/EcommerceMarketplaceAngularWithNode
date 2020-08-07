import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  openProfile = false;
  backProfile = false;

  constructor() {}

  ngOnInit(): void {}

  toggleProfile() {
    this.openProfile = !this.openProfile;
  }
  toggleMobileBackProfile() {
    this.openProfile = !this.openProfile;
    this.backProfile = !this.backProfile;
  }
}
