import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { SettingsService } from '../settings.service';
@Component({
  selector: 'app-createrfc',
  templateUrl: './createrfc.component.html',
  styleUrls: ['./createrfc.component.css']
})
export class CreaterfcComponent implements OnInit {
  rfcreateForm: any = FormGroup;
  rfcNewFormArr: any = [];
  constructor(
    public fb: FormBuilder,
    private _settingservice: SettingsService
  ) { }

  ngOnInit(): void {
    this.rfcreateForm = this.fb.group({
      request_no: ['', Validators.required],
      opened_by: ['', Validators.required],
      opened_on: ['', Validators.required],
      status: ['', Validators.required],
      assignement_group: ['', Validators.required],
      priority: ['', Validators.required],
      change_type: ['', Validators.required],
      short_desc: ['', Validators.required],
      assigned_to: ['', Validators.required]
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.rfcNewFormArr = this.rfcreateForm.value;
    console.log(this.rfcNewFormArr);
    this._settingservice.createNewRfcService({ data: this.rfcNewFormArr }).subscribe(res => {
      const x: any = res;
      if (x.success == true) {
        //this.toaster.successToastr(x.message);
        console.log('successfully updated');
        //this.getAllTimesheetsCon();
      } else {
        //this.toaster.errorToastr('Unable to update timesheet');
        console.log('updation failed');
      }
    });
  }
}
