import type { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  loginValidation,
  signupValidation,
} from "../validations/auth.validation.js";
import { ApiError } from "../utils/responseHandler.js";
import { UserModel } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signup = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body;
  const result = signupValidation.safeParse(body);

  if (!result.success) {
    throw new ApiError("Bad Request", 400);
  }

  const { username, email, password } = result.data;

  const isUserExist = await UserModel.findOne({ email });

  if (isUserExist) throw new ApiError("User already exist", 400);

  const user = await UserModel.create({ username, email, password });

  const { password: _, ...userWithoutPassword } = user.toObject();

  return res.status(201).json({
    user: userWithoutPassword,
    message: "User created successfully",
  });
});



export const login = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body;
  const result = loginValidation.safeParse(body);

  if (!result.success) {
    throw new ApiError("Bad Request", 400);
  }

  const { email, password } = result.data;

  const user = await UserModel.findOne({ email });

  if (!user) throw new ApiError("Invalid username and password", 400);

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect)
    throw new ApiError("Invalid username and password", 400);

  const token = jwt.sign(
    { userId: user.id, email: user.email, username: user.username },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" },
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "lax",
  });

  return res.status(200).json({
    message: "Login successfully",
  });
});
