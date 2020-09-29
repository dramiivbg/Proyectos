import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarNoticiaComponent } from './cargar-noticia.component';

describe('CargarNoticiaComponent', () => {
  let component: CargarNoticiaComponent;
  let fixture: ComponentFixture<CargarNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
