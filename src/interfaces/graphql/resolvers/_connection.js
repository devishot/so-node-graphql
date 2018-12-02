export let pageInfoSingle = {
    hasNextPage: false,
    hasPreviousPage: false,
    endCursor: "",
    startCursor: "",
}

export var getForwardPageInfo = (hasMore) => (edges) => {
    let lastEdge = edges[edges.length - 1];
    return {
        hasNextPage: hasMore,
        endCursor: lastEdge && lastEdge.cursor,
    }
}

export function getTimestampFromEdgeCursor(cursor) {
    let str = Buffer.from(cursor, 'base64').toString('utf8');
    return parseInt(str);
}

export function getEdgeCursorFromTimestamp(timestamp) {
    let str = timestamp.toString();
    let encoded = Buffer.from(str).toString('base64');
    return encoded
}