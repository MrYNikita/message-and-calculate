import Header from '../../../components/Header';
import WrapperMain from '../../Wrappers/Main';
import * as SC from './style';

interface ILayoutMain {

    chapter?: string;

};

const LayoutMain = (props: ILayoutMain) => {

    return (
        <>
            <Header {...props} />
            <SC.LayoutMain>
                <WrapperMain>

                </WrapperMain>
            </SC.LayoutMain>
        </>
    );

};

export default LayoutMain;