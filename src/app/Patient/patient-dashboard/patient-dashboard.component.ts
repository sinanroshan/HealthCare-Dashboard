import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
})
export class PatientDashboardComponent implements OnInit, OnChanges {

  @Input('selectedPatient') patientData: any;

  @ViewChild('chart', { static: true }) chartRef: ElementRef<HTMLCanvasElement>;
  chart: any;

  constructor (private _patientService: PatientService) { }

  ngOnInit (): void {
    this.initializeChart();
  }
  ngOnChanges (changes: SimpleChanges): void {
    if (this.patientData.diagnosis_history) {
      this.setChartData(this.patientData.diagnosis_history)
    }

  }

  setChartData (chartData: any[]) {
    const labels = chartData.map(data => `${data.month}, ${data.year}`);
    const systolicValues = chartData.map(data => data.blood_pressure.systolic.value);
    const diastolicValues = chartData.map(data => data.blood_pressure.diastolic.value);

    this.chart.data.labels = labels;
    this.chart.data.datasets[0].data = systolicValues;
    this.chart.data.datasets[1].data = diastolicValues;

    // to rest chart
    this.chart.update();

  }

  initializeChart (): void {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Systolic',
            data: [],
            borderColor: '#E57399',
            backgroundColor: '#E57399',
            fill: false,
            tension: 0.1,
            pointRadius: 6
          },
          {
            label: 'Diastolic',
            data: [],
            borderColor: '#9575CD',
            backgroundColor: '#9575CD',
            fill: false,
            tension: 0.1,
            pointRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            min: 60,
            max: 180
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'right'
          }
        }
      }
    });
  }
}
