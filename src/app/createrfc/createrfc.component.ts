import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from "@angular/forms";
import { SettingsService } from "../settings.service";
import { HttpClient, HttpParams } from "@angular/common/http";
@Component({
  selector: "app-createrfc",
  templateUrl: "./createrfc.component.html",
  styleUrls: ["./createrfc.component.css"],
})
export class CreaterfcComponent implements OnInit {
  typeahead: FormControl = new FormControl();
  templates: string[] = [];
  suggestions: string[] = [];
  rfcreateForm: any = FormGroup;
  filterForm: any = FormGroup;
  rfcNewFormArr: any = [];

  stage: any;
  start_date: any;
  end_date: any;
  eventId: any;
  statusId: any;
  createPage: Boolean = true;
  editPage: Boolean;
  listPage: Boolean;
  eventlist: any;
  otaCtrl: FormControl;
  eventInfo: any = {};
  constructor(
    public fb: FormBuilder,
    private _settingservice: SettingsService,
    public _http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getEvents();
    this.rfcreateForm = this.fb.group({
      status: ["", Validators.required],
      description: ["", Validators.required],
      schedule: ["", Validators.required],
      duration_minutues: ["", Validators.required],
      location_latitude: ["", Validators.required],
      location_longitude: ["", Validators.required],
      location_address: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      contact_name: ["", Validators.required],
      contact_phone_number: ["", Validators.required],
      notes: ["", Validators.required],
    });

    this.filterForm = new FormGroup({
      stage: new FormControl(),
      active: new FormControl(),
      inProgress: new FormControl(),
      complete: new FormControl(),
      failed: new FormControl(),
      canceled: new FormControl(),
      fromrange: new FormControl(),
      through: new FormControl(),
      listByID: new FormControl(),
    });
  }
  get f() {
    return this.rfcreateForm.controls;
  }
  suggest() {
    this.suggestions = this.templates
      .filter((c) => c.startsWith(this.typeahead.value))
      .slice(0, 5);
  }

  showPage(value) {
    if (value == 1) {
      this.createPage = !this.editPage;
      this.editPage = false;
      this.listPage = false;
    } else if (value == 2) {
      this.listPage = false;
      this.createPage = false;
      this.editPage = true;
    } else if (value == 3) {
      this.editPage = false;
      this.createPage = false;
      this.listPage = true;
    }
  }

  getEvents() {
    this._http
      .get("http://127.0.0.1:5000/api/v1/events")
      .subscribe((res: any) => {
        console.log("all events", res);
        this.eventlist = res;
      });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.rfcNewFormArr = this.rfcreateForm.value;
    var data = JSON.stringify(this.rfcNewFormArr);
    console.log(this.rfcNewFormArr);
    this._settingservice
      .createNewRfcService(JSON.parse(data))
      .subscribe((res) => {
        const x: any = res;
        if (x.success == true) {
          //this.toaster.successToastr(x.message);
          console.log("successfully updated");
          //this.getAllTimesheetsCon();
        } else {
          //this.toaster.errorToastr('Unable to update timesheet');
          console.log("updation failed");
        }
      });
  }

  getByStatus(statusId: any) {
    this._http
      .get("http://127.0.0.1:5000/api/v1/filter_status/" + statusId)
      .subscribe((res) => {
        this.eventlist = res;
      });
  }

  getByRange(start_date?: any, end_date?: any) {
    console.log("=== start ", start_date);
    console.log("=== end ", end_date);
    let params = new HttpParams();
    if (start_date) {
      params = params.append("start_date", start_date);
    }
    if (end_date) {
      params = params.append("end_date", end_date);
    }
    console.log("=== pramas ", params);
    this._http
      .get("http://127.0.0.1:5000/api/v1/filter_events", { params: params })
      .subscribe((res) => {
        this.eventlist = res;
      });
  }

  getById(eventId: any) {
    this._http
      .get("http://127.0.0.1:5000/api/v1/events/" + eventId)
      .subscribe((res) => {
        this.eventlist = [res];
        this.eventInfo = res;
        console.log("edit info", res);
      });
  }

  submitEditEvent(eventId: any) {
    console.log("event id:", eventId);
    this.eventId = eventId;
    this._http
      .put(
        `http://127.0.0.1:5000/api/v1/events/${this.eventId}`,
        this.eventInfo
      )
      .subscribe((data) => {
        console.log("from edit info");
      });
  }
}
