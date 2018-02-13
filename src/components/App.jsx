import React from 'react';
import PlayGame from './PlayGame';
import NewGame from './NewGame';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tamagotchi: {},
      isAlive: false
    };
    this.handleNewTamagotchiCreation = this.handleNewTamagotchiCreation.bind(this);
  }

  handleNewTamagotchiCreation(newTamagotchi) {
    this.setState({
      isAlive: true,
      tamagotchi: newTamagotchi
    });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.isAlive){
      currentlyVisibleContent = <PlayGame />;
    } else {
      currentlyVisibleContent = <NewGame onNewTamagotchiCreation={this.handleNewTamagotchiCreation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default App;
