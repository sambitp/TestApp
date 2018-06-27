import { NgModule } from '@angular/core';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { isPlatformBrowser } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ServiceWorkerModule } from '@angular/service-worker';

/*CUSTOME MODULE*/
import { AppRoutingModule } from './app-routing.module';
import { SharedModule} from './shared/shared.module';
import { CoreModule } from './core/core.module';

/*COMPONENT*/
import { AppComponent } from './app.component';
import { OfflineComponent } from './modules/offline/offline.component';

/*CONST*/
import { environment } from '../environments/environment';

import {ContentResolver} from '../app/core/resolver/content.resolver';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
const serviceWorkerPath = environment.production ? '/ngsw-worker.js' : '/ngsw-worker.js';

@NgModule({
  declarations: [
    AppComponent,
    OfflineComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ToastrModule.forRoot(),
    BrowserModule.withServerTransition({appId: 'test-app'}),
    ServiceWorkerModule.register(serviceWorkerPath, { enabled: environment.production })
  ],
  providers: [
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
