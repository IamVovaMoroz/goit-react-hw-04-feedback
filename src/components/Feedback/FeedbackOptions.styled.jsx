import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
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
  transition: transform 0.2s ease;

  &:hover {
    background-color: blue;
  }

  &:active {
    transform: scale(0.95);
  }
`;