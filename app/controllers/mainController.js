exports.home = (req, res) => {

    res.render('index');
}

exports.notFound = (req, res) => {
    res.status(404).send('Error 404');
}

exports.history = (req, res) => {
    res.render('history', {history:req.session.history});
}  
