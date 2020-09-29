import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarNoticiaComponent } from './mandar-noticia.component';

describe('MandarNoticiaComponent', () => {
  let component: MandarNoticiaComponent;
  let fixture: ComponentFixture<MandarNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandarNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
