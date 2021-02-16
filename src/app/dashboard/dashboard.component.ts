import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";
import * as _ from "underscore";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  searchItem: any;
  hiddenItem: any;

  modules: any = [];
  hideData: boolean = false;
  data: any = [];
  postInfo: Object;

  constructor(
    private route: Router,
    private _route: ActivatedRoute,
    private authService: AuthService
  ) {
    this._route.params.subscribe((res) => {
      console.log(res["data"]);
    });
  }

  ngOnInit() {
    // this.getModules();
    this.getPostsCon();
  }

  getPostsCon() {
    this.authService.getPosts().subscribe((res) => {
      this.postInfo = res;
      console.log(res, "resssssssssss");
    });
  }
}
