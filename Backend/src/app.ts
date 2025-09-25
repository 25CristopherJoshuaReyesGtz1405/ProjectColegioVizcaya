// src/app.ts
import express from 'express';
import cors from 'cors';
import studentRoutes from './RoutesActivas/student.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/students', studentRoutes);

export default app;