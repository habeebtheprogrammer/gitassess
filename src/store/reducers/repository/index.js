
import * as types from '../../constant';
const initialState = {
    isLoading: false,
    isError: null,
    isSuccessful: false,
    data: [],
};

const repositoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_REPOSITORY_START:
            return { ...state, isLoading: true, };
        case types.FETCH_REPOSITORY_FAIL:
            return { ...state, isLoading: false, isError: action.payload };
        case types.FETCH_REPOSITORY_CLEANUP:
            return { ...state, isLoading: false, isError: null };
        case types.FETCH_REPOSITORY_SUCCESS:
            return { ...state, isLoading:false, data: action.payload };
        default:
            return state;
    }
};

export default repositoryReducer;
