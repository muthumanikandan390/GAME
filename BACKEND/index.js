// const express = require('express');
// const app = express ();
// app.use(express.json());
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log("Server Listening on PORT:", PORT);
// });


// app.get("/status", (request, response) => {
//   const status = {
//      "Status": "Running"
//   };

//   response.send(status);
// });
import express from 'express';
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
