import React from 'react'
import * as math from 'mathjs'
import './App.css'

class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      output: "0",
      currentFormula: "",
      currentValue: "0",
      isEqualClicked: false
    }

    this.clear = this.clear.bind(this);
    this.inputNumbers = this.inputNumbers.bind(this);
    this.inputOperators = this.inputOperators.bind(this);
    this.inputDecimal = this.inputDecimal.bind(this);
    this.handleEqual = this.handleEqual.bind(this);

  }

  clear() {
    this.setState({
      output: "0",
      currentFormula: "",
      currentValue: "0",
      isEqualClicked: false
    })

    console.log("Calculator Cleared!")
  }


  inputNumbers(e) {

    //If Zero Starts A Number
    if (this.state.currentValue[0] === '0' && e.target.value === '0') {
      this.setState({
        currentValue: this.state.currentValue,
        output: this.state.currentValue
      })
      console.log('Checked If Zero Starts A Number');
    }  
    
    //If Number Immediately After '=' (without clicking 'AC')
    else if (this.state.isEqualClicked && typeof this.state.currentFormula === "number"){
      this.setState({
        currentValue: e.target.value,
        output: e.target.value,
        currentFormula: e.target.value,
        isEqualClicked: false
      })

      console.log("Checked If Number Immediately After '=' (without clicking 'AC')")
    }

    //If User Continues Previous Calculation
    else if (this.state.isEqualClicked && typeof this.state.currentFormula === "string") {
      this.setState({
        currentValue: e.target.value,
        output: e.target.value,
        currentFormula: this.state.currentFormula + e.target.value,
        isEqualClicked: false
      })

      console.log("Checked If User Continues Previous Calculation")
    }

    //If currentValue = '0'
    else if(this.state.currentValue === '0') {
      this.setState({
        currentValue: e.target.value,
        output: e.target.value,
        currentFormula: this.state.currentFormula + e.target.value
      })

      console.log("Checked If currentValue = '0'")
    }

    //If User Starts A New Calculation
    else {
      this.setState({
        currentValue: this.state.currentValue + e.target.value,
        output: this.state.output + e.target.value,
        currentFormula: this.state.currentFormula + e.target.value
      })
    }

  }

  inputOperators(e) {

    const lastChar = this.state.currentFormula[this.state.currentFormula.length - 1];
    const operators = /[+\-*/]/;

    // If an operator is entered  for the first time
    if (!operators.test(lastChar)) {
      this.setState({
        currentFormula: this.state.currentFormula + e.target.value,
        currentValue: "",
        output:""
      })

      console.log("Checked if an operator is entered  for the first time");
    }

    // If '-' is entered as previous operator
    else {

      if (lastChar !== "-" && e.target.value === '-') {
        this.setState({
          currentFormula: this.state.currentFormula + e.target.value,
          currentValue: "",
          output:""
        })
      }

      else if (lastChar === "-" && e.target.value !== '-') {
        this.setState({
          currentFormula: this.state.currentFormula.slice(0,-2) + e.target.value,
          currentValue: "",
          output:""
        })
      }

      else {
        this.setState({
           currentFormula: this.state.currentFormula.slice(0,-1) + e.target.value,
           currentValue: "",
           output:""
          })
      }

    }

  }

  inputDecimal() {

    const lastChar = this.state.currentFormula[this.state.currentFormula.length - 1];
    const operators = /[+\-*/]/;

    if(lastChar === ".") return;

    if (!this.state.currentValue.includes(".") && this.state.isEqualClicked == false && !operators.test(lastChar)){
      this.setState({
        currentFormula: this.state.currentFormula + ".",
        output: this.state.output + ".",
        currentValue: this.state.currentValue + "."
      })
    }

  }

  handleEqual() {
    if (this.state.currentFormula !== "") {
      const expression = this.state.currentFormula.replace(/x/g, "*");
      const result = math.evaluate(expression).toString();

      this.setState({
        output: result,
        currentValue: result,
        currentFormula: result,
        isEqualClicked: true
      })
    }
  }

  render() {

    return (

      <div id="wrapper">

        <div id="calc">

          <div id="expression">

            <p id="answer">{this.state.currentFormula}</p>
            <p id="display">{this.state.output}</p>

          </div>

          <div id="keys">
            <div id="grid1">

              <button id="clear" className="key1" onClick={this.clear}>
              AC
              </button>

              <div id="num1" className="key1">

                <button id="seven" className="input num" value="7" onClick={this.inputNumbers}>
                  7
                </button>

                <button id="eight" className="input num" value="8" onClick={this.inputNumbers}>
                8
                </button>

              </div>

              <div id="num2" className="key1">

                <button id="four" className="input num" value="4" onClick={this.inputNumbers}>
                4
                </button>

                <button id="five" className="input num" value="5" onClick={this.inputNumbers}>
                5
                </button>

              </div>

              <div id="num3" className="key1">

                <button id="one" className="input num" value="1" onClick={this.inputNumbers}>
                1
                </button>

                <button id="two" className="input num" value="2" onClick={this.inputNumbers}>
                2
                </button>

              </div>

              <button id="zero" className="key1 num input" value="0" onClick={this.inputNumbers}>
              0
              </button>

            </div>

            <div id="grid2">

              <button id="divide" className="key2 operation"  value="/" onClick={this.inputOperators}>
              /
              </button>

              <button id="nine" className="key2 num input" value="9" onClick={this.inputNumbers}>
              9
              </button>

              <button id="six" className="key2 num input" value="6" onClick={this.inputNumbers}>
              6
              </button>

              <button id="three" className="key2 num input" value="3" onClick={this.inputNumbers}>
              3
              </button>

              <button id="decimal" className="key2 decimal input" value="." onClick={this.inputDecimal}>
              .
              </button>

            </div>

            <div id="grid3">

              <button id="multiply" className="key3 operation" value="x" onClick={this.inputOperators}>
              x
              </button>

              <button id="subtract" className="key3 operation" value="-" onClick={this.inputOperators}>
              -
              </button>

              <button id="add" className="key3 operation" value="+" onClick={this.inputOperators}>
              +
              </button>

              <button id="equals" className="key3" value="=" onClick={this.handleEqual}>
              =
              </button>

            </div>

          </div>

        </div>

        <footer>
            <p>Designed and Developed By</p>
            <a href="https://github.com/Hilda-Enyioko">Hilda Enyioko</a>
        </footer>
        
      </div>

    )

  }

}

export default App
