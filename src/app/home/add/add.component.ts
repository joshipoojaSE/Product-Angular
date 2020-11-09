import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  ProductForm : FormGroup;

  

  constructor(private router : Router, private activatedRoute: ActivatedRoute, private homeService : HomeService, private location: Location, private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.ProductForm = new FormGroup({
      'ProductName' : new FormControl(null, Validators.required),
      'ProductPrice' : new FormControl(null, Validators.required)
    })

   
    
  }

  save(){
    console.log(this.ProductForm.value)
    
      this.homeService.AddProduct(this.ProductForm.value).subscribe(result => {
      
        var data = JSON.parse(JSON.stringify(result))
        var status = data.status;

        if(status != 200){
          this.toastr.error(data.error);
        }else{
          this.router.navigateByUrl('/home')
        }

        
      }, err => {
        console.error('Here is the error message', err.error.message);
      })
    
  }
}

