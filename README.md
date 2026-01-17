# 💬 ChatFlow – Real-Time Chat Application

**ChatFlow** is a modern real-time chat application built using the **MERN stack** and **Socket.IO**. It is designed for fast, secure, and seamless communication, supporting real-time messaging, authentication, and a scalable architecture suitable for production use.

---

## 🚀 Features

| Feature | Description |
| :--- | :--- |
| **User Authentication** | Secure JWT-based login & signup |
| **Real-time Messaging** | Instant messaging using Socket.IO |
| **One-to-One Chat** | Private user-to-user conversations |
| **Password Security** | Password hashing with bcrypt |
| **Media Uploads** | Image sharing via Cloudinary |
| **Session Handling** | HTTP-only cookies for auth |
| **State Management** | Global state using Zustand |
| **Responsive UI** | Mobile-friendly design with DaisyUI |
| **Notifications** | Toast notifications for user actions |

---

---

## 📸 Screenshots

### 🔐 Login Page
![Login Page](https://raw.githubusercontent.com/codewithmanohar/ChatFlow/main/Client/public/login.webp)

---

### 📝 Signup Page
![Signup Page](https://raw.githubusercontent.com/codewithmanohar/ChatFlow/main/Client/public/signup.webp)

---

### 💬 Chat Interface
![Chat Interface](https://raw.githubusercontent.com/codewithmanohar/ChatFlow/main/Client/public/chats.webp)

---

### 👤 User Profile
![User Profile](https://raw.githubusercontent.com/codewithmanohar/ChatFlow/main/Client/public/profile.webp)

---

### 🎨 Theme Customization
![Theme Customization](https://raw.githubusercontent.com/codewithmanohar/ChatFlow/main/Client/public/theme.webp)

---


---

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
| :--- | :--- |
| **Node.js** | Runtime environment |
| **Express.js** | Backend framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **Socket.IO** | Real-time communication |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |
| **Cloudinary** | Media storage |
| **dotenv** | Environment variables |
| **CORS** | Cross-origin handling |

### Frontend
| Technology | Purpose |
| :--- | :--- |
| **React** | UI library |
| **Vite** | Fast build tool |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | UI components |
| **Zustand** | State management |
| **Axios** | API requests |
| **Socket.IO Client** | Real-time client |
| **React Router DOM** | Routing |
| **React Hot Toast** | Notifications |
| **Lucide React** | Icons |

---

## 📁 Project Structure

```text
├── client/          # Frontend React application
├── server/          # Backend Express + Socket.IO server
├── models/          # MongoDB schemas
├── controllers/     # Business logic
├── routes/          # API routes
├── socket/          # Socket.IO handlers
└── config/          # DB & app configuration
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` directory with the following variables:

| Variable | Description |
| :--- | :--- |
| `PORT` | Backend server port (e.g., 4000) |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT secret key |
| `CLIENT_URL` | Frontend URL (e.g., http://localhost:5173) |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

---

## ▶️ Running the Project Locally

Follow these steps to set up the project locally.

### 1️⃣ Clone the repository
```bash
git clone [https://github.com/your-username/chatflow.git](https://github.com/your-username/chatflow.git)
cd chatflow
```

### 2️⃣ Start Backend Server
```bash
cd server
npm install
npm run dev
```
> **Server will run on:** `http://localhost:4000`

### 3️⃣ Start Frontend Client
Open a new terminal:
```bash
cd client
npm install
npm run dev
```
> **Client will run on:** `http://localhost:5173`

---



---

## 🔐 Authentication Flow

1. **User registers / logs in.**
2. **JWT is generated** on the server.
3. **Token is stored** in HTTP-only cookies.
4. **Socket.IO connection** is established after authentication.
5. **Real-time messaging** begins.

---

## 🧪 Scripts

### Backend (`/server`)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Start backend in development mode (nodemon) |
| `npm start` | Start backend in production mode |

### Frontend (`/client`)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Start frontend development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |



## 🧠 Future Improvements

- [ ]  Group chats
- [ ]  Message reactions
- [ ]  Typing indicators
- [ ]  Read receipts
- [ ]  Online/offline status
- [ ]  Push notifications

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repo.
2. **Create** your feature branch (`git checkout -b feature/your-feature`).
3. **Commit** your changes (`git commit -m 'Add some feature'`).
4. **Push** to the branch (`git push origin feature/your-feature`).
5. **Open** a Pull Request.

---

## 👨‍💻 Author

**Manohar Kumar**
*B.Tech CSE | Full Stack Developer* 


GitHub: [@codewithmanohar](https://github.com/codewithmanohar)
