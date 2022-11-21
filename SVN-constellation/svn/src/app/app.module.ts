import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ElevationAzimuthComponent } from './elevation-azimuth/elevation-azimuth.component';
import { ReflectionsComponent } from './reflections/reflections.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ElevationAzimuthComponent,
    ReflectionsComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
