
// ========= 2. Modelos de Identidad y Roles (Personas) =========

/** Representa una persona genérica en el sistema. */
export interface Persona {
  ID: number;
  Nombre: string;
  Apellidos: string;
  FechaNacimiento: Date;
  CURP: string;
  Calle?: string; // Las propiedades opcionales (con '?') corresponden a columnas que pueden ser NULL
  NumeroExt?: string;
  NumeroInt?: string;
}

/** Modelo para un Alumno, extendiendo la información de Persona. */
export interface Alumno {
  IdAlumno: string; 
  IDPersona: Persona;
  NumControl: string;
  EscuelaProcedencia?: string;
}

/** Modelo para un Maestro. */
export interface Maestro {
  IDPersona: number;
  RFC: string;
  Sueldo?: number;
  MaxGradoEstudios?: string;
}

/** Modelo para el Personal Administrativo. */
export interface PersonalAdministrativo {
  IDPersona: number;
  Puesto: string;
  FechaContratacion: Date;
}


