import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyDinamicComponent } from './key-dinamic.component';

describe('KeyDinamicComponent', () => {
  let component: KeyDinamicComponent;
  let fixture: ComponentFixture<KeyDinamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyDinamicComponent]
    });
    fixture = TestBed.createComponent(KeyDinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
