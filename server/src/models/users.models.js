const mongoose = require("mongoose");

const bcrypt = require("bcrypt");


const userSchema = mongoose.Schema(
  {
    username :{type : String, required : true},
    phone :{type : String, required : true},
    email: { type: String, required: true, uniq: true },
    password: { type: String, required: true },
    role: { type: [{ type: String ,enum :["staff" , "admin" , "manager"]}] , default:"staff"}, // because user have multiple role like (admin, manager , staff);
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



// pre hook
userSchema.pre("save", function (next) {
  // copy from bcrypt laibrary to hash password
  // const hash = bcrypt.hashSync(myPlaintextPassword, salt/rounds);

  const hash = bcrypt.hashSync(this.password, 8);

  this.password = hash;
  
  return next();
});

// -----create method to check the password

userSchema.methods.checkPassword = function (password) {

  // copy from bcryp labrary
  // bcrypt.compareSync(myPlaintextPassword, hash);

  return bcrypt.compareSync(password, this.password);

};

const User = mongoose.model("user", userSchema);


module.exports = User;
