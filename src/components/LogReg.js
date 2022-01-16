import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import defaultImg from '../assets/images/default img.png';
import ss from '../assets/images/anime-girl.gif';
import { validateLogin } from './ValidateLogReg';
import { validateRegister } from './ValidateLogReg';
import { users } from './datatest';

function LogReg() {
    const [ConvertBTlogReg, setConvertBTlogReg] = useState('true'); // change form login to register
    // const [logcheck, setlogcheck] = useState(); // check on login data

    const dataObj = { imgUser: '', FirstName: '', LastName: '', Email: '', Password: '' }; //Data for test
    const [SaveFormData, setSaveFormData] = useState(dataObj); // save data user in this state
    const [ErrorShow, setErrorShow] = useState({}); // show error message when need for user
    const [SubmitDone, setSubmitDone] = useState(false);
    const [showImgUser, setshowImgUser] = useState(''); // to show img if email true
    const checkImg = () => {
        setshowImgUser();
    };
    //function change state error show and submit done
    const handelSubmitLogin = e => {
        setErrorShow(validateLogin(SaveFormData));
        setSubmitDone(true);
    };
    //function handel submit to check on error input from user in register
    const handelSubmitRegister = e => {
        setErrorShow(validateRegister(SaveFormData));
        setSubmitDone(true);
    };
    //useEffect to check on errors to sho message
    useEffect(() => {
        if (Object.keys(ErrorShow).length === 0 && SubmitDone) {
        }
    }, [ErrorShow]);

    // function convert to Register
    const toRegis = () => {
        setConvertBTlogReg(false);
    };
    // function convert to Login
    const toLogin = () => {
        setConvertBTlogReg(true);
    };
    // function to handle input data
    const handelInputData = e => {
        const { name, value } = e.target;

        setSaveFormData({ ...SaveFormData, [name]: value });
        checkImg();
    };

    return (
        <div>
            {/* //print data in jason top form */}
            {/* <pre>{JSON.stringify(SaveFormData, undefined, 2)}</pre> */}
            {/* start form here */}
            <form className={` has-text-centered card-content p-4 `}>
                <div className="profileimg">
                    <img className="is-rounded" src={showImgUser} />
                </div>
                {/* log and register button Up  */}
                <div className={`has-text-centered logRedbtns  my-5 `}>
                    <div>
                        {/* log button  */}

                        <span>
                            <input
                                className="inputRadio"
                                name="FormTo"
                                type="radio"
                                id="login"
                                onClick={() => {
                                    toRegis();
                                }}
                            />
                            <label className="RadioLabel" htmlFor="login">
                                Login
                            </label>
                        </span>
                        {/* register button  */}
                        <span>
                            <input
                                className="inputRadio"
                                name="FormTo"
                                type="radio"
                                id="register"
                                defaultChecked
                                onClick={() => {
                                    toLogin();
                                }}
                            />
                            <label className="RadioLabel" htmlFor="register">
                                Register
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
                    <p>{ErrorShow.FirstName}</p>
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
                    <p>{ErrorShow.LastName}</p>
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
                    <p>{ErrorShow.Email}</p>
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
                <p>{ErrorShow.Password}</p>
                {/* //! buttons to send data  */}
                <button
                    className={`button is-info is-rounded mt-4 ${ConvertBTlogReg ? 'hideElement' : ''}`}
                    onClick={e => {
                        e.preventDefault();

                        handelSubmitLogin();
                    }}>
                    Login
                </button>
                <button
                    className={`button is-info is-rounded mt-4 ${ConvertBTlogReg ? '' : 'hideElement'}`}
                    type="submit"
                    onClick={e => {
                        e.preventDefault();

                        handelSubmitRegister();
                    }}>
                    Register
                </button>
            </form>
        </div>
    );
}

export default LogReg;
