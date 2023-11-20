import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  padding: 24px 18px;
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const CTAButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const NavButton = styled(Link)`
  background-color: white;
  border-radius: 4px;
  border: none;
  color: black;
  letter-spacing: 0.5px;
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SearchField = styled.input`
  border-radius: 4px;
  border: none;
  padding: 12px 16px;
  width: 500px;
  outline: none;

  &:focus {
    outline: 1px solid black;
  }
`;
