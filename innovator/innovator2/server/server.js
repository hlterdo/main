const express = require("express");

const app = express();

const projectMetadata0 = {
  id: "0",
  title: "Project 0",
  mission: "Innovate with Project 0",
  url: "project/0",
};

const projectMetadata1 = {
  id: "1",
  title: "Project 1",
  mission: "Innovate with Project 1",
  url: "/project/1",
};

const projectMetadata2 = {
  id: "2",
  title: "Project 2",
  mission: "Innovate with Project 2",
  url: "/project/2",
};

const projectMetadata3 = {
  id: "3",
  title: "Project 3",
  mission: "Innovate with Project 3",
  url: "/project/2",
};

const projectMetadata4 = {
  id: "4",
  title: "Project 4",
  mission: "Innovate with Project 4",
  url: "/project/2",
};

const projectsMetadatas = [
  projectMetadata0,
  projectMetadata1,
  projectMetadata2,
  projectMetadata3,
  projectMetadata4,
];

const projectFeed = {
  0: {
    metadata: { projectMetadata0 },
    feed: [
      {
        type: "tweet",
        text: "Sample tweet",
      },
      {
        type: "news",
        text: "Sample news",
      },
      {
        type: "publication",
        text: "Sample publication",
      },
    ],
  },

  1: {
    metadata: { projectMetadata1 },
    feed: [
      {
        type: "tweet",
        text: "Sample tweet",
      },
      {
        type: "news",
        text: "Sample news",
      },
      {
        type: "publication",
        text: "Sample publication",
      },
    ],
  },

  2: {
    metadata: { projectMetadata2 },
    feed: [
      {
        type: "tweet",
        text: "Sample tweet",
      },
      {
        type: "news",
        text: "Sample news",
      },
      {
        type: "publication",
        text: "Sample publication",
      },
    ],
  },

  3: {
    metadata: { projectMetadata3 },
    feed: [
      {
        type: "tweet",
        text: "Sample tweet",
      },
      {
        type: "news",
        text: "Sample news",
      },
      {
        type: "publication",
        text: "Sample publication",
      },
    ],
  },

  4: {
    metadata: { projectMetadata4 },
    feed: [
      {
        type: "tweet",
        text: "Sample tweet",
      },
      {
        type: "news",
        text: "Sample news",
      },
      {
        type: "publication",
        text: "Sample publication",
      },
    ],
  },
};

app.get("/api/listprojects", (req, res) => {
  res.json(projectsMetadatas);
});

app.get("/api/projectfeed/:id", (req, res) => {
  const id = req.params.id;
  res.json(projectFeed[id]);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
