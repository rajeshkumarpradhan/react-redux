export function dataHasErrored(bool) {
    return {
        type: 'CUSTOMER_DATA_HAS_ERRORED',
        hasErrored: bool
    };
}
export function dataIsLoading(bool) {
    return {
        type: 'CUSTOMER_DATA_IS_LOADING',
        isLoading: bool
    };
}
export function dataSuccess(items) {
    return {
        type: 'CUSTOMER_FETCH_TRUNKGROUP_DATA',
        items
    };
}
export function fetchData(url) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(dataIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(
                dataSuccess(items)
            ))
            .catch(() => dispatch(dataHasErrored(true)));
    };
}