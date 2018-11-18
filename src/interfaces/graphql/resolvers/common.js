export function normalizeTimestamp(node) {
    var copy = node;
    copy.timestamp = copy.timestamp.toString();
    return copy;
}