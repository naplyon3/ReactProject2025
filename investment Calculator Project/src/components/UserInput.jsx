import { useState } from "react";
export default function UserInput() {
  // we create  the use of state and pass the user input  ans set the user input to it

  const [UserInput, setUserInput] = useState({
    ///here we add default user input
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  //we Create function  that handle the change and update the default value.inputIdentifire is the way we know which input we need to update
  function handleChange(inputIdentifier, newValue) {
    //when we update we need to keep the  crurrent value for the things we did not change that is way we have to make this kind of returne
    // where ...prevUserInput is the current value and inputIdentifire is the name of the property and newValue is the updated value
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={UserInput.initialInvestment} //pass the new value to the input
            onChange={(event) =>
              //we pass the varible name that we want to change the value and the new value using event.target.value
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={UserInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={UserInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={UserInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
