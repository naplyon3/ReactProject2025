import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  // we create  the use of state and pass the user input  ans set the user input to it
  //this is lift the state this state organaly was create in the userInput component but because we need to use it on results component we lift the state and pass
  //userInput to the UserInput component and also the handleCange function

  const [userInput, setUserInput] = useState({
    ///here we add default user input
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  ///note

  const inputIsValid = userInput.duration >= 1;

  //we Create function  that handle the change and update the default value.inputIdentifire is the way we know which input we need to update
  function handleChange(inputIdentifier, newValue) {
    //when we update we need to keep the  crurrent value for the things we did not change that is way we have to make this kind of returne
    // where ...prevUserInput is the current value and inputIdentifire is the name of the property and newValue is the updated value
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter Duration Greater thatn Zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
