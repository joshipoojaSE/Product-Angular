import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dataService : DataService) { }

  PostRegister(data){
    return this.dataService.Postdata('Login', data)
}
}
