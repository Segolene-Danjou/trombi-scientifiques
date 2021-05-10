const client = require('./database');

exports.getPromos = (callback) => {

    client.query(`SELECT * FROM "promo" ORDER BY "name"`, (error, result) => {
               callback(error, result.rows);
    })
}

exports.getPromo = (idPromo, callback) => {
       client.query(`SELECT * FROM "promo" WHERE "id" = $1`, [idPromo], (error, result) => {
        callback(error, result.rows[0]);
    });
}

exports.getStudentsInPromo = (idPromo, callback) => {
    
    client.query(`SELECT * FROM "student" WHERE "promo_id" = $1`, [idPromo], (error, result) => {
        callback(error, result.rows);
    })
}

exports.getStudent = (studentId, callback) => {
    client.query(`SELECT * FROM "student" WHERE "id" = $1`, [studentId], (error, result) => {
        callback(error, result.rows[0]);
    });
}

exports.addStudent = (student, callback) => {
    client.query(`INSERT INTO "student"("first_name", "last_name", "promo_id") VALUES($1, $2, $3)`, [student.first_name, student.last_name, student.promo], (error, result) => {
        callback(error, result.rows[0]);
    });
}
