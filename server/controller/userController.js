import user from "../model/user.js";

export const signupUser = async (req, res) => {
    try {
      const user = req.body;
  
      const newUser = new User(user);
      await newUser.save();
  
      return res.status(200).json({ msg: "SignUp successful" });
    } catch (error) {
      return res.status(500).json({ msg: "Error while signing up user" });
    }
  }