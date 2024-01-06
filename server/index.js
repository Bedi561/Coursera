const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const PORT = 3001;

const app = express();

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    const allowedOrigins = ['https://coursera-ebon.vercel.app', 'http://localhost:5173'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});



// // Enable CORS for all routes
// app.use(
//     cors({
//       origin: ['http://localhost:5173'], // Add your frontend URL(s) here
//       credentials: true,
//       methods: ['GET', 'POST', 'PUT', 'DELETE']
//     })
//   );
  

app.use(express.json());

// Your routes and middleware go here...
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://pranavbedi6:HePaj9j1QpC0OTcw@cluster0.k0ungut.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

// Start the server on port 3001
app.listen(3001, () => console.log('Server running on port 3001'));
