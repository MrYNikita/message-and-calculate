import * as SC from './style';

const NavBar = () => {

    return (
        <SC.NavBar>
            <SC.NavLink href='/'>Сообщения</SC.NavLink>
            <SC.NavLink href='/calculate'>Рассчет</SC.NavLink>
            <SC.NavLink href='https://github.com/MrYNikita/message-and-calculate'>Репозиторий</SC.NavLink>
        </SC.NavBar>
    );

};

export default NavBar;