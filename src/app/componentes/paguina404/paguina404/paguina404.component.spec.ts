import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paguina404Component } from './paguina404.component';

describe('Paguina404Component', () => {
  let component: Paguina404Component;
  let fixture: ComponentFixture<Paguina404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paguina404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paguina404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
