"use server";

import connectToDatabase from "../mongoose";
import User from "@/databases/user.model";

export async function signUp({
  name,
  username,
  password,
}: {
  name: string;
  username: string;
  password: string;
}) {
  try {
    connectToDatabase();
    const existsUser = await User.findOne({ username });
    if (existsUser)
      return {
        success: false,
        message: "Username đã tồn tại!",
      };

    await User.create({
      name,
      username,
      password,
    });
    return {
      success: true,
      message: "Đăng ký thành công",
    };
  } catch (error) {
    console.log(error);
  }
}

export async function signIn({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    connectToDatabase();
    const user = await User.findOne({ username, password }).select(
      "_id name username role"
    );

    if (!user)
      return {
        success: false,
        message: "Sai username hoặc mật khẩu!",
      };

    return {
      success: true,
      data: user,
      message: "Đăng nhập thành công",
    };
  } catch (error) {
    console.log(error);
  }
}
