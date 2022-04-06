import styled from "styled-components";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

export const StyledContainer = styled.div`
  display: flex;
  align-items: "flex-start";
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  /* &:focus-within {
		border: 1px solid #0052cc;
	} */
`;

export const StyledUnOrderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;
export const SytledOrderedList = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #0052cc;
  /* .tag-title {
		margin-top: 3px;
  } */
`;
export const StyledEmailTitle = styled.span`
  margin-top: 3px;
`;
export const StyledIcon = styled(HighlightOffRoundedIcon)`
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: #0052cc;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;
export const StyledEmailInput = styled.input`
  flex: 1;
  border: none;
  height: 46px;
  font-size: 14px;
  padding: 4px 0 0 0;
  &:focus {
    outline: transparent;
  }
`;
