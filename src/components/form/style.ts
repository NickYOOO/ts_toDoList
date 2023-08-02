import styled from 'styled-components';

export const FormLayout = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StInput = `
height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;

  & > label {
    font-size: 16px;
    font-weight: 700;
  }
`;
export const InputTitle = styled.div`
  ${StInput}
`;

export const InputContents = styled.div`
  ${StInput}
`;
