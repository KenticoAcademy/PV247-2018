import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CitiesListModule } from './citiesList/citiesList.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CitiesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
