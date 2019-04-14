import {
  normalizeTimestamp,
  getEdgeCursorFromTimestamp
} from './';
import {ClientServiceConnection} from 'GrpcAPI';

function makeClientEdge(client) {
  return {
    cursor: getEdgeCursorFromTimestamp(client.timestamp),
    node: normalizeTimestamp(client),
  }
}

export function getClientByID(id) {
  const conn = ClientServiceConnection.pool();

  return new Promise((resolve, reject) => {
    const req = {
      id
    };

    conn.getClient(req, (err, client) => {
      if (err) {
        reject(err);
      } else {
        resolve(normalizeTimestamp(client));
      }
    });
  });
}

export function deleteClientByID(id) {
  const conn = ClientServiceConnection.pool();

  return new Promise((resolve, reject) => {
    const req = {
      id
    };

    conn.deleteClient(req, (err, client) => {
      if (err) {
        reject(err);
      } else {
        resolve(normalizeTimestamp(client));
      }
    });
  });
}

export function getClientConnection({first, after, last, before}) {
  const conn = ClientServiceConnection.pool();

  return new Promise((resolve, reject) => {
    const req = {
      args: {
        first,
        after,
        last,
        before
      }
    };

    conn.getClientConnection(req, (err, page) => {
      if (err) {
        reject(err);
      } else {
        resolve(page);
      }
    });
  });
}

export function addClient(input) {
  const conn = ClientServiceConnection.pool();

  return new Promise((resolve, reject) => {
    const req = {
      data: input,
    };

    conn.createClient(req, (err, client) => {
      if (err) {
        reject(err);
      } else {
        const edge = makeClientEdge(client),
              payload = {
                payloadEdge: edge
              };

        resolve(payload);
      }
    });
  });
}