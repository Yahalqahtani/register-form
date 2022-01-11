import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import defaultImg from '../assets/images/default img.png';
import ss from '../assets/images/anime-girl.gif';

function LogReg() {
    return (
        <div>
            {/* start form here */}
            <form className="has-text-centered card-content p-4">
                <div className="profileimg">
                    <img className="is-rounded" src={ss} />
                </div>
                {/* log and register button Up  */}
                <div className="has-text-centered logRedbtns  my-5">
                    <div>
                        {/* log button  */}
                        <span>
                            <input className="inputRadio" name="aa" type="radio" id="log" onClick={() => {}} />
                            <label className="RadioLabel" htmlFor="log">
                                loooog
                            </label>
                        </span>
                        {/* register button  */}
                        <span>
                            <input className="inputRadio" name="aa" type="radio" id="reg" defaultChecked />
                            <label className="RadioLabel" htmlFor="reg">
                                loooog
                            </label>
                        </span>
                    </div>
                </div>
                {/* All inputs here  */}
                <div className="has-text-left mt-3">
                    <label htmlFor="Fname">First Name</label>
                    <input className="input is-rounded noBorder" autoComplete="nope" type="text" id="Fname" />
                    <br />
                </div>
                <div className="has-text-left">
                    <label htmlFor="Lname">Last Name</label>
                    <input className="input is-rounded noBorder" autoComplete="nope" type="text" id="Lname" /> <br />
                </div>
                <div className="has-text-left">
                    <label htmlFor="Email">Email</label>
                    <input className="input is-rounded noBorder" type="email" id="Email" /> <br />
                </div>
                <div className="has-text-left">
                    <label htmlFor="password">Password</label>
                </div>
                <input id="password" className="input is-rounded noBorder" autoComplete="nope" type="password" /> <br />
                {/* buttons to send data  */}
                <button className="button is-info is-rounded mt-4">login</button>
                <button className="button is-info is-rounded mt-4">register</button>
            </form>
        </div>
    );
}

export default LogReg;
