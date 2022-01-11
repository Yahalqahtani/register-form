import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import './App.css';
import LogReg from './components/LogReg';

function App() {
    const [show, setshow] = useState(false);

    const aa = () => {
        setshow(true);
    };
    return (
        <div className="App">
            {/* Start Div App */}

            <div>
                <div className="has-text-centered logRedbtns">
                    <span>
                        <button
                            onClick={() => {
                                {
                                    aa();
                                }
                            }}>
                            Login
                        </button>
                    </span>
                    <div>
                        <span>
                            <input
                                className="inputRadio"
                                name="aa"
                                type="radio"
                                id="log"
                                onClick={() => {
                                    {
                                        aa();
                                    }
                                }}
                            />
                            <label className="RadioLabel" htmlFor="log">
                                loooog
                            </label>
                        </span>
                        <span>
                            <input className="inputRadio" name="aa" type="radio" id="reg" defaultChecked />
                            <label className="RadioLabel" htmlFor="reg">
                                loooog
                            </label>
                        </span>
                    </div>
                    {show ? <LogReg /> : null}
                </div>
            </div>

            {/* End Div App */}
        </div>
    );
}

export default App;
