import grpc from 'grpc';
import config from 'Config';

const protoLoader = require('@grpc/proto-loader'),
      PROTO_PATH = 'src/interfaces/grpc/protofiles/client_project.proto',
      packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true
        }
      ),
      protoDescriptor = grpc.loadPackageDefinition(packageDefinition),
      {api} = protoDescriptor,
      server_addr = config.read().so_client_project_addr;

let singleton = null;

export class ClientProjectServiceConnection {
  constructor(addr) {
    this.conn = new api.ClientProjectService(addr, grpc.credentials.createInsecure());
  }

  static pool() {
    if (singleton === null) {
      singleton = new ClientProjectServiceConnection(server_addr);
    }

    return singleton.conn
  }
}
