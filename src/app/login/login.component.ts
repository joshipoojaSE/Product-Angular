import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  RegisterForm : FormGroup;

  

  constructor(private router : Router, private activatedRoute: ActivatedRoute, private loginService : LoginService, private location: Location, private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      'UserEmail' : new FormControl(null, [Validators.required, Validators.email]),
      'Password' : new FormControl(null, Validators.required)
    })

   
    
  }

  save(){
    console.log(this.RegisterForm.value)
    
      this.loginService.PostRegister(this.RegisterForm.value).subscribe(result => {
      
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
    this.router.navigateByUrl('/signUp')
  }
}

