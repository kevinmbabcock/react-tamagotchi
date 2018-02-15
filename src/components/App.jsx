import React from 'react';
import PlayGame from './PlayGame';
import NewGame from './NewGame';
import Header from './Header';

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
    this.intervalMethods = this.intervalMethods.bind(this);
    this.updateTamagotchi = this.updateTamagotchi.bind(this);
    this.stillAlive = this.stillAlive.bind(this);
  }
  //
  // componentDidMount() {
  //
  // }

  intervalMethods() {
    this.updateTamagotchi();
    this.stillAlive();
    console.log("test");
  }

  // componentWillUnmount() {
  //   clearInterval(this.tamagotchiStats);
  // }

  updateTamagotchi() {
    let newTamagotchi = this.state.tamagotchi;
    newTamagotchi.fun--;
    newTamagotchi.hunger--;
    newTamagotchi.energy--;
    this.setState({tamagotchi: newTamagotchi});
  }

  handleNewTamagotchiCreation(newTamagotchi) {
    this.setState({
      isAlive: true,
      tamagotchi: newTamagotchi
    });
    this.tamagotchiStats = setInterval(() =>
      this.intervalMethods(),
    1000
    );
  }

  stillAlive() {
    if (this.state.tamagotchi.fun <= 0 || this.state.tamagotchi.hunger <= 0 || this.state.tamagotchi.energy <= 0) {
      this.setState({isAlive: false});
      console.log("Stats: " + this.tamagotchiStats);
      clearInterval(this.tamagotchiStats);
    }
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
      <div className="container">
        <style jsx global>{`
        body {
          background-color: black;
          color: white;
          font-family: Georgia
        }
        `}</style>
        <br/>
        <br/>
        <Header />
        <br/>
        <br/>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default App;
