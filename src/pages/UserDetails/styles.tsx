import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 16px 24px;
  width: max-content;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const FieldValue = styled.div`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Divider = styled.div`
  background-color: black;
  height: 1px;
  width: 100%;
`;
