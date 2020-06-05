import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectWarningDialogMessageComponent } from './detect-warning-dialog-message.component';

describe('DetectWarningMessageDialogComponent', () => {
  let component:  DetectWarningDialogMessageComponent;
  let fixture: ComponentFixture< DetectWarningDialogMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  DetectWarningDialogMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( DetectWarningDialogMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
