// src/services/student.service.ts

import { db } from '../ConfiguracionesActivas/ADBB_BaseDatos_Secundaria.js';
// Asegúrate de que la ruta a tus modelos sea la correcta
import type { Alumno } from '../ModelosAplicacion/ModelosAplicacion.model.js'; 
import { DocumentSnapshot } from 'firebase-admin/firestore';

const alumnosCollection = db.collection('alumnos');

/**
 * Crea un nuevo alumno en la base de datos.
 * El objeto 'data' debe incluir el objeto anidado 'IDPersona'.
 */
export const create = async (data: Omit<Alumno, 'IdAlumno'>): Promise<Alumno> => {
  const docRef = await alumnosCollection.add(data);
  return { IdAlumno: docRef.id, ...data };
};

/**
 * Obtiene todos los alumnos de la base de datos.
 */
export const getAll = async (): Promise<Alumno[]> => {
  const snapshot = await alumnosCollection.get();

  return snapshot.docs.map((doc: DocumentSnapshot): Alumno => {
    const data = doc.data() || {}; // Si no hay datos, usa un objeto vacío

    // Obtiene el objeto Persona de forma segura
    const personaData = data.IDPersona || {};
    
    // Convierte la fecha de forma segura
    const fechaNacimiento = personaData.FechaNacimiento 
      ? personaData.FechaNacimiento
      : new Date(); // Usa una fecha por defecto si no existe

    return {
      IdAlumno: doc.id,
      NumControl: data.NumControl ?? 'N/A', // Asigna 'N/A' si es nulo o undefined
      EscuelaProcedencia: data.EscuelaProcedencia ?? 'N/A',
      IDPersona: {
        ID: personaData.ID ?? 0,
        Nombre: personaData.Nombre ?? '',
        Apellidos: personaData.Apellidos ?? '',
        FechaNacimiento: fechaNacimiento,
        CURP: personaData.CURP ?? '',
        Calle: personaData.Calle ?? '',
        NumeroExt: personaData.NumeroExt ?? '',
        NumeroInt: personaData.NumeroInt ?? '',
      },
    };
  });
};

/**
 * Obtiene un alumno por su ID de documento.
 */
export const getById = async (id: string): Promise<Alumno | null> => {
  const doc = await alumnosCollection.doc(id).get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data()!;
  return {
    IdAlumno: doc.id,
    NumControl: data.NumControl,
    EscuelaProcedencia: data.EscuelaProcedencia,
    IDPersona: {
      ID: data.IDPersona.ID,
      Nombre: data.IDPersona.Nombre,
      Apellidos: data.IDPersona.Apellidos,
      FechaNacimiento: data.IDPersona.FechaNacimiento.toDate(),
      CURP: data.IDPersona.CURP,
      Calle: data.IDPersona.Calle,
      NumeroExt: data.IDPersona.NumeroExt,
      NumeroInt: data.IDPersona.NumeroInt,
    },
  };
};

/**
 * Actualiza un alumno por su ID.
 * Permite actualizar campos anidados usando notación de punto (ej. "IDPersona.Nombre").
 */
export const update = async (id: string, data: Record<string, any>): Promise<Alumno | null> => {
  const docRef = alumnosCollection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) {
    return null;
  }

  // Firestore permite actualizar campos anidados con la notación de punto.
  // Ejemplo de objeto 'data' para el cliente: { "NumControl": "NC123", "IDPersona.Nombre": "Juan" }
  await docRef.update(data);
  return getById(id); // Devuelve el documento completo y actualizado
};

/**
 * Elimina un alumno por su ID.
 */
export const remove = async (id: string): Promise<boolean> => {
  const docRef = alumnosCollection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) {
    return false;
  }

  await docRef.delete();
  return true;
};