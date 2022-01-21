const {Router} = require('express');
const userController = require('../adminPart/controllers/userController');
const appointmentController = require('../adminPart/controllers/appointmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getOneUser);
router.get('/appointments', appointmentController.getAppointments);
router.get('/appointments/:id', appointmentController.getOneAppointment);
router.put('/appointments/:id', appointmentController.updateOneAppointment);


//router.post('/appointment', appointmentController.createAppointment); //todo AuthMiddleware
//router.get('/appointment/time', appointmentController.getAppointmentsTime); //todo AuthMiddleware
// router.get('/created-appointment', appointmentController.getCreatedAppointments); //todo AuthMiddleware

//router.get('/instructors', appointmentController.getInstructors); //todo AuthMiddleware

module.exports = router;