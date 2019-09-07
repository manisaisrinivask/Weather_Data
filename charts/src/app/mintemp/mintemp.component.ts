import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-mintemp',
  templateUrl: './mintemp.component.html'
})
export class MinTemperatureComponent implements OnInit {

  chart: any;
  tempMin: any[];
  weatherDates: any[];

  ngOnInit(): void {
    this.weatherService.getDailyWeather().subscribe(result => {
      const key = 'list';
      this.tempMin = result[key].map(res => res.main.temp_min);
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
              data: this.tempMin,
              borderColor: '#228B22',
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
    this.tempMin = [];
    this.weatherDates = [];
  }

  downloadData() {
    const jsonData = {
        minTemp: this.tempMin,
        dates: this.weatherDates
    };
    const blob = new Blob([JSON.stringify(jsonData)], {type : 'application/json'});
    saveAs(blob, 'dataset.json');
  }
}
