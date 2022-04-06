import React from "react";
import {
  StyledContainer,
  StyledUnOrderedList,
  SytledOrderedList,
  StyledEmailTitle,
  StyledIcon,
  StyledEmailInput
} from "./StyledEmailInputComponents";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

function EmailInput(props) {
  const [state, setState] = React.useState([]);
  const removeEmails = (index) => {
    setState([...state.filter((email) => state.indexOf(email) !== index)]);
  };
  const addEmails = (event) => {
    if (event.target.value !== "") {
      setState([...state, event.target.value]);
      props.selectedEmails([...state, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <StyledContainer>
      <StyledUnOrderedList>
        {state.map((email, index) => (
          <SytledOrderedList key={index}>
            <StyledEmailTitle>{email}</StyledEmailTitle>
            <StyledIcon onClick={() => removeEmails(index)}></StyledIcon>
          </SytledOrderedList>
        ))}
      </StyledUnOrderedList>
      <StyledEmailInput
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addEmails(event) : null)}
        placeholder="Press enter to add tags"
      />
    </StyledContainer>
  );
}
export default EmailInput;
