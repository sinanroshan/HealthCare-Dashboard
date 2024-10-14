import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PatientComponent } from './Patient/patient.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PatientComponent,
    PatientDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
