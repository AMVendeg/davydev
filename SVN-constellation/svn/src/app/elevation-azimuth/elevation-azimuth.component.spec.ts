import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationAzimuthComponent } from './elevation-azimuth.component';

describe('ElevationAzimuthComponent', () => {
  let component: ElevationAzimuthComponent;
  let fixture: ComponentFixture<ElevationAzimuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevationAzimuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevationAzimuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
