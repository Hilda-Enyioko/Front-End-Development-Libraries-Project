import React from 'react'
import './App.css'

let countDown;
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            breakTime: 5,
            sessionTime: 25,
            sessionMinutes: 25,
            sessionSeconds: '00',
            sessionType: 'Session',
            timerIsOn: false,
            paused: false
        };
    }

    // Handle Increment of breakTime
    incrementBreakTime = () => {
        if (this.state.breakTime <= 59 && this.state.timerIsOn === false) {
            this.setState({
                breakTime: this.state.breakTime + 1
            })
        }
    }

    // Handle Decrement of breakTime
    decrementBreakTime = () => {
        if (this.state.breakTime > 1 && this.state.timerIsOn === false) {
            this.setState({
                breakTime: this.state.breakTime - 1
            })
        }
    }

    // Handle Increment of sessionTime
    incrementSessionTime = () => {
        if (this.state.sessionTime < 9 && this.state.timerIsOn === false) {
            this.setState({
                sessionTime: this.state.sessionTime + 1,
                sessionMinutes:  '0' + (parseInt(this.state.sessionTime) + 1),
                sessionSeconds: '00'
            });
        } 

        else if (this.state.sessionTime <= 59 && this.state.sessionTime >= 9 && this.state.timerIsOn === false) {
            this.setState({
                sessionTime: this.state.sessionTime + 1,
                sessionMinutes: parseInt(this.state.sessionTime) + 1,
                sessionSeconds: '00'
            });
        }
    }

    // Handle Decrement of sessionTime
    decrementSessionTime = () => {
        if (this.state.sessionTime > 1 && this.state.sessionTime <= 10 && this.state.timerIsOn === false) {
            this.setState({
                sessionTime: this.state.sessionTime - 1,
                sessionMinutes:  '0' + (parseInt(this.state.sessionTime) - 1),
                sessionSeconds: '00'
            });
        }

        else if (this.state.sessionTime > 1 && this.state.sessionTime > 10 && this.state.timerIsOn === false) {
            this.setState({
                sessionTime: this.state.sessionTime - 1,
                sessionMinutes:  parseInt(this.state.sessionTime) - 1,
                sessionSeconds: '00'
            })
        }
    }

    // Implement the Start/Stop Timer
    timer = () => {
    if (this.state.timerIsOn === false) {
      this.setState({
        timerIsOn: true
      })

      let seconds = this.state.sessionMinutes * 60 + parseInt(this.state.sessionSeconds);
      
      const now = Date.now();
      const then = now + seconds * 1000;
      console.log('Now:', now, 'Then:', then);
      
      countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(this.state.sessionMinutes === "00" && this.state.sessionSeconds === "00") {
          document.getElementById("beep").play();
        }

        // control stop
        if (secondsLeft < 0) {
          clearInterval(countDown);
          this.break();
          return;
        }

        // display time
        this.displayTimeLeft(secondsLeft);

      }, 1000);

    } else {
      clearInterval(countDown);
      let minuteToPause = this.state.sessionMinutes;
      let secondsToPause = this.state.sessionSeconds;

      this.setState({
        timerIsOn: false,
        sessionMinutes: minuteToPause,
        sessionSeconds: secondsToPause,
      });
    }
  };

  displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    if (remainderSeconds >= 10 && minutes >= 10) {
      this.setState({
        sessionMinutes: minutes,
        sessionSeconds: remainderSeconds
      });
    }

    else if (remainderSeconds <= 9 && minutes >= 10) {
      this.setState({
        sessionMinutes: minutes,
        sessionSeconds: "0" + remainderSeconds
      });
    } 
    
    else if (remainderSeconds >= 10 && minutes <= 9) {
        this.setState({
            sessionMinutes: "0" + minutes,
            sessionSeconds: remainderSeconds
          });
    }
    else {
      this.setState({
        sessionMinutes: "0" + minutes,
        sessionSeconds: "0" + remainderSeconds,
      });
    }
  };

  // time to break
  break = () => {
    let isBreak = this.state.sessionType === "Break";
  
    this.setState({
      sessionType: isBreak ? "Session" : "Break",
      sessionMinutes: isBreak ? this.state.sessionTime : this.state.breakTime,
      sessionSeconds: "00",
    });
  
    let seconds = (isBreak ? this.state.sessionTime : this.state.breakTime) * 60;
  
    const now = Date.now();
    const then = now + seconds * 1000;
  
    countDown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
  
      if (secondsLeft < 0) {
        clearInterval(countDown);
        this.break(); // Recursively switch between session and break
        return;
      }
  
      this.displayTimeLeft(secondsLeft);
    }, 1000);
  };

  // Reset Timer
  resetTimer = () => {
    clearInterval(countDown);
    this.setState({
      session: "Session",
      breakTime: 5,
      sessionTime: 25,
      sessionMinutes: 25,
      sessionSeconds: "00",
      timerIsOn: false,
      pause: false,
    });
    document.getElementById("beep").currentTime = 0;
    document.getElementById("beep").pause();
  };

    render() {

        return(
            <div id="container">

                <h1>25 + 5 Clock</h1>

                <div id="clock">

                    <div id="labels">

                        <div className='label'>

                            <div id='break-label'>Break Label</div>
                            <button className="btn-level" id="break-decrement" value="-" onClick={this.decrementBreakTime}>-</button>
                            <div className='btn-level' id="break-length">{this.state.breakTime}</div>
                            <button className="btn-level" id="break-increment" value="+" onClick={this.incrementBreakTime}>+</button>

                        </div>

                        <div className='label'>

                            <div id='session-label'>Session Label</div>
                            <button className="btn-level" id="session-decrement" value="-" onClick={this.decrementSessionTime}>-</button>
                            <div className='btn-level' id="session-length">{this.state.sessionTime}</div>
                            <button className="btn-level" id="session-increment" value="+" onClick={this.incrementSessionTime}>+</button>

                        </div>

                    </div>

                    <div id="timer">

                        <div id="timer-label">{this.state.sessionType}</div>
                        <div id="time-left">{this.state.sessionMinutes}:{this.state.sessionSeconds}</div>

                    </div>

                    <div id="timer-control">

                        <button id="start_stop" onClick={this.timer}>
                            {this.state.timerIsOn ? "⏸" : "▶"}
                        </button>
                        <button id="reset" onClick={this.resetTimer}>🔁</button>

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