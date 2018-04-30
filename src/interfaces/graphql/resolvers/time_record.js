

export function getTimeRecordOwner(timeRecord) {
  return Promise.resolve({ id: timeRecord.owner_id });
}

export function getTimeRecordByID(id) {
  return Promise.resolve({ id: id });
}