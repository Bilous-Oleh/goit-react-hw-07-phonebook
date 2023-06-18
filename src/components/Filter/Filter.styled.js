import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 490px;
  margin: auto;
  padding: 20px 0;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 200px;
  height: 24px;
  margin-top: 10px;
  &::placeholder {
    color: #ccc;
  }
`;
