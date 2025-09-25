import type { ServiceAccount } from 'firebase-admin';
import admin from 'firebase-admin';

import serviceAccount from './ColegioVizcaya.json' with { type: 'json' };

admin.initializeApp({

  // Como ahora TypeScript entiende que es un JSON, sabe que es compatible.
  credential: admin.credential.cert(serviceAccount as ServiceAccount)

});

// --- AÑADE ESTO ---
const db = admin.firestore(); // Pide acceso a la base de datos 
export { admin, db };       // Exporta ambos para poder usarlos