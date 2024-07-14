import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartnersComponent } from './home-partners.component';

describe('PartnersComponent', () => {
  let component: HomePartnersComponent;
  let fixture: ComponentFixture<HomePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
