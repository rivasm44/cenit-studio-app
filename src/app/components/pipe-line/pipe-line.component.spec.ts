import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeLineComponent } from './pipe-line.component';

describe('PipeLineComponent', () => {
	let component: PipeLineComponent;
	let fixture: ComponentFixture<PipeLineComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PipeLineComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(PipeLineComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
