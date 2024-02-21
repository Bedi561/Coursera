const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const PORT = 3001;

const app = express();

const allowedOrigins = ['https://coursera-ebon.vercel.app', 'http://localhost:5173'];

// app.use((req, res, next) => {
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
//     next();
// });


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://coursera-ebon.vercel.app', 'https://coursera-orcin.vercel.app/');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json());

// Your routes and middleware go here...
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://pranavbedi6:cLj20iLYMe1zDez2@cluster5.izg2qvs.mongodb.net/', { useNewUrlParser: true, dbName: "courses" });

// Start the server on port 3001
app.listen(3001, () => console.log('Server running on port 3001'));
