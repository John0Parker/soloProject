const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be 8 characters or longer"]
    }
}, {timestamps: true});

UserSchema.virtual("confirmPassword")
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value);

UserSchema.pre("validate", function(next){
    if (this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Password and Confirm Password must match.")
    }
    next();
})

UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
    .then( hash => {
        this.password = hash;
        next();
    })
})

module.exports = mongoose.model("User", UserSchema)