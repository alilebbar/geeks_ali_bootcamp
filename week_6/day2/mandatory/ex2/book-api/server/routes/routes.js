const booksController = require('../controlers/controlers.js');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
    
// Validation middleware
const bookValidation = [
    check('title').notEmpty().withMessage('Title is required'),
    check('author').notEmpty().withMessage('Author is required'),
    check('published_year').isInt({ min: 1000, max: 9999 }).withMessage('Published year must be a valid year')
];      
// Routes
router.get('/', booksController.getAllBokks);
router.get('/:id', booksController.getBookById);
router.post('/', bookValidation, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, booksController.postBook);

router.put('/:id', bookValidation, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = {router};