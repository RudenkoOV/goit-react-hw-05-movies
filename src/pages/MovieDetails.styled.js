import styled from 'styled-components';

export const MovieBlock = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  margin-right: 50px;
`;

export const ButtonBack = styled.button`
  margin: 30px;
  border-radius: 5px;
  color: blue;
  background-color: #808080;
  &:hover {
    background-color: white;
    scale: 1.1;
  }
`;

export const AddInfo = styled.div`
  margin: 10px;
  border: 2px solid #0af;
  padding: 10px;
`;
