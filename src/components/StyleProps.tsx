type StyleProps = {
    styles:React.CSSProperties
}

export const StyleProps = ({styles}:StyleProps) => {
    return (
        <div style={styles}>
            <p>pass you styles</p>
        </div>
    );
}
