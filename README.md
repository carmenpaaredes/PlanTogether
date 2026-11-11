# PlanTogether 📅

**PlanTogether** es una aplicación web que combina el descubrimiento de actividades y eventos públicos con la organización colaborativa de planes privados. Permite a los usuarios explorar opciones en un solo lugar, crear planes con amigos, invitar participantes y coordinar los detalles esenciales.

Este proyecto se desarrolla como el Trabajo Práctico de la asignatura **PV247 - TypeScript Full-Stack Web Development**.

---

## 🚀 Visión General y Objetivos

La plataforma resuelve el problema de la organización fragmentada a través de chats dispersos, ofreciendo un lugar centralizado para visualizar qué ocurre, quién se une y dónde/cuándo encontrarse.

### Usuarios y Roles
* **Visitante:** Puede explorar eventos públicos y consultar sus detalles.
* **Usuario registrado:** Puede crear planes, unirse o salir de planes elegibles y gestionar sus propios planes.
* **Propietario del plan (Plan Owner):** Puede editar o cancelar su propio plan.

---

## ✨ Alcance del MVP (Funcionalidades en Scope)

- 🔐 **Autenticación:** Registro de cuenta, inicio y cierre de sesión mediante una solución de autenticación integrada.
- 📍 **Catálogo de Eventos Públicos:** Lista de eventos y página de detalle (almacenados en base de datos con datos de prueba iniciales).
- 📝 **Gestión de Planes:** Creación de planes con título, descripción, fecha/hora, ubicación y visibilidad (pública o privada). Los creadores pueden editar o eliminar sus planes.
- 👥 **Participación:** Unirse o salir de planes públicos con visualización dinámica de la lista de asistentes.
- 🔗 **Planes Privados:** Acceso mediante enlace compartible único.
- 📱 **Diseño y Validación:** Interfaz responsiva, gestión de estados vacíos, validación de datos y autorización.

> **Fuera del alcance del MVP:** APIs externas de eventos, venta de entradas/pagos, chat en tiempo real, notificaciones, mapas/geolocalización, sincronización con calendarios y algoritmos de recomendación.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) con TypeScript y React (App Router).
- **Estilos:** Tailwind CSS.
- **Base de Datos & ORM:** Base de datos relacional integrada con Prisma ORM.
- **Control de Versiones:** Git & GitHub.

---

## 🗄️ Modelo de Datos Inicial

El esquema principal de la base de datos se compone de las siguientes entidades:

* **User:** `id`, `name`, `email`, campos de autenticación.
* **Event:** `id`, `title`, `description`, `startsAt`, `location`, `category` (opcional).
* **Plan:** `id`, `title`, `description`, `startsAt`, `location`, `visibility`, `ownerId`, `eventId` (opcional).
* **PlanParticipant:** `userId`, `planId`, `joinedAt` (clave única combinada `userId` + `planId`).

---

## 🗺️ Estructura de Rutas de la Aplicación

- `/` – Página de inicio y navegación principal.
- `/events` y `/events/[id]` – Exploración y detalle de eventos públicos.
- `/plans` y `/plans/[id]` – Listado y detalle de planes.
- `/plans/new` – Formulario para crear un nuevo plan.
- `/my-plans` – Panel personal con planes creados y unidos.
- `/login` y `/register` – Rutas de autenticación.

---

## 🗓️ Hitos del Proyecto (Milestones)

- [x] **6 de Noviembre:** Acuerdo del alcance de la especificación técnica para revisión.
- [ ] **17-18 de Noviembre (Progress Review):** Repositorio GitHub inicializado, estructura base de Next.js ejecutándose, modelo de datos inicial configurado y al menos un flujo funcional listo.
- [ ] **8-9 de Diciembre (Presentación Final):** MVP completo funcionando, flujos probados, documentación y README actualizados con capturas y limitaciones conocidas.

---
