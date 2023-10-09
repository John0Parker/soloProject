const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {secret} = require('../config/jwt')

module.exports = {
    register: (req, res) => {
        User.create(req.body)
        .then(createdUser => res.json(createdUser))
        .catch(err => res.status(400).json(err))
    },
    
    login: async(req, res) => {
        // await dB find request and store in user
        const user = await User.findOne({email: req.body.email});
    
        // check if user is null
        if (user === null){
            return res.status(400).json({msg: "Invalid credentials"});
        }
        if(!await bcrypt.compare(req.body.password, user.password)){
            return res.status(400).json({msg: "Invalid credentials"});
        }
        
        // create userToken to be sent to client
        const userToken = jwt.sign({
            id: user._id
        }, secret)

        // create cookie and attach userToken, then send to client
        res.cookie("usertoken", userToken, {httpOnly: true})
        .json({msg: "success"})
    },

    logout: (req, res) => {
        res.clearCookie("usertoken");
        res.json({msg: "Logged out"});
    },

    // not sure I'll need a findAllUsers method, but why not
    findAllUsers : (req, res) => {
        User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json(err));
    }
}