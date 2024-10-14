import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  username: string = 'coalition';
  password: string = 'skills-test';
  constructor (private _http: HttpClient) { }

  getAllPatients (): Observable<any[]> {
    // Create the basic auth header
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    return this._http.get<any[]>('https://fedskillstest.coalitiontechnologies.workers.dev', { headers });

  }
}
