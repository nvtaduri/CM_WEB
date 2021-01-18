import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // slideConfig2 = {
  //   className: 'center',
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: '0',
  //   slidesToShow: 1,
  //   speed: 500,
  //   dots: true,
  // };
  username: any;
  password: any;

  constructor(
    private route: Router,
    private authService: AuthService,
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    console.log("login form opened");
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  goToDashboard() {
    this.route.navigate(['/admin/dashboard']);
  }

  isSuccess: boolean = false;
  isFalied: boolean = false;
  isInfo: boolean = false;
  isBlock: boolean = false;

  userLogin() {
    this.route.navigate(['/admin/dashboard']);
    // let userData = {
    //   username: this.username,
    //   password: this.password
    // }
    // console.log("userdata is:", userData);
    // this.authService.userLogin(userData).subscribe(res => {
    //   console.log("response is:", res);
    //   if (res['success'] == true) {
    //     console.log("Login successful", res);
    //     localStorage.setItem('token', res['token']);
    //     sessionStorage.setItem('userid', res['data'][0].user_id);
    //     sessionStorage.setItem('id', res['id']);
    //     sessionStorage.setItem('role', res['role']);
    //     sessionStorage.setItem('firstname', res['firstname']);
    //     sessionStorage.setItem('lastname', res['lastname']);
    //     sessionStorage.setItem('password', res['password']);
    //     sessionStorage.setItem('phonenumber', res['phonenumber']);
    //     sessionStorage.setItem('designation', res['designation']);
    //     sessionStorage.setItem('department', res['department']);
    //     sessionStorage.setItem('created_at', moment(res['created_at']).format('YYYY-MM-DD'));
    //     this.isSuccess = true;
    //     // this.sharedService.getModulesData();
    //     setInterval(() => {
    //       this.route.navigate([`/${res['role']}/dashboard`]);
    //     }, 1000);
    //   } else if (res['statusCode'] == 204) {
    //     console.log("Required fields are empty");
    //     this.isInfo = true;
    //     setInterval(() => {
    //       this.isInfo = false;
    //     }, 5000);
    //   } else if (res['statusCode'] == 404) {
    //     console.log("Invalid username or password");
    //     this.isFalied = true;
    //     setInterval(() => {
    //       this.isFalied = false;
    //     }, 5000);
    //   } else if (res['statusCode'] == 405) {
    //     console.log("User is blocked");
    //     this.isBlock = true;
    //     setInterval(() => {
    //       this.isBlock = false;
    //     }, 5000);
    //   }
    //   else {
    //     console.log('Login failed');
    //   }
    // })
  }

}
