import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterRoutingModule} from './register-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent} from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
