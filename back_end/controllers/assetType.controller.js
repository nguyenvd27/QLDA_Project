const AssetType = require('../models/AssetType')

module.exports.index = (req, res) => {
    AssetType.findAll()
        .then(assetTypes => {
            res.json({
                result: 'ok',
                data: assetTypes,
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
    const assetTypeData = {
        name: req.body.name,
        email: req.body.email,
        created: today
    }

    console.log(assetTypeData)

    AssetType.findOne({
        where: {
            name: req.body.name
        }
    })
        .then(assetType => {
            if (!assetType) {
                AssetType.create(assetTypeData)
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
            } else {
                res.json({ error: 'AssetType already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    // const today = new Date()
    const assetTypeData = {
        name: req.body.name,
        email: req.body.email,
        // created: today
    }

    AssetType.update(
        assetTypeData, {
            where: {
                id: id
            }
        })
        .then(data => {
            AssetType.findOne({
                where: { id: id }
            }).then(data => {
                res.json({
                    result: 'ok',
                    data: data,
                    message: `updated`
                });
            })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}

module.exports.delete = (req, res) => {
    let id = req.params.id;
    AssetType.destroy({
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