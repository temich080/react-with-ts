import React, {useState} from 'react';
import InputUI from "../components/UI/input/InputUI";
import ButtonUI from "../components/UI/button/ButtonUI";

const Login = () => {
    const [body, setBody] = useState({login: '', password: ''});

    return (
        <div>
           <h1>Login page</h1>

            <form>
                <InputUI value={body.login} onChange={()=>{}} placeholder={'Type login'}/>
                <InputUI value={body.password} onChange={() => {}} placeholder={'Type password'}/>
                <ButtonUI>Войти</ButtonUI>
            </form>
        </div>
    );
};

export default Login;