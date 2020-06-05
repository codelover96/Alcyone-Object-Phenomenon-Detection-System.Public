import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhenomenonWarningDialogMessageComponent } from './phenomenon-warning-dialog-message.component';

describe('PhenomenonWarningDialogMessageComponent', () => {
  let component: PhenomenonWarningDialogMessageComponent;
  let fixture: ComponentFixture<PhenomenonWarningDialogMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhenomenonWarningDialogMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhenomenonWarningDialogMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
