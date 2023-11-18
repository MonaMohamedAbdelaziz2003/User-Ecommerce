import { NgModule } from '@angular/core';
import { ResolveStart, RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './product/commpnent/all-product/all-product.component';
import { ProductDetailsComponent } from './product/commpnent/product-details/product-details.component';
import { CartComponent } from './card/component/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';

const routes: Routes = [
  { path: "product",component:AllProductComponent },
  { path: "details/:id",component:ProductDetailsComponent },
  { path: "card", component: CartComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "reset", component: PasswordResetComponent },
  { path: "profile", component: ProfileComponent },
  { path: "change", component: ChangePasswordComponent },
//   { path: "allorder",
//   loadComponent:()=>import("../app/admin/all-order")
//   .then(e=>e.AllOrderComponent),
//   resolve:{Role:LayoutResolver},
//   children:[{path:"",component:AllOrderComponent,resolve:{Date:DefaultSe}}]


// },

  {path:"**",redirectTo:"product",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
