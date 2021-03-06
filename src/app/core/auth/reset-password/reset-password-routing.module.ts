import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordComponent } from './reset-password.component'

const resetPasswordRoutes: Routes = [
  { path: '', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(resetPasswordRoutes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
