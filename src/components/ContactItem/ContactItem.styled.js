import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 520px;
  justify-content: space-between;

  .contact-name {
    display: flex;
    width: 200px;
  }

  .contact-btn {
    width: 60px;
    height: 24px;
    margin-left: 20px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
    &:hover {
      background-color: orange;
      border-radius: 4px;
      height: 24px;
      border: #ccc;
    }
  }
`;
