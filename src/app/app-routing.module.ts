import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './Patient/patient.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';

const routes: Routes = [

  {
    path: 'patient',
    component: PatientComponent,
    children: [
      {
        path: ':id',
        component: PatientDashboardComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
