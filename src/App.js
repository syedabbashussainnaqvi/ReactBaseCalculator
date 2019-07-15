import React from 'react';
import './App.css';
import Numerics from "./components/Numerics"
import Result from "./components/Result"

class App extends React.Component{

  constructor(){
    super();
    this.setValue = this.setValue.bind(this);
    this.state ={
      string:"",
      equal:"",
      num:""
    };
}
  setValue(key){

    this.setState({num:key});

    if(key === "="){
      this.setState({equal: eval(this.state.string)});
      this.setState({string:""});
    }
    else if(key === "C"){
      this.setState({string: ""});
    }
    else if(key ==="D"){
      this.setState({string:this.state.string.substring(0,this.state.string.length -1)});
    }
    else{
      let prev = this.state.string + key;
      this.setState({string :prev })
    }
  }

  render(){
    return (
      <div>
        <Result string={this.state.string} total={this.state.equal} num={this.state.num}></Result>
        <Numerics setValue={this.setValue}></Numerics>
      </div>
    )
  }
}
export default App;
