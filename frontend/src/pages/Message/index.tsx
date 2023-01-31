import * as SC from './style';
import LayoutMain from "../../UI/Layouts/Main";
import Message from '../../components/Message';
import { useEffect, useState } from 'react';


const PageMessage = ({}) => {

    const [messages, setMessages] = useState<{ text: string, author?: string }[]>([]);

    useEffect(() => {

        const res = fetch('http://127.0.0.1:8000/message', {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json()).then(result => {

            setMessages(result);

        });

    }, []);

    return (
        <LayoutMain chapter="Message">
            <SC.Chat>
                {messages.map((m, mi) => <Message key={mi} {...m}></Message>)}
            </SC.Chat>
            <SC.Form>
                <SC.Input placeholder='Введите новое сообщение'></SC.Input>
                <SC.Button>Отправить</SC.Button>
            </SC.Form>
        </LayoutMain>
    );

};

export default PageMessage;