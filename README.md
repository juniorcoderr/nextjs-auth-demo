### 🔐 Next.js Authentication Practice (Pages Router)

This project is a practical deep-dive into building and understanding **authentication workflows using the Pages Router in Next.js**. It is designed to help developers learn how authentication works under the hood in Next.js applications, particularly with custom logic, session handling, and secure API route interactions.

- 🔐 User login and signup APIs
- 📄 Protected pages and session handling
- 🌐 API route-based authentication
- 🧩 Modular component structure for auth-related UI
- ⚙️ Use of environment variables for secure configuration

#### 🚀 Key Features:

- **Custom Authentication System**  
  Implements a username/email and password-based login system using secure hashing techniques and custom backend API routes.

- **Session Management**  
  Uses cookies or token-based mechanisms to manage user sessions, with logic to protect certain routes and pages from unauthorized access.

- **Protected Routes**  
  Demonstrates how to create pages that are only accessible to authenticated users and how to redirect unauthenticated users to the login page.

- **Backend API Integration**  
  Includes backend routes under `pages/api` for login, registration, and user management, allowing seamless communication between frontend and backend.

- **Component-based Structure**  
  Organized modularly with components for authentication forms, error displays, and user-related UI — encouraging clean code and reusability.

- **Environment Configuration**  
  Shows how to use `.env.local` for storing sensitive keys, and how to access them securely inside both frontend and backend code.

- **Folder Structure Practice**  
  Structured to follow best practices with separate directories for `pages`, `components`, `lib`, and `api` logic to mimic real-world applications.

- **Basic User Profile Handling**  
  Includes a simple user dashboard/profile section after login, demonstrating how to fetch and display protected user data.

---

#### 📁 Folder Highlights:

- `pages/api/auth` – Backend logic for login/signup functionality  
- `components/auth` – Form components for login and signup  
- `lib` – Utility functions like password hashing, token generation, etc.  
- `pages` – Page-level components with both public and protected pages

---

#### 🧠 Learning Outcomes:

By working through this project, you’ll understand how to:

- Set up authentication from scratch in a Next.js app using the Pages Router
- Secure API routes and manage user sessions
- Create and protect dynamic routes
- Use modular React components in an auth-driven flow
- Apply environment configuration for sensitive data handling

---

Whether you're a beginner getting into full-stack development or an intermediate developer strengthening your Next.js skills, this repository serves as a helpful reference and practice playground.
