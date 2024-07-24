"use client";

import React from "react";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
};

const contentStyle: React.CSSProperties = {
  background: "white",
  minHeight: "calc(100vh - 64px - 69px)",
  padding: 60,
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
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>© 2024 IT, Development.</Footer>
    </Layout>
  );
}

export default MainLayout;
