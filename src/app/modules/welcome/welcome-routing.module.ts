import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {welcomeComponent} from './welcome.component';
import { ContentResolver } from '../../core/resolver/content.resolver';

const routes: Routes = [
  {
    path: '**',
    component:welcomeComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class welcomeRoutingModule { }
