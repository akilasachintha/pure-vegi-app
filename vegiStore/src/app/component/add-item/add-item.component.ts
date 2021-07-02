import { ServiceService } from './../../service/service.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import  jwt_decode from 'jwt-decode';
@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  hide = true;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  message :String ;
  errorFound:boolean = false;
  is_success:boolean = false;
  uploadprogess:number = 0;
  decoded: any;
  user_type: any;
  contact: any;
 
  constructor(private _formBuilder: FormBuilder , private _service : ServiceService
    ,private http:HttpClient
    ) { 
      var token = localStorage.getItem('token');
        this.decoded = jwt_decode(token);
        this.user_type = this.decoded['type'];
        this.contact = this.decoded['contact'];
    }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      quality : ['', Validators.required],
      edate: ['', Validators.required],
      mdate: ['', Validators.required],
      image: ['', Validators.required]
    });
  }
  
  fileData: File = null;
    previewUrl:any = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
    loginStatus:string;
    fileProgress(fileInput: any) {
     
          this.fileData = <File>fileInput.target.files[0];
          this.preview();
    }
    preview() {
      // Show preview 
      var mimeType = this.fileData.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
      
      var reader = new FileReader();      
      reader.readAsDataURL(this.fileData);
      reader.onload = (_event) => { 
        this.previewUrl = reader.result; 
      
      }
  }
  add_item(){
    const today = Date.now();
    console.log(this.firstFormGroup.value);
    const formData = new FormData();
      formData.append('file', this.fileData);
      const nameLength = this.fileData.name.split('.').length;
      this.firstFormGroup.value.image ="/public/items/" + this.contact +today+  "." + this.fileData.name.split('.')[nameLength-1];
      // console.log(this._service.url+this.firstFormGroup.value.image);
      this.http.post(this._service.url + '/service/register/image/'+ this.contact+today, formData, {
        reportProgress: true,
        observe: 'events'   
    }).subscribe(events => {
          if(events.type == HttpEventType.UploadProgress) {
              this.uploadprogess = Math.round(events.loaded / events.total * 100);
          } else if(events.type === HttpEventType.Response) {
            this._service.add_item(this.firstFormGroup.value ,this.contact).subscribe(res => {
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
      })

    
  }

}
