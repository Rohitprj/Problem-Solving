import mongoose,{Schema} from "mongoose";

const authSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const User = mongoose.model('User', authSchema);

export default User;