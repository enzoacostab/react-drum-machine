import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <DrumMachine/>
    </div>
  );
};
class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:""
    };
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  };
  componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
  };
  handleClick=(e)=>{
      let id=e.target.textContent;
      let aud=document.getElementById(id);
      aud!==null && aud.play() && this.setState({text:aud.parentElement.id});
  };
  handleKeyPress=(e)=>{
    if (document.getElementById(String.fromCharCode(e.keyCode))){
      let id=String.fromCharCode(e.keyCode);
      let aud=document.getElementById(id);
      aud!==null && aud.play() && this.setState({text:aud.parentElement.id});
    };
  };
  render(){
    return(
      <div id="drum-machine">
        <div className='row'>
        <p id="display">{this.state.text}</p>
        </div>
        <div className='row'>
        <div className='col-sm-4'><button className='drum-pad btn1 r' onClick={this.handleClick} id='Heater-1'><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='Q'></audio>Q</button></div>
        <div className='col-sm-4'><button className='drum-pad btn1 r' onClick={this.handleClick} id='Heater-2'><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' id='W'></audio>W</button></div>
        <div className='col-sm-4'><button className='drum-pad btn1 r' onClick={this.handleClick} id='Heater-3'><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' id='E'></audio>E</button></div>
        </div>
        <div className='row'>
        <div className='col-sm-4'><button className='drum-pad btn1 r' onClick={this.handleClick} id='Heater-4'><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' id='A'></audio>A</button></div>
        <div className='col-sm-4'><button className='drum-pad btn1 o' onClick={this.handleClick} id='Clap'><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' id='S'></audio>S</button></div>
        <div className='col-sm-4'><button className='drum-pad btn1 y' onClick={this.handleClick} id='Open-HH'><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' id='D'></audio>D</button></div>
        </div>
        <div className='row'>
        <div className='col-sm-4'><button className='drum-pad btn1 b' onClick={this.handleClick} id="Kick-N'-Hat"><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' id='Z'></audio>Z</button></div>
        <div className='col-sm-4'><button className='drum-pad btn1 b' onClick={this.handleClick} id='Kick'><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' id='X'></audio>X</button></div>
        <div className='col-sm-4'><button className='drum-pad btn1 y' onClick={this.handleClick} id='Closed-HH'><audio className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' id='C'></audio>C</button></div>
        </div>
    </div>);
  };
};


export default App;
