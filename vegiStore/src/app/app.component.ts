import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vegiStore';
  public form: FormGroup;
  rating3: number;

  constructor(private fb: FormBuilder){
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })

   
  }

}
