import React from "react";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description 2",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description 3",
    },
    {
      id: 4,
      name: "Project 4",
      description: "Description 4",
    },
    {
      id: 5,
      name: "Project 5",
      description: "Description 5",
    },
  ];
  return (
    <div>
      <h1>Projects Page</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
