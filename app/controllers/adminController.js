const dataMapper = require('../dataMapper');
const { errorServer } = require('../utils');

const adminController = {

    showAddStudentForm: (req, res) => {
      dataMapper.getPromos((error, promos) => {
        if(error) errorServer(error, res);
        else res.render('admin/addStudent', {promos});
      });
    },
    addStudent: (req, res) => {
      console.log(req.body);
      dataMapper.addStudent(req.body, (error, result) => {
        if(error) errorServer(error, res);
        else {
          console.log(result);
          res.redirect('/promo/' + req.body.promo + '/students');
        }
      });
    },
    showLogin: (req, res) => {
      res.render('admin/login');
    },
    login: (req, res) => {
      req.session.login = {
        username:req.body.username
      }
      res.redirect('/');
    },
    logout: (req, res) => {
      req.session.destroy();
      res.redirect('/');
    }
  
  };
  
  
  module.exports = adminController;