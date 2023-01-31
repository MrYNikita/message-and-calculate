import { PropsWithChildren } from 'react';
import * as SC from './style';

const WrapperMain = ({ children }: PropsWithChildren) => {

    return(
        <SC.WrapperMain>
            {children}
        </SC.WrapperMain>
    );

};

export default WrapperMain;