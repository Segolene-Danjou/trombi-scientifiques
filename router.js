const express = require('express');
const router = express.Router();

const mainController = require('./app/controllers/mainController');
const promoController = require('./app/controllers/promoController');
const studentController = require('./app/controllers/studentController');
const adminController = require('./app/controllers/adminController');

router.get('/', mainController.home);

router.get('/promos', promoController.getPromos);

router.get('/promo/:id/students', promoController.getPromoWithStudents);

router.get('/student/:id', studentController.getStudent);
router.get('/admin/addStudent', adminController.showAddStudentForm);
router.post('/admin/addStudent', adminController.addStudent);
router.get('/login', adminController.showLogin);
router.post('/login', adminController.login);
router.get('/logout', adminController.logout);
router.get('/history', mainController.history);


router.use(mainController.notFound);

module.exports = router;