import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import * as moment from "moment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(
    private route: Router,
    private authService: AuthService,
    public sharedService: SharedService
  ) {}

  ngOnInit() {
    console.log("login form opened");
    // Get the modal
    var modal = document.getElementById("id01");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  goToDashboard() {
    this.route.navigate(["/admin/dashboard"]);
  }

  isSuccess: boolean = false;
  isFalied: boolean = false;
  isInfo: boolean = false;
  isBlock: boolean = false;

  userLogin() {
    this.route.navigate(["/admin/dashboard"]);
  }
}
