import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,

    AuthModule.forRoot({
      domain: 'dev-fmo9aa35.us.auth0.com',
      clientId: 'Pv1JpQeiYniCehoaIfBMH8NMTjzG7kHm'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
