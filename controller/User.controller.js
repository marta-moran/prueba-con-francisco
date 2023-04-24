const { mysqlConfig } = require('../db/index')

const createUser = (req, res, next) => {

    const { name, address } = req.body

    mysqlConfig.query(`INSERT INTO USER (nombre, direccion) VALUES ('${name}', '${address}')`,
        (err, result) => {
            if (err) {
                next(err);
            } else {
                res.status(200).json({ message: `CREADO! ${result}` });
                console.log(result);
            }
        })

    mysqlConfig.end();
}

module.exports = { createUser }