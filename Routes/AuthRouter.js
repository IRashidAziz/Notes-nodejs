import { Router } from "express";
import { signUp, login, logout, getMe } from "../Controllers/index.js";

const authRouter = Router();
authRouter.post("/auth/signup", signUp);
authRouter.post("/auth/login", login);
authRouter.get("/auth/me", getMe);
authRouter.post("/auth/logout", logout);

export default authRouter;
