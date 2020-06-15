const Asset = require('../models/Asset')

module.exports.index = ( req, res) => {
    Asset.findAll()
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
    Asset.findOne({
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
        asset_code: req.body.asset_code,
        asset_type: req.body.asset_type,
        asset_info: req.body.asset_info,
        asset_info_jp: req.body.asset_info_jp,
        purpose: req.body.purpose,
        serial_number: req.body.serial_number,
        started_date: req.body.started_date,
        status: req.body.status,
        manager: req.body.manager,
        owner: req.body.owner,
        note: req.body.note,
        confirm: req.body.confirm,
        created: today,
        updated: today
    }
    Asset.create(data)
        .then(data => {
            res.json({
                result: 'ok',
                data: data,
                message: `${data.asset_code} created`
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
        asset_code: req.body.asset_code,
        asset_type: req.body.asset_type,
        asset_info: req.body.asset_info,
        asset_info_jp: req.body.asset_info_jp,
        purpose: req.body.purpose,
        serial_number: req.body.serial_number,
        started_date: req.body.started_date,
        status: req.body.status,
        manager: req.body.manager,
        owner: req.body.owner,
        note: req.body.note,
        confirm: req.body.confirm,
        updated: today
    }

    Asset.update(data,
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

    Asset.destroy({
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