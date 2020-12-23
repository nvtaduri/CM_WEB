import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  getConfigurations() {
    return this.http.get(ApiService.API.GET_MODULE_CONFIGURATIONS);
  }

  createNewRfcService(data) {
    console.log(data,'service info');
    
    return this.http.post(ApiService.API.CREATE_NEW_RFC, data);
  }

}
