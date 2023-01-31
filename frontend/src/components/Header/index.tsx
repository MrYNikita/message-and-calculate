import NavBar from '../../UI/NavBar';
import * as SC from './style';

interface IHeader {

    brand?: string;
    chapter?: string;

};

const Header = ({ brand, chapter }: IHeader) => {

    return (
        <SC.Header>
            <SC.Brand>{brand ?? 'Brand'}{chapter && ('.' + chapter)}</SC.Brand>
            <NavBar/>
        </SC.Header>
    );

};

export default Header;