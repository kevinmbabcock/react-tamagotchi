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
    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
    this.handleFeedButtonClick = this.handleFeedButtonClick.bind(this);
    this.handleSleepButtonClick = this.handleSleepButtonClick.bind(this);
  }

  // componentDidMount() {
  //   setInterval();
  // }

  handleNewTamagotchiCreation(newTamagotchi) {
    this.setState({
      isAlive: true,
      tamagotchi: newTamagotchi
    });
  }

  handlePlayButtonClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.fun++;
    this.setState({tamagotchi: newTamagotchi});
  }

  handleFeedButtonClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.hunger++;
    this.setState({tamagotchi: newTamagotchi});
  }

  handleSleepButtonClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.energy++;
    this.setState({tamagotchi: newTamagotchi});
  }

  // componentWillUnmount() {
  //   clearInterval();
  // }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.isAlive){
      currentlyVisibleContent = <PlayGame onPlayButtonClick={this.handlePlayButtonClick} onFeedButtonClick={this.handleFeedButtonClick} onSleepButtonClick={this.handleSleepButtonClick} myTamagotchi={this.state.tamagotchi}/>;
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
