import React, { useContext } from 'react';
import SnackbarContext from '../../context/snackbar/snackbarContext';

const Snackbar = () => {
  const snackbarContext = useContext(SnackbarContext);
  const { alert } = snackbarContext;

  return (
    alert !== null && (
      <div className={`snackbar snackbar-${alert.type} text-center`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  );
};

export default Snackbar;
