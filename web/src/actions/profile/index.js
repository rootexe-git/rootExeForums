import axios from 'axios';
import * as types from './types';

export const profile_fetch = (success, fail) => async dispatch => {
    const req = axios.get('/profile');
    req.cb = {
        success: success,
        fail: fail
    };
    dispatch({ type: types.PROFILE_FETCH, payload: req });
};