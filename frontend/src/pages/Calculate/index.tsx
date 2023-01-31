import * as SC from './style';
import LayoutMain from "../../UI/Layouts/Main";
import { useRef, useState } from 'react';

const PageCalculate = () => {

    const [opers, setOpers] = useState<[number, number, number][]>([]);

    const [real, setReal] = useState<number | null>(null);
    const [frac, setFrac] = useState<number | null>(null);

    const negative = useRef(false);
    const [fractional, setFractional] = useState(false);

    return (
        <LayoutMain chapter="Calculate">
            <SC.Form>

                <SC.WrapperNumber>
                    <input type='number' value={real ? real : ''} placeholder='Целая часть' onChange={e => {

                        let number = Math.abs(parseInt(e.target.value));

                        if (number || number === 0) {

                            if (negative.current) {

                                number *= -1;

                            };

                            setReal(number);

                        };

                        e.target.value = number + '';


                    }} />
                    <input type='number' placeholder='Дробная часть' disabled={!fractional} onChange={e => {

                        let number = Math.abs(parseInt(e.target.value));

                        if (number) {

                            setFrac(number);

                        };

                        e.target.value = number + '';

                    }} />
                </SC.WrapperNumber>

                <fieldset>

                    <legend>Выберите свойства числа:</legend>
                    <div>
                        <div>
                            <input type='checkbox' value={real ? real : ''} onChange={_ => {

                                negative.current = !negative.current;

                                if (real) {

                                    setReal(real * -1);

                                };

                            }} />
                            <label>Отрицательное</label>
                        </div>
                        <div>
                            <input type='checkbox' onChange={_ => {

                                setFractional(!fractional);

                            }} />
                            <label>Дробное</label>
                        </div>
                    </div>
                </fieldset>

                <button onClick={e => {

                    e.preventDefault();

                    let number = real;

                    if (fractional && frac && number) {

                        number = parseFloat(number + '.' + frac);

                    };

                    if (number) {

                        const last = opers.at(-1)?.[1] ?? number;

                        setOpers([...opers, [last, number, (number + last) / 2]]);

                    };

                }}>Посчитать</button>

            </SC.Form>
            <SC.List>
                {opers.map((o, oi) => <SC.Item key={oi}>
                    <div>Предыдущее: {o[0]}</div>
                    <div>Текущее: {o[1]}</div>
                    <div>Среднее: {o[2]}</div>
                </SC.Item>)}
            </SC.List>
        </LayoutMain>
    );

};

export default PageCalculate;