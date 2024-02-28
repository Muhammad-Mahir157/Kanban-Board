import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiViewComponent } from './mani-view.component';

describe('ManiViewComponent', () => {
  let component: ManiViewComponent;
  let fixture: ComponentFixture<ManiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManiViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
