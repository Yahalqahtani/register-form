import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import defaultImg from '../assets/images/default img.png';
import ss from '../assets/images/anime-girl.gif';

function LogReg() {
    const [ConvertBTlogReg, setConvertBTlogReg] = useState('true'); // change form login to register
    // const [logcheck, setlogcheck] = useState(); // check on login data

    const dataObj = { imgUser: '', FirstName: '', LastName: '', Email: '', Password: '' }; //Data for test
    const [SaveFormData, setSaveFormData] = useState(dataObj); // save data user in this state

    // function to change ConvertBTlogReg state
    const toRegis = () => {
        setConvertBTlogReg(!ConvertBTlogReg);
    };
    // function to handle input data
    const handelInputData = e => {
        const { name, value } = e.target;
        setSaveFormData({ ...SaveFormData, [name]: value });

        console.log(SaveFormData);
    };
    return (
        <div>
            {/* start form here */}
            <form className={` has-text-centered card-content p-4 `}>
                <div className="profileimg">
                    <img className="is-rounded" src={SaveFormData.imgUser} />
                </div>
                {/* log and register button Up  */}
                <div className={`has-text-centered logRedbtns  my-5 `}>
                    <div>
                        {/* log button  */}

                        <span>
                            <input
                                className="inputRadio"
                                name="aa"
                                type="radio"
                                id="log"
                                onClick={() => {
                                    toRegis();
                                }}
                            />
                            <label className="RadioLabel" htmlFor="log">
                                login
                            </label>
                        </span>
                        {/* register button  */}
                        <span>
                            <input
                                className="inputRadio"
                                name="aa"
                                type="radio"
                                id="reg"
                                defaultChecked
                                onClick={() => {
                                    toRegis();
                                }}
                            />
                            <label className="RadioLabel" htmlFor="reg">
                                register
                            </label>
                        </span>
                    </div>
                </div>
                {/*
                //! Input Start Here 
                */}
                <div className={`has-text-left mt-3 ${ConvertBTlogReg ? '' : 'hideElement'}`}>
                    <label htmlFor="Fname">First Name</label>
                    <input
                        className="input is-rounded noBorder"
                        autoComplete="nope"
                        type="text"
                        id="Fname"
                        name="FirstName"
                        value={SaveFormData.FirstName}
                        onChange={handelInputData}
                    />
                    <br />
                </div>
                <div className={`has-text-left ${ConvertBTlogReg ? '' : 'hideElement'}`}>
                    <label htmlFor="Lname">Last Name</label>
                    <input
                        className="input is-rounded noBorder"
                        autoComplete="nope"
                        type="text"
                        id="Lname"
                        name="LastName"
                        value={SaveFormData.LastName}
                        onChange={handelInputData}
                    />
                    <br />
                </div>
                <div className="has-text-left">
                    <label htmlFor="Email">Email</label>
                    <input
                        className="input is-rounded noBorder"
                        type="email"
                        id="Email"
                        autoComplete="nope"
                        name="Email"
                        value={SaveFormData.Email}
                        onChange={handelInputData}
                    />

                    <br />
                </div>
                <div className="has-text-left">
                    <label htmlFor="password">Password</label>
                </div>
                <input
                    id="password"
                    className="input is-rounded noBorder"
                    autoComplete="nope"
                    type="password"
                    name="Password"
                    value={SaveFormData.Password}
                    onChange={handelInputData}
                />
                <br />
                {/* buttons to send data  */}
                <button
                    className={`button is-info is-rounded mt-4 ${ConvertBTlogReg ? 'hideElement' : ''}`}
                    onClick={e => {
                        e.preventDefault();

                        alert('login done');
                    }}>
                    login
                </button>
                <button
                    className={`button is-info is-rounded mt-4 ${ConvertBTlogReg ? '' : 'hideElement'}`}
                    type="submit"
                    onClick={e => {
                        e.preventDefault();
                        alert('register done');
                    }}>
                    register
                </button>
            </form>
        </div>
    );
}

export default LogReg;
