import React, {useRef} from 'react';
import useInput from "../hooks/useInput";
import useHover from "../hooks/useHover";
import {Link} from "react-router-dom";

const HookUseInput = () => {
    const username = useInput('');
    const password = useInput('');
    return (
        <>
            <h2>Кастомный хук useInput:</h2>
            <input type="text" placeholder={'Username'} {...username}/>
            <input type="text" placeholder={'Password'} {...password}/>
            <button onClick={()=>console.log(username.value, password.value)}>console.log(username.value, password.value)</button>
        </>
    );
}

const HookUseHover = () => {
    const squareRef = useRef(null);
    const isHovered = useHover(squareRef);
    return (
        <>
            <h2>Кастомный хук useHover</h2>
            <div ref={squareRef} style={{width: '150px', height: '150px', backgroundColor: isHovered ? 'green' : 'tomato'}}/>
        </>
    );
}

const HookUseScroll = () => {
    return (
        <Link to={"/todos"} className={"navbar__link"}>Use Scroll</Link>
    );
}

const Hooks = () => {

    return (
        <div>
            <h1>ТОП 5 ХУКОВ</h1>
            <HookUseInput/>
            <HookUseHover/>
            <HookUseScroll/>
        </div>
    );
};

export default Hooks;