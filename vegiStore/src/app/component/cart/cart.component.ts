import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user_type: any;
  decoded: any;
  contact: any;
  items:any;
  mycart:oitmes[] = [];
  constructor(private _service : ServiceService) {
    var token = localStorage.getItem('token');
       
   }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    if(localStorage.getItem("mycart") != null){
      this.mycart = JSON.parse(localStorage.getItem('mycart'));
     
    }
  }
  removeItem(){
    
  }
  
}


export interface oitmes  {
  name:string;
  price:number;
  image:String;
  item_code:number;
  uquantity:number;
}