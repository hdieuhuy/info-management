import React from "react";

import viVN from "antd/locale/vi_VN";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import { getInfoById } from "@/lib/actions/info.actions";
import InfoView from "@/components/infoView/infoView";

dayjs.locale("zh-cn");

async function InfoViewDetailPage({ params }: { params: { id: string } }) {
  const data = (await getInfoById({ id: params.id })) || {};

  return (
    <ConfigProvider locale={viVN}>
      <InfoView id={params.id} data={JSON.parse(JSON.stringify(data))} />
    </ConfigProvider>
  );
}

export default InfoViewDetailPage;
