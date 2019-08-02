const express = require('express'),
    cors = require('cors')    
    app = express(),
    userRoutes = require("./routes/users"),
    noteRoutes = require("./routes/notes");
    

// Settings 

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/users" , userRoutes);
app.use("/api/notes" , noteRoutes)


module.exports = app;