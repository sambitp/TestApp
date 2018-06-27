import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { SideBarComponent } from '../../layout/side-bar/side-bar.component';
import { FooterComponent } from '../../layout/footer/footer.component';


@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, HeaderComponent,
    FooterComponent,
    SideBarComponent]
})
export class HomeModule { }
