import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-forget-password',
  templateUrl: './admin-forget-password.component.html',
  styleUrls: ['./admin-forget-password.component.scss']
})
export class AdminForgetPasswordComponent implements OnInit {

  forget=true;
  constructor() { }

  ngOnInit(): void {
  }
forgetPass(){
this.forget=true;
}

}
