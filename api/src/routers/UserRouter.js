import express from "express";
import { getSingleUser, postUser } from "../model/user/UserModel.js";

const router = express.Router();

//post
router.post("/", async (req, res, next) => {
  try {
    const result = await postUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Aye looking good",
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
router.get("/", async (req, res, next) => {
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
