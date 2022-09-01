import * as Yup from 'yup';

export const schema = Yup.object().shape({
    name: Yup.string().min(5).required(),
});