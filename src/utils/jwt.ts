import jwt from "jsonwebtoken";

export interface PlayLoad {
  userId: string;
  email: string;
  username: string;
}

export const generateToken = (playLoad: PlayLoad) => {
  return jwt.sign(playLoad, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  const result = jwt.verify(token, process.env.JWT_SECRET!) as PlayLoad;
  return result;
};
