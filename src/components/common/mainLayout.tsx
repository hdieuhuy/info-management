"use client";

import React, { useEffect, useState } from "react";
import { Layout, Typography, Flex, Dropdown, Avatar } from "antd";
import { ExportOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { green } from "@ant-design/colors";
import { isEmpty, isString } from "lodash";
import Link from "next/link";

const { Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  padding: "24px 60px 24px 60px",
  background: "white",
};

const contentStyle: React.CSSProperties = {
  background: "white",
  minHeight: "calc(100vh - 64px - 69px)",
  padding: "24px 60px 24px 60px",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  background: "#fafafa",
};

const layoutStyle = {
  background: "white",
  overflow: "hidden",
};

function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<{ name?: string }>({
    name: "",
  });

  const items = [
    {
      key: "1",
      label: "Đăng nhập",
      icon: <ExportOutlined />,
      onClick: () => router.push("/sign-in"),
    },
    {
      key: "2",
      label: "Đăng ký",
      icon: <ExportOutlined />,
      onClick: () => router.push("/sign-up"),
    },
  ];

  const itemsLogined = [
    {
      key: "1",
      label: currentUser.name,
    },
    {
      key: "2",
      label: "Đăng xuất",
      icon: <ExportOutlined />,
      onClick: () => {
        setCurrentUser({});
        router.replace("/");
        localStorage.removeItem("user");
      },
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    setCurrentUser(user);
  }, []);

  return (
    <Layout style={layoutStyle}>
      <div style={headerStyle}>
        <Flex justify="space-between" align="center">
          <Typography.Title
            level={3}
            style={{ textTransform: "uppercase", margin: 0 }}
          >
            <Link href="/">Quản lý hồ sơ DQTV</Link>
          </Typography.Title>

          <Dropdown
            menu={{ items: !isEmpty(currentUser) ? itemsLogined : items }}
            placement="bottom"
            trigger={["click"]}
          >
            <Flex
              justify="center"
              align="center"
              className="size-14 rounded-full border border-slate-300 cursor-pointer"
            >
              {!isEmpty(currentUser) ? (
                <Avatar
                  style={{
                    background: green.primary,
                    width: "100%",
                    height: "100%",
                    fontSize: 18,
                  }}
                >
                  {(isString(currentUser.name) &&
                    currentUser.name.split(" ")[
                      currentUser?.name.split(" ").length - 1
                    ]) ||
                    ""}
                </Avatar>
              ) : (
                <UserOutlined style={{ fontSize: 24 }} />
              )}
            </Flex>
          </Dropdown>
        </Flex>
      </div>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>© 2024 IT, Development.</Footer>
    </Layout>
  );
}

export default MainLayout;
