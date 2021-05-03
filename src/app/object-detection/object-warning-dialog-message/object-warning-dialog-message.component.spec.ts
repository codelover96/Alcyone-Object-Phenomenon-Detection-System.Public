import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ObjectWarningDialogMessageComponent} from './object-warning-dialog-message.component';

describe('ObjectWarningDialogMessageComponent', () => {
    let component: ObjectWarningDialogMessageComponent;
    let fixture: ComponentFixture<ObjectWarningDialogMessageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObjectWarningDialogMessageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ObjectWarningDialogMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
