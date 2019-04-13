import { 
  normalizeTimestamp,
  getEdgeCursorFromTimestamp
 } from './';

let clientMocks = [
  {
    id: "c468d42e-e2d6-4f9a-9974-ba775a882514",
    timestamp: 1534596386637,
    firstName: "FirstName",
    lastName: "LastName",
    companyName: ""
  },
  {
    id: "00c3c715-9c9f-49be-b336-6d661f2bf561",
    timestamp: 1518957975228,
    firstName: "Donald",
    lastName: "Trump",
    companyName: "The Trump Organization"
  },
]

export function getClientByClientProject(project) {
  return Promise.resolve(normalizeTimestamp(clientMocks[0]));
}

export function getClientByID(id) {
  const client = clientMocks.filter( client => client.id == id )[0];

  return Promise.resolve(normalizeTimestamp(client));
}

export function getClientConnection({ first, after, last, before }) {
  const conn = {
    edges: [],
    pageInfo: {
      hasNextPage: false,
      startCursor: getEdgeCursorFromTimestamp(Date.now())
    },
  };

  return Promise.resolve(conn);
}