import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 100%;
  justify-content: space-between;

  .contact-name {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    width: 120px;
  }

  .contact-btn {
    margin-left: 20px;
    cursor: pointer;
    font-style: 10px;
    font-size: 10px;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
  }
`;
