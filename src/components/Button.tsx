type CustomButtonProps = {
    onClick: () => void,
    title: string,
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:string) => void
}

export const CustomButton = (props:CustomButtonProps) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.title}</button>
            <button onClick={e=>props.handleClick(e,"34")}>{props.title}</button>
        </div>
    );
}