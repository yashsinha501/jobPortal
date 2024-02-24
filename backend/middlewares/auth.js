import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  console.log('token',token);
  
  if (!token) {
    return next(new ErrorHandler("User Not Authorized", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log('decoded',decoded);
  
    req.user = await User.findById(decoded.id);
    console.log(req.user.role);
    next();
    
  } catch (error) {
    console.log('error',error);
  }
});
