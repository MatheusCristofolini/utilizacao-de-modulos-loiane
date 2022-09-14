import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroNivelAComponent } from './terceiro-nivel-a.component';

describe('TerceiroNivelAComponent', () => {
  let component: TerceiroNivelAComponent;
  let fixture: ComponentFixture<TerceiroNivelAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiroNivelAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroNivelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
