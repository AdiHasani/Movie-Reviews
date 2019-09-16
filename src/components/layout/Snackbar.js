import React from 'react';

const Snackbar = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`snackbar snackbar-${alert.type} text-center`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  );
};

export default Snackbar;
