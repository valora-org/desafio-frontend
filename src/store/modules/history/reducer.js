const INITIAL_STATE = {
    searchs: [],
};

export default function history(state = INITIAL_STATE, action) {
    switch (action.type) {
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