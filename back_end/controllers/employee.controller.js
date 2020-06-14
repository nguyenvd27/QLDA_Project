const Employee = require('../models/Employee')

module.exports.index = ( req, res) => {
    Employee.findAll()
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

module.exports.show = ( req, res) => {
    const id = req.params.id
    Employee.findOne({
        where: {id: id}
    })
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
        phone_number: req.body.phone_number,
        address: req.body.address,
        sex: req.body.sex,
        marital_status: req.body.marital_status,
        home_town: req.body.home_town,
        id_card: req.body.id_card,
        permanent_residence: req.body.permanent_residence,
        role: req.body.role,
        creator_email: req.body.creator_email,
        created: today,
        updated: today
    }
    Employee.create(data)
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

    const today = new Date()
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
        sex: req.body.sex,
        marital_status: req.body.marital_status,
        home_town: req.body.home_town,
        id_card: req.body.id_card,
        permanent_residence: req.body.permanent_residence,
        role: req.body.role,
        creator_email: req.body.creator_email,
        updated: today
    }

    Employee.update(data,
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

    Employee.destroy({
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