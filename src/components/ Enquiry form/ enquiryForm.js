import React, { useState } from "react";
import {
  Label,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledError,
} from "./enquiryFormStyle";
import { Buttondiv } from "../Contact/ContactStyle";
import InputField from "./InputField";

const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

function App() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <div className="box-border mt-[32px] xl:mt-0">
      <StyledForm onSubmit={handleSubmit} className="bg-white">
        <h1 className="text-black text-[28px] font-medium m-0 mb-[27px]">
          For Project Inquiries
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-x-[22px] gap-y-[27px]">
          <InputField
            variant="input"
            label="First Name"
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleInput}
            placeholder="Type First Name"
          />

          <InputField
            variant="input"
            label="Last Name"
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleInput}
            placeholder="Type Last Name"
          />

          <div className="col-span-2">
            <InputField
              variant="input"
              label="Email"
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
              placeholder="Type Email"
            />
          </div>

          <div className="col-span-2">
            <InputField
              variant="input"
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleInput}
              placeholder="Type Phone Number"
            />
          </div>

          <div className="col-span-2">
            <InputField
              variant="textArea"
              label="Message"
              type="text"
              name="message"
              value={state.message}
              onChange={handleInput}
              placeholder="Enter Your Message"
            />
          </div>
        </div>

        {error && (
          <StyledError>
            <p>{error}</p>
          </StyledError>
        )}
        <Buttondiv
          type="submit"
          className="mt-[34px] text-white py-5 px-14 transition-all duration-700 delay-75 text-3xl font-semibold"
        >
          Send
        </Buttondiv>
      </StyledForm>
    </div>
  );
}

export default App;
