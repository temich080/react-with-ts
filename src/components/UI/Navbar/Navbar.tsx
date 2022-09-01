import React from 'react';
import {Link} from "react-router-dom";
import ButtonUI from "../button/ButtonUI";

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <Link to={"/"} className={"navbar__link"}>Главная</Link>
            <Link to={"/hooks"} className={"navbar__link"}>ТОП 5 ХУКОВ</Link>
            <Link to={"/posts"} className={"navbar__link"}>Посты</Link>
            <Link to={"/users"} className={"navbar__link"}>Пользователи</Link>
            <Link to={"/weather"} className={"navbar__link"}>Погода</Link>
            <Link to={"/chart"} className={"navbar__link"}>Диаграмма ИПК</Link>
            <Link to={"/samurai"} className={"navbar__link"}>Путь самурая 0из100</Link>
            <Link to={"/yup_lib"} className={"navbar__link"}>yup library</Link>
            <Link to={"/login"} className={"navbar__link"}>
                <ButtonUI>
                    Войти
                </ButtonUI>
            </Link>
        </div>
    );
};

export default Navbar;