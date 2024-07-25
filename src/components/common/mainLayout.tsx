"use client";

import React from "react";
import { Layout, Typography } from "antd";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  height: 64,
  lineHeight: "64px",
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
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Typography.Title
          level={3}
          style={{ textTransform: "uppercase", margin: 0 }}
        >
          Quản lý hồ sơ DQTV
        </Typography.Title>
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>© 2024 IT, Development.</Footer>
    </Layout>
  );
}

export default MainLayout;
