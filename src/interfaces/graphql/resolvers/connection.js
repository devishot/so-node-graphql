export let pageInfoSingle = {
    hasNextPage: false,
    hasPreviousPage: false
}

export function getEdgeCursor(uuid) {
    let encoded = Buffer.from(uuid).toString('base64');
    return encoded
}