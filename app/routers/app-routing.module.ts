import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent}  from '../components/client.component';
import {CarComponent}  from '../cars/car.component';

const routes: Routes = [
    {path: 'migration', component: ClientComponent},
    {path: 'car', component: CarComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}