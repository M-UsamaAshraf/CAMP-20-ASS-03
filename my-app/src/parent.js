import React from 'react';
import ContextCounter from './contextCounter';
import Child1 from './child1';
import Child2 from './child2';

const Parent = (props) => {

    return(
        <div>
            <p>
                <Child1 />
                <Child2 />
            </p>
        </div>
    );
}
export default Parent;