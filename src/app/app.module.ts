import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {SuspensionModule} from './suspension/suspension.module';
import {CocinaModule} from './cocina/cocina.module';
import {CalificacionycomentarioModule} from './calificacionycomentario/calificacionycomentario.module';

import { AppComponent } from './app.component';




@NgModule({
  imports: [ BrowserModule, FormsModule, SuspensionModule, CocinaModule, CalificacionycomentarioModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
