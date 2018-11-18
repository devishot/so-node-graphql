let timeRecordMocks = [
  {
    id: "B58CC80A-1BF5-4652-9559-97AC6C6545AD",
    timestamp: 1542552256440,
    amount: 60,
    description: "mocked data from resolver"
  },
  {
    id: "0785340e-0f4e-4232-81a7-e7a5a23f3b25",
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