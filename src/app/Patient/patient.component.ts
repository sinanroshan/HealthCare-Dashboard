import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
})
export class PatientComponent implements OnInit {

  constructor () {

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

  }

}
