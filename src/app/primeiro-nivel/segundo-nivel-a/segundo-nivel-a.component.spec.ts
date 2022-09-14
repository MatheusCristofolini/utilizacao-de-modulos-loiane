import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoNivelAComponent } from './segundo-nivel-a.component';

describe('SegundoNivelAComponent', () => {
  let component: SegundoNivelAComponent;
  let fixture: ComponentFixture<SegundoNivelAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoNivelAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoNivelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
