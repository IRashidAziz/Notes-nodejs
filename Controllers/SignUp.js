import User from "../Models/UserModel.js";
import bcrypt from "bcryptjs";

export default async function signUp(req, res) {
  try {
    const { username, email, password, avatar } = req.body;
    const ExistingName = await User.findOne({ username });
    if (ExistingName)
      return res
        .status(409)
        .json({ error: "Name Already Exists", success: false });
    const ExistingEmail = await User.findOne({ email });
    if (ExistingEmail)
      return res
        .status(409)
        .json({ error: "Email Already Exists", success: false });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res
      .status(201)
      .json({ message: "User Registered Successfully", success: true });
  } catch (err) {
    return res.status(500).json({ error: `Error Occurred: ${err}` });
  }
}
