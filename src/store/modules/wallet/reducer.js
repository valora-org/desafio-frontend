const INITIAL_STATE = {
    stocks: [],
    sales: [],
    buys: [],
    searchs: [],
    chartStocks: [],
};

export default function wallet(state = INITIAL_STATE, action) {
    switch (action.type) {
        // case '@wallet/ADDCHART': {
        //     return {
        //         ...state,
        //         chartStocks: [...state.chartStocks, action.payload.data]
        //     }
        // }
        // case '@wallet/REMOVECHART': {
        //     return {
        //         ...state,
        //         chartStocks: [...state.chartStocks.filter(stock => stock.symbol != action.payload.symbol)]
        //     }
        // }
        case '@wallet/SETCHART': {
            return {
                ...state,
                chartStocks: action.payload.data
            }
        }
        case '@wallet/BUY': {
            return {
                ...state,
                buys: [...state.buys, {
                    symbol: action.payload.symbol,
                    qtd: action.payload.qtd,
                    value: action.payload.value,
                    data: new Date()
                }]
            }
        }
        case '@wallet/SELL': {
            return {
                ...state,
                sales: [...state.sales, {
                    symbol: action.payload.symbol,
                    qtd: action.payload.qtd,
                    value: action.payload.value,
                    data: new Date()
                }]
            }
        }
        case '@wallet/SEARCH': {
            let searchs = state.searchs
            if (searchs.length == 5) {
                searchs.shift()
            }
            searchs = searchs.filter(search => search.symbol.toUpperCase() != action.payload.symbol.toUpperCase())
            return {
                ...state,
                searchs: [...searchs, action.payload]
            }
        }
        case '@wallet/REMOVEHISTORY': {
            return {
                ...state,
                searchs: [...state.searchs.filter(search => search.symbol.toUpperCase() != action.payload.symbol.toUpperCase())]
            }
        }
        default:
            return state;
    }
}