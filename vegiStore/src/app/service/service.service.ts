import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  register_user(data){
    return this.http.post(this.url+'/service/register/', data,  {observe: 'response'});
  }
  login_user(data){
    return this.http.post(this.url+'/service/login/', data,  {observe: 'response'});
  }
  add_item(data,contact){
    return this.http.post(this.url+'/service/addItem/'+contact, data,  {observe: 'response'});
  }
  get_item(contact){
    return this.http.post(this.url+'/service/getItems/'+contact,  {observe: 'response'});
  }
  del_item(itemCode){
    return this.http.post(this.url+'/service/delItems/'+itemCode,  {observe: 'response'});
  }
  gel_item_all(){
    
    return this.http.post(this.url+'/service/getItemsAll',  {observe: 'response'});
  }
}
