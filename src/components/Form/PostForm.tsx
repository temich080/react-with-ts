import React, {useState, useRef} from 'react';
import ButtonUI from "../UI/button/ButtonUI";
import InputUI from "../UI/input/InputUI";

interface Post {
    id: string;
    title: string;
    body: string;
}

interface IPostForm {
    create: ({}) => void
}

const PostForm: React.FC<IPostForm> = ({create}) => {
    const [post, setPost] = useState<Post>({id: '', title: '', body: ''})
    const bodyInputRef = useRef<HTMLInputElement>(null);

    const enterHandler = (e: KeyboardEvent) => {
        e.preventDefault();
        addNewPost();
    }

    const clickHandler = (e: any) => {
        e.preventDefault();
        addNewPost();
    }

    const addNewPost = () => {
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({id: Date.now().toString(), title: '', body: ''});
        bodyInputRef.current?.value
    }

    return (
        <div>
            <h1>Добавление нового поста</h1>
            <form onSubmit={() => console.log('SUBMITTED')}>
                {/*Управляемый компонент. Двустороннее связывание связало value инпута и состояние post.title*/}
                <InputUI
                    value={post.title}
                    placeholder={'Название поста'}
                    onChange={(value: string) => setPost({...post, title: value})}
                    onPressEnter={enterHandler}
                />
                <InputUI
                    value={post.body}
                    placeholder={'Текст поста'}
                    onChange={(value: string) => setPost({...post, body: value})}
                    onPressEnter={enterHandler}
                />
                <ButtonUI
                    type={'primary'}
                    onClick={clickHandler}
                >Добавить пост</ButtonUI>
            </form>
        </div>
    );
};

export default PostForm;