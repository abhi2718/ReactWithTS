type GreetProps = {
  name: string;
  handleSubmit: Function;
  count?: number;
};

export const Greet = (props: GreetProps) => {
  const {count=0,name} = props;
  return (
    <div>
      <p>Welcome {name} !</p>
      <button
        onClick={() => {
          props.handleSubmit();
        }}
      >
        Click Me {count}
      </button>
    </div>
  );
};
