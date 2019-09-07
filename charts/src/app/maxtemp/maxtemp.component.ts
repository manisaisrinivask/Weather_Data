import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-maxtemp',
  templateUrl: './maxtemp.component.html'
})
export class MaxTemperatureComponent implements OnInit {

  chart: any;
  tempMax: any[];
  weatherDates: any[];

  ngOnInit(): void {
    this.weatherService.getDailyWeather().subscribe(result => {
      const key = 'list';
      this.tempMax = result[key].map(res => res.main.temp_max);
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
              data: this.tempMax,
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
    this.tempMax = [];
    this.weatherDates = [];
  }

  downloadData() {
    const jsonData = {
        tempMax: this.tempMax,
        dates: this.weatherDates
    };
    
    const blob = new Blob([JSON.stringify(jsonData)], {type : 'application/json'});
    saveAs(blob, 'dataset.json');
  }
}
