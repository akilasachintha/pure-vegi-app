import { ServiceService } from './../../../service/service.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ConfirmedValidator } from './confirmValidator';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  message :String ;
  errorFound:boolean = false;
  is_success:boolean = false;
  constructor(private _formBuilder: FormBuilder , private _service : ServiceService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      // secondCtrl: ['', Validators.required],
      sName: ['', Validators.required],
      sAddress: ['', Validators.required],
      sContact: ['', Validators.required],
      sdistrict: ['', Validators.required],
      sPassword: ['', Validators.required],
      sCPassword: ['', Validators.required]
    } ,{ 
      validator: ConfirmedValidator('sPassword', 'sCPassword')
    });


    
  }

  register_user(){
    this._service.register_user(
      {
        "name": this.secondFormGroup.value.sName,
        "address": this.secondFormGroup.value.sAddress,
        "district" : this.secondFormGroup.value.sdistrict,
        "contact" : this.secondFormGroup.value.sContact,
        "password" : this.secondFormGroup.value.sPassword,
        "user_type" : this.firstFormGroup.value.firstCtrl

      }
    ).subscribe(res => {
      console.log(res);
      if(res.body['status']  == "success"){
        this.is_success = true;
        this.errorFound = false;

      }else if(res.body['status']  == "fails"){
        this.errorFound = true;
        this.is_success = false;
        this.message = res.body['data'];
      }
    })
  }
}
