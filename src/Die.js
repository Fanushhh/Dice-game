import React, {Component} from "react";
import "./Die.css";

class Die extends Component{
    
    render(){ 
    let propsNum = this.props.ranNum;
    function transformNum(){
        
        switch (propsNum) {
            case 1:
                propsNum = "one";
                break;
                case 2:
                propsNum = "two";
                break;
                case 3:
                propsNum = "three";
                break;
                case 4:
                propsNum = "four";
                break;
                case 5:
                propsNum = "five";
                break;
                case 6:
                propsNum = "six";
                break;
            default:
                propsNum = "zero";
        }
        return propsNum; 
    }
        let newNum = transformNum(propsNum);
        return <i className={"fa-solid fa-10x fa-dice-" + newNum +  " " + this.props.someVal}></i>;
    }
}


export default Die;