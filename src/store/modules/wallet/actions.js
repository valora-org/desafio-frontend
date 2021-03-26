export function buyStock(code, qtd, value) {
    return {
        type: '@wallet/BUY',
        payload: { code, qtd, value }
    }
}

export function sellStock(code, qtd, value) {
    return {
        type: '@wallet/SELL',
        payload: { code, qtd, value }
    }
}