export function setChartStocks(data) {
    return {
        type: '@wallet/SETCHART',
        payload: { data }
    }
}