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

export function getClientProjectsByClient(client, pageArgs) {
  return Promise.resolve(clientProjectMocks);
}

export function getClientProjectByID(id) {
  let project = clientProjectMocks.filter(project => project.id == id)[0]
  return Promise.resolve(project);
}
