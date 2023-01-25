import {useContext} from 'react';
import { CountContext } from "./count";

export const ShowCount = () => {
    const count = useContext(CountContext);
    return (
        <div>
            <p>count from show count screen  {count}</p>
        </div>
    );
}