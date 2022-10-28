import React, { useState } from 'react';
import { Button } from '../button/Button';

import s from './Time.module.scss';

type TimeType = {
    setTime: (num: string) => void
    setOpenPopUpTime: (open: boolean) => void
}

export const Time: React.FC<TimeType> = ({ setTime, setOpenPopUpTime }) => {
    const [time, setTimeLocal] = useState<string>('')
    const [active1, setActive1] = useState<boolean>(false)
    const [active2, setActive2] = useState<boolean>(false)

    const handlerTime1 = (time: string) => {
        setTimeLocal(time)
        setActive1(true)
        setActive2(false)
    }

    const handlerTime2 = (time: string) => {
        setTimeLocal(time)
        setActive2(true)
        setActive1(false)
    }

    const handlerButton = () => {
        setTime(time)
        setOpenPopUpTime(false)
    }

    const style1 = active1 ? `${s.time} ${s.active}` : s.time
    const style2 = active2 ? `${s.time} ${s.active}` : s.time

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>Выберите время доставки</h3>
            <div className={s.wrapper_time}>
                <div className={style1} onClick={() => handlerTime1("9:00-15:00")}>9:00-15:00</div>
                <div className={style2} onClick={() => handlerTime2("15:00-21:00")}>15:00-21:00</div>
            </div>
            <Button disabled={time.length === 0} callback={() => handlerButton()}>Подтвердить</Button>
        </div>
    );
};
