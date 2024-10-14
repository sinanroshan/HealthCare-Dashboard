import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
})
export class PatientComponent implements OnInit {
  active: number = 0;

  constructor (
    private _router: Router,
    private _patientService: PatientService
  ) { }

  patientList: any[] = [];
  ngOnInit (): void {
    this.getPatientsList();
  }

  getPatientsList () {
    this._patientService.getAllPatients().subscribe(res => {
      this.patientList = res;
      this.active = this.patientList[0];
    });
  }

  patientDetail (item: any) {
    this.active = item;
    // this._router.navigate(['patient', id])
  }

}
