import React from 'react';
import PropTypes from 'prop-types';



function GameOver(props) {

  function handleNewPlayerCreation() {
    props.onNewPlayerCreation();
  }

  return (
    <div>
      <h1>Game Over!!!</h1>
      <button on Click={handleNewPlayerCreation}>Play Again</button>
    </div>
  );
}

GameOver.propTypes = {
  onNewPlayerCreation: PropTypes.func
};


export default GameOver;
