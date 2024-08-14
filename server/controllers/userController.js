import UserModel from "../models/userModel.js"
import bcrypt from "bcryptjs"
import { registerSchema, loginSchema, addSchema } from "../validations/userValidations.js"
// import generateRefreshToken from "../ultils/tokenAuth.js"
import jwt from 'jsonwebtoken'
import { StatusCodes } from "http-status-codes";
let refreshTokens = [];
// lấy toàn bộ user
// lấy toàn bộ user
export const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find()
        return res.status(StatusCodes.OK).json(users)
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: error.message
        })
    }
}

// lấy user theo id
export const getByIdUser = async (req, res) => {
    const id = req.params.id
    try {
        const users = await UserModel.findById(id)
        // const passwordCorrect = await bcrypt.compare(password, user?.password || "");

        // kiếm tra ng dùng tồn tại hay không
        if (!users) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: 'Không tìm thấy người dùng với ID này',
            });
        }
        return res.status(StatusCodes.OK).json(users)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        })
    }
}

// xoá user theo id
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const users = await UserModel.findByIdAndDelete(id)
        if (!users) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: 'Không tìm thấy người dùng với ID này',
            });
        }
        return res.status(StatusCodes.OK).json(users)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        })
    }
}

//update usser theo id
export const updateUser = async (req, res) => {
    try {
        const users = await UserModel.findByIdAndUpdate(req.params.id,req.body)
        //kiem tra user xem đã tồn tại theo id trên đường dẫn
        if (!users) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: 'Không tìm thấy người dùng với ID này',
            });
        }
        return res.status(StatusCodes.OK).json(users)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        })
    }
}

export const updateUserStatus = async (req, res) => {
    try {
        const users = await UserModel.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true})
        //kiem tra user xem đã tồn tại theo id trên đường dẫn
        return res.status(StatusCodes.OK).json(users)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        })
    }
}
export const add = async (req, res) => {
    //nhận request từ user 
    const User = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        date: req.body.date,
        gender: req.body.gender,
        city: req.body.city,
        district: req.body.district,
        ward: req.body.ward,
        address: req.body.address,
        role:req.body.role
    }
    try {
        //lấy schemma để validate
        const { error } = addSchema.validate(req.body, { abortEarly: false });
        if (error) {
            // Nếu có lỗi sẽ trả về tất cả lỗi
            return res.status(StatusCodes.NOT_FOUND).json({ errors: error.details.map(err => err.message) });
        }

        const existUser = await UserModel.findOne({ email: User.email })
        //kiểm tra xem tk đã tồn tại chưa
        if (existUser) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Email đã tồn tại"
            })
        }
        //mã hóa mật khẩu khẩu bằng jwt
        const hashPassword = await bcrypt.hash(User.password, 10)
        
     

        //sau khi pass qua các bước trên thì ta sẽ tạo đc 1 tài khoản mới
        const userData = await UserModel.create({
            ...req.body,
            password: hashPassword,
            
        })
        return res.status(StatusCodes.CREATED).json({
            message: "Đăng ký thành công",
            data: userData
        })
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "lỗi máy chủ" })

    }
}


