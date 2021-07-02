import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  items: item[];
  firstFormGroup: FormGroup;
  myCart:any;
  constructor(private _formBuilder: FormBuilder , private _service : ServiceService) {
    if(localStorage.getItem("mycart") != null){
       this.myCart = localStorage.getItem('mycart');
      
      
    }else{
      this.myCart = null;
    }


   }
  today = Date.now();
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.getData();
  }
  getData(){
    this._service.gel_item_all().subscribe(res=>{
      this.items = res["data"];
      console.log(res["data"])
      
    })
  }
}
export interface item  {
  name:string;
  price:number;
  quality:number;
  quantity:String;
  mdate:String;
  image:String;
  edate:string;
  item_code:number;
  seller:number;
}