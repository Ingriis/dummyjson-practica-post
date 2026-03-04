import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginUsuario } from './login-usuario';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginUsuario', () => {
  let component: LoginUsuario;
  let fixture: ComponentFixture<LoginUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUsuario, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});