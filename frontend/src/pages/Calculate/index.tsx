import * as SC from './style';
import LayoutMain from "../../UI/Layouts/Main";
import { useState } from 'react';

const PageCalculate = () => {

    const [negative, setNegative] = useState(false);
    const [fractional, setFractional] = useState(false);

    return (
        <LayoutMain chapter="Calculate">
            <SC.Form>

                <SC.WrapperNumber>
                    <input placeholder='Целая часть' />
                    <input placeholder='Дробная часть' disabled={!fractional} />
                </SC.WrapperNumber>

                <fieldset>

                    <legend>Выберите свойства числа:</legend>
                    <div>
                        <div>
                            <input type='checkbox' onChange={_ => setNegative(!negative)}/>
                            <label>Отрицательное</label>
                        </div>
                        <div>
                            <input type='checkbox' onChange={_ => setFractional(!fractional)}/>
                            <label>Дробное</label>
                        </div>
                    </div>
                </fieldset>

                <button>Посчитать</button>

            </SC.Form>
            <SC.List></SC.List>
        </LayoutMain>
    );

};

export default PageCalculate;