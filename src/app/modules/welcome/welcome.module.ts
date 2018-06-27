import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { welcomeRoutingModule } from './welcome-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { welcomeComponent } from './welcome.component';


@NgModule({

  imports: [
    CommonModule,
    welcomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [welcomeComponent]
})
export class WelcomeModule { }
