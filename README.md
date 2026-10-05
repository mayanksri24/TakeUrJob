# 💼 TakeUrJob — MERN Stack Job Portal

**TakeUrJob** is a full-stack job portal built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** that connects **job seekers with employers** through a modern and intuitive recruitment platform.

Job seekers can discover, search, filter, save, and apply for jobs, while employers can create and manage job postings, review applicants, manage application statuses, and maintain their company profiles.

The project focuses on **real-world full-stack development, role-based authentication, REST API integration, file handling, and responsive user experience.**

---

## 🚀 Live Project

🌐 **Frontend:** Deployed on Vercel  
⚙️ **Backend:** Deployed on Render

> **Note:** The Render backend may take some time to wake up after a period of inactivity on the free tier. Refreshing the application after the backend starts may be required.

---

# 🧠 Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React.js, Tailwind CSS, Axios, React Router DOM, Framer Motion, Lucide React, React Hot Toast |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT, bcryptjs |
| **File Handling** | Multer |
| **Configuration** | dotenv |
| **API Communication** | Axios, REST APIs |
| **Deployment** | Vercel, Render |

---

# ✨ Key Features

## 👨‍💼 Employer Features

### 📊 Employer Dashboard
- View total jobs and hiring-related statistics.
- Monitor recent applicants.
- Track hiring activity.
- Manage active and closed job postings.

### 📝 Job Posting
Employers can create job listings with information such as:

- Job Title
- Location
- Category
- Job Type
- Salary
- Job Description
- Requirements

Supported job types include:

- Full-time
- Part-time
- Internship

### 🗂️ Job Management
Employers can:

- View their posted jobs.
- Edit job information.
- Toggle job visibility between active and closed.
- View the number of applicants.
- Manage individual job listings.
- Delete job postings where supported.

### 👥 Applicant Management
Employers can:

- View applicants for a particular job.
- View applicant information.
- Access submitted resumes.
- Update application status.
- Manage applicants through different stages.

Supported application statuses include:

- In Review
- Accepted
- Rejected

### 🏢 Employer Profile
Employers can manage:

- Name
- Profile picture
- Company name
- Company description
- Company logo

---

# 👨‍💻 Job Seeker Features

## 🔎 Explore Jobs

Job seekers can browse available opportunities without requiring an account.

Jobs can be searched and filtered based on:

- Job title
- Location / city
- Job category
- Job type
- Salary range

---

## 📋 Job Details

Each job provides detailed information including:

- Job title
- Company information
- Location
- Job type
- Salary
- Job description
- Requirements

Users can view complete job details before applying.

---

## 📝 Apply for Jobs

Authenticated job seekers can apply for available positions.

The application workflow allows employers to review submitted applications and update their status.

---

## 💾 Save Jobs

Job seekers can bookmark interesting opportunities and access them later through their saved jobs section.

Features include:

- Save jobs
- Unsave jobs
- View saved jobs

---

## 👤 Profile Management

Job seekers can manage their profiles including:

- Name
- Profile picture
- Resume

Users can upload or update their resume and profile information.

---

# 🔐 Authentication & Authorization

TakeUrJob uses a secure authentication architecture based on:

### JWT Authentication
JSON Web Tokens are used to authenticate users and protect private API routes.

### Password Hashing
Passwords are securely hashed using **bcryptjs** before being stored in the database.

### Role-Based Access

The application supports two primary roles:

```text
Job Seeker
Employer
```

Each role receives a different experience and access level.

### Job Seeker

```text
Find Jobs
    ↓
View Job Details
    ↓
Save / Apply
    ↓
Track Applications
    ↓
Manage Profile
```

### Employer

```text
Employer Dashboard
    ↓
Post Jobs
    ↓
Manage Jobs
    ↓
View Applicants
    ↓
Update Application Status
    ↓
Manage Company Profile
```

---

# 🏗️ Application Architecture

The application follows a modular full-stack architecture.

```text
                    TakeUrJob
                        │
              ┌─────────┴─────────┐
              │                   │
          React.js            Express.js
          Frontend              Backend
              │                   │
            Axios              REST APIs
              │                   │
              │             Controllers
              │                   │
              │                Routes
              │                   │
              │              Middleware
              │                   │
              │                Mongoose
              │                   │
              └─────────────┬─────┘
                            │
                         MongoDB
```

---

# 📁 Project Structure

```text
job-portal-mern-stack/
│
├── backend/
│   ├── config/
│   │   └── Database configuration
│   │
│   ├── controllers/
│   │   └── Application business logic
│   │
│   ├── middleware/
│   │   └── Authentication and request middleware
│   │
│   ├── models/
│   │   └── MongoDB / Mongoose models
│   │
│   ├── routes/
│   │   └── REST API routes
│   │
│   ├── uploads/
│   │   └── Uploaded files and images
│   │
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# 🔄 Core Application Flow

## User Registration

```text
Signup
  ↓
