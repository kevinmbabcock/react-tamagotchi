import React from 'react';
import PlayButton from './PlayButton';
import FeedButton from './FeedButton';
import SleepButton from './SleepButton';
import PropTypes from 'prop-types';


function PlayGame(props) {
  return (
    <div>
      <h3>{props.myTamagotchi.name}</h3>
      <ul>
        <li>Fun: {props.myTamagotchi.fun}</li>
        <li>Hunger: {props.myTamagotchi.hunger}</li>
        <li>Energy: {props.myTamagotchi.energy}</li>
      </ul>
      <PlayButton onPlayButtonClick={props.onPlayButtonClick} />
      <FeedButton onFeedButtonClick={props.onFeedButtonClick} />
      <SleepButton onSleepButtonClick={props.onSleepButtonClick} />
    </div>
  );
}

PlayGame.propTypes = {
  onPlayButtonClick: PropTypes.func,
  onFeedButtonClick: PropTypes.func,
  onSleepButtonClick: PropTypes.func,
  myTamagotchi: PropTypes.object
}

export default PlayGame;
