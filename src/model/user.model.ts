import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

// User Type for the refrence

interface UserType extends Document {
  username: string;
  email: string;
  password: string;
}

// Schema of the user model

const userSchema = new mongoose.Schema<UserType>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Function run at the timing of save/create user

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Creating User model

export const UserModel = mongoose.model("User", userSchema);
