import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { DemoMaterialModule } from './material-module';
import { MaxTemperatureComponent } from './maxtemp/maxtemp.component';
import { MinTemperatureComponent } from './mintemp/mintemp.component';
import { AppRoutingModule } from './app-routing.module';
import { HumidityComponent } from './humidity/humidity.component';
import { PressureComponent } from './pressure/pressure.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { LifeExpectancyComponent } from './life-expectancy/life-expectancy.component';

@NgModule({
  declarations: [
    AppComponent,
    MaxTemperatureComponent,
    MinTemperatureComponent,
    HumidityComponent,
    PressureComponent,
    WeatherMainComponent,
    LifeExpectancyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