//đăng kí tài khoản
export const register = async (req, res) => {
    //nhận request từ user 
    const User = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        phone: req.body.phone,
        date: req.body.date,
        gender: req.body.gender,
        city: req.body.city,
        district: req.body.district,
        ward: req.body.ward,
        address: req.body.address
    }
    try {
        //lấy schemma để validate
        const { error } = registerSchema.validate(req.body, { abortEarly: false });
        if (error) {
            // Nếu có lỗi sẽ trả về tất cả lỗi
            return res.status(StatusCodes.NOT_FOUND).json({ errors: error.details.map(err => err.message) });
        }

        const existUser = await UserModel.findOne({ email: User.email })
        //kiểm tra xem tk đã tồn tại chưa
        if (existUser) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Email đã tồn tại"
            })
        }
        //mã hóa mật khẩu khẩu bằng jwt
        const hashPassword = await bcrypt.hash(User.password, 10)
        // ở đây thì ta sử dụng countDocuments để đọc số lượng trong collection user nếu như ko có thì tài khoản đầu tiên là "admin"
        const role = (await UserModel.countDocuments({})) === 0 ? "admin" : "user";

        //sau khi pass qua các bước trên thì ta sẽ tạo đc 1 tài khoản mới
        const userData = await UserModel.create({
            ...req.body,
            password: hashPassword,
            role
        })
        return res.status(StatusCodes.CREATED).json({
            message: "Đăng ký thành công",
            data: userData
        })
    } catch (error) {
        console.log("lỗi đăng kí", error.message)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "lỗi máy chủ" })

    }
}

const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            admin: user.admin
        },
        process.env.JWT_TOKEN_ACC,
        { expiresIn: "30s" }
    )
}

const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            admin: user.admin
        },
        process.env.JWT_TOKEN_REF,
        { expiresIn: "30d" }
    )
}
// đăng nhập tài khoản
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        //lấy schemma để validate
        const { error } = loginSchema.validate(req.body, { abortEarly: false });
        if (error) {
            // Nếu có lỗi sẽ trả về tất cả lỗi
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: error.details.map(err => err.message) });
        }

        const user = await UserModel.findOne({ email })
        const passwordCorrect = await bcrypt.compare(req.body.password, user?.password || "");

        //kiểm tra tài khoản đã tồn tại chưa thông qua email
        if (!user) {
            res.status(StatusCodes.NOT_FOUND).json({ message: "Không có tài khoản" })
        }

        //kiểm tra mật khẩu có đúng không giữa req người dùng nhập với pass có sẵn trong db
        if (!passwordCorrect) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "sai mật khẩu" });
        }
        // lấy token ở bên fodels ultils
        //    const token =  generateRefreshToken(user._id, res);
        if (user && passwordCorrect) {
            //accessToken
            const accessToken = generateAccessToken(user)
            //refreshToken  
            const refreshToken = generateRefreshToken(user)
            refreshTokens.push(refreshToken)
            res.cookie('cookie', refreshToken, {
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "strict",
            })
            //trả về ko có mk
            const { password, ...orthers } = user._doc
            return res.status(StatusCodes.OK).json({
                ...orthers, accessToken
            })
        } else {
            console.log(error.message)
        }


    } catch (error) {
        console.log("lỗi đăng nhập", error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "lỗi máy chủ" })
    }
}

export const requestRefreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.cookie;
        res.status(StatusCodes.OK).json({ message: "new token: ", refreshToken })
        if (!refreshToken) return res.status(StatusCodes.UNAUTHORIZED).json('bạn chưa đăng nhập')
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(StatusCodes.FORBIDDEN).json('refresh token it not valid')
        }
        jwt.verify(refreshToken, process.env.JWT_TOKEN_REF, (err, user) => {
            if (err) {
                console.log(err)
            }
            //lọc token cũ ra 
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            const newAccessToken = generateAccessToken(user)
            const newRefreshToken = generateRefreshToken(user)
            refreshTokens.push(newRefreshToken);
            res.cookie('cookie', newRefreshToken, {
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "strict",
            })
            res.status(StatusCodes.OK).json({ accessToken: newAccessToken })
        })
    } catch (error) {
        console.log("lỗi xuất lại token:", error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "lỗi máy chủ" })
    }
}

// đăng xuất tài khoản
export const logout = async (req, res) => {
    try {
        res.clearCookie('refreshToken');
        refreshTokens = refreshToken.filter(token => token !== req.cookies.refreshToken)
        res.status(StatusCodes.CREATED).json({ message: "đăng xuất thành công" })
    } catch (error) {
        console.log("lỗi đăng xuất", error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "lỗi máy chủ" })
    }
}