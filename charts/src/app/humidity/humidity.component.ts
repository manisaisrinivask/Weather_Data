import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html'
})
export class HumidityComponent implements OnInit {

  chart: any;
  humidities: any[];
  weatherDates: any[];
  selected: any;

  ngOnInit(): void {
    this.weatherService.getDailyWeather().subscribe(result => {
      const key = 'list';
      this.humidities = result[key].map(res => res.main.humidity);
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
              data: this.humidities,
              borderColor: '#DC143C',
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
    this.humidities = [];
    this.weatherDates = [];
    this.selected = 'kelvin';
  }

  downloadData() {
    const jsonData = {
        humidities: this.humidities,
        dates: this.weatherDates
    };
    const blob = new Blob([JSON.stringify(jsonData)], {type : 'application/json'});
    saveAs(blob, 'dataset.json');
  }
}
