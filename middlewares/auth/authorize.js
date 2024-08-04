const authorize = (allowedTypes) => (req, res, next) => {
    try {
        const { user } = req     //từ authenticate
        if (allowedTypes.includes(user.type)) {
            next()
        } else {   //ko tồn tại trả về -1
            res.status(403).send("Đã đăng nhập nhưng ko có quyền")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    authorize
}