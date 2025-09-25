
import { Router, type Request, type Response } from 'express';
import authMiddleware, { type AuthenticatedRequest } from '../APIs/auth.middleware.js';
import * as StudentService from '../ServiciosActivos/FirebaseStudents.service.js';

const router = Router();

// --- RUTAS PÚBLICAS (Solo para leer información) ---

/**
 * @route   GET /api/students
 * @desc    Obtener todos los perfiles de estudiantes
 * @access  Public
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const students = await StudentService.getAll();
    res.status(200).json(students);
  } catch (error:any) {
    // Imprime el error completo en la consola de tu servidor para un diagnóstico detallado
  console.error("Error al obtener estudiantes:", error);

  // Envía un mensaje de error claro al cliente
  res.status(500).json({ 
    message: 'Error al obtener los estudiantes', 
    error: error.message // Envía solo el mensaje del error
  });
  }
});

/**
 * @route   GET /api/students/:id
 * @desc    Obtener un solo perfil de estudiante por su ID
 * @access  Public
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const student = await StudentService.getById(id as string);
    if (!student) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el estudiante', error });
  }
});


// --- RUTAS PROTEGIDAS (Requieren autenticación para modificar datos) ---

/**
 * @route   POST /api/students
 * @desc    Crear un nuevo perfil de estudiante
 * @access  Private
 */
router.post('/', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const newStudentData = {
      ...req.body,
      createdBy: req.user?.uid, // Guardamos quién creó el registro
      createdAt: new Date(),
    };
    const createdStudent = await StudentService.create(newStudentData);
    res.status(201).json(createdStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el estudiante', error });
  }
});

/**
 * @route   PUT /api/students/:id
 * @desc    Actualizar un perfil de estudiante existente
 * @access  Private
 */
router.put('/:id', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = {
      ...req.body,
      updatedBy: req.user?.uid,
      updatedAt: new Date(),
    };
    const updatedStudent = await StudentService.update(id as string, updatedData);
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Estudiante no encontrado para actualizar' });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el estudiante', error });
  }
});

/**
 * @route   DELETE /api/students/:id
 * @desc    Eliminar un perfil de estudiante
 * @access  Private
 */
router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentService.remove(id as string);
    if (!result) {
      return res.status(404).json({ message: 'Estudiante no encontrado para eliminar' });
    }
    res.status(200).json({ message: 'Estudiante eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el estudiante', error });
  }
});

export default router;