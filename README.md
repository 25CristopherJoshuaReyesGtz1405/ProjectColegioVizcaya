# ProjectColegioVizcaya
Project Of College Vizcaya 2025
# Sistema de Gestión Escolar - Colegio Vizcaya

Este repositorio contiene el código fuente para el sistema de gestión del Colegio Vizcaya. El objetivo de este proyecto es modernizar y centralizar la administración de alumnos, calificaciones y comunicación.

---

## ✨ Características Principales

* **Autenticación de Usuarios:** Sistema de inicio de sesión seguro para administradores, profesores y alumnos.
* **Gestión de Alumnos:** Permite registrar, modificar y eliminar perfiles de estudiantes.
* **Control de Calificaciones:** Módulo para que los profesores asignen y actualicen calificaciones.
* **Dashboard Administrativo:** Panel de control para visualizar estadísticas y gestionar el sistema.
* **(Añade aquí otras características que tenga tu proyecto)**

---

## 🚀 Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías:

* **Frontend:** [Angular](https://angular.io/)
* **Backend:** [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/)
* **Base de Datos:** [Firebase Firestore](https://firebase.google.com/docs/firestore) y [PostgreSQL](https://www.postgresql.org/)
* **Estilos:** [Bootstrap](https://getbootstrap.com/)

---

## 🛠️ Instalación y Puesta en Marcha

Sigue estos pasos para levantar el proyecto en un entorno de desarrollo local.

### **Requisitos Previos**

Asegúrate de tener instalado lo siguiente:
* [Node.js](https://nodejs.org/) (versión 18 o superior)
* [Angular CLI](https://angular.io/cli)
* [Git](https://git-scm.com/)

### **Pasos para la Instalación**

1.  **Clona el repositorio:**
    ```bash
    git clone [URL_DE_TU_REPOSITORIO_EN_GITHUB]
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd proyecto-colegio-vizcaya
    ```

3.  **Instala las dependencias del Backend:**
    ```bash
    cd backend  # O la carpeta donde tengas tu servidor
    npm install
    ```

4.  **Instala las dependencias del Frontend:**
    ```bash
    cd ../frontend # O la carpeta donde tengas tu proyecto de Angular
    npm install
    ```

5.  **Configura las variables de entorno:**
    * En la carpeta del backend, renombra el archivo `.env.example` a `.env`.
    * Abre el archivo `.env` y rellena las credenciales necesarias (claves de Firebase, conexión a PostgreSQL, etc.).

6.  **Inicia el servidor del Backend:**
    ```bash
    # Desde la carpeta del backend
    npm run dev
    ```

7.  **Inicia la aplicación del Frontend:**
    ```bash
    # Desde la carpeta del frontend, en otra terminal
    ng serve -o
    ```
    La aplicación se abrirá automáticamente en `http://localhost:4200`.

---

## 👨‍💻 Autores y Equipo

Este proyecto fue desarrollado por:

* **Cangas Castro Jorge Alberto** - *Desarrollador Backend*
* **Chairez Duarte Luis Ernesto** - *Desarrollador Frontend*
* **Hernández Ávila Luis Iván** - *Desarrollador Frontend*
* **Reyes Gutiérrez Cristopher Joshua** - *Desarrollador Backend*
* **Blanco Gallegos Victor Alejandro** - *Gestor Del Proyecto*
* **García Rodriguez Christian Gabriel** - *Gestor Del Proyecto*
* **Pérez Roldán Víctor Uriel** - *Gestor Del Proyecto*

---
