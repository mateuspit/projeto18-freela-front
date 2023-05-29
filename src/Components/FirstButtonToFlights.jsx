import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function FirstButtonToFlights() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/flights");
  }

  return (
    <StyledButton onClick={handleClick}>Conferir as opçõs de vôos e hoteis</StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
