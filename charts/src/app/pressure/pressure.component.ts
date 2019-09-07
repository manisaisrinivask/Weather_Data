import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html'
})
export class PressureComponent implements OnInit {

  chart: any;
  pressure: any[];
  weatherDates: any[];

  ngOnInit(): void {
    this.weatherService.getDailyWeather().subscribe(result => {
      const key = 'list';
      this.pressure = result[key].map(res => res.main.pressure);
      const alldates = result[key].map(res => res.dt);

      alldates.forEach((res) => {
          const jsdate = new Date(res * 1000);
          this.weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
      });

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.weatherDates,
          datasets: [
            {
              data: this.pressure,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }

  constructor(private weatherService: WeatherService) {
    this.chart = [];
    this.pressure = [];
    this.weatherDates = [];
  }

  downloadData() {
    const jsonData = {
        pressure: this.pressure,
        dates: this.weatherDates
    };
    const blob = new Blob([JSON.stringify(jsonData)], {type : 'application/json'});
    saveAs(blob, 'dataset.json');
  }
}
