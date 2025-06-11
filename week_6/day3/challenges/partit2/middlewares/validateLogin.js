const validateLogin = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(403).send("Erreur de frappe : username et password requis");
    }

    next(); 
};
module.exports = validateLogin
