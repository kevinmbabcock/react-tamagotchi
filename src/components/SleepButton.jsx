import React from 'react';
import PropTypes from 'prop-types';


function SleepButton(props) {

  function handleSleepButtonClick() {
    props.onSleepButtonClick();
  }

  return (
    <div>
      <button onClick={handleSleepButtonClick}>Sleep</button>
    </div>
  );
}

SleepButton.propTypes = {
  onSleepButtonClick: PropTypes.func
}

export default SleepButton;
