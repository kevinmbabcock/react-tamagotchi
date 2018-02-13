import React from 'react';
import PropTypes from 'prop-types';


function PlayButton(props) {

  function handlePlayButtonClick() {
    props.onPlayButtonClick();
  }

  return (
    <div>
      <button onClick={handlePlayButtonClick}>Play</button>
    </div>
  );
}

PlayButton.propTypes = {
  onPlayButtonClick: PropTypes.func
}

export default PlayButton;
