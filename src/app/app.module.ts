import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LabelMakerComponent } from './label-maker/label-maker.component';
import { SenderInfoComponent } from './steps/sender-info/sender-info.component';
import { RecieverInfoComponent } from './steps/reciever-info/reciever-info.component';
import { DelieveryTypeComponent } from './steps/delievery-type/delievery-type.component';
import { WeightComponent } from './steps/weight/weight.component';
import { SummaryComponent } from './steps/summary/summary.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LabelsService} from "./commonServices/labelsService";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'lableMaker',
    component : LabelMakerComponent
  },
  {
    path  : '**',
    component : HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LabelMakerComponent,
    SenderInfoComponent,
    RecieverInfoComponent,
    DelieveryTypeComponent,
    WeightComponent,
    SummaryComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [LabelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
