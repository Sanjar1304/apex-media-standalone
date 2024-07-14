import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedAddsComponent } from './led-adds.component';

describe('LedAddsComponent', () => {
  let component: LedAddsComponent;
  let fixture: ComponentFixture<LedAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedAddsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LedAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
