import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  created_at: Date;
  status: EUserStatus;
  role: EUserRole;
}
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
  status: {
    type: String,
    enum: EUserStatus,
    default: EUserStatus.UNACTIVE,
  },
});
const User = models.User || model("User", userSchema);
export default User;
