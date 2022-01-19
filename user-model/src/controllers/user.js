const { addUser, sendEmail } = require("../services");

const signup = async (req, res) => {
    try{
        await addUser(req.body.email, req.body.password);
        await sendEmail(req.body.email);
        res.status(200).send("signup successful!")
    }catch(err){
        res.status(err.status).send(err.message);
    }
}

module.exports = {
    signup
}