export function normalizeTimestamp(node) {
    var copy = node;
    copy.timestamp = copy.timestamp.toString();
    return copy;
}

export function generateRandomNumber(min_value , max_value) {
    let random_number = Math.random() * (max_value-min_value) + min_value;
    return Math.floor(random_number);
 }