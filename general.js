const express = require('express');
const app = express();
const PORT = 3000;

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Route for a specific path
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route with dynamic parameter
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// Handling POST requests
app.post('/submit', (req, res) => {
  // Handle the POST data
  res.send('Data submitted successfully!');
});

// Handling PUT requests
app.put('/update/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  // Handle updating the item with the given ID
  res.send(`Item ${itemId} updated successfully.`);
});

// Handling DELETE requests
app.delete('/delete/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  // Handle deleting the item with the given ID
  res.send(`Item ${itemId} deleted successfully.`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
