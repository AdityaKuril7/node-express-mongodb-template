import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/responseHandler.js";
export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
};
