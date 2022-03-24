import * as types from '../../constant';
import AxiosCall from '../../../utils/axios';

const fetchOrgsStart = () => {
  return { type: types.FETCH_ORGS_START };
};
const fetchOrgsSuccess = payload => {
  return { type: types.FETCH_ORGS_SUCCESS, payload };
};

export const fetchOrgsFail = (payload) => {
  return { type: types.FETCH_ORGS_FAIL, payload };
};

export const fetchOrgsCleanup = () => {
  return { type: types.FETCH_ORGS_CLEANUP };
};

export const fetchOrgsRequest = query => {
  return async dispatch => {
    dispatch(fetchOrgsStart());
    try {
      const callObj = {
        method: 'GET',
        path: `users/${query}/orgs`,
       };
      const data = await AxiosCall(callObj);
      if(data.length == 0) throw new Error("This user has no org in their account")
      dispatch(fetchOrgsSuccess(data));
    } catch (e) {
  let errorResponse;
        if (e.response) {
          const { message } = e.response.data;
          errorResponse = message;
        } else {
          errorResponse = e.message;
        }
        dispatch(fetchOrgsFail(errorResponse));
    }
  };
};


