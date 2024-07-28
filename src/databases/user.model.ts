import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, Schema, model, models } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  password: string;
  created_at: Date;
  role: EUserRole;
}

export interface IUserDocument extends Document {
  name: string;
  username: string;
  password: string;
  created_at: Date;
  role: EUserRole;
}
const userSchema = new Schema<IUserDocument>({
  name: { type: String, unique: true },

  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
});
const User = models.User || model("User", userSchema);
export default User;
