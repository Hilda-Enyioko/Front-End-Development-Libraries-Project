import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="drum-machine">

        <div id='keys'>

          <div className='key-row' id='key-row1'>

            <div className='drum-pad' id='Q'>
              <kbd>Q</kbd>
              <audio className='clip' id='Q' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' />
            </div>

            <div className='drum-pad' id='W'>
              <kbd>W</kbd>
              <audio className='clip' id='W' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' />
            </div>

            <div className='drum-pad' id='E'>
              <kbd>E</kbd>
              <audio className='clip' id='E' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' />
            </div>

          </div>

          <div className='key-row' id='key-row2'>

            <div className='drum-pad' id='A'>
              <kbd>A</kbd>
              <audio className='clip' id='A' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' />
            </div>

            <div className='drum-pad' id='S'>
              <kbd>S</kbd>
              <audio className='clip' id='S' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' />
            </div>

            <div className='drum-pad' id='D'>
              <kbd>D</kbd>
              <audio className='clip' id='D' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' />
            </div>

          </div>

          <div className='key-row' id='key-row3'>

            <div className='drum-pad' id='Z'>
              <kbd>Z</kbd>
              <audio className='clip' id='Z' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' />
            </div>

            <div className='drum-pad' id='X'>
              <kbd>X</kbd>
              <audio className='clip' id='X' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' />
            </div>

            <div className='drum-pad' id='C'>
              <kbd>C</kbd>
              <audio className='clip' id='C' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' />
            </div>

          </div>

        </div>

        <div id='divider'></div>

        <div id='controls'>

          <div  id='toggle-play'>
            <div id='toggle-btn' style={
              {
                float: 'right'
              }}>
            </div>
          </div>

          <div id='display'></div>

          <input type='range' name='volume' id='volume-control' min='0' max='100' step='5' />

        </div>

      </div>
    )
  }
}

export default App;