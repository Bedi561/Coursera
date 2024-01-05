const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 3001;

const app = express();

// Enable CORS for all routes
app.use(cors());
// Enable CORS for all routes
app.use(
    cors({
      origin: (origin, callback) => {
        const devOrigin = ['http://localhost:5173'];
        const allowedOrigins = process.env.NODE_ENV === 'production' ? [] : devOrigin;
  
        if (allowedOrigins.includes(origin)) {
          console.log(origin, allowedOrigins);
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    })
  );
  

app.use(express.json());

// Your routes and middleware go here...
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://pranavbedi6:HePaj9j1QpC0OTcw@cluster0.k0ungut.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

// Start the server on port 3001
app.listen(3001, () => console.log('Server running on port 3001'));
