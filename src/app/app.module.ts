import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SuspensionModule} from './suspension/suspension.module';
import {CocinaModule} from './cocina/cocina.module';
import {CalificacionycomentarioModule} from './calificacionycomentario/calificacionycomentario.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
 
 

import { AppComponent } from './app.component';




@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, SuspensionModule, CocinaModule, CalificacionycomentarioModule, AppRoutingModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
