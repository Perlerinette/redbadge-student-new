import * as React from 'react';
import { isPropertySignature } from 'typescript';

export interface RollButtonProps {
    rollDiceOne(rollNumber: number):void;
    rollDiceTwo(rollNumber: number):void;
}
 
const RollButton: React.SFC<RollButtonProps> = (props) => {

    function handleClick(){
        let randNum1 = Math.floor(Math.random() * 6) + 1;
        let randNum2 = Math.floor(Math.random() * 6) + 1;
    
        props.rollDiceOne(randNum1);
        props.rollDiceTwo(randNum2);
    }

    return ( 
        <>
        <button onClick={handleClick}>Roll</button>
        <br/>
        </>
     );
}
 
export default RollButton;