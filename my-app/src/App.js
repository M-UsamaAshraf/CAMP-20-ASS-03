//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import ContextCounter from './contextCounter';
import Parent from './parent';


function App() {
  let countState = useState(1)
  return (
    <div className={`"App" $"{App-Header}"`}>
      <ContextCounter.Provider value={countState}>
          <div>
            <Parent/>
          </div>

      </ContextCounter.Provider>
      

    </div>
  );
}

export default App;
