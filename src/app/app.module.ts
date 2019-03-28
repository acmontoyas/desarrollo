import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {SuspensionModule} from './suspension/suspension.module';
import {CocinaModule} from './cocina/cocina.module';
import {CalificacionycomentarioModule} from './calificacionycomentario/calificacionycomentario.module';
 
 

import { AppComponent } from './app.component';




@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClient, SuspensionModule, CocinaModule, CalificacionycomentarioModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
