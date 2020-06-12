const Purpose = require('../models/Purpose')

module.exports.index = (req, res) => {
    Purpose.findAll()
        .then(purposes => {
            res.json({
                result: 'ok',
                data: purposes,
                message: "Query successfully"
            });
        })
        .catch(err => {
            res.json({
                result: 'failed',
                data: [],
                message: `Query failed. Error: ${err}`
            });
        })
}

module.exports.create = (req, res) => {
    const today = new Date()
    const purposeData = {
        name: req.body.name,
        email: req.body.email,
        created: today
    }

    Purpose.create(purposeData)
        .then(data => {
            res.json({
                result: 'ok',
                data: data,
                message: `${data.name} created`
            });
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const purposeData = {
        name: req.body.name,
        email: req.body.email,
    }

    Purpose.update(
        purposeData, {
            where: {
                id: id
            }
        })
        .then(data => {
            res.json({
                result: 'ok',
                data: data,
                message: `updated`
            });
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}

module.exports.delete = (req, res) => {
    let id = req.params.id;
    Purpose.destroy({
        where: {
            id: id
        }
    })
        .then(data => {
            if (data > 0) {
                res.json({
                    result: 'ok',
                    data: data,
                    message: `Delete successfully`
                });
            } else {
                res.json({
                    result: 'failed',
                    data: data,
                    message: `Delete failed`
                });
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}