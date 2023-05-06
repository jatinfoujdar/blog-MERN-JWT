import user from "../model/user.js";

export const signupUser = async(req,res) => {
try {
    const user = req.body;

    const newUser = new User(user);
    await newUser.save();

    return response.status(200).json({msg: "signUp successfull"})
} 
catch (error) {
    return response.status(500).json({msg: "Error while Signup user"})
}

}