export default (state, action) => {
    switch(action.type) {
        case 'DELETE TRANS':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id != action.payload)
            }
        case 'ADD TRANS':
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default :
        return state;
    }
}