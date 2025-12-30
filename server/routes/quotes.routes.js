import express from 'express'
import { getQuotes } from '../controllers/quotes.controllers.js'

const Quotes = express.Router();

Quotes.get('/', getQuotes);

export default Quotes;