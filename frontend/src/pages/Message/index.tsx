import * as SC from './style';
import LayoutMain from "../../UI/Layouts/Main";
import Message from '../../components/Message';


const PageMessage = ({}) => {

    return (
        <LayoutMain chapter="Message">
            <SC.Chat>
                <Message text='Hello.'/>
            </SC.Chat>
            <SC.Form>
                <SC.Input placeholder='Введите новое сообщение'></SC.Input>
            </SC.Form>
        </LayoutMain>
    );

};

export default PageMessage;