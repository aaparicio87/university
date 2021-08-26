const express = require('express');
const router = express.Router();

const CityController = require('../controllers/cityController');
const ProfesorController = require('../controllers/profesorController');
const GroupController = require('../controllers/groupController');
const StudentController = require('../controllers/studentController');


// City CRUD
router.post('/api/cities', CityController.addCity);
router.get('/api/cities', CityController.showCities);
router.put('/api/cities/:uuid', CityController.updateCity);
router.delete('/api/cities/:uuid', CityController.deleteCity);

// Profesor CRUD
router.post('/api/profesors', ProfesorController.addProfesor);
router.get('/api/profesors', ProfesorController.showProfesors);
router.put('/api/profesors/:uuid', ProfesorController.updateProfesor);
router.delete('/api/profesors/:uuid', ProfesorController.deleteProfesor);


// Group CRUD
router.post('/api/groups', GroupController.addGroup);
router.get('/api/groups', GroupController.showGroups);
router.put('/api/groups/:uuid', GroupController.updateGroup);
router.delete('/api/groups/:uuid', GroupController.deleteGroup);

// Student CRUD
router.post('/api/students', StudentController.addStudent);
router.get('/api/students', StudentController.showStudents);
router.put('/api/students/:uuid', StudentController.updateStudent);
router.delete('/api/students/:uuid', StudentController.deleteStudent);


module.exports = router;
