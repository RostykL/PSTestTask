import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  padding: 8px 18px;
`;

export const SortLabel = styled.div`
  color: white;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const RadioContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const RadioButtonLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 6px;

  input[type="radio"] {
    margin: 0;
  }
`;

export const RadioButtonInput = styled.input``;
