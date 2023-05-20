import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  gap:20px;
  margin: 10px;
  justify-content: center;
`;

export const Buttons = styled.button`
  padding: 15px 30px;
  font-size: 18px;

  text-transform: uppercase;
 
  background-color: #3cadda;
  border: none;
  border-radius: 20px;
  cursor: pointer;


  &:hover {
    background-color: blue;
  }
`;

