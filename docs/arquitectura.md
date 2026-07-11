# Arquitectura del proyecto

## Visión general

El proyecto sigue una arquitectura de tres capas:

- **Cliente (frontend):** React + Vite + Tailwind CSS. Lo que ve y usa el usuario.
- **Servidor (backend):** Node.js + Express. Recibe peticiones, valida datos y accede a la base de datos.
- **Base de datos:** SQLite. Almacenamiento persistente en un archivo.

El cliente nunca accede directamente a la base de datos: siempre pasa por el backend.

## Flujo de una petición

1. El frontend envía una petición HTTP (por ejemplo, POST /api/contacto) con datos en JSON.
2. El backend recibe la petición, valida los datos y ejecuta una consulta SQL.
3. SQLite guarda o devuelve la información.
4. El backend responde en JSON.
5. El frontend actualiza la interfaz según la respuesta.

## API REST

| Método | Acción            |
|--------|-------------------|
| GET    | Leer datos        |
| POST   | Crear datos       |
| PUT    | Actualizar total  |
| PATCH  | Actualizar parcial|
| DELETE | Eliminar datos    |

## Despliegue

- Git lleva el control de versiones local.
- GitHub aloja el repositorio remoto.
- AWS ejecuta el proyecto en producción.