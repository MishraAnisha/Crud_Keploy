# Crud_Keploy
Crud operations 
---README---
Here’s your **complete README in document format**, ready to be copy-pasted into a `.md` file or uploaded as a `README.docx` if needed.

---



## 📌 **Project Title:**

**User Management API – CRUD using Node.js, Express, MongoDB**

---

## 📖 **Project Description:**

This project is a simple and functional **RESTful API** built using **Node.js**, **Express.js**, and **MongoDB**, designed to perform **CRUD operations** (Create, Read, Update, Delete) on user data. Postman is used to test and interact with the API.

It is suitable for understanding backend architecture, route handling, middleware, MongoDB database operations, and error handling.

---

## ⚙️ **Tech Stack Used:**

* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **ODM**: Mongoose
* **API Testing**: Postman
* **Environment Variables**: dotenv

---

## 📁 **Folder Structure:**

```
project-root/
│
├── controller/
│   └── usercontroller.js         # Contains logic for CRUD operations
│
├── model/
│   └── usermodel.js              # Mongoose schema for user data
│
├── routes/
│   └── userroutes.js             # API routes for user endpoints
│
├── .env                          # Contains environment variables
├── index.js                      # Main server file
├── package.json                  # Project configuration and dependencies
└── README.md                     # Project documentation
```

---

## 🛠️ **How to Run the Project Locally**

### 🔹 Step 1: Clone the repository

```bash
git clone https://github.com/your-username/user-crud-api.git
cd user-crud-api
```

### 🔹 Step 2: Install dependencies

```bash
npm install
```

### 🔹 Step 3: Setup `.env` file

Create a `.env` file in the root directory and add the following:

```env
MONGO_URL=mongodb://localhost:27017/usercrud
PORT=5000
```

Ensure MongoDB is installed and running on your system.

### 🔹 Step 4: Start the server

```bash
npm start
```

You should see logs:

```
✅ Database connected successfully.
🚀 Server is running on port 5000
```

---

## 🔄 **API Endpoints**

| Method | Endpoint                | Description       |
| ------ | ----------------------- | ----------------- |
| POST   | `/api/user/create`      | Create a new user |
| GET    | `/api/user/getAllusers` | Fetch all users   |
| PUT    | `/api/user/update/:id`  | Update user by ID |
| DELETE | `/api/user/delete/:id`  | Delete user by ID |

---

## 📬 **Request Body Format (POST / PUT)**

```json
{
  "name": "Anisha Mishra",
  "email": "anisha@example.com",
  "password": "secure123",
  "address": "Bhubaneswar"
}
```

---

## 🧪 **Testing with Postman**

### ✅ Create User (POST)

* **URL**: `http://localhost:5000/api/user/create`
* **Method**: `POST`
* **Headers**:
  `Content-Type: application/json`
* **Body (raw JSON)**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "address": "Delhi"
}
```

---

### ✅ Get All Users (GET)

* **URL**: `http://localhost:5000/api/user/getAllusers`
* **Method**: `GET`

---

### ✅ Update User (PUT)

* **URL**: `http://localhost:5000/api/user/update/<user_id>`
* **Method**: `PUT`
* **Body**:

```json
{
  "name": "Updated Name",
  "address": "Updated Address"
}
```

---

### ✅ Delete User (DELETE)

* **URL**: `http://localhost:5000/api/user/delete/<user_id>`
* **Method**: `DELETE`

---

## ✅ **Example MongoDB Document**

```json
{
  "_id": "665b8f3a83f3de29036b1b57",
  "name": "Anisha Mishra",
  "email": "anisha@example.com",
  "password": "secure123",
  "address": "Bhubaneswar",
  "__v": 0
}
```

---

## 🚧 **Error Handling**

* **400** – Missing required fields
* **404** – User not found
* **409** – User already exists
* **500** – Internal server/database error

Errors are logged on the server console for debugging.

---

## 🧰 **Useful Commands**

| Command            | Purpose                       |
| ------------------ | ----------------------------- |
| `npm start`        | Start the server (production) |
| `nodemon index.js` | Start server in dev mode      |
| `npm install`      | Install all dependencies      |

---

## 📌 **Future Enhancements**

* 🔐 Password encryption using `bcrypt`
* 🔐 Authentication using JWT
* 📚 API documentation using Swagger or Postman
* 🧪 Unit and integration tests

---

## 👩‍💻 **Author**

**Anisha Mishra**
📍 KIIT University | B.Tech CSE
🌐 [LinkedIn Profile](https://linkedin.com/in/anisha-mishra)
📧 [anisha@example.com](mailto:anisha@example.com)
🛠️ Passionate about backend, DSA & product engineering


