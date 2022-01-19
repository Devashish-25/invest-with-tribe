const nodemailer = require('nodemailer');
const { users } = require('../models');

const addUser = async (email, password) => {
    if(!email){
        throw { status: 400, message: "Please enter email" }
    }
    if(!password){
        throw { status: 400, message: "Please enter password" };
    }
    const res = await users.find({ email });
    if (res.length){
        throw { status: 400, message: "User already exists" };
    }
    const user = new users({
        email,
        password
    });
    try{
        await user.save();
    }catch {
        throw {status: 500, message: "Something Went Wrong"};
    }
    return; 
}

const sendEmail = async (email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'reptile2503@gmail.com',
          pass: 'deva@2503'
        }
    });

    const mailOptions = {
        from: 'reptile2503@gmail.com',
        to: email,
        subject: 'Welcome',
        html: '<h1>Welcome</h1><p>Thank you for Signing Up on User Model.</p>'
    } 
    
    try{
        await transporter.sendMail(mailOptions);
    }catch{
        throw { status: 500, message: 'Something Went Wrong'};
    }
}

module.exports = {
    addUser,
    sendEmail,
}