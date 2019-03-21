import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {SuspensionModule} from './suspension/suspension.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, SuspensionModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
