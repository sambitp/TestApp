import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import { ContentResolver } from '../../core/resolver/content.resolver';

const routes: Routes = [
  {
    path: '**',
    component: LoginComponent,
    pathMatch: 'full',
    resolve: {
      content: ContentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
