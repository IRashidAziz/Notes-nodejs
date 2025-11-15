import jwt from "jsonwebtoken";
import User from "../Models/UserModel.js";

export default async function getMe(req, res) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Not authenticated", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found", success: false });
    }

    return res.status(200).json({ user, success: true });
  } catch (err) {
    return res.status(401).json({ error: "Invalid token", success: false });
  }
}
