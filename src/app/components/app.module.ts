import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClientComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule],
  declarations: [ ClientComponent ],
  bootstrap:    [ ClientComponent ]
})
export class AppModule {

 }
