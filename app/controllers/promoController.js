const dataMapper = require('../dataMapper');

const { errorServer } = require('../utils');

exports.getPromos = (req, res) => {

    dataMapper.getPromos((error, promos) => {
      
        if(error) errorServer(error, res);
        else res.render('promos', {promos});
    });
}

exports.getPromo = (req, res) => {
    const idPromo = Number(req.params.id);

    dataMapper.getPromo(idPromo, (error, promo) => {
        if(error) errorServer(error, res);
        else {
            
            res.render('promo', {promo});
        }
    });
}

exports.getPromoWithStudents = (req, res) => {

    const idPromo = Number(req.params.id);

    dataMapper.getPromo(idPromo, (error, promo) => {
        if(error) console.log(error);
        else {
            dataMapper.getStudentsInPromo(idPromo, (error2, students) => {
                if(error2) errorServer(error, res);
                else res.render('students', {promo, students});
            });
        }
    });
}





 