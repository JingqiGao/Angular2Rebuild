import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {CarComponent}  from './cars/car.component';
import {CarService} from './services/carservice';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';
import {ClientComponent}  from './components/client.component';
import {MigrationService} from './services/migration.Service';
import {ClientDetailComponent} from './components/client-detail.component';
import {AppRoutingModule} from './routers/app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule, AppRoutingModule],
  declarations: [ClientComponent,ClientDetailComponent,AppComponent,CarComponent],
  bootstrap:    [AppComponent],
  providers:    [CarService, MigrationService]
})
export class AppModule { }
