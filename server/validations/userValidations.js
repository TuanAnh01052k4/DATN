import Joi from "joi"

export const registerSchema = Joi.object({
    firstname: Joi.string().required().messages({
        "any.required": "Trường firstname là bắt buộc",
    }),
    lastname: Joi.string().required().messages({
        "any.required": "Trường lastname là bắt buộc",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.empty": "Trường Email không được để trống",
        "string.email": "Trường Email phải là email hợp lệ",
    }),
    password: Joi.string().min(6).max(30).required().messages({
        "any.required": "Trường Password là bắt buộc",
        "string.empty": "Trường Password không được để trống",
        "string.min": "Trường Password phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Password không được vượt quá {#limit} ký tự",
    }),
    phone: Joi.string().pattern(/^(03|05|07|08|09)\d{8}$/).required().messages({
        "any.required": "Trường Phone là bắt buộc",
        "string.empty": "Trường Phone không được để trống",
        "string.pattern.base": "Trường Phone phải là số điện thoại Việt Nam hợp lệ",
    }),
    date: Joi.date().required().messages({
        "any.required": "Trường Date là bắt buộc",
        "date.base": "Trường Date phải là một ngày hợp lệ",
    }),
    gender: Joi.string().valid('male', 'female', 'other').required().messages({
        "any.required": "Trường Gender là bắt buộc",
        "any.only": "Trường Gender phải là 'male', 'female', hoặc 'other'",
    }),
    city: Joi.string().required().messages({
        "any.required": "Trường City là bắt buộc",
        "string.empty": "Trường City không được để trống",
    }),
    district: Joi.string().required().messages({
        "any.required": "Trường District là bắt buộc",
        "string.empty": "Trường District không được để trống",
    }),
    ward: Joi.string().required().messages({
        "any.required": "Trường Ward là bắt buộc",
        "string.empty": "Trường Ward không được để trống",
    }),
    address: Joi.string().required().messages({
        "any.required": "Trường Address là bắt buộc",
        "string.empty": "Trường Address không được để trống",
    })
});

export const loginSchema = Joi.object({
 
    email: Joi.string().email().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.empty": "Trường Email không được để trống",
        "string.email": "Trường Email phải là email hợp lệ",
    }),
    password: Joi.string().min(6).max(30).required().messages({
        "any.required": "Trường Password là bắt buộc",
        "string.empty": "Trường Password không được để trống",
        "string.min": "Trường Password phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Password không được vượt quá {#limit} ký tự",
    })
});
export const addSchema = Joi.object({
    firstname: Joi.string().required().messages({
        "any.required": "Trường firstname là bắt buộc",
    }),
    lastname: Joi.string().required().messages({
        "any.required": "Trường lastname là bắt buộc",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.empty": "Trường Email không được để trống",
        "string.email": "Trường Email phải là email hợp lệ",
    }),
    password: Joi.string().min(6).max(30).required().messages({
        "any.required": "Trường Password là bắt buộc",
        "string.empty": "Trường Password không được để trống",
        "string.min": "Trường Password phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Password không được vượt quá {#limit} ký tự",
    }),
    phone: Joi.string().pattern(/^(03|05|07|08|09)\d{8}$/).required().messages({
        "any.required": "Trường Phone là bắt buộc",
        "string.empty": "Trường Phone không được để trống",
        "string.pattern.base": "Trường Phone phải là số điện thoại Việt Nam hợp lệ",
    }),
    date: Joi.date().required().messages({
        "any.required": "Trường Date là bắt buộc",
        "date.base": "Trường Date phải là một ngày hợp lệ",
    }),
    gender: Joi.string().valid('male', 'female', 'other').required().messages({
        "any.required": "Trường Gender là bắt buộc",
        "any.only": "Trường Gender phải là 'male', 'female', hoặc 'other'",
    }),
    city: Joi.string().required().messages({
        "any.required": "Trường City là bắt buộc",
        "string.empty": "Trường City không được để trống",
    }),
    district: Joi.string().required().messages({
        "any.required": "Trường District là bắt buộc",
        "string.empty": "Trường District không được để trống",
    }),
    ward: Joi.string().required().messages({
        "any.required": "Trường Ward là bắt buộc",
        "string.empty": "Trường Ward không được để trống",
    }),
    address: Joi.string().required().messages({
        "any.required": "Trường Address là bắt buộc",
        "string.empty": "Trường Address không được để trống",
    }),
    role: Joi.string()
});








// phone:{
//     type:Number,
//     required:true
// },
// date:{
//     type:Date,
//     required:true
// },
// gender:{
//     type:String,
//     enum: ["male", "female","other"],
//     default: "other",
// },
// city:{
//     type:String,
//     required:true
// },
// district:{
//     type:String,
//     required:true
// },
// ward:{
//     type:String,
//     required:true
// },
// address:{
//     type:String,
//     required:true
// },
// role: {
//     type: String,
//     enum: ["user", "admin"],
//     default: "user",
// },