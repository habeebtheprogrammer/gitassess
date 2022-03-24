
import * as types from '../../constant';
const initialState = {
    isLoading: false,
    isError: null,
    isSuccessful: false,
    data: [],
};

const orgsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ORGS_START:
            return { ...state, isLoading: true, };
        case types.FETCH_ORGS_FAIL:
            return { ...state, isLoading: false, isError: action.payload };
        case types.FETCH_ORGS_CLEANUP:
            return { ...state, isLoading: false, isError: null };
        case types.FETCH_ORGS_SUCCESS:
            return { ...state, isLoading:false, data: action.payload };
        default:
            return state;
    }
};

export default orgsReducer;
