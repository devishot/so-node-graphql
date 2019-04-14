import {
  normalizeTimestamp,
  getEdgeCursorFromTimestamp
} from './';
import {ClientProjectServiceConnection} from 'GrpcAPI';

function makeClientProjectEdge(project) {
  return {
    cursor: getEdgeCursorFromTimestamp(project.timestamp),
    node: normalizeTimestamp(project),
  }
}

export function getClientProjectsByClientID(clID, {first, after, last, before}) {
  const conn = ClientProjectServiceConnection.pool();

  return new Promise((resolve, reject) => {
    const req = {
      client_id: clID,
      args: {
        first,
        after,
        last,
        before
      }
    };

    conn.getClientProjectConnection(req, (err, page) => {
      if (err) {
        reject(err);
      } else {
        resolve(page);
      }
    });
  });
}

export function getClientProjectByID(id) {
  const conn = ClientProjectServiceConnection.pool();

  return new Promise((resolve, reject) => {
    const req = {
      id
    };

    conn.getClientProject(req, (err, project) => {
      if (err) {
        reject(err);
      } else {
        resolve(normalizeTimestamp(project));
      }
    });
  });
}

export function deleteClientProjectByID(id) {
  const conn = ClientProjectServiceConnection.pool();

  return new Promise((resolve, reject) => {
    const req = {
      id
    };

    conn.deleteClientProject(req, (err, project) => {
      if (err) {
        reject(err);
      } else {
        resolve(normalizeTimestamp(project));
      }
    });
  });
}

export function addClientProjectToClient(clID, input) {
  const conn = ClientProjectServiceConnection.pool();

  return new Promise((resolve, reject) => {
    const req = {
      data: {...input, client_id: clID},
    };

    conn.createClientProject(req, (err, project) => {
      if (err) {
        reject(err);
      } else {
        const edge = makeClientProjectEdge(project),
              payload = {
                payloadEdge: edge
              };

        resolve(payload);
      }
    });
  });
}
