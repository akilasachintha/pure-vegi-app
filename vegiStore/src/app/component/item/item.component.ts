import { ServiceService } from './../../service/service.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import  jwt_decode from 'jwt-decode';

@Component({
  selector: 'items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  user_type: any;
  decoded: any;
  contact: any;
  items:any;
  constructor(private _formBuilder: FormBuilder , private _service : ServiceService) {
    var token = localStorage.getItem('token');
        this.decoded = jwt_decode(token);
        this.user_type = this.decoded['type'];
        this.contact = this.decoded['contact'];
   }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this._service.get_item(this.contact).subscribe(res=>{
      this.items = res["data"];
      console.log(res["data"])
      
    })
  }
  deleteItem(itemCode){
    this._service.del_item(itemCode).subscribe(res=>{
      console.log(res)
      if(res['status'] == 'success'){
        this.getData();
      }
    })
  }

}
