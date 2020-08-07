import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {

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
