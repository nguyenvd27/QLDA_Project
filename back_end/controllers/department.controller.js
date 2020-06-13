const Department = require('../models/Department')

module.exports.index = (req, res) => {
    Department.findAll()
        .then(data => {
            res.json({
                result: 'ok',
                data: data,
                message: "Query successfully"
            })
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

    const data = {
        name: req.body.name,
        email: req.body.email,
        created: today
    }
    Department.create(data)
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
    const data = {
        name: req.body.name,
        email: req.body.email
    }
    Department.update(data,
        {
            where: { id: id }
        })
        .then(data => {
            res.json({
                result: 'ok',
                data: data,
                message: "updated"
            });
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}

module.exports.delete = (req, res) => {
    const id = req.params.id

    Department.destroy({
        where: { id: id }
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