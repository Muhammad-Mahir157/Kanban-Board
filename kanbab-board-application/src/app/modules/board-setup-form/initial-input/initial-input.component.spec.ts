import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialInputComponent } from './initial-input.component';

describe('InitialInputComponent', () => {
  let component: InitialInputComponent;
  let fixture: ComponentFixture<InitialInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
