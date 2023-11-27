import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  bio: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

// method to generate token
userSchema.methods = {
  jwtToken() {
    return JWT.sign(
      { id: this._id, username: this.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "24d",
      }
    );
  },
};

// to hash password before saving it
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 8); //hashing password
  return next();
});
const UserModel = model("User", userSchema);

export default UserModel;
