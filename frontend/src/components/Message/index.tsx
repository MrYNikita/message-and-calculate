import * as SC from './style';

interface IMessage {

    author?: string;
    text: string;

};

const Message = ({ author = 'guest', text, }: IMessage) => {

    return (
        <SC.WrapperMessage>
            <SC.WrapperAuthor>{author + ': '}</SC.WrapperAuthor>
            <SC.WrapperText>{text}</SC.WrapperText>
        </SC.WrapperMessage>
    );

};

export default Message;