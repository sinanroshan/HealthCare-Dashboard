import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
})
export class PatientComponent implements OnInit {
  active: number = 0;

  constructor (private _router: Router) {

  }

  patientList: any[] = [
    {
      id: 1,
      name: 'Emily Williams',
      age: 45,
      gender: 'Female',
      icon: '',
    },
    {
      id: 2,
      name: 'Brandon Mitchell',
      age: 36,
      gender: 'Male',
      icon: '',
    },
    {
      id: 3,
      name: 'Jessica Taylor',
      age: 28,
      gender: 'Female',
      icon: '',
    },
    {
      id: 4,
      name: 'Ryan Johnson',
      age: 42,
      gender: 'Male',
      icon: '',
    },
  ]
  ngOnInit (): void {
    this.active = this.patientList[0].id;
    this._router.navigate(['patient', this.patientList[0].id])
  }

  patientDetail (id: number) {
    this.active = id;
    this._router.navigate(['patient', id])
  }

}
