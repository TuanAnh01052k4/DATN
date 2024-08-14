import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        default: "other",
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    ward: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true // true = Active, false = Deactivated
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

    admin: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true, versionKey: false
})
const UserModel = mongoose.model('users', userSchema)
export default UserModel