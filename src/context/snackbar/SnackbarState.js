import React, { useReducer } from 'react';
import SnackbarContext from './snackbarContext';
import SnackbarReducer from './snackbarReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(SnackbarReducer, initialState);

  const snackbar = (message, type, ms = 3000) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), ms);
  };

  return (
    <SnackbarContext.Provider
      value={{
        alert: state,
        snackbar
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default AlertState;
