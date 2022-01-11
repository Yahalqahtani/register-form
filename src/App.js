import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import './App.css';
import LogReg from './components/LogReg';

function App() {
    return (
        <div className="App">
            {/* Start Div App */}

            <div className="card">
                <LogReg />
            </div>
            {/* End Div App */}
        </div>
    );
}

export default App;
