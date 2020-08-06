import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    output: '0',
    charHolder: []
  };

  changeOutput = (event) => {
    let input = event.target.value;
    let inputAr = input.split('');
    let inputArLen = inputAr.length;

    let alreadyIn = this.state.charHolder.find(char => {
      return char === inputAr[inputArLen-1];
    });

    if (!alreadyIn) {
      this.state.charHolder.push(inputAr[inputArLen-1]);
    }

    this.setState( {
      output: input.length
    })
  };

  deleteCharacter = (charIndex) => {
    console.log(charIndex);
    const chars = [...this.state.charHolder];
    chars.splice(charIndex, 1);
    this.setState({charHolder: chars});
  };

  render() {
    let charCharacters =
            this.state.charHolder.map((char, index) =>
              <CharComponent
                  click={() => this.deleteCharacter(index)}
                  key={index}
                  character={char} />
            );

    return(
        <div className='App'>
          <input type="text" onChange={this.changeOutput} placeholder='Please type in here'/>
          <p>Input length: {this.state.output}</p>
          <ValidationComponent len={this.state.output}/>
          {charCharacters}
        </div>
    );
  }
}

export default App;
