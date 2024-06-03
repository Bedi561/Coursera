const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const PORT = 3001;

const app = express();

// Define the allowed origins
const allowedOrigins = ['http://localhost:5173','https://coursera-9ta6.vercel.app/'];

const corsOptions = {
  origin: allowedOrigins,// or specify your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization, pragma',
};

app.use(cors(corsOptions));

app.use(express.json());

// Your routes and middleware go here...
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://pranavbedi6:VC6nONzm63HCM232@cluster8.efktq8e.mongodb.net/', { useNewUrlParser: true, dbName: "courses" });

// Start the server on port 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
