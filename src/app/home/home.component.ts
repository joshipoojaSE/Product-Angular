import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

import { Project } from './Project.model';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../shared/helper/my-dialog/my-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products = [];
  Name : string = '';
  isloading : boolean = false;

  constructor(private router : Router, private homeService: HomeService, public dialog: MatDialog, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((loaddata) => {
      var mydata = JSON.parse(JSON.stringify(loaddata))
     console.log(mydata.data.data);
      this.Products = mydata.data.data;
    }, err => {
      console.error('Here is the error message', err.error.message);
    })

  }

  openDialog(): void {
    this.router.navigateByUrl('/home/add')
  }

  Loading(){
    
    this.homeService.GetProduct().subscribe((Projectdata) => {
      var mydata = JSON.parse(JSON.stringify(Projectdata))
      if(mydata.data === []){
        this.Products = mydata.data;
      }
      else{
        this.Products = [];
      }
      
      this.isloading = false;
    }, err => {
      console.error('Here is the error message', err.error.message);
    })
  }

  DeleteModule(ProductID){
    this.homeService.DeleteProduct(ProductID).subscribe((Projectdata : []) => {
      this.Products = Projectdata;
      this.Loading()
      // this.isloading = false;
    }, err => {
      console.error('Here is the error message', err.error.message);
    })
  }

  UpdateModule(ProductID){
    this.router.navigateByUrl(`/home/update/${ProductID}`)
  }

}
