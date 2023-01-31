import * as SC from './style';

const NavBar = () => {

    return (
        <SC.NavBar>
            <SC.NavLink href='/'>Сообщения</SC.NavLink>
            <SC.NavLink href='/calculate'>Рассчет</SC.NavLink>
        </SC.NavBar>
    );

};

export default NavBar;