Role Selection
  ↓
Frontend Validation
  ↓
REST API
  ↓
Express Controller
  ↓
Password Hashing
  ↓
MongoDB
  ↓
JWT Token
  ↓
Authenticated User
```

---

## User Login

```text
Login Form
    ↓
Axios
    ↓
POST /api/auth/login
    ↓
Authentication Controller
    ↓
Verify Password
    ↓
Generate JWT
    ↓
Frontend
    ↓
Authenticated Session
```

---

## Job Creation

```text
Employer
    ↓
Post Job Form
    ↓
Axios
    ↓
POST /api/jobs
    ↓
Authentication Middleware
    ↓
Job Controller
    ↓
Mongoose
    ↓
MongoDB
```

---

## Job Application

```text
Job Seeker
    ↓
Job Details
    ↓
Apply
    ↓
Application API
    ↓
Application Controller
    ↓
MongoDB
    ↓
Employer Dashboard
    ↓
Review Application
```

---

# 🛠️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/mayanksri24/TakeUrJob.git

cd job-portal-mern-stack
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8000
```

Start the backend:

```bash
npm start
```

Backend will run on:

```text
http://localhost:8000
```

---

## 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# 🔗 API Modules

The backend is organized around different functional API modules.

```text
/api/auth
```

Handles:

- Registration
- Login
- Authentication-related operations
- Profile-related authentication operations

```text
/api/user
```

Handles user profile functionality.

```text
/api/jobs
```

Handles:

- Job creation
- Job retrieval
- Job updates
- Job deletion
- Employer job management

```text
/api/applications
```

Handles:

- Job applications
- Applicant management
- Application status updates

```text
/api/save-jobs
```

Handles:

- Saving jobs
- Removing saved jobs
- Retrieving saved jobs

```text
/api/analytics
```

Handles employer dashboard analytics and statistics.

---

# 🎨 Frontend Experience

The frontend is built using **React.js** with a component-based architecture.

The UI uses:

- Tailwind CSS for responsive styling
- Framer Motion for animations
- Lucide React for icons
- React Hot Toast for notifications
- Axios for backend communication
- React Router DOM for navigation

The application provides separate user experiences for:

```text
                    TakeUrJob
                       │
             ┌─────────┴─────────┐
             │                   │
        Job Seeker            Employer
             │                   │
        Explore Jobs        Dashboard
        Search Jobs         Post Jobs
        Save Jobs           Manage Jobs
        Apply Jobs          Applicants
        Profile             Applications
        Resume              Company Profile
```

---

# 📱 Responsive Design

TakeUrJob is designed to work across different screen sizes:

- Desktop
- Laptop
- Tablet
- Mobile

The frontend uses responsive layouts and reusable React components to provide a consistent experience across devices.

---

# ☁️ Deployment

The application architecture supports separate frontend and backend deployments.

```text
Frontend
React + Vite
     ↓
Vercel

Backend
Node + Express
     ↓
Render

Database
MongoDB
```

> Render's free-tier backend may go to sleep after periods of inactivity, which can cause a short delay when the application is accessed after inactivity.

---

# 🔮 Future Enhancements

The current application can be extended with features such as:

- 📈 Advanced employer analytics
- 🤖 AI-powered job recommendations
- 💬 Real-time communication between employers and applicants
- 📩 Email notifications for applications
- 🔔 Job alerts
- 🧠 Intelligent job matching
- 🏢 Dedicated company pages

These features can be added while maintaining the existing modular architecture.

---

# 💡 Why TakeUrJob?

TakeUrJob demonstrates practical full-stack development by combining:

- ⚛️ React-based frontend architecture
- 🚀 Node.js and Express REST APIs
- 🍃 MongoDB database integration
- 🔐 JWT-based authentication
- 🔒 Password hashing with bcrypt
- 📁 File upload handling with Multer
- 👥 Role-based user workflows
- 🔄 Frontend-backend API integration
- 📱 Responsive UI development
- ✨ Animated and interactive user experience

The project is designed to demonstrate **end-to-end MERN Stack development**, from building responsive interfaces to implementing backend APIs and database operations.

---

# 🔗 Repository

### GitHub

👉 **https://github.com/mayanksri24/TakeUrJob.git**

---

# 👨‍💻 Project

**TakeUrJob — MERN Stack Job Portal**

Built with:

```text
React.js
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs
Tailwind CSS
Axios
Framer Motion
Multer
```

⭐ If you find the project useful, consider giving the repository a star!
