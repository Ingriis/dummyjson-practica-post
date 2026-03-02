import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComentario } from './crear-comentario';

describe('CrearComentario', () => {
  let component: CrearComentario;
  let fixture: ComponentFixture<CrearComentario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearComentario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearComentario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
