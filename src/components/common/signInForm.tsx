/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import { Button, Card, Flex, Form, Input, notification, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { signIn } from "@/lib/actions/user.actions";
import { FormProps } from "antd/lib";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FieldType = {
  name: string;
  username: string;
  password: string;
};

function SignInForm() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : null;

    if (user) return router.push("/");
  }, []);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res = await signIn(values);

      if (res?.success) {
        router.push("/");
        localStorage.setItem("user", JSON.stringify(res.data));
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Flex justify={"space-between"}>
            <Link href="/">
              <Button type="text" icon={<ArrowLeftOutlined />}>
                Quay lại
              </Button>
            </Link>

            <Flex justify={"flex-end"} gap={8}>
              <Link href="/sign-up">
                <Button type="text">Đăng ký</Button>
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

export default SignInForm;
