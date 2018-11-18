export let pageInfoSingle = {
    hasNextPage: false,
    hasPreviousPage: false,
    endCursor: "",
    startCursor: "",
}

export function getEdgeCursorByTimestamp(timestamp) {
    let str = timestamp.toString();
    let encoded = Buffer.from(str).toString('base64');
    return encoded
}