const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Your routes and middleware go here...
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Handle preflight requests for '/admin/me'
// app.options('/admin/me', (req, res) => {
//   res.header('Access-Control-Allow-Origin', '');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.send();
// });


// const corsOptions ={
//     origin:'https://starlit-cuchufli-7fe773.netlify.app', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));



// Connect to MongoDB
mongoose.connect('mongodb+srv://pranavbedi6:HePaj9j1QpC0OTcw@cluster0.k0ungut.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

// Start the server on port 3001
app.listen(3001, () => console.log('Server running on port 3001'));
