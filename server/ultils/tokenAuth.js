// import jwt from "jsonwebtoken"
// const generateRefreshToken = (userId, res) => {
//     //hàm jwt.sign được gọi để tạo ra một token JWT.
//     const token = jwt.sign({ userId }, process.env.JWT_TOKEN_SECRET, {
//         expiresIn: "15d",
//     })


//     // phương thức res.cookie để thiết lập cookie trong phản hồi HTTP
//     res.cookie("jwt", token, {
//         maxAge: 15 * 24 * 60 * 60 * 1000,        //Thời gian sống của cookie, tính bằng mili giây
//         httpOnly: true,                          //Thiết lập cookie chỉ có thể truy cập bởi máy chủ
//         sameSite: "strict",                     //Thiết lập chính sách SameSite cho cookie để ngăn chặn các yêu cầu giả mạo từ các trang khác.
//         secure: process.env.NODE_ENV !== "development",//hiết lập cookie chỉ được gửi qua HTTPS nếu môi trường không phải là "development". Điều này đảm bảo rằng cookie sẽ được bảo vệ khi truyền qua mạng.
//     })
// }
// export default generateRefreshToken