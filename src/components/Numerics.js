import React from 'react';


class Numerics extends React.Component{
    
    constructor(){
        super();
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(event){
        console.log(event.target.textContent)
        this.props.setValue(event.target.textContent)
    }
    render(){
        const numberArray = ["C","/","*","D",7,8,9,"-",4,5,6,"+",1,2,3,".",0,"="];
        return (
        <div className="div">
            {numberArray.map((num)=>{
                if(num ==="="){
                    return <button onClick={this.inputHandler} className="buttonDot" key={num}>{num}</button>
                }
                else{
                    return <button onClick={this.inputHandler} className="button" key={num}>{num}</button>
                }
                
            })
            }
        </div>
        )
    }
}
export default Numerics;
