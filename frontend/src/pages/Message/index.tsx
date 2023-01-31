import * as SC from './style';
import LayoutMain from "../../UI/Layouts/Main";
import Message from '../../components/Message';
import React, { FormEventHandler, useEffect, useState } from 'react';


const PageMessage = ({ }) => {

    const [messages, setMessages] = useState<{ text: string, author?: string }[]>([]);

    useEffect(() => {

        try {

            const res = fetch('http://127.0.0.1:8000/message', {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            }).then(res => res.json()).then(result => {

                setMessages(result);

            });

        } catch (e) {



        };

    }, []);

    return (
        <LayoutMain chapter="Message">
            <SC.Chat>
                {messages.map((m, mi) => <Message key={mi} {...m}></Message>)}
            </SC.Chat>
            <SC.Form onSubmit={async (e: any) => {

                if (e.currentTarget.elements?.message) {

                    await fetch('http://127.0.0.1:8000/message', {

                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ author: 'guest', text: e.currentTarget.elements.message.value }),

                    });

                };

            }}>
                <SC.Input name='message' placeholder='Введите новое сообщение'></SC.Input>
                <SC.Button>Отправить</SC.Button>
            </SC.Form>
        </LayoutMain>
    );

};

export default PageMessage;