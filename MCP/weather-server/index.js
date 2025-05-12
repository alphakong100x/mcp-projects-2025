const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(PORT, () => {
  console.log(`Weather server running on port ${PORT}`);
});
