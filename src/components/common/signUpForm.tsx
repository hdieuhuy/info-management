"use client";

import React from "react";
import { Button, Card, Flex, Form, Input, notification, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { FormProps } from "antd/lib";
import { signUp } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FieldType = {
  name: string;
  username: string;
  password: string;
};

function SignUpForm() {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res = await signUp(values);

      if (res?.success) {
        router.push("/sign-in");
        return notification.success({
          message: res?.message,
        });
      } else {
        return notification.error({
          message: res?.message,
        });
      }
    } catch (error) {
      notification.error({
        message: "Đã có lỗi xảy ra",
      });
    }
  };

  return (
    <div>
      <Card title="Đăng nhập" className="w-[600px]">
        <Form layout="vertical" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="Họ tên"
            name="name"
            rules={[
              {
                required: true,
                message: "Hãy nhập Họ tên!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Hãy nhập username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu!",
              },
              {
                min: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Nhập lại mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu chưa giống nhau!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Flex justify={"space-between"}>
            <Link href={"/"}>
              <Button type="text" icon={<ArrowLeftOutlined />}>
                Quay lại
              </Button>
            </Link>

            <Flex justify={"flex-end"} gap={8}>
              <Link href="/sign-in">
                <Button type="text">Đăng Nhập</Button>
              </Link>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Flex>
          </Flex>
        </Form>
      </Card>
    </div>
  );
}

export default SignUpForm;
