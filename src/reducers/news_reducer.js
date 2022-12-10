

export default function (state = {
    isLoading: true
}, action) {
    switch (action.type) {
        case 'GET_TOP_HEADLINES_OF_INDIA':
            return { ...state, latest: action.payload, isLoading: false }

        default:
            return state;
    }
}