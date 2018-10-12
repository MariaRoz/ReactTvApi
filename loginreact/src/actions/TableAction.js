export function itemsFetchData(url) {
    return (dispatch) => {
        // dispatch(IsLoading(true));
        fetch(url)
            .then(res => res.json())
            .then(function (res) {
                let data = [];
                for (let i = 0; i < res.length; i++) {
                    data[i] = res[i].show;
                }
                // dispatch(IsLoading(false));
                return data;
                })
            .then((items) => {
                dispatch(success(items))
            })
            .catch(() => dispatch(errored(true)));
    };
}

function errored(bool) {return {type: 'HAS_ERRORED', hasErrored: bool}}
function IsLoading(bool) {return {type: 'IS_LOADING', isLoading: bool}}
function success(items) {return {type: 'DATA_SUCCESS', items}}
