import { CartComponent } from './../component/cart/cart.component';
import { HomeComponent } from './../component/page/home/home.component';
import { AppComponent } from './../app.component';
import { SignupComponent } from './../component/page/signup/signup.component';
import { SigninComponent } from './../component/page/signin/signin.component';
import { RouterModule } from '@angular/router';
 


export const routers = {
    route:
       [
      {path: "" , component: HomeComponent},
      {path: "signup" , component: SignupComponent},
      {path: "signin" , component: SigninComponent},
      {path: "cart" , component: CartComponent},
 
    ]
}
 
