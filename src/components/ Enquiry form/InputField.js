import React, { useEffect, useRef, useState } from "react";
import { AiFillContacts, AiOutlineContacts } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { Label, StyledInput, StyledTextArea } from "./enquiryFormStyle";

const InputField = ({variant, label, type, name, value, onChange, placeholder }) => {
  const [focus, setFocus] = useState(false);
  const containerRef = useRef();

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div
        ref={containerRef}
        className="flex items-center border-[1px] border-[#A8A8A8] rounded-[10px] p-[14px]"
      >
        {(name === "firstName" || name === "lastName") && (
          <AiFillContacts color={`${focus ? "#EF9572" : "grey"}`} size="32px" />
        )}

        {name === "email" && (
          <MdEmail color={`${focus ? "#EF9572" : "grey"}`} size="32px" />
        )}

        {name === "phoneNumber" && (
          <FaPhoneAlt color={`${focus ? "#EF9572" : "grey"}`} size="32px" />
        )}

        {name === "message" && (
          <RiMessage2Fill color={`${focus ? "#EF9572" : "grey"}`} size="32px" className="self-start" />
        )}

        {variant === "input" && (
          <StyledInput
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => {
              setFocus(true);
              containerRef.current.style.border = "1px solid #EF9572";
            }}
            onBlur={() => {
              setFocus(false);
              containerRef.current.style.border = "1px solid #A8A8A8";
            }}
          />
        )}

        {variant === "textArea" && (
          <StyledTextArea
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => {
              setFocus(true);
              containerRef.current.style.border = "1px solid #EF9572";
            }}
            onBlur={() => {
              setFocus(false);
              containerRef.current.style.border = "1px solid #A8A8A8";
            }}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
