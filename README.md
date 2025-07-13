# 📝 Real-Time Collaborative Document Editor

A real-time collaborative text editor built with **React**, **Node.js**, **Socket.io**, and **MongoDB** — similar to Google Docs. This project allows multiple users to edit the same document simultaneously, with changes synced live and saved automatically.

---

## 🚀 Features

- 🧠 Rich Text Editor (via Quill.js)
- ⚡ Real-time collaboration (via Socket.io)
- 💾 Auto-save to MongoDB every 2 seconds
- ✏️ Editable document title
- ✅ Save status indicator ("Saving..." / "Saved")
- 🎯 Clean and modern UI

---

## 📁 Project Structure

collab-doc/
├── backend/ # Node.js + Express + MongoDB
│ ├── models/ # Mongoose schema
│ ├── .env # Environment variables
│ └── server.js # Main server file
└── client/ # React frontend
├── src/
│ ├── components/TextEditor.js
│ ├── App.js
│ ├── index.js
│ └── index.css



---

## 🔧 Tech Stack

| Frontend       | Backend          | Database |
|----------------|------------------|----------|
| React          | Node.js + Express | MongoDB |
| Quill Editor   | Socket.io         | Mongoose |
| React Router   | CORS, dotenv      |          |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/collab-doc.git
cd collab-doc
```

## 2. Start the Backend

cd backend
npm install
# Add .env file
echo MONGO_URI=mongodb://localhost:27017/collab-editor > .env
# Start MongoDB if local
# Then:
node server.js

##  3. Start the Frontend

cd ../client
npm install
npm start

## 📚 How It Works
When a user visits the site, they are routed to a new document ID.

The document is loaded (or created) from MongoDB.

All edits are broadcasted in real-time to other users in the same document.

Changes are saved automatically every 2 seconds.

Document title is stored and updated live.



 
