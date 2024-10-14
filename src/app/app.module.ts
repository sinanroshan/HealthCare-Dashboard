import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PatientComponent } from './Patient/patient.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';
import { PatientService } from './Patient/services/patient.service';
import { HttpClientModule } from '@angular/common/http';
// import { ChartsModule } from 'ng2-charts';
// import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PatientComponent,
    PatientDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // ChartsModule
    // NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
