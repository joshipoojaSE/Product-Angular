import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private dataService : DataService) { }

  PostRegister(data){
    return this.dataService.Postdata('register', data)
}
}

