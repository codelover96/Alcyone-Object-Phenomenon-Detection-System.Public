import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PhenomenonResultsDialogMessageComponent} from './phenomenon-results-dialog-message.component';

describe('PhenomenonResultsDialogMessageComponent', () => {
    let component: PhenomenonResultsDialogMessageComponent;
    let fixture: ComponentFixture<PhenomenonResultsDialogMessageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhenomenonResultsDialogMessageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhenomenonResultsDialogMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
