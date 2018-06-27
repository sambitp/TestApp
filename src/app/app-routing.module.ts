import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { OfflineComponent } from './modules/offline/offline.component';

/*Add canload gaurd where we need preauth*/
const routes: Routes = [
  { path : '', redirectTo : 'welcome', pathMatch : 'full'},
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
  { path: 'welcome', loadChildren: './modules/welcome/welcome.module#WelcomeModule'},
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
  { path: 'register', loadChildren: './modules/register/register.module#RegisterModule'},
  { path: 'offline', component: OfflineComponent},
  { path : '**', redirectTo : 'welcome', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
