const INITIAL_STATE = {
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
        default:
            return state;
    }
}