const {controllers} = require('../controllers/createNotesController');
const express = require('express');
const router = express.Router();



router
    .get('/', controllers.getUserNotes);


module.exports = {
    router,
};