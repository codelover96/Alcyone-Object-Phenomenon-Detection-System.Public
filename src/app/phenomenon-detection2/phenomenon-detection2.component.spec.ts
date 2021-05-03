import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PhenomenonDetection2Component} from './phenomenon-detection2.component';

describe('PhenomenonDetection2Component', () => {
    let component: PhenomenonDetection2Component;
    let fixture: ComponentFixture<PhenomenonDetection2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhenomenonDetection2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhenomenonDetection2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
