import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 
 
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material_component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
 
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routers } from "./router/routerModule";
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegiComponent } from './component/vegi/vegi.component';
import { BannerComponent } from './component/banner/banner.component';
import { SignupComponent } from './component/page/signup/signup.component';
import { SigninComponent } from './component/page/signin/signin.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/page/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerComponent } from './component/seller/seller.component';
import { ItemComponent } from './component/item/item.component';
import { OrderComponent } from './component/order/order.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { BuyerComponent } from './component/buyer/buyer.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    VegiComponent,
    BannerComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    SellerComponent,
    ItemComponent,
    OrderComponent,
    AddItemComponent,
    BuyerComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    MatIconModule,
    NgbModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routers.route),
    HttpClientModule,

  ],
  
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  entryComponents: [AppComponent],

})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));