import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  ProductForm : FormGroup;

  

  constructor(private router : Router, private activatedRoute: ActivatedRoute, private homeService : HomeService, private location: Location, private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.ProductForm = new FormGroup({
      'ProductName' : new FormControl(null, Validators.required),
      'ProductPrice' : new FormControl(null, Validators.required)
    })

   if(this.activatedRoute.snapshot.params.id){
     this.homeService.GetProductById(+this.activatedRoute.snapshot.params.id).subscribe(Projectdata => {
      var mydata = JSON.parse(JSON.stringify(Projectdata))
      console.log(mydata.data[0])
      this.ProductForm.patchValue({
        ProductName : mydata.data[0].ProductName,
        ProductPrice : mydata.data[0].ProductPrice
      })
      
     })
   }
    
  }

  save(){
    console.log(this.ProductForm.value)
    
      this.homeService.updateProduct(this.ProductForm.value, +this.activatedRoute.snapshot.params.id).subscribe(result => {
      
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


