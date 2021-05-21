import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogDefaultComponent } from './dialogs/dialog-default/dialog-default.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes =
  [
    {
      path: 'reset-password/:tokenId',
      component: DialogDefaultComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
