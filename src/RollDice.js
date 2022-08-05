import React, {Component} from "react";
import Die from "./Die";
import "./RollDice.css";


class RollDice extends Component{

    constructor(props){
        super(props);
        this.state = {
            num: 1,
            num2: 3,
            isClicked: false
        }
        this.randFunc = this.randFunc.bind(this);
    }
    
    
    randFunc(){
        let rand = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;
        
        this.setState({
            num: rand,
            num2: rand2,
            isClicked: true 
        })
        
        
        
    }
    componentDidUpdate() {
        if (this.state.isClicked) {
          setTimeout(() => {
            this.setState({ isClicked: false });
          }, 1000);
        }
      }
    


    render(){
        let firstNum = this.state.num;
        let secNum = this.state.num2;
        let isItClicked = this.state.isClicked;

        return <div className="roll-dice">
            <div className="roll-dices">
                <Die someVal={isItClicked && "shake-dice"} ranNum={firstNum}/>
                <Die someVal={isItClicked && "shake-dice"} ranNum={secNum}/>
            </div>
            <button disabled={isItClicked} className="roll-button" onClick = {this.randFunc}>{isItClicked ? "Rolling...":"Roll Dice" }</button>
        </div>
    }
}

export default RollDice;