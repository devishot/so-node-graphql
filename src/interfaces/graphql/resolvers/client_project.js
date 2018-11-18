import { pageInfoSingle, getEdgeCursor } from './';


let clientProjectMocks = [
  {
    id: "B58CC80A-1BF5-4652-9559-97AC6C6545AD",
    title: "Project One",
    description: "mocked data from resolver"
  },
  {
    id: "0785340e-0f4e-4232-81a7-e7a5a23f3b25",
    title: "Project Two",
    description: "from mocked list of projects"
  },
]

function getClientProjectEdge(project) {
  return {
    cursor: getEdgeCursor(project.id),
    node: project
  }
}

function getClientProjectsConnection(pageInfo, projects) {
  let edges = projects.map(p => getClientProjectEdge(p));
  return {
    edges: edges,
    pageInfo: pageInfo,
  }
}

export function getClientProjectsByClient(client, pageArgs) {
  let projects = clientProjectMocks;
  let connection = getClientProjectsConnection(pageInfoSingle, projects);
  return Promise.resolve(connection);
}


export function getClientProjectByID(id) {
  let project = clientProjectMocks.filter(project => project.id == id)[0]
  return Promise.resolve(project);
}
