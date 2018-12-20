import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MainAuthService, User} from '../main-auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  user: User = null;
  username='';
  password='';
  constructor( private formBuilder: FormBuilder,private router:Router,private authService:MainAuthService) {


   }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        username: [this.username,Validators.required],
        password:[this.password,Validators.required]

      });



  }
 login(){
  this.authService.checkUser(this.formGroup.controls.username.value,this.formGroup.controls.password.value).subscribe(
    res => {
      this.user = res;
    }
  );

  };
}
