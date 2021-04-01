export function searchStock(symbol, open, close) {
    return {
        type: '@wallet/SEARCH',
        payload: { symbol, open, close }
    }
}

export function removeFromHistory(symbol) {
    return {
        type: '@wallet/REMOVEHISTORY',
        payload: { symbol }
    }
}