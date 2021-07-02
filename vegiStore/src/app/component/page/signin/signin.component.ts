import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';



@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  login: FormGroup;

  hide = true;
  message :String ;
  errorFound:boolean = false;
  constructor(
    private _formBuilder: FormBuilder, 
    private _service : ServiceService,
    private route:Router,
    ) {}

  ngOnInit(): void {
    this.login = this._formBuilder.group({
      userName: ['', Validators.required],
      password : ['' , Validators.required],
      user_type : ['' , Validators.required]
    });
  }
  login_user(){
    console.log({
      "contact": this.login.value.userName,
      "password": this.login.value.password,
      "user_type" : this.login.value.user_type,

    });
    this._service.login_user(
      {
        "contact": this.login.value.userName,
        "password": this.login.value.password,
        "user_type" : this.login.value.user_type,

      }
    ).subscribe(res => {
      console.log(res);
      if(res.body['status']  == "success"){
        this.errorFound = false;
        localStorage.setItem("token", res.body['data']);
        this.route.navigate(
          ['']
        )
      }else if(res.body['status']  == "invalid access"){
        this.errorFound = true;
        this.message = res.body['data'];
      }
    })
  }
}
