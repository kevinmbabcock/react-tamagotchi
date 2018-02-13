import React from 'react';
import PropTypes from 'prop-types';



function FeedButton(props) {

  function handleFeedButtonClick() {
    props.onFeedButtonClick();
  }

  return (
    <div>
      <button onClick={handleFeedButtonClick}>Feed</button>
    </div>
  );
}

FeedButton.propTypes = {
  onFeedButtonClick: PropTypes.func
}

export default FeedButton;
