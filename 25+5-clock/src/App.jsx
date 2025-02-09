import React from 'react'
import './App.css'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div id="container">

                <h1>25 + 5 Clock</h1>

                <div id="clock">

                    <div id="labels">

                        <div className='label'>

                            <div id='break-label'>Break Label</div>
                            <button className="btn-level" id="break-decrement" value="-">-</button>
                            <div className='btn-level' id="break-length">5</div>
                            <button className="btn-level" id="break-increment" value="+">+</button>

                        </div>

                        <div className='label'>

                            <div id='session-label'>Session Label</div>
                            <button className="btn-level" id="session-decrement" value="-">-</button>
                            <div className='btn-level' id="session-length">25</div>
                            <button className="btn-level" id="session-increment" value="+">+</button>

                        </div>

                    </div>

                    <div id="timer">

                        <div id="timer-label">Session</div>
                        <div id="time-left">25:00</div>

                    </div>

                    <div id="timer-control">

                        <button id="start_stop">▶</button>
                        <button id="reset">🔁</button>

                    </div>

                    <audio id="beep" preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>

                </div>

                <footer>
                    <p>Designed and Developed By</p>
                    <a href="https://github.com/Hilda-Enyioko">Hilda Enyioko</a>
                </footer>

            </div>
        )

    }

}

export default App;