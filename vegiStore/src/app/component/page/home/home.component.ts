import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import  jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  decoded: any;
  user_type: string = "Buyer";
  contact: any;
  name: any;
  is_login:boolean = false;
  mycart:oitmes[] = [];
  length:number = 0;
  constructor(private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") != null){
      console.log(localStorage.getItem("token"));
      var token = localStorage.getItem('token');
        this.decoded = jwt_decode(token);
        this.user_type = this.decoded['type'];
        this.contact = this.decoded['contact'];
        this.name = this.decoded['name'];
        this.is_login = true;
        console.log(this.user_type);
    }
  }
  logout(){
    localStorage.removeItem('token')
    this.is_login = false;
    this.user_type = "";
    this.contact = "";
    this.name = "";
    // this.route.navigate(
    //   [""]
    // )
    this.getData();
  }
  getData(){
    if(localStorage.getItem("mycart") != null){
      this.mycart = JSON.parse(localStorage.getItem('mycart'));
      console.log(this.mycart.length);
      this.length = this.mycart.length;
    }
  }

}
export interface oitmes  {
  name:string;
  price:number;
  image:String;
  item_code:number;
  uquantity:number;
}