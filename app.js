const express = require('express');
const app = express();
const PORT = 3001;

const tasks = [
    {
      "id": "123456",
      "isCompleted": false,
      "description": "Walk the dog"
    }
  ];

  app.get('/tasks', (req, res) => {
    res.json({tasks});
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto:  http://localhost:${PORT}/tasks `);
  });