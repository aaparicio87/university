const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth'); 

module.exports = (req, res, next) => {

    // Check that exists a token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Access Restricted you need to be authenticate" });
    } else {

        // Check the integrity of the token
        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "There is a problem with a token", err });
            } else {

                    req.user = decoded.user;
                    next();
            }

        })
    }

};