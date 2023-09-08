const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


const user_id = 'kaushal_kishor_sharma_10072002';

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;


  const input_data = data || [];

  const alphabets = input_data.filter(char => /^[a-zA-Z]$/.test(char));
  const highest_alphabet = alphabets.length > 0
    ? alphabets.reduce((a, b) => a > b ? a : b)
    : undefined;

  const response_data = {
    is_success: true,
    user_id: user_id,
    email: 'ks2013@srmist.edu.in',
    roll_number: 'RA2011042030004',
    numbers: input_data.filter(char => /^[0-9]$/.test(char)),
    alphabets: alphabets,
    highest_alphabet: highest_alphabet ? [highest_alphabet] : []
  };

  res.json(response_data);
});

app.get('/bfhl', (req, res) => {

  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
