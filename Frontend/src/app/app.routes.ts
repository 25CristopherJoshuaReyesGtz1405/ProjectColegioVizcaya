import { Routes } from '@angular/router';
import { IniciarSesion } from '../ModulosAplicacion/ModuloInicioSesion/iniciar-sesion/iniciar-sesion';

export const routes: Routes = [
    // 1. Ruta para que cuando no se especifique nada, redirija al login.
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    // 2. Ruta para mostrar el componente de login en la URL '/login'.
    { path: 'login', component: IniciarSesion },
];

