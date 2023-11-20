import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  align-items: center;
  background-color: antiquewhite;
  border-radius: 4px;
  display: flex;
  gap: 12px;
  max-width: 80vw;
  padding: 12px 16px;
  width: 100%;
`;

export const Title = styled.div``;

export const PostedByLink = styled(Link)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: auto;
  padding: 12px;

  &:hover {
    text-decoration: underline;
  }
`;
