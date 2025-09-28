const express = require('express');
const cors = require('cors'); // To handle Cross-Origin Resource Sharing
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3000; // You can choose any available port

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins (for development purposes)
// In a production environment, you should restrict this to your frontend's origin.
app.use(cors());

// Endpoint to proxy requests to the Gemini API
app.post('/generateContent', async (req, res) => {
    try {
        // IMPORTANT: Store your API key securely as an environment variable
        // For example, in a .env file (and use a library like 'dotenv') or directly in your hosting environment.
        const apiKey = process.env.GEMINI_API_KEY; 

        if (!apiKey) {
            return res.status(500).json({ error: 'API key not configured on the server.' });
        }

        const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;


        const response = await fetch(geminiApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body) // Forward the request body from the client
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error:', errorData);
            return res.status(response.status).json(errorData);
        }

        const data = await response.json();
        res.json(data); // Send the Gemini API response back to the client

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Serve static files (your HTML, CSS, JS)
// This assumes your HTML file is in the same directory as server.js
app.use(express.static('.')); 

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
    console.log('Remember to set your GEMINI_API_KEY environment variable!');
});
