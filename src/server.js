const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// SQL Server configuration
const dbConfig = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server',
  database: 'your_database',
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true // Change to true for local dev / self-signed certs
  }
};

// Connect to SQL Server
sql.connect(dbConfig, (err) => {
  if (err) console.log(err);
  else console.log('Connected to SQL Server');
});

// API endpoint to handle form submission
app.post('/submit-form', async (req, res) => {
  const { name, email, gender, phone, address, password } = req.body;

  try {
    const request = new sql.Request();
    await request.query(
      `INSERT INTO Users (Name, Email, Gender, Phone, Address, Password) VALUES ('${name}', '${email}', '${gender}', '${phone}', '${address}', '${password}')`
    );
    res.send('Form submitted successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error submitting form');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
