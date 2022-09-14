import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoNivelBComponent } from './segundo-nivel-b.component';

describe('SegundoNivelBComponent', () => {
  let component: SegundoNivelBComponent;
  let fixture: ComponentFixture<SegundoNivelBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoNivelBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoNivelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
