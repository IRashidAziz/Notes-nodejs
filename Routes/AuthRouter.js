import { Router } from "express";
import { signUp, login } from "../Controllers/index.js";

const authRouter = Router();
authRouter.post("/auth/signup", signUp);
authRouter.post("/auth/login", login);

export default authRouter;
