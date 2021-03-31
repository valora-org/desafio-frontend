const INITIAL_STATE = {
    stocks: [],
    sales: [],
    buys: [],
    searchs: [],
    chartStocks: [],
};

export default function wallet(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@wallet/SETCHART': {
            return {
                ...state,
                chartStocks: action.payload.data
            }
        }
        case '@wallet/BUY': {
            let oldStocks = state.stocks
            if (!oldStocks.filter(stock => stock.symbol == action.payload.symbol).length) {
                return {
                    ...state,
                    stocks: [...oldStocks, {
                        symbol: action.payload.symbol,
                        buys: [{
                            qtd: action.payload.qtd,
                            value: action.payload.value,
                            date: action.payload.date,
                        }],
                        sales: []
                    }]
                }
            }

            for (let i = 0; i < oldStocks.length; i++) {
                if (oldStocks[i].symbol == action.payload.symbol) {
                    oldStocks[i] = {
                        ...oldStocks[i],
                        buys: [...oldStocks[i].buys, action.payload]
                    }
                }
            }
            return {
                ...state,
                stocks: [...oldStocks]
            }
        }
        case '@wallet/SELL': {
            let oldStocks = state.stocks
            for (let i = 0; i < oldStocks.length; i++) {
                if (oldStocks[i].symbol == action.payload.symbol) {
                    oldStocks[i] = {
                        ...oldStocks[i],
                        sales: [...oldStocks[i].sales, action.payload]
                    }
                }
            }
            return {
                ...state,
                stocks: [...oldStocks]
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