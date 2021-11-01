import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SihnupComponent } from './sihnup/sihnup.component';



@NgModule({
  declarations: [
    LoginComponent,
    SihnupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SihnupComponent
  ]
})
export class UsersModule { }
