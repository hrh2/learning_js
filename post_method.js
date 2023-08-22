const express = require('express');
const app = express();
const PORT = 4000;

// Use the built-in express.json() middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  try {
    
    res.status(200).json(`Data received  ${req.body} `);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
/*
app.use(experss.json());
app.use(express.urlencoded({extended :true}))
*/