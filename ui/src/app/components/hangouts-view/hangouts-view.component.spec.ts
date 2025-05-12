import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangoutsViewComponent } from './hangouts-view.component';

describe('HangoutsViewComponent', () => {
  let component: HangoutsViewComponent;
  let fixture: ComponentFixture<HangoutsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangoutsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HangoutsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
