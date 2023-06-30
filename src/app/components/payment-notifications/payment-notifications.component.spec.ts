import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNotificationsComponent } from './payment-notifications.component';

describe('PaymentNotificationsComponent', () => {
  let component: PaymentNotificationsComponent;
  let fixture: ComponentFixture<PaymentNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentNotificationsComponent]
    });
    fixture = TestBed.createComponent(PaymentNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
