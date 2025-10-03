import ProjectPage from "@/screens/projects";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <ProjectPage id={id}/>
  );
}