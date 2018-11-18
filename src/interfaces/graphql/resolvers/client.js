import { normalizeTimestamp } from './common.js';

let clientMocks = [
  {
    id: "B58CC80A-1BF5-4652-9559-97AC6C6545AD",
    timestamp: 1534596386637,
    firstName: "FirstName",
    lastName: "LastName",
    companyName: ""
  },
  {
    id: "0785340e-0f4e-4232-81a7-e7a5a23f3b25",
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
  let client = clientMocks.filter( client => client.id == id )[0]
  return Promise.resolve(normalizeTimestamp(client));
}