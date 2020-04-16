import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMessage2Component } from './dialog-message2.component';

describe('DialogMessage2Component', () => {
  let component: DialogMessage2Component;
  let fixture: ComponentFixture<DialogMessage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMessage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMessage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
