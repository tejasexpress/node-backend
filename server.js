const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3030;


var choice = [ "Human",
"AI"];

const corsOptions = {
    origin: 'https://ml-frontend.onrender.com/', // Replace with the actual URL of the website
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions));
// Parse incoming JSON requests
app.use(bodyParser.json());

app.post('/api/text-submit', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    
    // Process the form data as needed, e.g., store it in a database
    var index = Math.floor(Math.random() * choice.length);
  
    // Send a response back to the client
    let output = {
        "decision" : choice[index],
        "confidence" : Math.random().toFixed(2),
    }
    
    res.json({ success: true, message: 'Form data received successfully', output });  
  });

  app.post('/api/explanation-submit', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    
    // Process the form data as needed, e.g., store it in a database
  
    // Send a response back to the client
    output = {
        message: "Input submitted successfully",
        Input: formData,
        explanation: "This is an explanation"
    }
    res.json({ success: true, output });  
  });
  
  app.listen(port, () => {
    console.log(`Server is running`);
  });