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

    $("#circle").roundSlider({
      sliderType: "min-range",
      circleShape: "full",
      startAngle: "-90",
      lineCap: "round",
      radius: 100,
      width: 3,
      handleSize: "+10",
      handleShape: "round",
      min: 60,
      max: -60,
      
      svgMode: true,
      pathColor: "#2B2D30",
      borderWidth: 0,
      
      startValue: 0,
      
      valueChange: function (item: any) {
        let color = item.isInvertedRange ? "#6BDBEB" : "#6BDBEB";
        
        $("#circle").roundSlider({ "rangeColor": color, "tooltipColor": color });
      }
    });
  
  let sliderObj = $("#circle").data("roundSlider");
  sliderObj.setValue(0);
   }  


  
}
