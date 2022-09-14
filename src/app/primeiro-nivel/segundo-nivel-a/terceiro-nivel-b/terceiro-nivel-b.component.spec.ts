import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroNivelBComponent } from './terceiro-nivel-b.component';

describe('TerceiroNivelBComponent', () => {
  let component: TerceiroNivelBComponent;
  let fixture: ComponentFixture<TerceiroNivelBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiroNivelBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroNivelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
