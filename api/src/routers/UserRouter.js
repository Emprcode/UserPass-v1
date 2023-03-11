import express from "express";
import { getSingleUser, postUser } from "../model/user/UserModel.js";
import { hassPass } from "../utility/bcrypt.js";
import { v4 as uuidv4 } from "uuid";
import { userLoginValidation, userRegistrationValidation } from "../middleware/joiMiddleware.js";

const router = express.Router();

//post
router.post("/", userRegistrationValidation, async (req, res, next) => {
  try {
    req.body.password = hassPass(req.body.password);
    req.body.verificationCode = uuidv4();
    const result = await postUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "User created Successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to register now, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//get
router.post("/login", userLoginValidation, async (req, res, next) => {
  try {
    const result = await getSingleUser(req.body);

    res.json({
      status: "success",
      message: "Aye looking good",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
