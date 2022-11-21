import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevation-azimuth',
  templateUrl: './elevation-azimuth.component.html',
  styleUrls: ['./elevation-azimuth.component.scss']
})
export class ElevationAzimuthComponent implements OnInit {
  constructor() { }

  // slider = document.querySelector("#appearance7");

  ngOnInit(): void { 

    $("#slider").roundSlider({
    radius: 85,
    sliderType: "default",
    value: 24
    });
   }  


  
}
