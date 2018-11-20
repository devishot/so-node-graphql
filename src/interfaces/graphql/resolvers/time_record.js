let timeRecordMocks = [
  {
    id: "01088404-a472-4c04-8376-639b840bfbf3",
    timestamp: 1542552256440,
    amount: 60,
    description: "mocked data from resolver"
  },
  {
    id: "c2091336-85cf-4052-9761-4368ed146915",
    timestamp: 1542545032318,
    amount: 15,
    description: "from mocked list of time records"
  },
]

export function getTimeRecordOwner(timeRecord) {
  return Promise.resolve({ id: timeRecord.owner_id });
}

export function getTimeRecordByID(id) {
  let record = timeRecordMocks.filter(t => t.id == id)[0];
  return Promise.resolve(record);
}

export function getTimeRecordsByProject(project) {
  return Promise.resolve(timeRecordMocks);
}