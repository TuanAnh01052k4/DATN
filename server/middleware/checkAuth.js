import jwt from "jsonwebtoken"
import UserModel from "../models/userModel.js"

export const protectRoute = {
    verifyToken: async (req, res, next) => {
        try {
            // leeys token JWT từ cookie và kiểm tra token có tồn tại không
            const token = req.headers.token
            console.log(token)
            if (!token) {
                return res.status(401).json({ error: "Token không tồn tại" })
            }

            const decoded = jwt.verify(token, process.env.JWT_TOKEN_ACC)
            console.log(decoded)
            // Xác thực token bằng cách sử dụng khóa bí mật từ biến môi trường.
            if (!decoded) {
                return res.status(401).json({ error: "Mã không hợp lệ" })
            }
            // tìm kiếm thông tin ng dùng sau khi token đc giải mã
            const user = await UserModel.findById(decoded.id).select("-password") //Tìm người dùng trong cơ sở dữ liệu bằng ID đã được giải mã từ token và loại bỏ trường password khỏi kết quả trả về.
            if (!user) {
                return res.status(404).json({ error: "không tim thấy người dùng" })
            }
            req.user = user
            next()
        } catch (error) {
            console.log("lỗi middlware.", error.message)
            res.status(500).json({ error: "lỗi máy chủ middleware" })
        }
    },

    verifyTokenAndAdminAuth: (req, res, next) => {
            protectRoute.verifyToken(req,res, ()=>{

                 if(req.user.id== req.params.id || req.user.admin){
                    next()
                 }else{
                    res.status(403).json("Bạn khhông phải admin ko thể xóa chính bạn hoặc ng khác")
                 }
            })
    }   

}

