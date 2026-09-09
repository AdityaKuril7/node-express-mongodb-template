import type { Request, Response } from "express";
import { signupValidation } from "../validations/auth.validation.js";
import { ErrorHandler } from "../utils/responseHandler.js";

export const signup = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = signupValidation.safeParse(body);
    if (!result.success) {
    }
  } catch (e) {
    if (e instanceof Error) {
      return ErrorHandler({ res, error: e.message });
    } else {
      return ErrorHandler({ res, error: "Server Error" });
    }
  }
};
export const login = async (req: Request, res: Response) => {};
