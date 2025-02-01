const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  // Define dummy data for users
  console.log('Fetching users...');

  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' }
  ];
  
  // Generate random users data
  const randomUsers = [];
  for (let i = 0; i < 10; i++) {
    const randomUser = {
      id: Math.floor(Math.random() * 100),
      name: 'Random User ' + (i + 1),
      email: `random.user${i + 1}@example.com`
    };
    randomUsers.push(randomUser);
  }
  
  // Return combined data
  res.json({
    users: [...users, ...randomUsers]
  });
});


// Define a route to fetch user data by ID

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Simulate fetching dummy JSON data from a database or API
  const userData = {
    id: userId,
    name: `User ${userId}`,
    age: Math.floor(Math.random() * 100)
  };
  res.json(userData);
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
