import React from 'react';


class Result extends React.Component{
    render(){

        if(this.props.num === "="){
            return <input className="input" type="text" defaultValue = {this.props.total}/> 
        }
        else{
            return <input className="input" type="text" defaultValue = {this.props.string}/> 
        }
        
    }
}

export default Result;