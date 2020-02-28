import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhenomenonDetectionComponent } from './phenomenon-detection.component';

describe('PhenomenonDetectionComponent', () => {
  let component: PhenomenonDetectionComponent;
  let fixture: ComponentFixture<PhenomenonDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhenomenonDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhenomenonDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
