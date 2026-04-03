#  Task Manager App (Full-Stack)

A clean and modern full-stack task management application built using **Next.js, Node.js, Express, and MongoDB**.

This project demonstrates real-world full-stack development skills including REST API design, database integration, and responsive UI design.

---

##  Live Demo

* Frontend (Vercel): [Live Demo](https://task-manager-frontend-app-one.vercel.app/)
* Backend API (Render): [Backend](https://task-manager-backend-zime.onrender.com)

---

##  Features

- ✅ Create tasks
- ✅ View all tasks
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ Filter tasks (completed / pending)
- ✅ Responsive and clean UI

---

##  Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

##  Project Structure

### Frontend

src/

* app/
* components/

### Backend

src/

* controllers/
* models/
* routes/

---

##  API Endpoints

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| GET    | /api/tasks            | Get all tasks     |
| POST   | /api/tasks            | Create a task     |
| PUT    | /api/tasks/:id        | Update task       |
| DELETE | /api/tasks/:id        | Delete task       |
| PATCH  | /api/tasks/:id/toggle | Toggle completion |

---

##  Installation & Setup

### 1. Clone the repo

`git clone https://github.com/eddy-swe/task-manager-frontend.git`

---

### 2. Backend setup

- `git clone https://github.com/eddy-swe/task-manager-api.git`
- `npm install`


Create a `.env` file:
MONGO_URI=your_mongodb_connection_string

Run server:
- `npm run dev`

---

### 3. Frontend setup

- `cd task-manager-frontend`
- `npm install`
- `npm run dev`

---

##  What I Learned

* Building RESTful APIs with Express
* MongoDB schema design using Mongoose
* Connecting frontend and backend systems
* State management in React
* Handling real-world issues like CORS and hydration errors

---

##  Future Improvements

* User authentication (JWT)
* Task categories/tags
* Drag-and-drop UI
* Due date reminders
* Dark mode

---

##  Author

Built by Me

---

##  If you like this project

Give it a star and feel free to fork it!
