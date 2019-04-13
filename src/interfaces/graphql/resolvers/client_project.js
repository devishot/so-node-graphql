import { default as _ } from 'lodash';

import { 
  getForwardPageInfo, 
  getEdgeCursorFromTimestamp, 
  getTimestampFromEdgeCursor 
} from './_connection.js';
import { 
  normalizeTimestamp, 
  generateRandomNumber 
} from './_common.js';


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

let filterProjectsAfter = (cursor) => (projects) => {
  if( !(typeof cursor === 'string' || cursor instanceof String) ){
    return projects;
  }
  let afterTimestamp = getTimestampFromEdgeCursor(cursor);

  return projects.filter(val => val.timestamp > afterTimestamp);
}

let sliceProjects = ({ first, last }) => (projects) => {
  if( typeof first === 'number' || cursor instanceof Number ) {
    return projects.slice(0, first);
  } else {
    let n = projects.length;
    return projects.slice(n - last, n);
  }
}

let makePageInfo = (slicedEdges) => (filteredProjects) => {
  let hasMore = (filteredProjects.length - slicedEdges.length) > 0
  return getForwardPageInfo(hasMore)(slicedEdges)
}

const makeConnection = (edges, pageInfo) => {
  return {
    edges: edges,
    pageInfo: pageInfo,
  }
}

function makeClientProjectEdge(project) {
  return {
    cursor: getEdgeCursorFromTimestamp(project.timestamp),
    node: normalizeTimestamp(project),
  }
}

export function getClientProjectsByClient(client, { first, after }) {
  let edges = _
      .chain(clientProjectMocks)
      .sortBy('timestamp')
      .thru(filterProjectsAfter(after))
      .thru(sliceProjects({ first }))
      .map(makeClientProjectEdge)
      .value();
  let pageInfo = _
      .chain(clientProjectMocks)
      .sortBy('timestamp')
      .thru(filterProjectsAfter(after))
      .thru(makePageInfo(edges))
      .value();

  let connection = makeConnection(edges, pageInfo);
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

  let edge = makeClientProjectEdge(project);
  let payload = {
    payloadEdge: edge
  }
  return Promise.resolve(payload);
}