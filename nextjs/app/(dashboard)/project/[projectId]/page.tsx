import React from "react";
import ProjectNotFound from "./not-found";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}
function ProjectPage({ params }: ProjectPageProps) {
  if (params.projectId !== "123") {
    return <ProjectNotFound />;
  }
  return (
    <div>
      <h1>Project Page: {params.projectId}</h1>
    </div>
  );
}

export default ProjectPage;
