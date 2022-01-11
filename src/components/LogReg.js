import React from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import defaultImg from '../assets/images/default img.png';
import ss from '../assets/images/anime-girl.gif';

function LogReg() {
    return (
        <div>
            <div className="card">
                <form className="has-text-centered card-content">
                    <div className="profileimg">
                        <img className="is-rounded" src={ss} alt="profile img" />
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="has-text-left mt-6">
                        <label htmlFor="Fname">Frist Name</label>
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
                    <button className="button is-info is-rounded my-2">login</button>
                </form>
            </div>
        </div>
    );
}

export default LogReg;
