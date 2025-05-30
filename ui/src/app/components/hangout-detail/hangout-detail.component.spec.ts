import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangoutDetailComponent } from './hangout-detail.component';

describe('HangoutDetailComponent', () => {
  let component: HangoutDetailComponent;
  let fixture: ComponentFixture<HangoutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangoutDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HangoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
