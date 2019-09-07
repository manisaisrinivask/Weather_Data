import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-life-expectancy',
  templateUrl: './life-expectancy.component.html',
  styleUrls: ['./life-expectancy.component.css']
})
export class LifeExpectancyComponent implements OnInit {

  chart: any;
  years: any[];
  avgLifeExpectancy: any[];
  selectedType: string;
  types = ['Average', 'Male', 'Female'];
  actualData: any;

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:5002/deathrates').subscribe(result => {
      this.actualData = result;
      const yearKey = 'year';
      const raceKey = 'race';
      const sexKey = 'sex';
      const avgLifeExpectancyKey = 'avg_life_expectancy';
      for (let i = 0; i < result[yearKey].length; i++) {
          if (result[raceKey][i] === 'All Races' && result[sexKey][i] === 'Both Sexes') {
              this.years.push(result[yearKey][i]);
              this.avgLifeExpectancy.push(result[avgLifeExpectancyKey][i]);
          }
      }

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.years,
          datasets: [
            {
              data: this.avgLifeExpectancy,
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

  constructor(private weatherService: WeatherService, private httpClient: HttpClient) {
    this.chart = [];
    this.years = [];
    this.avgLifeExpectancy = [];
    this.selectedType = 'Average';
  }

  downloadData() {
    const jsonData = {
        years: this.years,
        avgLifeExpectancy: this.avgLifeExpectancy
    };
    const blob = new Blob([JSON.stringify(jsonData)], {type : 'application/json'});
    saveAs(blob, 'dataset.json');
  }

    valueChanged(value: any) {
        const yearKey = 'year';
        const raceKey = 'race';
        const sexKey = 'sex';
        const avgLifeExpectancyKey = 'avg_life_expectancy';
        this.years = [];
        this.avgLifeExpectancy = [];
        if (value.value === 'Male') {
            for (let i = 0; i < this.actualData[yearKey].length; i++) {
                if (this.actualData[raceKey][i] === 'All Races' && this.actualData[sexKey][i] === 'Male') {
                    this.years.push(this.actualData[yearKey][i]);
                    this.avgLifeExpectancy.push(this.actualData[avgLifeExpectancyKey][i]);
                }
            }
            this.chart.data.datasets[0].borderColor = 'blue';
        } else if ( value.value === 'Female' ) {
            for (let i = 0; i < this.actualData[yearKey].length; i++) {
                if (this.actualData[raceKey][i] === 'All Races' && this.actualData[sexKey][i] === 'Female') {
                    this.years.push(this.actualData[yearKey][i]);
                    this.avgLifeExpectancy.push(this.actualData[avgLifeExpectancyKey][i]);
                }
            }
            this.chart.data.datasets[0].borderColor = 'red';
        } else if (value.value === 'Average') {
            for (let i = 0; i < this.actualData[yearKey].length; i++) {
                if (this.actualData[raceKey][i] === 'All Races' && this.actualData[sexKey][i] === 'Both Sexes') {
                    this.years.push(this.actualData[yearKey][i]);
                    this.avgLifeExpectancy.push(this.actualData[avgLifeExpectancyKey][i]);
                }
            }
            this.chart.data.datasets[0].borderColor = '#3cba9f';
        }
        this.chart.data.labels = this.years;
        this.chart.data.datasets[0].data = this.avgLifeExpectancy;
        this.chart.update();
    }
}
