const jwt = require("jsonwebtoken")
const User = require("../models/UserModel")
const bcrypt = require("bcryptjs")
exports.registerUser = async (req, res, next) => {
    const { fullname, email, password } = req.body

    try {
        const existingUser = await User.findOne({email})
        if (existingUser) {
            return res.status(403).json({ message: "User email already exsist!" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = new User({
            fullnames: fullname,
            email,
            password: hashedPassword
        })
        await user.save()

        //_Id
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
        res.status(201).json({
            data: {
                user,
                token,
            },
            message: "User account has been created successfully!"
        })

    } catch (err) {

        console.log("Error during registration process", err)
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email })
        if (!existinguser) {
            return res.status(401).json({ message: "There is no user found!" })
        }

        const isPwdMatch = await bcrypt.compare(password, existingUser.password)
        if (!isPwdMatch) {
            return res.statuss(401).json({ message: "Invalid credentials!" })
        }
        const token = await jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET)
        return res.status(200).json({ message: "Login done successfully!" })
    }

    catch (err) {
console.log("Error during login process!",err)
return res.status(500).json({message:"we couldn't log you in, try after!"})
    }
};
exports.getCurrentUser= async(req,res)=>{
    try{
const user =await User.findById(req.user._id).select("-password")
return res.status(200).json({user})
    }
    catch(err){
console.log("Failed to get user!",err)
    }
}