# 🎫 Ticket Booking System (Node.js + Express + MongoDB)

A full-stack beginner-friendly web application that allows users to register, login, and book tickets.
This project uses MongoDB for storing user and booking data permanently.

🚀 Features
📝 User Registration
🔐 User Login
🎫 Ticket Booking
🗄 Data stored in MongoDB (permanent storage)
🎨 Simple and clean UI

## 🛠️ Technologies Used
Node.js
Express.js
MongoDB
Mongoose
HTML5
CSS3

## 📁 Project Structure

ticket-app/
│
├── server.js
├── models/
│   ├── User.js
│   └── Ticket.js
│
└── public/
    ├── register.html
    ├── login.html
    ├── booking.html
    └── style.css
    
# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

Bash
git clone https://github.com/Mano-31/ticket-booking.git

## 2️⃣ Navigate to project

Bash
cd ticket-booking

## 3️⃣ Install dependencies

Bash
npm install

## 4️⃣ Install MongoDB packages

Bash
npm install mongoose

## 5️⃣ Start MongoDB

Make sure MongoDB is running

"mongodb://localhost:27017/"

## 6️⃣ Run the server

Bash
node server.js

## 7️⃣ Open in browser

http://localhost:5000/register.html

# 🧠 How It Works

User registers → data stored in MongoDB
User logs in → credentials verified from database
User books tickets → stored in database
Data is saved permanently

# 📊 Database Collections

👤 Users Collection

{
  username: String,
  password: String
}

# 🎫 Tickets Collection

{
  name: String,
  from: String,
  to: String,
  date: String,
  seat: String,
  ticketsCount: Number
}

# 📸 Application Pages

📝 Register Page
🔐 Login Page
🎫 Ticket Booking Page
✅ Booking Confirmation Page

# ⚠️ Limitations

❌ No password encryption (plain text)
❌ No session authentication
❌ Basic UI design

# 🚀 Future Enhancements

🔐 Password hashing using bcrypt
👤 Session-based authentication
🎫 Admin dashboard
📊 Booking history
🎨 Advanced UI

# 👨‍💻 Author
Manogaran P

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!
