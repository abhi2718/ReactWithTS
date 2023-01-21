
type HoldChildComponentProps = {
    children: React.ReactNode
}

export const HoldChildComponent = (props:HoldChildComponentProps) => {
    return (
        <div>
            {
                props.children
            }
        </div>
    );
}