const User = require("../models/user")
const CryptoJs = require ("crypto-js")
const jwt = require ("jsonwebtoken")

module.exports= { 
    //REGISTRATION OF USERS
    async register(req,res){
        try{
            const newUser = new User ({
                username:req.body.username,
                email:req.body.email,
                password:CryptoJs.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
            })
            const savedUser = await newUser.save();
            //console.log(savedUser)
            res.status(201).json(savedUser)

        } catch(err){
            console.log("this is the registration error",err)
            res.status(400).json(err)

        }
    },
    //LOGIN
    async login (req,res){
        try{
            const user = await User.findOne({
                username:req.body.username
            })
            //findind users in the db
            !user && res.status(401).json("wrong credentials!")
            //decrypting the password
            const hashedPassword = CryptoJs.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            )
            const Originalpassword= hashedPassword.toString(CryptoJs.enc.Utf8)
            //compairing the passwords
            Originalpassword !== req.body.password && res.status(401).json("wrong credentials")
            
            //assigning the jwt with the following properties
            const accessToken = jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin,

            },process.env.JWT_SEC,
            {expiresIn:"3d"}
            );


        const { password, ...others } = user;  
        res.status(200).json(others,accessToken);
            //res.status(200).json(user)
        }catch(err){
            console.log("this is the login error",err)
        }
    }
}