import { pageInfoSingle, getEdgeCursorByTimestamp } from './connection.js';
import { normalizeTimestamp, generateRandomNumber } from './common.js';


var clientProjectMocks = [
  {
    id: "B58CC80A-1BF5-4652-9559-97AC6C6545AD",
    timestamp: 1542112972570,
    title: "Project One",
    description: "mocked data from resolver"
  },
  {
    id: "0785340e-0f4e-4232-81a7-e7a5a23f3b25",
    timestamp: 1542544909919,
    title: "Project Two",
    description: "from mocked list of projects"
  },
]


function getClientProjectEdge(project) {
  return {
    cursor: getEdgeCursorByTimestamp(project.timestamp),
    node: normalizeTimestamp(project),
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

export function addClientProjectToClient(clientID, input) {
  let _uuid = clientID.slice(0, -3) + generateRandomNumber(100, 999);
  let project = {
    id: _uuid,
    timestamp: Date.now(),
    title: input.title,
    description: input.description,
  }
  clientProjectMocks.push(project);

  let edge = getClientProjectEdge(project);
  let payload = {
    payloadEdge: edge
  }
  return Promise.resolve(payload);
}