import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ObjectResultsDialogMessageComponent} from './object-results-dialog-message.component';

describe('ObjectResultsDialogMessageComponent', () => {
    let component: ObjectResultsDialogMessageComponent;
    let fixture: ComponentFixture<ObjectResultsDialogMessageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObjectResultsDialogMessageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ObjectResultsDialogMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
