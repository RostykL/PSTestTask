import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  align-items: center;
  background-color: antiquewhite;
  border-radius: 8px;
  display: flex;
  font-family: Arial, serif;
  font-size: 18px;
  gap: 32px;
  max-width: 80vw;
  padding: 12px 16px;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

export const Label = styled.div`
  font-weight: 600;
`;

export const Value = styled.div`
  opacity: 0.7;
`;

export const CTAButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;
  margin-left: auto;
`;

export const ViewAlbums = styled(Link)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 12px 16px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;

export const ViewPosts = styled(Link)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 12px 16px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;
