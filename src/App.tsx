// https://www.youtube.com/watch?v=4Ml7Lp_QcSo&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=8
// 11 lecture completed 
import { useContext} from "react";
import "./App.css";
import { CustomButton } from "./components/Button";
import { CountScreen } from "./components/context/count";
import { Greet } from "./components/Greet";
import { HoldChildComponent } from "./components/HoldChildComponent";
import { Input } from "./components/Input";
import { Person } from "./components/Person";
import { Auth } from "./components/states/Auth";
import { Status } from "./components/Status";
import { StyleProps } from "./components/StyleProps";
import { CountContext } from "./components/context/count";
function App() {
  const personName = {
    firstName: "John",
    lastName: "hook",
  };
  const users = [
    {
      firstName: "John",
      lastName: "hook",
    },
  ];
  const printHello = (): void => {
    alert("Hello!");
  };
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    console.log(event);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };
  const count = useContext(CountContext);
  return (
    <div className="App">
      <Greet
        name="Abhishek Singh" // string
        handleSubmit={() => {
          alert("Submit");
        }} // function
        count={0} // optional
      />
      <Person
        userInfo={personName} // object
        users={users} // array of objects
      />
      <Status
        status="loading" // Union operator
      />
      <HoldChildComponent>
        <Person
          userInfo={personName} // object
          users={users} // array of objects
        />
      </HoldChildComponent>
      <CustomButton
        onClick={printHello}
        title="click me"
        handleClick={handleClick}
      />
      <Input value="Abhishek" handleChange={handleChange} />
      <StyleProps
        styles={{
          border: "1px solid red",
          width: 200,
          height: 200,
          backgroundColor: "red",
        }}
      />
      <Auth />
      <CountScreen />
      <p>{count}</p>
      </div>
  );
}

export default App;
