import {useRef,useEffect } from 'react';
export const UseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    const buttonRef = useRef<HTMLButtonElement>(null!);
    useEffect(() => {
        inputRef.current.focus();
     },[])
    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="example@gmail.com"
            />
            <button ref={buttonRef} type='submit' onClick={() => {
                console.log(buttonRef.current.type)
            }}>Submit</button>
        </div>
    );
}