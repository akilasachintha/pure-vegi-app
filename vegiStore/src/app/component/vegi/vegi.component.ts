import { Component, OnInit ,Input  } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import  jwt_decode from 'jwt-decode';

@Component({
  selector: 'vegi',
  templateUrl: './vegi.component.html',
  styleUrls: ['./vegi.component.css']
})

export class VegiComponent implements OnInit {
  @Input() item: item; 
  decoded: any;
  mycart:oitmes[] = [];
  constructor(public _service : ServiceService) { 
    
  }

  ngOnInit(): void {
    
  }
  quantity:number = 0;
  addTOCart(uquantity,price,name,item_code,image){
    let oitem = {
      'name':name,
      'price':price,
      'item_code':item_code,
      'image':image,
      'uquantity':uquantity
    }
    console.log(this.mycart);
    console.log("==========");
    if(localStorage.getItem("mycart") != null){
      this.mycart = JSON.parse(localStorage.getItem('mycart'));
     
    }
    this.mycart.push(oitem);
    console.log("==========");
    localStorage.setItem('mycart' , JSON.stringify(this.mycart) );
      console.log(this.mycart);
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
  uquantity:number;
}

export interface oitmes  {
  name:string;
  price:number;
  image:String;
  item_code:number;
  uquantity:number;
}