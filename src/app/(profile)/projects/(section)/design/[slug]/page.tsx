import ProjectDetailPage from "../../../_components/project-detail-page";

export default function DesignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ProjectDetailPage params={params} />;
}
