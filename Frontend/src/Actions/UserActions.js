import Axios from 'axios';
import {
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../Constants/userConstants';


//  --------------------------------- Actions For Signing In  --------------------------------- \\

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
     const { data } = await Axios.post('/api/players/signin', { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data }); //if successful Get local database
    localStorage.setItem('userInfo', JSON.stringify(data)); // for refresh?, if successful Get local database
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//  --------------------------------- Actions For Signing Out  --------------------------------- \\

export const signout = () => (dispatch) => { //Removes the Local Storages 
  localStorage.removeItem('userInfo');


  dispatch({ type: USER_SIGNOUT });
};
//  --------------------------------- Actions For Making a New Account  --------------------------------- \\

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
  try {
     const { data } = await Axios.post('/api/players/register', { name, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data }); //if successful Get local database
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data }); // updatae redux store based on user signin
    localStorage.setItem('userInfo', JSON.stringify(data)); // for refresh?, if successful Get local database
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//  --------------------------------- Actions For Displaying User Details  --------------------------------- \\

export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_PROFILE_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/players/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_PROFILE_FAIL, payload: message });
  }
};
// put for update action
export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/players/profile`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
  }
};