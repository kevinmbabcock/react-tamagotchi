import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';


function AddTamagotchi(props) {
  let _name = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchiCreation({name: _name.value, hunger: 10, fun: 10, energy: 10, timeCreated: new Moment()});
    _name.value = '';
    props.onNewGameCreation();
  }

  return (
    <div>
      <form onSubmit={handleNewTamagotchiFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name your Tamagochi'
          ref={(input) => {_name = input;}}/>
        <button type='submit'>Play!</button>
      </form>
    </div>
  );
}

AddTamagotchi.propTypes = {
  onNewTamagotchiCreation: PropTypes.func,
  onNewGameCreation: PropTypes.func
};

export default AddTamagotchi;
