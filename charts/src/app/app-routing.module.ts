import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaxTemperatureComponent } from './maxtemp/maxtemp.component';
import { MinTemperatureComponent } from './mintemp/mintemp.component';
import { HumidityComponent } from './humidity/humidity.component';
import { PressureComponent } from './pressure/pressure.component';
import { LifeExpectancyComponent } from './life-expectancy/life-expectancy.component';

const routes: Routes = [
  {
    path: 'maxtemp',
    component: MaxTemperatureComponent
  },
  {
    path: 'mintemp',
    component: MinTemperatureComponent
  },
  {
    path: 'humidity',
    component: HumidityComponent
  },
  {
    path: 'pressure',
    component: PressureComponent
  },
  {
    path: 'lifeexpectancy',
    component: LifeExpectancyComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
