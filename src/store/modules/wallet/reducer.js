const INITIAL_STATE = {
    sales: [],
    buys: []
};

export default function wallet(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@wallet/BUY': {
            return {
                ...state,
                buys: [...state.buys, {
                    code: action.payload.code,
                    qtd: action.payload.qtd,
                    value: action.payload.value
                }]
            }
        }
        case '@wallet/SELL': {
            return {
                ...state,
                sales: [...state.sales, {
                    code: action.payload.code,
                    qtd: action.payload.qtd,
                    value: action.payload.value
                }]
            }
        }
        default:
            return state;
    }
}