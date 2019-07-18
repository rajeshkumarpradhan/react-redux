export function customerDataHasErrored(state = false, action) {
    switch (action.type) {
        case 'CUSTOMER_DATA_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function customerDataIsLoading(state = false, action) {
    switch (action.type) {
        case 'CUSTOMER_DATA_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export default function customerReducer(state = [], action) {
    switch (action.type) {
        case 'CUSTOMER_FETCH_TRUNKGROUP_DATA':
            return action.items;
        default:
            return state;
    }

}