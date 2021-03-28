export function buyStock(symbol, qtd, value) {
    return {
        type: '@wallet/BUY',
        payload: { symbol, qtd, value }
    }
}

export function sellStock(symbol, qtd, value) {
    return {
        type: '@wallet/SELL',
        payload: { symbol, qtd, value }
    }
}

export function searchStock(symbol) {
    return {
        type: '@wallet/SEARCH',
        payload: { symbol }
    }
}