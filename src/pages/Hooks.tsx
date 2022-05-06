import React, {useRef} from 'react';
import useInput from "../hooks/useInput";
import useHover from "../hooks/useHover";

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

const Hooks = () => {

    return (
        <div>
            <h1>ТОП 5 ХУКОВ</h1>
            <HookUseInput/>
            <HookUseHover/>

        </div>
    );
};

export default Hooks;