import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 2px 10px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  background-color: white;
  text-transform: capitalize;
  cursor: pointer;
  transition-duration: 0.4s;
  :hover {
    background-color: lightblue;
    color: white;
    border-color: lightblue;
  }
  :not(:last-child) {
    margin-right: 5px;
  }
`;
