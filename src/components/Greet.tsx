type GreetProps = {
  name: string;
  handleSubmit: Function;
  count?: number;
};

export const Greet = ({count=0,name,handleSubmit}: GreetProps) => {
  return (
    <div>
      <p>Welcome {name} !</p>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Click Me {count}
      </button>
    </div>
  );
};
