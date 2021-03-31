export function buyStock(symbol, qtd, value, date) {
    return {
        type: '@wallet/BUY',
        payload: { symbol, qtd, value, date }
    }
}

export function sellStock(symbol, qtd, value, date) {
    return {
        type: '@wallet/SELL',
        payload: { symbol, qtd, value, date }
    }
}

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

export function addStockToChart(data) {
    return {
        type: '@wallet/ADDCHART',
        payload: { data }
    }
}

export function removeStockFromChart(symbol) {
    return {
        type: '@wallet/REMOVECHART',
        payload: { symbol }
    }
}

export function setChartStocks(data) {
    return {
        type: '@wallet/SETCHART',
        payload: { data }
    }
}

export function updateChartStocks(data) {
    return {
        type: '@wallet/UPDATECHART',
        payload: { data }
    }
}