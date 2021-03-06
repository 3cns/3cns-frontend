import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './sign-up.component';

const signUpRoutes: Routes = [
  { path: '', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(signUpRoutes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
