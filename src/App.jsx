import React, { useCallback, useState, useRef, useEffect } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import './app.scss';
import logo from './logo.svg';
import Main from './Main';

function App() {

    const [text, setText] = useState('');
    const [welcome, setWelcome] = useState('');
    const [error, setError] = useState(0);
    const [animate, setAnimate] = useState(false);

    const firstLoad = useRef(false);

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const checkText = () => {
        if(text !== "DONARA SARDARYAN"){
            setError(1)
        }else{
            setError(0)
            setTimeout(() => {
                setAnimate(true)
            }, 500)
        }
    }

    useEffect(() => {
        let text = ["Welcome to Donara Sardaryan's offical website"];

        text.forEach((e, i) => {
            text[i] = e.split('')
        })

        let newText = "";
        text[0].forEach((e,i) => {
            setTimeout(() => {
                newText+=e;
                console.log(newText);
                setWelcome(newText);
            }, i*100)
        })

    }, [])

    useEffect(() => {

        if(firstLoad.current && animate){
            setTimeout(() => {
                setAnimate(null)
            }, 13000)
        }else{
            firstLoad.current = true;
        }
    }, [animate])

    return (
        <div className="App">
            <p className="divanyan">by Divanyan</p>
            <img className='logo' src={logo}/>
            <div className="welcome">
                <h1>{welcome}</h1>
                <p>To enter the main part of the website, you are required to solve a tough problem. After finding the result, type it in the input below. The problem is to find the full name of the most beautiful girl on this planet who even has a WEBSITE!?</p>
                <div className="inputWithText">
                    <input placeholder='NAME SURNAME' type="text" value={text} onChange={(e) => setText(e.target.value.toUpperCase())}/>
                    {animate && <p className="orange-dana">DONARA SARDARYAN</p>}
                    <div className="btn-gold" onClick={checkText}>Check</div>
                </div>
                <p style={{opacity:error}} className="error-text">Please make sure u filled the name and surname w a space between 'em as it appears in passport and nothing else.</p>
            </div>
            <Particles options={particlesOptions} init={particlesInit}/>
            {
                animate && <div className="ily-container">
                    <p>I love you.</p>
                </div>
            }
            {
                animate === null && <Main/>
            }
        </div>
    );
}

export default App;
