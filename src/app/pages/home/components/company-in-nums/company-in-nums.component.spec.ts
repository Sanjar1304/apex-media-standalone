import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInNumsComponent } from './company-in-nums.component';

describe('CompanyInNumsComponent', () => {
  let component: CompanyInNumsComponent;
  let fixture: ComponentFixture<CompanyInNumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyInNumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyInNumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
