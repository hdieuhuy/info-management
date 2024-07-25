import InfoForm from "@/components/infoForm/infoForm";
import React from "react";

import viVN from "antd/locale/vi_VN";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import { getInfoById } from "@/lib/actions/info.actions";

dayjs.locale("zh-cn");

async function InfoDetailPage({ params }: { params: { id: string } }) {
  const data = (await getInfoById({ id: params.id })) || {};

  return (
    <ConfigProvider locale={viVN}>
      <InfoForm id={params.id} data={JSON.parse(JSON.stringify(data))} />
    </ConfigProvider>
  );
}

export default InfoDetailPage;
