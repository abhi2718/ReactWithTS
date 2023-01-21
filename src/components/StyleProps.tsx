type StyleProps = {
    styles:React.CSSProperties
}

export const StyleProps = (props:StyleProps) => {
    return (
        <div style={props.styles}>
            <p>pass you styles</p>
        </div>
    );
}
