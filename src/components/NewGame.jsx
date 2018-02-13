import React from 'react';
import GameOver from './GameOver';
import AddTamagotchi from './AddTamagotchi';
import PropTypes from 'prop-types';


class NewGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isNewPlayer: true
    };
    this.handleNewPlayerCreation = this.handleNewPlayerCreation.bind(this);
    this.handleNewGameCreation = this.handleNewGameCreation.bind(this);
  }

  handleNewPlayerCreation() {
    this.setState({isNewPlayer: true});
  }

  handleNewGameCreation() {
    this.setState({isNewPlayer: false});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.isNewPlayer){
      currentlyVisibleContent = <AddTamagotchi onNewGameCreation={this.handleNewGameCreation} onNewTamagotchiCreation={this.props.onNewTamagotchiCreation}/>;
    } else {
      currentlyVisibleContent = <GameOver onNewPlayerCreation={this.handleNewPlayerCreation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewGame.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
};

export default NewGame;
