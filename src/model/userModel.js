const mongoose = require('mongoose');
let userSchema = new mongoose.Schema ({
    name:{ type: String,
    required: [true, "Name is required"],
    unique: true,
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [32, "Name must be at most 32 characters long"],
    },
    email:{ type: String,
        required: [true, "Email is required"],
        unique: true, 
        trim: true,
        match: [/.+@.+\..+/, "Email must be a valid format"],
      },
    address:{type:String}
})

module.exports = mongoose.model('users',userSchema);
