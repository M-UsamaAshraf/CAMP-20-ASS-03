import React, {useReducer} from 'react';
import CounterReducer from './counterReducer';



const Child2 = () => {
     let [state, dispatch]= useReducer(CounterReducer, 1);
    return(
        <div>
                <h2>this is child 2</h2>
                <h2>counter value is {state} </h2>
                <button onClick={() =>dispatch('INCREMENT') }>
                    UPDATE CONTEXT REDUCER 
                </button>
        </div>
    );
}
export default Child2;