import InfoForm from "@/components/infoForm/infoForm";
import React from "react";

import viVN from "antd/locale/vi_VN";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";

dayjs.locale("zh-cn");

function InfoDetailPage() {
  return (
    <ConfigProvider locale={viVN}>
      <InfoForm />
    </ConfigProvider>
  );
}

export default InfoDetailPage;
