import InfoList from "@/components/infoList/infoList";
import { getAllInfo } from "@/lib/actions/info.actions";

export default async function Home() {
  const data = (await getAllInfo()) || [];

  return <InfoList data={JSON.parse(JSON.stringify(data))} />;
}
