import React from "react";

function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: "template 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "template 2",
      description: "Description 2",
    },
    {
      id: 3,
      name: "template 3",
      description: "Description 3",
    },
    {
      id: 4,
      name: "template 4",
      description: "Description 4",
    },
    {
      id: 5,
      name: "template 5",
      description: "Description 5",
    },
  ];
  return (
    <div>
      <h1>Templates Page</h1>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>{template.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TemplatesPage;
