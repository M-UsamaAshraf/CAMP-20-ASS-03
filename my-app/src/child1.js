import React, { useContext }  from 'react';
import ContextCounter from './contextCounter';

const Child1 = () => {
    let CounterValue = useContext(ContextCounter)


    return(
        <div>
            <h1>this is child 1</h1>
            <h4>
                Counter Value is {CounterValue[0]}
            </h4>
            <button onClick={()=>{
                CounterValue[1](++CounterValue[0])
            }}>
                UPDATE CONTEXT COUNTER
            </button>
        </div>
    );
}
export default Child1;