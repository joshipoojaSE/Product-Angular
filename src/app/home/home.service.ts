import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private dataService : DataService) { }

  GetProduct(){
    return this.dataService.Getdata('product/list');
  }

  GetProductById(id){
    return this.dataService.Getdata(`product/${id}`);
  }

  AddProduct(data){
    return this.dataService.Postdata('product/add', data);
  }

  DeleteProduct(id){
    return this.dataService.Deletedata(`product/${id}`)
  }

  updateProduct(data, id){
    return this.dataService.Putdata(`product/${id}`, data)

  }
}
