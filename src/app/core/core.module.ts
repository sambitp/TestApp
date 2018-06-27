import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth/auth.service';
import { HttpsRequestInterceptor } from './services/http/http.interceptor';
import { LoadingService } from './services/utility/loading.service';
import { DataService } from './services/data/data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DataService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true },
    LoadingService
  ]
})
export class CoreModule { }
