import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 350px;
  width: 100%;
  margin: 20px auto 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);

  .form-title {
    font-size: 30px;
    margin: inherit;
    text-transform: uppercase;
  }

  .form-label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 60%;
  }
  .input-form {
    &::placeholder {
      color: #ccc;
    }
  }

  .form-label_name {
    font-size: 18px;
    padding-bottom: 4px;
  }

  .form-btn {
    cursor: pointer;
    margin-top: 10px;
    font-size: 10px;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
  }
`;
