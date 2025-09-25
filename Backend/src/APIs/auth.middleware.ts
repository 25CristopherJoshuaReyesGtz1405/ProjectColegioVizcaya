
import type { Request, Response, NextFunction } from 'express';
// Importamos la conexión a Firebase que ya configuraste
import { admin } from '../ConfiguracionesActivas/ADBB_BaseDatos_Secundaria.js';

// 1. Exportamos una interfaz para poder añadir 'user' a las peticiones
export interface AuthenticatedRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

// 2. Exportamos el middleware (el "guardia de seguridad")
const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  // Busca el token en los encabezados de la petición
  const headerToken = req.headers.authorization;

  // Si no hay token o no empieza con "Bearer ", niega el acceso
  if (!headerToken || !headerToken.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  // Extrae el token (quitando la palabra "Bearer ")
  const token = headerToken.split(' ')[1];

  try {
    // Le pide a Firebase que verifique si el token es válido
    const decodedToken = await admin.auth().verifyIdToken(token as string);
    // Si es válido, guarda los datos del usuario en la petición
    req.user = decodedToken;
    // Permite que la petición continúe hacia la ruta final
    next();
  } catch (error) {
    // Si Firebase dice que el token es inválido, niega el acceso
    return res.status(403).send({ message: 'Token inválido o expirado.' });
  }
};

export default authMiddleware;