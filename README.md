# PlanTogether 📅

**PlanTogether** is a web application that combines public event discovery with collaborative private plan organization. It allows users to discover activities in one place, create plans with friends, invite participants, and coordinate essential details.

This project is developed as part of the course **PV247 - TypeScript Full-Stack Web Development**.

---

## 🚀 Overview & Goals

The platform addresses the issue of fragmented event planning across scattered chat messages by providing a centralized space to see what is happening, who is joining, and when/where to meet.

### Target Users & Roles
* **Visitor:** Can browse public events and view their details.
* **Registered User:** Can create plans, join or leave eligible plans, and manage their own plans.
* **Plan Owner:** Can edit or cancel their own plan.

---

## ✨ MVP Features (In Scope)

- 🔐 **Authentication:** Account registration, login, and logout using an established authentication solution.
- 📍 **Public Event Catalogue:** Event list and detail page (stored in our database with seeded sample events initially).
- 📝 **Plan Management:** Create plans with title, description, date/time, location, and visibility (public or private). Owners can edit or delete their plans.
- 👥 **Participation:** Join or leave public plans with real-time updates to the participant list.
- 🔗 **Private Plans:** Access via unique shareable link.
- 📱 **Design & Validation:** Responsive layout, empty states, input validation, and authorization handling.

> **Out of Scope for MVP:** External event APIs, ticket sales and payments, real-time chat, notifications, maps/geolocation, calendar synchronization, and recommendation algorithms.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) with TypeScript and React (App Router).
- **Styling:** Tailwind CSS.
- **Database & ORM:** Relational database managed with Prisma ORM.
- **Source Control:** Git & GitHub.

---

## 🗄️ Initial Data Model

The main database schema consists of the following entities:

* **User:** `id`, `name`, `email`, authentication fields.
* **Event:** `id`, `title`, `description`, `startsAt`, `location`, optional `category`.
* **Plan:** `id`, `title`, `description`, `startsAt`, `location`, `visibility`, `ownerId`, optional `eventId`.
* **PlanParticipant:** `userId`, `planId`, `joinedAt` (unique constraint on `userId` + `planId`).

---

## 🗺️ Application Routes

- `/` – Landing page and main navigation.
- `/events` & `/events/[id]` – Browse and view public event details.
- `/plans` & `/plans/[id]` – Browse and view plan details.
- `/plans/new` – Form to create a new plan.
- `/my-plans` – Personal dashboard for owned and joined plans.
- `/login` & `/register` – Authentication routes.

---

## 🗓️ Milestones

- [x] **November 6:** Agree on scope and submit specification for review.
- [ ] **November 17-18 (Progress Review):** GitHub repository initialized, Next.js app running, initial data model configured, and basic navigation with at least one working user flow.
- [ ] **December 8-9 (Final Presentation):** Working MVP, core flows tested, README updated with setup instructions, screenshots, and known limitations.

---
