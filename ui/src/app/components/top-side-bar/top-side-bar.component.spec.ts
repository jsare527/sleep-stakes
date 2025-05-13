import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSideBarComponent } from './top-side-bar.component';

describe('TopSideBarComponent', () => {
  let component: TopSideBarComponent;
  let fixture: ComponentFixture<TopSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
