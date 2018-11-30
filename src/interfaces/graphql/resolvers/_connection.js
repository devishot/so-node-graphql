export let pageInfoSingle = {
    hasNextPage: false,
    hasPreviousPage: false,
    endCursor: "",
    startCursor: "",
}


export var getForwardPageInfo = (first) => (total) => (edges) => {
    return {
        hasNextPage: first < total,
        endCursor: edges[first - 1].cursor,
    }
}

export function getEdgeCursorByTimestamp(timestamp) {
    let str = timestamp.toString();
    let encoded = Buffer.from(str).toString('base64');
    return encoded
}