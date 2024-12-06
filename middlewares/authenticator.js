const jwt = require("jsonwebtoken");
require("dotenv").config();

async function authenticator(req, res, next) {
    const token = req.headers.authorization;

    // Handle missing token
    if (!token) {
        return res.status(401).send({
            message: "Token is missing. Please login.",
            status: 2,
            error: true,
        });
    }

    jwt.verify(token, process.env.SecretKey, async function (err, decoded) {
        if (err) {
            return res.status(401).send({
                message: "Something went wrong: " + err.message,
                status: 0,
                error: true,
            });
        }

        if (decoded) {
            console.log(decoded);

            if (decoded.role === "deactivate") {
                return res.status(403).send({
                    message: "Your Account is deactivated. Contact SuperAdmin.",
                    status: 0,
                    error: true,
                });
            }

            // Token is valid, proceed to the next middleware
            next();
        } else {
            return res.status(401).send({
                message: "Invalid token. Please login.",
                status: 2,
                error: true,
            });
        }
    });
}

module.exports = {
    authenticator,
};
