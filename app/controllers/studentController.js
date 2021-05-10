const dataMapper = require('../dataMapper');

const { errorServer } = require('../utils');

exports.getStudent = (req, res) => {
    const studentId = Number(req.params.id);
    
    dataMapper.getStudent(studentId, (error, student) => {
        if(error) errorServer(error, res);
        else {
            dataMapper.getPromo(student.promo_id, (error2, promo) => {
                if(error2) errorServer(error2, res);
                else {
                    res.render('student', {student, promo});
                }
            });
        }
    });

}