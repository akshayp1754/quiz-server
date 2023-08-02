const mongoose = require('mongoose')

const UsersSchema = {
    username : String,
    email : String,
    password : String,
    
}

const UserModel = mongoose.model("users", UsersSchema )

module.exports = UserModel