import { PropsWithChildren } from 'react';
import Header from '../../../components/Header';
import WrapperMain from '../../Wrappers/Main';
import * as SC from './style';

interface ILayoutMain {

    chapter?: string;

};

const LayoutMain = (props: ILayoutMain&PropsWithChildren) => {

    return (
        <>
            <Header {...props} />
            <SC.LayoutMain>
                <WrapperMain>
                    {props.children}
                </WrapperMain>
            </SC.LayoutMain>
        </>
    );

};

export default LayoutMain;