import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
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
    permanent: {
        type: Boolean,
        default: false,
        required: true
    },
    option: {
        type: String,
        enum: ["house", "company"],
        default: "house",
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }

}, {
    timestamps: true, versionKey: false
})
const AddressModel = mongoose.model('addresses', addressSchema)
export default AddressModel