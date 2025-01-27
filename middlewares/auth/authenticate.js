const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.header("token")
        const decode = jwt.verify(token, "toi-yeu-vy-3000")
        console.log(decode)
        if (decode) {
            req.user = decode
            return next()
        } else {
            res.status(401).send("Bạn cần phai đăng nhập")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    authenticate
}