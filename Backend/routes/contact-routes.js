'use strict';

const express = require('express');
const { addContact,
    getAllContacts,
    updateContact,
    deleteContact,
    getContactByEmail,
    getContactByNumber, } = require('../controllers/contactController');
    

const router = express.Router();

router.post('/contact', addContact);
router.get('/contact', getAllContacts);
router.get('/contactN/', getContactByNumber); 
router.get('/contactM/', getContactByEmail); 
router.put('/contact/:id', updateContact);
router.delete('/contact/:id', deleteContact);


module.exports = {
    routes: router
}