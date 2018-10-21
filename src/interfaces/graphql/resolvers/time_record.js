let timeRecordMock = {
  id: "B58CC80A-1BF5-4652-9559-97AC6C6545AD",
  amount: 60,
  timestamp: "20-10-2018 17:28",
  description: "mocked data from resolver"
}

export function getTimeRecordOwner(timeRecord) {
  return Promise.resolve({ id: timeRecord.owner_id });
}

export function getTimeRecordByID(id) {
  let data = Object.assign({}, timeRecordMock, { id: id });
  return Promise.resolve(data);
}