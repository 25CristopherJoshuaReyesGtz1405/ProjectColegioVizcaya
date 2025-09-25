
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importa tu componente Toast personalizado
import { ToastActive } from '../../ModuloComponentesActivos/toast-active/toast-active';
// Importa tu servicio de autenticación (cuando lo tengas listo)
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login', // O el selector que estés usando
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastActive
  ],
  templateUrl: './iniciar-sesion.html',
  styleUrls: ['./iniciar-sesion.scss']
})
export class IniciarSesion {

  // --- Propiedades para el Formulario ---
  email = '';
  password = '';
  showPassword = false;
  isLoading = false;

  // --- Propiedades para la Notificación Toast ---
  toastMessage: string | null = null;
  toastType: 'success' | 'error' = 'error';

  constructor(
    private router: Router,
    // private authService: AuthService // Inyecta el servicio cuando lo conectes
  ) {}

  /**
   * Cambia la visibilidad del campo de contraseña.
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Se ejecuta al enviar el formulario.
   */
  async onLogin(): Promise<void> {
    if (!this.email || !this.password) {
      this.showToast('Por favor, ingresa correo y contraseña.', 'error');
      return;
    }

    this.isLoading = true;

    // Simulación de la llamada a la API (reemplazar con tu servicio real)
    setTimeout(() => {
      try {
        // Lógica de autenticación real:
        // await this.authService.login(this.email, this.password);
        
        // Simulación para la prueba:
        if (this.email === 'admin@test.com' && this.password === 'password123') {
          console.log('Login exitoso');
                this.showToast('Cuenta Registrada En El Colegio 🏫.', 'success');

          this.router.navigate(['/dashboard']);
        } else {
          throw new Error('Las credenciales son incorrectas.');
        }

      } catch (error: any) {
        this.showToast(error.message, 'error');
      } finally {
        this.isLoading = false; // Detiene la carga en cualquier caso
      }
    }, 1500); // Simula un retraso de 1.5 segundos
  }

  /**
   * Muestra una notificación toast y la oculta después de 3 segundos.
   */
  showToast(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }
}