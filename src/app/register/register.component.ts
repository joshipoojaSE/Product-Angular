import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm : FormGroup;

  

  constructor(private router : Router, private activatedRoute: ActivatedRoute, private registerService : RegisterService, private location: Location, private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      'UserEmail' : new FormControl(null, [Validators.required, Validators.email]),
      'Password' : new FormControl(null, Validators.required)
    })

   
    
  }

  save(){
    console.log(this.RegisterForm.value)
    debugger
      this.registerService.PostRegister(this.RegisterForm.value).subscribe(result => {
      
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

  Login(){
    this.router.navigateByUrl('/login')
  }
}


