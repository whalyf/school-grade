const gradeController = require ('./controllers/gradeController');

const express = require('express');
const routes = express.Router();

//---------------------------gradeController-------------------------------/
routes.post('/myGrade', gradeController.getGrade);


module.exports = routes;