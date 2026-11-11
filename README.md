# PlanTogether 📅

**PlanTogether** es una aplicación web que combina el descubrimiento de actividades y eventos públicos con la organización colaborativa de planes privados[cite: 1]. Permite a los usuarios explorar opciones en un solo lugar, crear planes con amigos, invitar participantes y coordinar los detalles esenciales[cite: 1].

Este proyecto se desarrolla como el Trabajo Práctico de la asignatura **PV247 - TypeScript Full-Stack Web Development**[cite: 1].

---

## 🚀 Visión General y Objetivos

La plataforma resuelve el problema de la organización fragmentada a través de chats dispersos, ofreciendo un lugar centralizado para visualizar qué ocurre, quién se une y dónde/cuándo encontrarse[cite: 1].

### Usuarios y Roles
* **Visitante:** Puede explorar eventos públicos y consultar sus detalles[cite: 1].
* **Usuario registrado:** Puede crear planes, unirse o salir de planes elegibles y gestionar sus propios planes[cite: 1].
* **Propietario del plan (Plan Owner):** Puede editar o cancelar su propio plan[cite: 1].

---

## ✨ Alcance del MVP (Funcionalidades en Scope)

- 🔐 **Autenticación:** Registro de cuenta, inicio y cierre de sesión mediante una solución de autenticación integrada[cite: 1].
- 📍 **Catálogo de Eventos Públicos:** Lista de eventos y página de detalle (almacenados en base de datos con datos de prueba iniciales)[cite: 1].
- 📝 **Gestión de Planes:** Creación de planes con título, descripción, fecha/hora, ubicación y visibilidad (pública o privada)[cite: 1]. Los creadores pueden editar o eliminar sus planes[cite: 1].
- 👥 **Participación:** Unirse o salir de planes públicos con visualización dinámica de la lista de asistentes[cite: 1].
- 🔗 **Planes Privados:** Acceso mediante enlace compartible único[cite: 1].
- 📱 **Diseño y Validación:** Interfaz responsiva, gestión de estados vacíos, validación de datos y autorización[cite: 1].

> **Fuera del alcance del MVP:** APIs externas de eventos, venta de entradas/pagos, chat en tiempo real, notificaciones, mapas/geolocalización, sincronización con calendarios y algoritmos de recomendación[cite: 1, 2].

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) con TypeScript y React (App Router)[cite: 2].
- **Estilos:** Tailwind CSS[cite: 2].
- **Base de Datos & ORM:** Base de datos relacional integrada con Prisma ORM[cite: 2].
- **Control de Versiones:** Git & GitHub[cite: 2].

---

## 🗄️ Modelo de Datos Inicial

El esquema principal de la base de datos se compone de las siguientes entidades[cite: 2]:

* **User:** `id`, `name`, `email`, campos de autenticación[cite: 2].
* **Event:** `id`, `title`, `description`, `startsAt`, `location`, `category` (opcional)[cite: 2].
* **Plan:** `id`, `title`, `description`, `startsAt`, `location`, `visibility`, `ownerId`, `eventId` (opcional)[cite: 2].
* **PlanParticipant:** `userId`, `planId`, `joinedAt` (clave única combinada `userId` + `planId`)[cite: 2].

---

## 🗺️ Estructura de Rutas de la Aplicación

- `/` – Página de inicio y navegación principal[cite: 2].
- `/events` y `/events/[id]` – Exploración y detalle de eventos públicos[cite: 2].
- `/plans` y `/plans/[id]` – Listado y detalle de planes[cite: 2].
- `/plans/new` – Formulario para crear un nuevo plan[cite: 2].
- `/my-plans` – Panel personal con planes creados y unidos[cite: 2].
- `/login` y `/register` – Rutas de autenticación[cite: 2].

---

## 🗓️ Hitos del Proyecto (Milestones)

- [x] **6 de Noviembre:** Acuerdo del alcance de la especificación técnica para revisión[cite: 2].
- [ ] **17-18 de Noviembre (Progress Review):** Repositorio GitHub inicializado, estructura base de Next.js ejecutándose, modelo de datos inicial configurado y al menos un flujo funcional listo[cite: 2].
- [ ] **8-9 de Diciembre (Presentación Final):** MVP completo funcionando, flujos probados, documentación y README actualizados con capturas y limitaciones conocidas[cite: 2].

---

## ⚙️ Instalación y Configuración Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/carmenpaaredes/PlanTogether.git](https://github.com/carmenpaaredes/PlanTogether.git)
   cd PlanTogether
