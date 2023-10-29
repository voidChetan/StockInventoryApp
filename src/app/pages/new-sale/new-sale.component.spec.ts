import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleComponent } from './new-sale.component';

describe('NewSaleComponent', () => {
  let component: NewSaleComponent;
  let fixture: ComponentFixture<NewSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSaleComponent]
    });
    fixture = TestBed.createComponent(NewSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
