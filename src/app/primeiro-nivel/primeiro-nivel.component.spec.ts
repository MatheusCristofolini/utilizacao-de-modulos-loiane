import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroNivelComponent } from './primeiro-nivel.component';

describe('PrimeiroNivelComponent', () => {
  let component: PrimeiroNivelComponent;
  let fixture: ComponentFixture<PrimeiroNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroNivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
