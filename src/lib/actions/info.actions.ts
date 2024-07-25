"use server";

import Info, { IInfo } from "@/databases/info.model";
import connectToDatabase from "../mongoose";
import { revalidatePath } from "next/cache";

export async function getAllInfo(): Promise<IInfo[] | undefined> {
  try {
    connectToDatabase();
    const info = await Info.find();
    return info;
  } catch (error) {
    console.log(error);
  }
}
export async function getInfoById({
  id,
}: {
  id: string;
}): Promise<IInfo | undefined> {
  try {
    connectToDatabase();
    const findInfo = await Info.findById(id);
    return findInfo;
  } catch (error) {
    console.log(error);
  }
}
export async function createInfo(params: IInfo) {
  try {
    connectToDatabase();
    const existInfo = await Info.findOne({ fullname: params.fullname });
    if (existInfo) {
      return {
        success: false,
        message: "Họ tên đã tồn tại!",
      };
    }
    const info = await Info.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(info)),
    };
  } catch (error) {
    console.log(error);
  }
}
export async function updateInfo(
  { id, ...updateData }: { id: string; updateData: IInfo },
  path = ""
) {
  try {
    connectToDatabase();
    const findInfo = await Info.findById(id);
    if (!findInfo) return;
    await Info.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    revalidatePath(path || "/");
    return {
      success: true,
      message: "Cập nhật thông tin thành công!",
    };
  } catch (error) {
    console.log(error);
  }
}
