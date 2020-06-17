import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDialogMessageComponent } from './contact-dialog-message.component';

describe('ContactDialogMessageComponent', () => {
  let component: ContactDialogMessageComponent;
  let fixture: ComponentFixture<ContactDialogMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDialogMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDialogMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
