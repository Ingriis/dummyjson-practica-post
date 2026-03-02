// Importaciones necesarias para las pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearUsuario } from './crear-usuario';

// Grupo de pruebas para CrearUsuario
describe('CrearUsuario', () => {
  let component: CrearUsuario;  // Instancia del componente
  let fixture: ComponentFixture<CrearUsuario>;  // Fixture para el componente

  // Configuración antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUsuario]  // Importamos el componente standalone
    })
    .compileComponents();  // Compilamos los componentes

    fixture = TestBed.createComponent(CrearUsuario);  // Creamos el componente
    component = fixture.componentInstance;  // Obtenemos la instancia
    await fixture.whenStable();  // Esperamos a que se estabilice
  });

  // Prueba básica: verificar que el componente se crea
  it('should create', () => {
    expect(component).toBeTruthy();  // El componente debería existir
  });
});