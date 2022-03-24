import * as types from '../../constant';
import AxiosCall from '../../../utils/axios';

const fetchRepositoryStart = () => {
  return { type: types.FETCH_REPOSITORY_START };
};
const fetchRepositorySuccess = payload => {
  return { type: types.FETCH_REPOSITORY_SUCCESS, payload };
};

export const fetchRepositoryFail = (payload) => {
  return { type: types.FETCH_REPOSITORY_FAIL, payload };
};

export const fetchRepositoryCleanup = () => {
  return { type: types.FETCH_REPOSITORY_CLEANUP };
};

export const fetchRepositoryRequest = query => {
  return async dispatch => {
    dispatch(fetchRepositoryStart());
    try {
      const callObj = {
        method: 'GET',
        path: `users/${query}/repos`,
      };
      const data = await AxiosCall(callObj);
      if (data.length == 0) throw new Error("This user has no repo in their account")
      dispatch(fetchRepositorySuccess(data));
    } catch (e) {
      let errorResponse;
      if (e.response) {
        const { message } = e.response.data;
        errorResponse = message;
      } else {
        errorResponse = e.message;
      }
      dispatch(fetchRepositoryFail(errorResponse));
    }
  };
};


