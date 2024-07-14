import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAddsComponent } from './static-adds.component';

describe('StaticAddsComponent', () => {
  let component: StaticAddsComponent;
  let fixture: ComponentFixture<StaticAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticAddsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
