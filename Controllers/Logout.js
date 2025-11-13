export default function logout(req, res) {
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none", 
    expires: new Date(0), 
  });
  res.json({ success: true, message: "Logged out" });
}
