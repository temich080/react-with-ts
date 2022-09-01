import React, {FormEvent} from 'react';

import { schema } from "./validation";

const Samurai = () => {
    const validForm = async (event: any) => {
        event.preventDefault();
        let formData = {
            name: event.target[0].value
        }
        const isValid = await schema.isValid(formData);
        console.log(isValid);
    }

    return (
        <div>
            <h1>Yup Lib</h1>
            <div>
                <form onSubmit={validForm}>
                    <input type="text" placeholder="name"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Samurai;