import React from 'react'

const keysToDisplay = [
  {key: 'Q', string: 'Heater 1'},
  {key: 'W', string: 'Heater 2'},
  {key: 'E', string: 'Heater 3'},
  {key: 'A', string: 'Heater 4'},
  {key: 'S', string: 'Heater 6'},
  {key: 'D', string: 'Disc Oh'},
  {key: 'X', string: 'Kick n Hat'},
  {key: 'Z', string: 'Kick 1'},
  {key: 'C', string: 'Cev H2'}
]
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: '',
      volume: 0.5,
      togglePlay: true
    }
  }

  handleKeyPress = (event) => {
    if (!this.state.togglePlay) return;

    const key = event.key.toUpperCase();
    console.log(key);
    const keyInfo = keysToDisplay.find(k => k.key === key);
    console.log(keyInfo);

    if(keyInfo) {
      const audio = document.querySelector(`audio[id="${key}"]`);
      if (audio) {
        audio.currentTime = 0;
        audio.volume = this.state.volume;
        audio.play();
  
        this.setState({
          display: keyInfo.string
        })
    }
    }
  }

  handleClick = (key) => {
    if(!this.state.togglePlay) return;

    const keyInfo = keysToDisplay.find(k => k.key === key);
    console.log(keyInfo);

    if(keyInfo) {
      const audio = document.querySelector(`audio[id="${key}"]`);
      if (audio) {
        audio.currentTime = 0;
        audio.volume = this.state.volume;
        audio.play();
  
        this.setState({
          display: keyInfo.string
        })
    }
    }
  }

  handleVolume = (event) => {
    const volume = event.target.value / 100;
    this.setState({volume});
    console.log(this.state.volume);
  }

  handlePlay = () => {
    this.setState((prevState) => ({
      togglePlay: !prevState.togglePlay
    })
    )
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div id="drum-machine">

        <div id='keys'>

          <div className='key-row' id='key-row1'>

            <div className='drum-pad' id='Q' key={'Q'} onClick={() => this.handleClick('Q')}>
              <kbd>Q</kbd>
              <audio className='clip' id='Q' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' />
            </div>

            <div className='drum-pad' id='W' key={'W'} onClick={() => this.handleClick('W')}>
              <kbd>W</kbd>
              <audio className='clip' id='W' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' />
            </div>

            <div className='drum-pad' id='E' key={'E'} onClick={() => this.handleClick('E')}>
              <kbd>E</kbd>
              <audio className='clip' id='E' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' />
            </div>

          </div>

          <div className='key-row' id='key-row2'>

            <div className='drum-pad' id='A' key={'A'} onClick={() => this.handleClick('A')}>
              <kbd>A</kbd>
              <audio className='clip' id='A' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' />
            </div>

            <div className='drum-pad' id='S' key={'S'} onClick={() => this.handleClick('S')}>
              <kbd>S</kbd>
              <audio className='clip' id='S' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' />
            </div>

            <div className='drum-pad' id='D' key={'D'} onClick={() => this.handleClick('D')}>
              <kbd>D</kbd>
              <audio className='clip' id='D' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' />
            </div>

          </div>

          <div className='key-row' id='key-row3'>

            <div className='drum-pad' id='Z' key={'Z'} onClick={() => this.handleClick('Z')}>
              <kbd>Z</kbd>
              <audio className='clip' id='Z' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' />
            </div>

            <div className='drum-pad' id='X' key={'X'} onClick={() => this.handleClick('X')}>
              <kbd>X</kbd>
              <audio className='clip' id='X' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' />
            </div>

            <div className='drum-pad' id='C' key={'C'} onClick={() => this.handleClick('C')}>
              <kbd>C</kbd>
              <audio className='clip' id='C' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' />
            </div>

          </div>

        </div>

        <div id='divider'></div>

        <div id='controls'>

          <div  id='toggle-play'>
            <div id='toggle-btn' onClick={this.handlePlay} style={
              {
                float: this.state.togglePlay ? 'right' : 'left'
              }}>
            </div>
          </div>

          <div id='display'>
            <p>{this.state.display}</p>
          </div>

          <input 
          type='range' 
          name='volume' 
          id='volume-control' 
          min='0' 
          max='100' 
          step='5'
          onChange = {this.handleVolume}
          />

        </div>

      </div>
    )
  }
}

export default App;