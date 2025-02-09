# 25 + 5 Clock  

## Overview  
This project is a **Pomodoro-style timer** that meets the specifications of [freeCodeCamp’s Front End Development Libraries certification](https://www.freecodecamp.org/learn/front-end-development-libraries). The app allows users to set session and break lengths, start/stop the timer, and reset it, following the required user stories.  

## Live Demo  
[Click here to see a working version](https://clock.freecodecamp.rocks/s).  

## Technologies Used  
- **React** (for UI)  
- **Redux** (for state management)  
- **Bootstrap / CSS** (for styling)  
- **JavaScript (ES6+)**  

## Features  
✅ **Session & Break Control:** Users can increase/decrease session and break times (within limits).  
✅ **Countdown Timer:** Displays time left in `mm:ss` format and updates every second.  
✅ **Play/Pause Functionality:** Users can start, stop, and resume the timer.  
✅ **Auto-Switching:** The timer automatically switches between session and break modes.  
✅ **Audio Alert:** A sound plays when a countdown reaches zero.  
✅ **Reset Button:** Resets all values to default (session = 25 mins, break = 5 mins).  

## User Stories  
The app fulfills the following user stories:  

### Layout & Display  
- **[✔]** `#break-label`: Displays "Break Length".  
- **[✔]** `#session-label`: Displays "Session Length".  
- **[✔]** `#timer-label`: Shows whether the timer is in "Session" or "Break" mode.  
- **[✔]** `#time-left`: Shows countdown in `mm:ss` format.  
- **[✔]** `#break-length`: Displays break length (default: `5`).  
- **[✔]** `#session-length`: Displays session length (default: `25`).  

### Controls  
- **[✔]** `#break-increment`: Increases break time by `1` (max: `60`).  
- **[✔]** `#break-decrement`: Decreases break time by `1` (min: `1`).  
- **[✔]** `#session-increment`: Increases session time by `1` (max: `60`).  
- **[✔]** `#session-decrement`: Decreases session time by `1` (min: `1`).  
- **[✔]** `#start_stop`: Toggles timer start/pause.  
- **[✔]** `#reset`: Resets all values and stops audio.
