const Token = require('../models/token-model');

const addToken = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    // Create a new Token instance
    const newToken = new Token({
      token,
    });

    // Save the token to the database
    await newToken.save();

    // Send a success response
    res.status(201).json({ message: 'Token added successfully' });
  } catch (error) {

    
    // Handle duplicate key error (code: 11000)
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      const existingToken = error.keyValue.token;
      console.error(`Token '${existingToken}' is already present`);
      return res.status(400).json({ error: 'Token is already present' });
    }

    // Handle other errors
    console.error('Error adding token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all tokens
const getTokens = async (req, res) => {
  try {
    const tokens = await Token.find();
    res.status(200).json(tokens);
  } catch (error) {
    console.error('Error getting tokens:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addToken, getTokens };
